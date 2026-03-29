<div align="right"><strong><a href="./PROMPT_AUTHORING_STANDARD.md">🇨🇳中文</a></strong> | <strong>🇬🇧English</strong></div>

# Prompt Authoring Standard

This standard defines the minimum quality bar for prompts, READMEs, and framework variants in `awesome-qa-prompt`, so the repository does not regress into broken links, over-specified templates, fabricated details, or misleading hard-coded KPIs.

## Scope

- `testing-types/zh/*/README.md`
- `testing-types/en/*/README.md`
- `testing-types/zh/*/Standard-version/*.md`
- `testing-types/en/*/Standard-version/*.md`
- `testing-types/zh/*/CRISPE-version/*.md`
- `testing-types/en/*/CRISPE-version/*.md`
- `testing-types/zh/*/RISE-version/*.md`
- `testing-types/en/*/RISE-version/*.md`
- `testing-types/zh/*/ICIO-version/*.md`
- `testing-types/en/*/ICIO-version/*.md`
- `testing-types/zh/*/ROSES-version/*.md`
- `testing-types/en/*/ROSES-version/*.md`
- `testing-types/zh/*/LangGPT-version/*.md`
- `testing-types/en/*/LangGPT-version/*.md`

## Core Principles

- The default recommended entry must point to `Standard-version/`
- README links and file paths must resolve to real files
- Prompts must prioritize the minimum executable result instead of forcing an oversized template by default
- Prompts must not encourage the model to invent requirements, endpoints, fields, environments, metrics, dates, version numbers, approvers, or compliance conclusions
- Missing KPIs, SLA/SLO targets, coverage figures, concurrency targets, and response-time goals must be marked as `TBD`, `recommended`, or `example values`

## Required Structure

All non-LangGPT prompts should include:

1. Input completeness check
2. Do not invent facts
3. Output degradation strategy
4. Execution instructions

## Input Completeness Requirements

Before the main output, prompts should instruct the model to:

- list known information
- list missing information
- list key assumptions
- list main risks

If missing information would materially affect the outcome, the prompt should require the model to:

- ask 3-5 high-value clarifying questions first
- continue only with the minimum necessary assumptions if no more detail is provided
- mark all assumptions explicitly

## Do-Not-Invent Requirements

Prompts should explicitly forbid fabrication of:

- requirements, business rules, endpoints, fields, state transitions
- environments, browser versions, device models, dependency services
- team roles, approvers, authors, review dates, budgets
- defect counts, coverage figures, user volume, concurrency, response time, availability targets
- SLA/SLO targets, compliance conclusions, security conclusions

## Output Template Requirements

- Keep mandatory fields to a minimum
- Do not force metadata such as approver, reviewer date, author, version number, or executor unless the user explicitly needs them
- If such fields remain in the template, allow `TBD` or `Not provided`
- If the user asks for strategy or analysis, do not default to scripts, configs, or implementation code
- Only provide scripts, configs, or example code when explicitly requested or strongly supported by the input

## KPI And Example Value Rules

- Example values must be labeled as examples
- Industry heuristics must not be presented as confirmed targets
- Avoid hard-coded targets such as `100%`, `99.9%`, `≤500ms`, or `≥1000 RPS` when the user did not provide them

Correct examples:

- `Response time: [Target value, mark as TBD if not provided]`
- `响应时间：[目标值，未提供则标注待确认]`

## README Requirements

- Chinese README files should default to Chinese `Standard-version` entries
- English README files should default to English `Standard-version` entries
- Each module README should include version-selection guidance
- Cross-module links must use real relative paths, not broken `../testing-types/...` patterns

## LangGPT Special Rules

LangGPT variants should preserve their framework style, but must still cover:

- do-not-invent constraints in `Constrains` or an equivalent section
- input audit and clarification logic in `Workflow`
- an explicit “audit first, then output” rule in `Initialization`

## Change Checklist

- [ ] README links resolve and default to `Standard-version/`
- [ ] Prompt includes input audit, do-not-invent rules, and degradation strategy
- [ ] No hard-coded KPI is presented as a confirmed target
- [ ] No unconditional “start immediately” instruction remains
- [ ] Chinese and English variants follow the same behavior rules
- [ ] Lite / Full / framework variants remain aligned on core constraints
