import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const issues = [];

const bannedPatterns = [
  { pattern: /\.\.\/testing-types\//g, message: "contains broken ../testing-types/ relative path" },
  { pattern: /请在收到.*立即开始/g, message: "contains unconditional immediate-start instruction" },
  { pattern: /Please begin executing.*immediately/gi, message: "contains unconditional immediate-start instruction" },
];

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (entry === ".git" || entry === "node_modules" || entry === ".vitepress") continue;
      walk(full, acc);
    } else if (full.endsWith(".md")) {
      const relPath = path.relative(root, full);
      const inScope =
        relPath === "README.md" ||
        relPath === "README_EN.md" ||
        relPath.startsWith("testing-types/");
      if (!inScope) continue;
      acc.push(full);
    }
  }
  return acc;
}

function rel(file) {
  return path.relative(root, file);
}

function addIssue(file, message) {
  issues.push(`${rel(file)}: ${message}`);
}

function checkReadmeLinks(file, text) {
  const matches = text.matchAll(/\]\(([^)]+\.md)\)/g);
  for (const match of matches) {
    const target = match[1];
    if (/^https?:\/\//.test(target) || target.startsWith("#")) continue;
    const resolved = path.resolve(path.dirname(file), target);
    try {
      statSync(resolved);
    } catch {
      addIssue(file, `contains missing markdown target: ${target}`);
    }
  }
}

function checkPromptGuardrails(file, text) {
  if (!file.includes("testing-types")) return;
  if (!file.includes("-version/")) return;
  if (file.endsWith("_EN.md")) return;
  if (file.includes("_Lean")) return;
  if (file.includes("LangGPT-version")) {
    const hasGuardrails = text.includes("#### ## Guardrails");
    const hasAuditInit =
      text.includes("输入审计") ||
      text.includes("input audit") ||
      text.includes("先完成输入审计") ||
      text.includes("input audit first") ||
      text.includes("complete the input audit first");
    if (!hasGuardrails) addIssue(file, "LangGPT prompt is missing Guardrails section");
    if (!hasAuditInit) addIssue(file, "LangGPT prompt is missing audit-first initialization");
    return;
  }

    const hasGuardrails =
      text.includes("## 使用约束与降级规则") ||
      text.includes("## Guardrails And Degradation Rules") ||
      text.includes("输入完整性检查") ||
      text.includes("Input Completeness Check");
    const hasExecution =
      text.includes("## Execution Instructions (执行指令)") ||
      text.includes("## Execution Instructions") ||
      text.includes("## 执行指令") ||
      text.includes("先进行输入完整性检查") ||
      text.includes("Start with an input completeness check") ||
      text.includes("格式输出") ||
      text.includes("Format Output") ||
      text.includes("按照输出格式要求");

    if (!hasGuardrails) addIssue(file, "prompt is missing guardrails section");
    if (!hasExecution) addIssue(file, "prompt is missing execution instructions section");
}

for (const file of walk(root)) {
  const text = readFileSync(file, "utf8");

  for (const { pattern, message } of bannedPatterns) {
    if (pattern.test(text)) addIssue(file, message);
  }

  if (path.basename(file).startsWith("README")) {
    checkReadmeLinks(file, text);
  }

  checkPromptGuardrails(file, text);
}

if (issues.length) {
  console.error("Prompt checks failed:\\n");
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log("Prompt checks passed.");
