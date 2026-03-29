import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const issues = [];

function walkMarkdownFiles(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (entry === ".git" || entry === "node_modules") continue;
      walkMarkdownFiles(full, acc);
      continue;
    }
    if (full.endsWith(".md")) acc.push(full);
  }
  return acc;
}

function rel(file) {
  return path.relative(root, file);
}

function addIssue(file, lineNo, message) {
  issues.push(`${rel(file)}:${lineNo} ${message}`);
}

function checkFile(file) {
  const text = readFileSync(file, "utf8");
  const lines = text.split(/\r?\n/);

  let fenceOpen = false;
  let fenceStartLine = 0;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const lineNo = i + 1;

    if (/[ \t]+$/.test(line)) {
      addIssue(file, lineNo, "contains trailing whitespace");
    }

    if (/\t/.test(line)) {
      addIssue(file, lineNo, "contains tab character (use spaces instead)");
    }

    if (/^```/.test(line)) {
      if (!fenceOpen) {
        fenceOpen = true;
        fenceStartLine = lineNo;
      } else {
        fenceOpen = false;
      }
    }
  }

  if (fenceOpen) {
    addIssue(file, fenceStartLine, "has unclosed fenced code block");
  }
}

const files = walkMarkdownFiles(root);
for (const file of files) checkFile(file);

if (issues.length > 0) {
  console.error("Markdown format checks failed:\n");
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exit(1);
}

console.log(`Markdown format checks passed. (${files.length} files checked)`);
