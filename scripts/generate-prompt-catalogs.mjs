import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const source = readFileSync(join(root, 'PROMPT_COVERAGE_200.md'), 'utf8');
let rows = [...source.matchAll(/^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*\[([^\]]+)\]\(\.\/testing-types\/zh\/([^/]+)\/README\.md\)\s*\|$/gm)]
  .map((match) => ({ id: Number(match[1]), zh: match[2].trim(), en: match[3].trim(), type: match[4].trim(), module: match[6] }));

if (rows.length === 0) {
  rows = [...source.matchAll(/^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*\[([^\]]+)\]\(\.\/testing-types\/zh\/([^/]+)\/README\.md\)\s*\|[^\n]*$/gm)]
    .map((match) => ({ id: Number(match[1]), zh: match[2].trim(), en: match[3].trim(), type: match[4].trim(), module: match[6] }));
}

if (rows.length !== 200) throw new Error(`Expected 200 source rows, found ${rows.length}.`);

const categories = [
  { zh: '需求、规划与测试策略', en: 'Requirements, Planning, And Test Strategy' },
  { zh: '测试分析与测试设计', en: 'Test Analysis And Design' },
  { zh: 'API、契约、消息与集成', en: 'API, Contract, Messaging, And Integration' },
  { zh: '自动化与测试工程', en: 'Automation And Test Engineering' },
  { zh: '性能、可靠性与韧性', en: 'Performance, Reliability, And Resilience' },
  { zh: '安全、隐私与无障碍', en: 'Security, Privacy, And Accessibility' },
  { zh: '数据、数据库与测试环境', en: 'Data, Database, And Test Environment' },
  { zh: '缺陷、质量与测试治理', en: 'Defects, Quality, And Test Governance' },
  { zh: '发布、生产与可观测性', en: 'Release, Production, And Observability' },
  { zh: 'AI 与 LLM 测试', en: 'AI And LLM Testing' },
];

function categoryOf(row) {
  const text = `${row.type} ${row.module}`.toLowerCase();
  if (/\b(ai-|llm|prompt-|hallucination|agent-tool)|ai 测试|大模型/.test(text)) return 9;
  if (/security|authentication|authorization|owasp|privacy|masking|sensitive-data|accessibility|wcag|安全|隐私|无障碍/.test(text)) return 5;
  if (/performance|load|stress|spike|soak|capacity|scalability|reliability|availability|recovery|failover|chaos|circuit-breaker|degradation|latency|timeout|connection-pool|jvm|nginx|kubernetes-performance|sli-slo|性能|可靠性|容量|韧性/.test(text)) return 4;
  if (/api|contract|graphql|websocket|kafka|message|eventual-consistency|distributed-transaction|idempotency|rate-limit|service-call-chain|microservice|async-flow|接口|契约|消息|分布式/.test(text)) return 2;
  if (/test-data|database|sql-|mock-api|wiremock|environment|configuration|docker|kubernetes-issue|data-consistency|数据|数据库|环境|mock/.test(text)) return 6;
  if (/release|production|rollback|hotfix|incident|alert|metrics-anomaly|distributed-trace|log-correlation|release|发布|生产|可观测/.test(text)) return 8;
  if (/automation|flaky|locator|test-code|test-refactoring|ci-cd|cicd|duplicate-test|obsolete-test|自动化|测试工程/.test(text)) return 3;
  if (/bug|defect|root-cause|stack-trace|log-analysis|quality|coverage|regression|test-asset|test-effectiveness|test-failure|report|change-impact|pr-risk|缺陷|质量|回归|报告/.test(text)) return 7;
  if (/requirement|strategy|plan|scope|risk|refinement|sprint|retrospective|business-rule|nfr|testability|需求|策略|计划|敏捷/.test(text)) return 0;
  return 1;
}

function standardFile(lang, module) {
  const dir = join(root, 'testing-types', lang, module, 'Standard-version');
  const files = readdirSync(dir).filter((file) => file.endsWith('.md') && !file.includes('_Lite')).sort();
  if (files.length === 0) throw new Error(`No Standard Prompt for ${lang}/${module}.`);
  return files[0];
}

