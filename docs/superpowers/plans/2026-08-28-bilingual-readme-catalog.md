# Bilingual README And Prompt Catalog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the project documentation around a Chinese-default, English-switchable Prompt catalog with detailed bilingual Workflow discovery.

**Architecture:** Keep `README.md` and `README_EN.md` as concise discovery pages, move the complete 200-item inventory into paired coverage catalogs, and use paired Workflow and Examples documents for detail. Extend repository checks so language switches, catalog parity, and linked files remain valid.

**Tech Stack:** Markdown, Node.js validation scripts, npm scripts

**Spec:** `docs/superpowers/specs/2026-08-28-bilingual-readme-catalog-design.md`

## Global Constraints

- Chinese remains the default project language.
- English documents mirror Chinese structure and link to English Prompt modules.
- Prompt bodies and module directories are not renamed by this work.
- License text is not translated.
- No Git commit is created unless the user requests it.

---

### Task 1: Chinese And English Project Homepages

**Files:**
- Modify: `README.md`
- Modify: `README_EN.md`

**Interfaces:**
- Consumes: real module paths from `testing-types/zh|en/`
- Produces: category anchors and links consumed by the paired catalogs and Workflow pages

- [ ] Replace the current long-form homepage structure with project positioning, quick start, ten Prompt categories, detailed Workflow discovery, version selection, and a modular Documentation table.
- [ ] Keep the same category order, Workflow order, and documentation entries in both languages.
- [ ] Point Chinese links to Chinese modules and English links to English modules.
- [ ] Run `node scripts/check-prompts.mjs` and verify both homepage language switches and links.

### Task 2: Paired 200-Item Prompt Catalogs

**Files:**
- Modify: `PROMPT_COVERAGE_200.md`
- Create: `PROMPT_COVERAGE_200_EN.md`

**Interfaces:**
- Consumes: the approved 1–200 coverage mapping
- Produces: ten category anchors linked from both homepages

- [ ] Add language switching, category navigation, and category sections to the Chinese catalog without changing IDs or module mappings.
- [ ] Create the English catalog with identical IDs, categories, modules, and English README/Standard Prompt links.
- [ ] Verify each catalog has exactly 200 unique IDs and 200 unique modules.

### Task 3: Detailed Bilingual Workflow Discovery

**Files:**
- Modify: `Workflows/zh/README.md`
- Modify: `Workflows/en/README.md`
- Modify: `Workflows/zh/daily-testing-workflow.md`
- Modify: `Workflows/en/daily-testing-workflow.md`
- Modify: `Workflows/zh/sprint-testing-workflow.md`
- Modify: `Workflows/en/sprint-testing-workflow.md`
- Modify: `Workflows/zh/release-testing-workflow.md`
- Modify: `Workflows/en/release-testing-workflow.md`
- Modify when required: paired Workflow stage README files with missing language switches or invalid links

**Interfaces:**
- Consumes: Prompt modules and AI Quality Analysis stage directories
- Produces: valid bilingual workflow navigation linked from project homepages

- [ ] Expand both Workflow indexes with Router behavior, the eight AI Quality Analysis stages, role counts, and detailed daily/sprint/release phase summaries.
- [ ] Add or repair language switches in paired Workflow documents.
- [ ] Replace invalid legacy Prompt paths with existing module README paths under `testing-types/zh|en/`.
- [ ] Verify all linked Workflow and Prompt paths exist.

### Task 4: Paired Examples And Documentation Validation

**Files:**
- Modify: `examples/README.md`
- Create: `examples/README_EN.md`
- Modify: `scripts/check-prompts.mjs`
- Modify when needed: `CONTRIBUTING.md`, `CONTRIBUTING_EN.md`, `PROMPT_AUTHORING_STANDARD.md`, `PROMPT_AUTHORING_STANDARD_EN.md`

**Interfaces:**
- Consumes: homepage documentation links and existing validation conventions
- Produces: bilingual user-document checks included in `npm run check:all`

- [ ] Make Examples a real bilingual index and label nonexistent example categories as planned rather than present.
- [ ] Validate paired language switches for homepage, catalog, contribution, authoring, examples, and Workflow indexes.
- [ ] Validate both catalogs contain 200 matching IDs and module slugs.
- [ ] Extend relative-link checks to the user-facing documents changed by this plan.
- [ ] Run `npm run check:all`, `git diff --check`, and targeted catalog parity checks.
