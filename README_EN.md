<div align="right"><strong><a href="./README.md">中文</a></strong> | <strong>English</strong></div>

# Awesome QA Prompt

<div align="center">
  <img src="https://inaodeng.com/prompts.svg" alt="Awesome QA Prompt" width="800"/>
</div>

[![Prompt Check](https://img.shields.io/github/actions/workflow/status/naodeng/awesome-qa-prompt/prompt-check.yml?branch=main&label=prompt%20check)](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/prompt-check.yml)
[![License: PolyForm Noncommercial 1.0.0](https://img.shields.io/badge/License-PolyForm%20Noncommercial%201.0.0-blue)](https://github.com/naodeng/awesome-qa-prompt/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/naodeng/awesome-qa-prompt?style=social)](https://github.com/naodeng/awesome-qa-prompt)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Support-FFDD00?style=flat&logo=buy-me-a-coffee&logoColor=black)](https://inaodeng.com/prompts)

A **Prompt Baseline** for QA work: a copy-and-use collection of structured prompts covering common testing scenarios from requirements analysis to test reporting. The default entry for each module is `Standard-version/`.

Online docs: [https://inaodeng.com/prompts](https://inaodeng.com/prompts)

---

## Contents

- [Positioning](#positioning)
- [Difference from awesome-qa-skills](#difference-from-awesome-qa-skills)
- [What's included](#whats-included)
- [How to choose a version](#how-to-choose-a-version)
- [Quick start](#quick-start)
- [Repository layout](#repository-layout)
- [Quality principles](#quality-principles)
- [Development and contributing](#development-and-contributing)
- [License and support](#license-and-support)

---

## Positioning

This repository maintains **prompt text and variants**, not an AI-tool skill pack. Typical usage:

1. Find the module by testing type or workflow
2. Open `Standard-version/` (or Lite / framework / platform variants when needed)
3. Copy the prompt, add real project context, and use it in a common AI assistant

It is intended for drafting test plans, cases, strategies, and reports. Treat generated output as a first draft and review it before formal delivery.

### Design principles

- **Executable**: Prefer a minimum usable result over oversized templates
- **Traceable**: Require input audit, explicit assumptions, and gap callouts
- **Trustworthy**: Do not present invented requirements, APIs, environments, or metrics as facts
- **Maintainable**: Modular layout with bilingual and multi-version content

---

## Difference from awesome-qa-skills

| | Awesome QA Prompt (this repo) | [Awesome QA Skills](https://github.com/naodeng/awesome-qa-skills) |
| --- | --- | --- |
| Positioning | Prompt Baseline: copy-and-use prompts | Installable skill pack for Cursor / Claude Code and similar tools |
| Usage | Open a module → choose `Standard-version` → paste into chat | Install a skill and invoke with `@skill` |
| Form | Multi-framework / platform prompt variants | `SKILL.md` plus installer scripts |
| Out of scope | No skill installer | Not a multi-framework prompt-variant collection |

They are complementary: use this repo for paste-ready prompts; use the skills repo for installable AI-tool skills.

---

## What's included

### Testing types (15)

Chinese modules live under `testing-types/zh/<module>/`; English under `testing-types/en/<module>/`. Default recommendation: `Standard-version/`.

| Module | Directory | Purpose |
| --- | --- | --- |
| Requirements analysis | [`requirements-analysis`](./testing-types/en/requirements-analysis/) | Testability review, scenarios, and risks |
| Test case writing | [`test-case-writing`](./testing-types/en/test-case-writing/) | Turn scenarios into executable cases |
| Test case review | [`test-case-reviewer`](./testing-types/en/test-case-reviewer/) | Coverage, quality, and risk review |
| Functional testing | [`functional-testing`](./testing-types/en/functional-testing/) | Functional strategy and scenario design |
| Manual / exploratory testing | [`manual-testing`](./testing-types/en/manual-testing/) | Exploratory and manual execution support |
| API testing | [`api-testing`](./testing-types/en/api-testing/) | API test strategy and case design |
| Automation testing | [`automation-testing`](./testing-types/en/automation-testing/) | Scope, layering, and rollout guidance |
| Performance testing | [`performance-testing`](./testing-types/en/performance-testing/) | Performance scenarios and metrics (targets must be provided) |
| Security testing | [`security-testing`](./testing-types/en/security-testing/) | Security scope and investigation angles |
| Mobile testing | [`mobile-testing`](./testing-types/en/mobile-testing/) | Mobile compatibility, interaction, and special concerns |
| Accessibility testing | [`accessibility-testing`](./testing-types/en/accessibility-testing/) | Accessibility standards and verification points |
| Bug reporting | [`bug-reporting`](./testing-types/en/bug-reporting/) | Defect report structure and writing rules |
| Test reporting | [`test-reporting`](./testing-types/en/test-reporting/) | Result summary and quality conclusion structure |
| Test strategy | [`test-strategy`](./testing-types/en/test-strategy/) | Overall strategy, scope, and priorities |
| AI-assisted testing | [`ai-assisted-testing`](./testing-types/en/ai-assisted-testing/) | Where AI help fits and how to use it carefully |

Chinese paths use `zh` instead of `en`, for example [`testing-types/zh/functional-testing/`](./testing-types/zh/functional-testing/).

### Testing workflows (4)

| Workflow | Chinese | English |
| --- | --- | --- |
| Daily testing | [`Workflows/zh/daily-testing-workflow.md`](./Workflows/zh/daily-testing-workflow.md) | [`Workflows/en/daily-testing-workflow.md`](./Workflows/en/daily-testing-workflow.md) |
| Sprint testing | [`Workflows/zh/sprint-testing-workflow.md`](./Workflows/zh/sprint-testing-workflow.md) | [`Workflows/en/sprint-testing-workflow.md`](./Workflows/en/sprint-testing-workflow.md) |
| Release testing | [`Workflows/zh/release-testing-workflow.md`](./Workflows/zh/release-testing-workflow.md) | [`Workflows/en/release-testing-workflow.md`](./Workflows/en/release-testing-workflow.md) |
| AI Quality Analysis Workflow | [`Workflows/zh/ai-quality-analysis-workflow/README.md`](./Workflows/zh/ai-quality-analysis-workflow/README.md) | [`Workflows/en/ai-quality-analysis-workflow/README.md`](./Workflows/en/ai-quality-analysis-workflow/README.md) |

See [`Workflows/en/README.md`](./Workflows/en/README.md) for details.

### Inventory (overview)

| Category | Description |
| --- | --- |
| Testing-type modules | 15 (Chinese and English sets) |
| Workflows | 4 (Chinese and English copies) |
| AI quality-analysis role and synthesis prompts | 86 (43 Chinese + 43 English) |
| Standard prompts | Full / Lite; selected modules also have `all_round` / `Web` / `Mobile` |
| Framework variants | ROSES, LangGPT, ICIO, CRISPE, RISE (full + lite, including some platform variants) |

Treat the repository tree as the source of truth. Run `npm run check:all` before submitting changes.

---

## How to choose a version

| Version | When to use |
| --- | --- |
| **Standard Full** | Default recommendation; fuller method and output structure |
| **Standard Lite** | Limited input, or you only need a fast first draft |
| **Framework variants** | You explicitly want ROSES / LangGPT / ICIO / CRISPE / RISE structure |
| **Platform variants** | You need all-round / Web / Mobile focus (available for selected modules) |

Modules that currently include platform variants: requirements analysis, test case writing, functional testing, test strategy, manual testing, and test case review.

Framework guide: [prompt-frameworks/en/README.md](./prompt-frameworks/en/README.md)

---

## Quick start

### Option 1: Online docs

1. Open [https://inaodeng.com/prompts](https://inaodeng.com/prompts)
2. Choose a testing type or workflow
3. Prefer Standard Full; switch to Lite / framework / platform variants only when needed
4. Copy the prompt and attach real requirements, scope, environment, and constraints

### Option 2: Local clone

```bash
git clone https://github.com/naodeng/awesome-qa-prompt.git
cd awesome-qa-prompt
```

Recommended path example (English · functional testing · Standard):

`testing-types/en/functional-testing/Standard-version/FunctionalTestingPrompt.md`

Usage:

1. Open that file (or your target module)
2. If the file has a first `---`, copy the content after it; otherwise copy the entire Prompt into your AI assistant
3. Append real project context; clarify gaps or mark assumptions when information is incomplete
4. Human-review the output before review, execution, or archival use

---

## Repository layout

```text
awesome-qa-prompt/
├── README.md / README_EN.md
├── AGENTS.md
├── PROMPT_AUTHORING_STANDARD.md / PROMPT_AUTHORING_STANDARD_EN.md
├── CONTRIBUTING.md / CONTRIBUTING_EN.md
├── testing-types/
│   ├── zh/<module>/          # README + Standard / framework / platform variants
│   └── en/<module>/
├── Workflows/
│   ├── zh/
│   └── en/
├── prompt-frameworks/
│   ├── zh/
│   └── en/
├── examples/
├── scripts/                  # npm run check:* validation
└── future-updates/           # planned content; not the primary entry
```

Each testing-type directory usually contains:

- `README.md` — module overview and version guidance
- `Standard-version/` — default recommendation
- `ROSES-version/` / `LangGPT-version/` / `ICIO-version/` / `CRISPE-version/` / `RISE-version/`

---

## Quality principles

When adding or editing prompts, follow [PROMPT_AUTHORING_STANDARD_EN.md](./PROMPT_AUTHORING_STANDARD_EN.md). Collaboration defaults are in [AGENTS.md](./AGENTS.md).

Summary:

- Default entry points must target `Standard-version/`, and links must resolve
- Run an input completeness check first; degrade gracefully and mark assumptions when input is incomplete
- Do not invent requirements, APIs, environments, metrics, dates, or approval conclusions
- Missing KPIs / SLAs / coverage figures must be marked TBD or example values, never as committed targets

---

## Development and contributing

```bash
npm install
npm run check:all
```

- Contributing guide: [CONTRIBUTING_EN.md](./CONTRIBUTING_EN.md) / [CONTRIBUTING.md](./CONTRIBUTING.md)
- Issues: [GitHub Issues](https://github.com/naodeng/awesome-qa-prompt/issues)
- Discussions: [GitHub Discussions](https://github.com/naodeng/awesome-qa-prompt/discussions)

After changing prompts or module READMEs, run `npm run check:all` and confirm whether the other language needs a matching update.

---

## License and support

- License: [PolyForm Noncommercial License 1.0.0](./LICENSE)
- Support: [Buy Me a Coffee](https://www.buymeacoffee.com/naodeng) · [Ko-fi](https://ko-fi.com/naodeng) · [Docs sponsorship page](https://inaodeng.com/prompts)

### Related links

- Online docs: https://inaodeng.com/prompts
- This repository: https://github.com/naodeng/awesome-qa-prompt
- Skills repository: https://github.com/naodeng/awesome-qa-skills
