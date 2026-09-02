import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outputPath = process.argv[2];
const fixturePath = join(process.cwd(), 'scripts', 'prompt-review-evals.json');
const requiredFields = [
  'caseReference',
  'classification',
  'confidence',
  'impact',
  'evidenceReference',
  'mockReplacementStatus',
  'candidateMinimalRegression',
  'missingAssertionRevision',
];
const classifications = new Set(['STRONG', 'WEAK', 'FAKE', '待确认', 'Needs confirmation']);
const levels = new Set(['High', 'Medium', 'Low', '高', '中', '低']);
const errors = [];

if (!outputPath) errors.push('Usage: node scripts/evaluate-prompt-review-output.mjs <model-output.json>.');
if (outputPath && !existsSync(outputPath)) errors.push(`Missing model output: ${outputPath}.`);
if (!existsSync(fixturePath)) errors.push(`Missing evaluation fixtures: ${fixturePath}.`);

if (errors.length === 0) {
  const output = JSON.parse(readFileSync(outputPath, 'utf8'));
  const fixtures = JSON.parse(readFileSync(fixturePath, 'utf8')).fixtures;
  const fixture = fixtures.find(({ id }) => id === output.fixtureId);
  if (!fixture) {
    errors.push(`Unknown fixtureId: ${output.fixtureId ?? '<missing>'}.`);
  } else if (!Array.isArray(output.results) || output.results.length !== 1) {
    errors.push('Model output must contain exactly one result per fixture.');
  } else {
    for (const [index, result] of output.results.entries()) {
      for (const field of requiredFields) if (typeof result[field] !== 'string' || result[field].trim() === '') errors.push(`Result ${index + 1} is missing ${field}.`);
      if (!classifications.has(result.classification)) errors.push(`Result ${index + 1} has invalid classification ${result.classification}.`);
      if (!levels.has(result.confidence)) errors.push(`Result ${index + 1} has invalid confidence ${result.confidence}.`);
      if (!levels.has(result.impact)) errors.push(`Result ${index + 1} has invalid impact ${result.impact}.`);
    }
    if (output.results[0].classification !== fixture.expectedClassification) {
      errors.push(`Expected ${fixture.expectedClassification} for ${fixture.id}, received ${output.results[0].classification}.`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Prompt review model-output evaluation failed (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Prompt review model-output evaluation passed.');
