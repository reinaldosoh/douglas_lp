import { writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), ".vercel/output/static");
const serverPath = join(process.cwd(), ".vercel/output/functions/__server.func/index.mjs");

const { default: server } = await import(serverPath);
const response = await server.fetch(new Request("https://www.douglascouto.com/"));

if (!response.ok) {
  console.error(`[prerender] Failed to render /: ${response.status} ${response.statusText}`);
  process.exit(1);
}

const html = await response.text();
writeFileSync(join(outDir, "index.html"), html);
console.log(`[prerender] Wrote index.html (${html.length} bytes) → ${outDir}`);
