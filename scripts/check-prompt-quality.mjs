import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const coveragePath = join(root, 'PROMPT_COVERAGE_200.md');
const coverageEnPath = join(root, 'PROMPT_COVERAGE_200_EN.md');
const baselinePath = join(root, 'scripts', 'prompt-quality-baseline.json');
const errors = [];

if (!existsSync(coveragePath)) {
  errors.push('Missing PROMPT_COVERAGE_200.md.');
} else {
  const coverage = readFileSync(coveragePath, 'utf8');
  const rows = [...coverage.matchAll(/^\|\s*(\d+)\s*\|[^\n]*\]\(\.\/testing-types\/zh\/([^/]+)\/README\.md\)[^\n]*$/gm)]
    .map((match) => ({ id: Number(match[1]), module: match[2] }));
  const ids = rows.map(({ id }) => id);

  if (rows.length !== 205) errors.push(`Coverage matrix must contain 205 mappings; found ${rows.length}.`);
  for (let id = 1; id <= 205; id += 1) {
    if (ids.filter((value) => value === id).length !== 1) errors.push(`Coverage ID ${id} must appear exactly once.`);
  }

  if (!existsSync(coverageEnPath)) {
    errors.push('Missing PROMPT_COVERAGE_200_EN.md.');
  } else {
    const coverageEn = readFileSync(coverageEnPath, 'utf8');
    const enRows = [...coverageEn.matchAll(/^\|\s*(\d+)\s*\|[^\n]*\]\(\.\/testing-types\/en\/([^/]+)\/README\.md\)[^\n]*$/gm)]
      .map((match) => ({ id: Number(match[1]), module: match[2] }));
    const zhMapping = rows.map(({ id, module }) => `${id}:${module}`);
    const enMapping = enRows.map(({ id, module }) => `${id}:${module}`);
    if (enRows.length !== 205) errors.push(`English coverage catalog must contain 205 mappings; found ${enRows.length}.`);
    if (zhMapping.join('\n') !== enMapping.join('\n')) errors.push('Chinese and English coverage catalogs must use identical ID-to-module mappings.');
  }

  let baselineModules = [];
  if (!existsSync(baselinePath)) {
    errors.push('Missing scripts/prompt-quality-baseline.json.');
  } else {
    baselineModules = JSON.parse(readFileSync(baselinePath, 'utf8')).modules ?? [];
    if (baselineModules.length === 0) errors.push('Prompt quality baseline must not be empty.');
    if (new Set(baselineModules).size !== baselineModules.length) errors.push('Prompt quality baseline contains duplicate modules.');
  }

  const strictModules = new Set(baselineModules);
  const mappedModules = new Set([...rows.map(({ module }) => module), ...baselineModules]);
  const hashes = new Map();
  const methodHashes = new Map();

  for (const module of mappedModules) {
    if (/(?:^|-)(?:extended|supplement)(?:-|$)/.test(module)) {
      errors.push(`Coverage maps to deprecated duplicate module: ${module}.`);
    }

    for (const lang of ['zh', 'en']) {
      const moduleDir = join(root, 'testing-types', lang, module);
      const standardDir = join(moduleDir, 'Standard-version');
      const readmePath = join(moduleDir, 'README.md');
      if (!existsSync(readmePath)) {
        errors.push(`Missing ${lang} README for ${module}.`);
      } else if (strictModules.has(module)) {
        const readme = readFileSync(readmePath, 'utf8');
        if (/^\+/mu.test(readme) || /\\n/u.test(readme)) errors.push(`README contains patch or escaped-newline artifacts: ${readmePath}.`);
        if (lang === 'en') {
          const prose = readme.split('\n').filter((line) => !line.startsWith('中文')).join('\n');
          if (/[\u3400-\u9fff]/u.test(prose)) errors.push(`English README prose contains Chinese text: ${readmePath}.`);
        }
      }
      if (!existsSync(standardDir)) {
        errors.push(`Missing ${lang} Standard-version for ${module}.`);
        continue;
      }

      const prompts = readdirSync(standardDir).filter((file) => file.endsWith('.md'));
      if (prompts.length === 0) errors.push(`No ${lang} Standard Prompt found for ${module}.`);
      if (strictModules.has(module) && prompts.length !== 1) errors.push(`Baseline module ${module} must contain exactly one ${lang} Standard Prompt.`);
      for (const file of prompts) {
        const path = join(standardDir, file);
        const content = readFileSync(path, 'utf8');
        if (lang === 'en' && /[\u3400-\u9fff]/u.test(content)) errors.push(`English Prompt contains Chinese text: ${path}.`);

        const isNewStructure = lang === 'zh' ? content.includes('## 必要输入') : content.includes('## Required Inputs');
        if (strictModules.has(module) && !isNewStructure) errors.push(`Baseline Prompt uses incomplete legacy structure: ${path}.`);
        if (strictModules.has(module)) {
          const minimumLength = lang === 'zh' ? 520 : 700;
          if (content.length < minimumLength) errors.push(`Baseline Prompt is too short for its quality contract (${content.length} < ${minimumLength}): ${path}.`);
          const hasDecisionLanguage = lang === 'zh'
            ? /评分|判定|通过条件|验收标准|阈值/u.test(content)
            : /score|decision|pass criteria|acceptance criteria|threshold/i.test(content);
          if (!hasDecisionLanguage) errors.push(`Baseline Prompt lacks explicit evaluation or decision criteria: ${path}.`);
          const focusMarker = lang === 'zh' ? '专项聚焦：' : 'Specialized focus:';
          if (!content.includes(focusMarker)) errors.push(`Baseline Prompt lacks module-specific focus: ${path}.`);
          if (!content.includes('<qa_context>') || !content.includes('</qa_context>')) errors.push(`Baseline Prompt lacks a complete qa_context input boundary: ${path}.`);
          if (lang === 'zh' && /围绕专家。|围绕[^\n]*(?:分析器|设计器|生成器|助手|检查器|分类器)/u.test(content)) errors.push(`Chinese task wording contains a tool-name or generation artifact: ${path}.`);
          if (lang === 'en' && /result for .*\b(?:analyzer|designer|generator|assistant|reviewer|checker|detector|classifier|prioritizer)\b/iu.test(content)) errors.push(`English task wording uses a tool persona instead of an action: ${path}.`);
          const resultTableLine = content.match(/^3\. .*?(?:结果表|Result table)[:：].*$/mu)?.[0];
          if (resultTableLine) {
            const following = content.slice(content.indexOf(resultTableLine) + resultTableLine.length);
            if (!/^\n\n\| .+ \|\n\| (?:--- \| )*--- \|/u.test(following)) errors.push(`Result table lacks an explicit Markdown schema: ${path}.`);
          }
        }
        if (isNewStructure) {
          const required = lang === 'zh'
            ? ['## 必要输入', '## 使用约束与降级规则', '## 执行指令', '自检']
            : ['## Required Inputs', '## Guardrails And Degradation Rules', '## Execution Instructions', 'Self-check'];
          for (const section of required) if (!content.includes(section)) errors.push(`Missing "${section}" in ${path}.`);

          const hasMethodSection = lang === 'zh'
            ? /^## .*方法$/mu.test(content)
            : /^## .*Method$/mu.test(content);
          if (!hasMethodSection) errors.push(`Missing analysis, design, or evaluation method section in ${path}.`);

          if (strictModules.has(module) && hasMethodSection) {
            const method = content.match(/^## .*?(?:方法|Method)\n\n([\s\S]*?)(?=\n## )/mu)?.[1]?.trim();
            if (!method) {
              errors.push(`Unable to parse method section in ${path}.`);
            } else {
              const methodHash = createHash('sha256').update(method).digest('hex');
              const previousMethod = methodHashes.get(`${lang}:${methodHash}`);
              if (previousMethod && previousMethod !== path) errors.push(`Duplicate ${lang} method section: ${previousMethod} and ${path}.`);
              methodHashes.set(`${lang}:${methodHash}`, path);
            }
          }

          const normalized = content.replace(/^# .*$/m, '').trim();
          const hash = createHash('sha256').update(normalized).digest('hex');
          const previous = hashes.get(`${lang}:${hash}`);
          if (previous && previous !== path) errors.push(`Duplicate ${lang} Prompt body: ${previous} and ${path}.`);
          hashes.set(`${lang}:${hash}`, path);
        }
      }
    }
  }
}

if (errors.length > 0) {
  console.error(`Prompt quality checks failed (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Prompt quality checks passed.');
