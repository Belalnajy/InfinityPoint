import { spawnSync } from 'node:child_process';
import { rmSync } from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const currentPid = process.pid;

function findRunningNextDev() {
  const psResult = spawnSync('ps', ['-eo', 'pid,args'], { encoding: 'utf8' });
  if (psResult.status !== 0) return [];

  return psResult.stdout
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const firstSpace = line.indexOf(' ');
      const pid = Number(line.slice(0, firstSpace));
      const cmd = line.slice(firstSpace + 1);
      return { pid, cmd };
    })
    .filter(
      ({ pid, cmd }) =>
        pid !== currentPid &&
        cmd.includes('next dev') &&
        cmd.includes(projectRoot)
    );
}

const running = findRunningNextDev();
if (running.length > 0) {
  console.error(
    '\n[dev-safe] في نسخة next dev شغالة بالفعل لنفس المشروع. اقفلها الأول ثم شغّل dev تاني.\n'
  );
  running.forEach(({ pid, cmd }) => {
    console.error(`- PID ${pid}: ${cmd}`);
  });
  console.error('\n[dev-safe] لو محتاج: pkill -f "next dev"\n');
  process.exit(1);
}

rmSync(path.join(projectRoot, '.next'), { recursive: true, force: true });
console.log('[dev-safe] Cleared .next cache before start.');

const nextBin = path.join(projectRoot, 'node_modules', '.bin', 'next');
const result = spawnSync(nextBin, ['dev'], {
  stdio: 'inherit',
  env: process.env,
});

if (result.error) {
  console.error('[dev-safe] Failed to start Next dev server:', result.error);
  process.exit(1);
}

if (result.signal) {
  process.kill(process.pid, result.signal);
}

process.exit(result.status ?? 0);
