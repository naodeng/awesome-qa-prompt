import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const fixturePath = join(process.cwd(), 'scripts', 'prompt-review-evals.json');
const requiredIds = [
  'no-assertion',
  'tautology',
  'self-comparison',
  'mocked-subject',
  'status-only',
  'legal-third-party-mock',
  'business-assertion',
  'insufficient-evidence',
];
const allowedClassifications = new Set(['STRONG', 'WEAK', 'FAKE', '待确认']);
const requiredFields = ['id', 'testType', 'inputSummary', 'expectedClassification', 'expectedReason', 'expectedBusinessAssertion', 'minimalRegression'];
const errors = [];

if (!existsSync(fixturePath)) {
  errors.push(`Missing evaluation fixture file: ${fixturePath}.`);
} else {
  const { version, purpose, fixtures } = JSON.parse(readFileSync(fixturePath, 'utf8'));
  if (version !== 1) errors.push('Evaluation fixture version must be 1.');
  if (typeof purpose !== 'string' || purpose.length < 40) errors.push('Evaluation fixture purpose must explain its contract.');
  if (!Array.isArray(fixtures)) {
    errors.push('Evaluation fixtures must be an array.');
  } else {
    const ids = new Set();
    for (const fixture of fixtures) {
      for (const field of requiredFields) {
        if (typeof fixture[field] !== 'string' || fixture[field].trim() === '') errors.push(`Fixture ${fixture.id ?? '<unknown>'} is missing ${field}.`);
      }
      if (ids.has(fixture.id)) errors.push(`Duplicate fixture ID: ${fixture.id}.`);
      ids.add(fixture.id);
      if (!allowedClassifications.has(fixture.expectedClassification)) errors.push(`Fixture ${fixture.id} has invalid classification ${fixture.expectedClassification}.`);
    }
    for (const id of requiredIds) if (!ids.has(id)) errors.push(`Missing required evaluation fixture: ${id}.`);
    for (const classification of allowedClassifications) {
      if (!fixtures.some((fixture) => fixture.expectedClassification === classification)) errors.push(`No evaluation fixture covers ${classification}.`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Prompt review evaluation checks failed (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Prompt review evaluation checks passed.');
