/**
 * Nachbereitung des statischen Builds:
 *
 *  1. 404.html – Cloudflare Pages liefert diese Datei fuer unbekannte Pfade aus
 *     (mit korrektem 404-Status). Angular rendert darin die Not-Found-Seite.
 *  2. sitemap.xml und robots.txt – aus den tatsaechlich vorgerenderten Seiten
 *     erzeugt, damit beide nicht veralten, wenn Projekte dazukommen.
 */
import { copyFile, readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const OUT_DIR = 'dist/jrosenberg/browser';

// Einzige Quelle fuer die Domain bleibt src/app/data/site.ts.
const siteSource = await readFile('src/app/data/site.ts', 'utf8');
const siteUrl = siteSource.match(/SITE_URL\s*=\s*'([^']+)'/)?.[1];
if (!siteUrl) {
  throw new Error('SITE_URL konnte nicht aus src/app/data/site.ts gelesen werden.');
}

await copyFile(join(OUT_DIR, 'index.csr.html'), join(OUT_DIR, '404.html'));

const routes = (await collectRoutes(OUT_DIR)).sort();
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`).join('\n')}
</urlset>
`;
await writeFile(join(OUT_DIR, 'sitemap.xml'), sitemap);

await writeFile(
  join(OUT_DIR, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
);

console.log(`postbuild: 404.html, robots.txt, sitemap.xml (${routes.length} Seiten)`);

/** Sammelt alle vorgerenderten Seiten als Routen-Pfade ('/', '/projects/foo'). */
async function collectRoutes(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true, recursive: true })) {
    if (entry.isFile() && entry.name === 'index.html') {
      const dirPath = relative(OUT_DIR, entry.parentPath ?? entry.path);
      found.push('/' + dirPath.split(sep).filter(Boolean).join('/'));
    }
  }
  return found;
}
