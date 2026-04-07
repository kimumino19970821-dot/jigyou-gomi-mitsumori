// Fetch LP HTML and extract section structure + text content
import { writeFile } from 'fs/promises';

const TARGET = 'https://fuyouhin.support/lp/garbage_house/';
const res = await fetch(TARGET, {
  headers: { 'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' }
});
const html = await res.text();

// Save raw HTML for reference
await writeFile('docs/research/source.html', html);
console.log('Saved source.html (' + html.length + ' bytes)');

// Strip scripts/styles for easier text analysis
const cleaned = html
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<noscript[\s\S]*?<\/noscript>/gi, '');

// Extract sections - look for common LP patterns
// Find <section>, <div class="section">, or class containing mv/feature/voice/flow/etc
const sectionRegex = /<(section|div)[^>]*class=["']([^"']*(?:mv|hero|fea|feature|voi|voice|flo|flow|reason|merit|plan|price|step|faq|form|company|footer|contact|cta|item)[^"']*)["'][^>]*>/gi;

const foundSections = [];
let m;
while ((m = sectionRegex.exec(cleaned))) {
  foundSections.push({
    tag: m[1],
    cls: m[2].substring(0, 80),
    pos: m.index
  });
}

// Extract all text by headings
const headingRegex = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
const headings = [];
while ((m = headingRegex.exec(cleaned))) {
  const text = m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  if (text) headings.push({ tag: m[1], text, pos: m.index });
}

// Strip all HTML for pure text
const pureText = cleaned
  .replace(/<[^>]+>/g, '\n')
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&#[0-9]+;/g, '')
  .split('\n')
  .map(s => s.trim())
  .filter(s => s.length > 2 && !/^[\s\d]*$/.test(s))
  .filter((s, i, arr) => s !== arr[i-1]); // dedupe consecutive

await writeFile('docs/research/text-content.txt', pureText.join('\n'));
console.log('Text content: ' + pureText.length + ' lines');

await writeFile('docs/research/headings.json', JSON.stringify(headings, null, 2));
console.log('Headings: ' + headings.length);

await writeFile('docs/research/sections.json', JSON.stringify(foundSections, null, 2));
console.log('Sections: ' + foundSections.length);

// Also extract the key class names of top-level containers to understand layout
const classes = new Set();
const classRegex = /class=["']([^"']+)["']/gi;
while ((m = classRegex.exec(cleaned))) {
  m[1].split(/\s+/).forEach(c => {
    if (c.length > 2 && !c.startsWith('wp-') && !c.startsWith('has-')) classes.add(c);
  });
}
await writeFile('docs/research/all-classes.txt', [...classes].sort().join('\n'));
console.log('Unique classes: ' + classes.size);