function render(lang) {
  const zh = lang === 'zh';
  const lines = zh ? [
    '<div align="right"><strong>简体中文</strong> · <a href="./PROMPT_COVERAGE_200_EN.md">English</a></div>',
    '', '# 200 项 QA Prompt 分类目录', '',
    '本目录以 1–200 项能力清单为基准，按使用场景重新归入十个类别。每一项都链接到中文模块入口和可直接复制的 Standard Prompt；英文目录与本目录保持相同编号和模块映射。', '',
    '> “覆盖”表示仓库中存在对应的中英文 Prompt Baseline，不表示已经对真实系统执行测试或得出验证结论。', '',
    '[返回项目首页](./README.md) · [Testing Workflows](./Workflows/zh/README.md)',
  ] : [
    '<div align="right"><a href="./PROMPT_COVERAGE_200.md">简体中文</a> · <strong>English</strong></div>',
    '', '# 200-Capability QA Prompt Catalog', '',
    'This catalog reorganizes the numbered 1–200 capability list into ten usage-oriented categories. Every item links to its English module entry and copy-ready Standard Prompt; numbering and module mapping mirror the Chinese catalog.', '',
    '> “Covered” means that a bilingual Prompt Baseline exists in this repository. It does not mean that tests were run against a real system or that any result was verified.', '',
    '[Back to project home](./README_EN.md) · [Testing Workflows](./Workflows/en/README.md)',
  ];

  categories.forEach((category, index) => {
    const selected = rows.filter((row) => categoryOf(row) === index);
    lines.push('', `## ${index + 1}. ${zh ? category.zh : category.en}`, '', zh
      ? `共 ${selected.length} 项。`
      : `${selected.length} capabilities.`, '',
    zh
      ? '| # | 中文名称 | English name | 原始类型 | 模块 | Standard Prompt |'
      : '| # | English name | 中文名称 | Original type | Module | Standard Prompt |',
    '| ---: | --- | --- | --- | --- | --- |');
    for (const row of selected) {
      const prompt = standardFile(lang, row.module);
      const moduleLink = `./testing-types/${lang}/${row.module}/README.md`;
      const promptLink = `./testing-types/${lang}/${row.module}/Standard-version/${prompt}`;
      lines.push(zh
        ? `| ${row.id} | ${row.zh} | ${row.en} | ${row.type} | [${row.module}](${moduleLink}) | [Standard](${promptLink}) |`
        : `| ${row.id} | ${row.en} | ${row.zh} | ${row.type} | [${row.module}](${moduleLink}) | [Standard](${promptLink}) |`);
    }
  });

  lines.push('', zh
    ? '需要把多个 Prompt 组织成连续活动时，请继续查看 [Testing Workflows](./Workflows/zh/README.md)。'
    : 'To organize multiple Prompts into a continuous activity, continue with [Testing Workflows](./Workflows/en/README.md).', '');
  return lines.join('\n');
}

function renderReadmeCatalog(lang) {
  const zh = lang === 'zh';
  const lines = [zh ? '## Prompt 分类目录' : '## Prompt Catalog', '', zh
    ? '当前目录覆盖 **200 项能力、200 个独立模块**。以下十个分类直接展示全部 Prompt；带原始编号和 Standard 文件直链的矩阵见 [完整 Prompt 目录](./PROMPT_COVERAGE_200.md)。'
    : 'The catalog covers **200 capabilities in 200 independent modules**. All Prompts are listed directly in the ten categories below; see the [complete Prompt catalog](./PROMPT_COVERAGE_200_EN.md) for original numbering and direct Standard-file links.'];

  categories.forEach((category, index) => {
    const selected = rows.filter((row) => categoryOf(row) === index);
    lines.push('', `### ${index + 1}. ${zh ? category.zh : category.en}`, '',
      zh ? `共 ${selected.length} 项。` : `${selected.length} capabilities.`, '',
      zh ? '| Prompt | 原始类型 | 模块入口 |' : '| Prompt | Original type | Module entry |',
      '| --- | --- | --- |');
    for (const row of selected) {
      const name = zh ? `${row.zh} / ${row.en}` : `${row.en} / ${row.zh}`;
      const moduleLink = `./testing-types/${lang}/${row.module}/README.md`;
      lines.push(`| ${name} | ${row.type} | [${row.module}](${moduleLink}) |`);
    }
    const anchor = zh
      ? `./PROMPT_COVERAGE_200.md#${index + 1}-${category.zh.replaceAll('、', '').replaceAll(' ', '-').toLowerCase()}`
      : `./PROMPT_COVERAGE_200_EN.md#${index + 1}-${category.en.replaceAll(',', '').replaceAll(' ', '-').toLowerCase()}`;
    lines.push('', zh
      ? `[查看该分类的编号与 Standard Prompt →](${anchor})`
      : `[View numbering and Standard Prompts for this category →](${anchor})`);
  });
  return lines.join('\n');
}

function updateReadme(lang) {
  const path = join(root, lang === 'zh' ? 'README.md' : 'README_EN.md');
  const current = readFileSync(path, 'utf8');
  const replacement = `${renderReadmeCatalog(lang)}\n\n## Testing Workflows`;
  const updated = current.replace(/## (?:Prompt 分类目录|Prompt Catalog)[\s\S]*?\n## Testing Workflows/u, replacement);
  if (updated === current) throw new Error(`Unable to locate Prompt catalog section in ${path}.`);
  writeFileSync(path, updated);
}

writeFileSync(join(root, 'PROMPT_COVERAGE_200.md'), render('zh'));
writeFileSync(join(root, 'PROMPT_COVERAGE_200_EN.md'), render('en'));
updateReadme('zh');
updateReadme('en');
console.log('Generated bilingual categorized Prompt catalogs.');
