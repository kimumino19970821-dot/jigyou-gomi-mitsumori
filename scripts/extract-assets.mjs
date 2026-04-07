// Fetch target LP HTML and extract all asset URLs
import { writeFile, mkdir } from 'fs/promises';
import { dirname } from 'path';

const TARGET = 'https://fuyouhin.support/lp/garbage_house/';

const res = await fetch(TARGET, {
  headers: { 'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' }
});
const html = await res.text();

// Extract img src
const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
const srcsetRegex = /srcset=["']([^"']+)["']/gi;
const bgRegex = /url\(["']?([^"')]+\.(png|jpg|jpeg|svg|webp|gif))["']?\)/gi;

const urls = new Set();
const resolve = (u) => {
  try { return new URL(u, TARGET).href.split('?')[0]; } catch { return null; }
};

let m;
while ((m = imgRegex.exec(html))) {
  const u = resolve(m[1]);
  if (u) urls.add(u);
}
while ((m = srcsetRegex.exec(html))) {
  m[1].split(',').forEach(part => {
    const url = part.trim().split(/\s+/)[0];
    const u = resolve(url);
    if (u) urls.add(u);
  });
}
while ((m = bgRegex.exec(html))) {
  const u = resolve(m[1]);
  if (u) urls.add(u);
}

// Also extract CSS/JS for deeper background image discovery
const cssRegex = /<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi;
const cssUrls = [];
while ((m = cssRegex.exec(html))) {
  const u = resolve(m[1]);
  if (u) cssUrls.push(u);
}

for (const cssUrl of cssUrls.slice(0, 5)) {
  try {
    const cssRes = await fetch(cssUrl);
    const cssText = await cssRes.text();
    let cm;
    while ((cm = bgRegex.exec(cssText))) {
      const u = new URL(cm[1], cssUrl).href.split('?')[0];
      if (u.match(/\.(png|jpg|jpeg|svg|webp|gif)$/i)) urls.add(u);
    }
  } catch (e) {}
}

const list = [...urls].filter(u => u.includes('fuyouhin.support'));
console.log(`Found ${list.length} assets`);
list.forEach(u => console.log(u));

await writeFile('docs/research/assets.txt', list.join('\n'));
console.log('\nWritten to docs/research/assets.txt');
