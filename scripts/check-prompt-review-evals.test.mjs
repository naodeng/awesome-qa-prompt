import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';

const root = process.cwd();
const fixturePath = join(root, 'scripts', 'prompt-review-evals.json');

test('prompt review eval fixtures cover all required classifications and risk patterns', () => {
  assert.ok(existsSync(fixturePath), 'missing prompt review evaluation fixtures');
  const fixtures = JSON.parse(readFileSync(fixturePath, 'utf8')).fixtures;
  const classifications = new Set(fixtures.map(({ expectedClassification }) => expectedClassification));
  assert.deepEqual(classifications, new Set(['STRONG', 'WEAK', 'FAKE', '待确认']));
  for (const pattern of ['no-assertion', 'tautology', 'self-comparison', 'mocked-subject', 'status-only', 'legal-third-party-mock', 'business-assertion']) {
    assert.ok(fixtures.some(({ id }) => id === pattern), `missing ${pattern} fixture`);
  }
});

test('prompt review evaluation checker accepts the repository fixture suite', () => {
  execFileSync('node', ['scripts/check-prompt-review-evals.mjs'], { cwd: root, stdio: 'pipe' });
});

test('model-output evaluator accepts a schema-complete result with the expected classification', () => {
  const directory = mkdtempSync(join(tmpdir(), 'prompt-review-eval-'));
  const outputPath = join(directory, 'status-only.json');
  writeFileSync(outputPath, JSON.stringify({
    fixtureId: 'status-only',
    results: [{
      caseReference: 'POST /orders',
      classification: 'WEAK',
      confidence: 'High',
      impact: 'High',
      evidenceReference: 'expect(status).toBe(200)',
      mockReplacementStatus: 'Not replaced',
      candidateMinimalRegression: 'Persist the order as unpaid while returning 200.',
      missingAssertionRevision: 'Assert order state and persisted amount.',
    }],
  }));
  execFileSync('node', ['scripts/evaluate-prompt-review-output.mjs', outputPath], { cwd: root, stdio: 'pipe' });
});
