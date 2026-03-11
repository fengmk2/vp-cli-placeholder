'use strict';

const { execFileSync } = require('child_process');
const { resolve } = require('path');
const assert = require('assert');

const bin = resolve(__dirname, '../bin/vp.js');

try {
  execFileSync(process.execPath, [bin], { encoding: 'utf8' });
  assert.fail('Expected process to exit with code 1');
} catch (err) {
  assert.strictEqual(err.status, 1, `Expected exit code 1, got ${err.status}`);
  assert.ok(
    err.stderr.includes('https://viteplus.dev/guide/#install-vp'),
    'Expected stderr to contain the installation URL'
  );
  assert.ok(
    err.stderr.includes('npx vp'),
    'Expected stderr to mention npx vp'
  );
}

console.log('All tests passed.');
