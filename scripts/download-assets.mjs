// Download LP-specific assets only
import { writeFile, mkdir, readFile } from 'fs/promises';
import { dirname } from 'path';

const raw = await readFile('docs/research/assets.txt', 'utf8');
const urls = raw.trim().split('\n').filter(Boolean);

// Only keep LP-related assets (top/fm/item folders + core common assets)
const LP_PATTERNS = [
  /\/assets\/img\/top\//,
  /\/assets\/img\/fm\//,
  /\/assets\/img\/item\//,
  /\/assets\/img\/common\/(logo|garbage_house|icon_p_mark|banner_popup|banner_beforeunload|talker_icon|area_map_ttl|bg_modal|btn_arrow)/,
];

const lpUrls = urls.filter(u => LP_PATTERNS.some(p => p.test(u)));
console.log(`Filtering ${urls.length} → ${lpUrls.length} LP-specific assets`);

// Dedupe: prefer @2x when both exist
const seen = new Map();
for (const u of lpUrls) {
  const key = u.replace('@2x', '');
  if (!seen.has(key) || u.includes('@2x')) seen.set(key, u);
}
const toDownload = [...seen.values()];
console.log(`After dedup: ${toDownload.length}`);

const base = 'public/images/ref';
await mkdir(base, { recursive: true });

let ok = 0, fail = 0;
const batch = async (urls, n) => {
  for (let i = 0; i < urls.length; i += n) {
    const chunk = urls.slice(i, i + n);
    await Promise.all(chunk.map(async (url) => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const buf = Buffer.from(await res.arrayBuffer());
        // Preserve subfolder structure
        const pathPart = url.replace(/^.*\/assets\/img\//, '').replace('@2x', '');
        const outPath = `${base}/${pathPart}`;
        await mkdir(dirname(outPath), { recursive: true });
        await writeFile(outPath, buf);
        ok++;
      } catch (e) {
        fail++;
        console.error('FAIL', url, e.message);
      }
    }));
    process.stdout.write(`  ${ok}/${toDownload.length} downloaded\r`);
  }
};

await batch(toDownload, 8);
console.log(`\nDone. OK: ${ok}, Fail: ${fail}`);
