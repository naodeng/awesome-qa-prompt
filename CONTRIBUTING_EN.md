<div align="right"><strong><a href="./CONTRIBUTING.md">🇨🇳中文</a></strong> | <strong>🇬🇧English</strong></div>

# Contributing

Contributions to prompts, READMEs, docs, and workflows are welcome, but changes should meet the repository's current quality bar before submission.

## Before You Submit

1. Read [PROMPT_AUTHORING_STANDARD_EN.md](./PROMPT_AUTHORING_STANDARD_EN.md)
2. Make sure the default entry points target `Standard-version/`
3. Do not introduce broken links, fabricated defaults, hard-coded KPIs, or unconditional “start immediately” instructions
4. Run locally:

```bash
npm run check:prompts
```

## Recommended Workflow

```bash
git clone https://github.com/naodeng/awesome-qa-prompt.git
cd awesome-qa-prompt
git checkout -b feature/your-change
npm install
npm run check:prompts
```

## Prompt Change Requirements

- Prefer updating `Standard-version/` first
- If you also update framework variants, keep the core behavioral constraints aligned
- When the input is incomplete, prompts must perform an input audit before generating the main result
- Missing metrics must be marked as `TBD`, `recommended`, or `example values`
- Do not force unnecessary metadata such as approvers, dates, budgets, or environment details by default

## README Requirements

- Chinese READMEs should default to Chinese `Standard-version`
- English READMEs should default to English `Standard-version`
- Every Markdown link must resolve to a real file in the repository
- Version-selection guidance must remain intact

## Recommended Pull Request Content

- purpose of the change
- scope of impact
- whether README entry points changed
- whether prompt structural constraints changed
- local validation result

Example:

```markdown
## Summary
- fix default README entry paths
- add guardrails to Standard-version prompts

## Validation
- npm run check:prompts
```

## Current Automated Check

GitHub Actions runs `Prompt Check` on pushes to `main` and on pull requests:

- install dependencies
- run `npm run check:prompts`

If the check fails, reproduce it locally and fix it before submitting.
