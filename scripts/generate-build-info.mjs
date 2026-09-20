import { writeFileSync, mkdirSync } from 'node:fs';
import { execSync } from 'node:child_process';

mkdirSync('src/lib/generated', { recursive: true });

let commit = process.env.COMMIT_REF || process.env.GITHUB_SHA || '';
if (!commit) {
  try {
    commit = execSync('git rev-parse --short HEAD').toString().trim();
  } catch {
    commit = '';
  }
}

const info = {
  builtAt: new Date().toISOString(),
  commit: commit.slice(0, 7),
};

writeFileSync('src/lib/generated/build-info.json', JSON.stringify(info, null, 2));
console.log('[build-info]', info);
