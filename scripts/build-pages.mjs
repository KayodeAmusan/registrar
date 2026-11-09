import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const pages = JSON.parse(await readFile("src/config/pages.json", "utf8"));
const template = await readFile("dist/index.html", "utf8");
const siteUrl = "https://cloud.dotmac.ng";
const escape = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
function render(page) {
  let html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(page.title)}</title>`);
  for (const name of ["description", "twitter:description"]) {
    html = html.replace(new RegExp(`(<meta\\s+name="${name}"\\s+content=")[^"]*("\\s*\\/?>)`), `$1${escape(page.description)}$2`);
  }
  for (const name of ["og:description", "og:title", "og:url"]) {
    const value = name === "og:description" ? page.description : name === "og:title" ? page.title : siteUrl + page.path;
    html = html.replace(new RegExp(`(<meta\\s+property="${name}"\\s+content=")[^"]*("\\s*\\/?>)`), `$1${escape(value)}$2`);
  }
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${escape(page.title)}$2`);
  html = html.replace(/(<link rel="(?:canonical|alternate)"[^>]*href=")[^"]*(")/g, `$1${siteUrl}${page.path}$2`);
  return html;
}
for (const page of Object.values(pages)) {
  const directory = resolve("dist", page.path.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(resolve(directory, "index.html"), render(page));
}
await writeFile("dist/404.html", render({path:"/404/",title:"Page not found | Dotmac Cloud",description:"The requested page could not be found."}).replace('name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"','name="robots" content="noindex, follow"'));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.values(pages).map(page => `  <url><loc>${siteUrl}${page.path}</loc></url>`).join("\n")}\n</urlset>\n`;
await writeFile("dist/sitemap.xml", sitemap);
console.log(`Generated ${Object.keys(pages).length} separate page entry points and sitemap.`);
