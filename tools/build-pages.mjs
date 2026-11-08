import { build } from "vite";
import fs from "node:fs/promises";
import path from "node:path";

// The recovered invitation and public stylesheets contain site-root URLs.
// Rebase those assets in the deployment output, keeping localhost unchanged.
const requested = process.env.PAGES_BASE_PATH || "/wedding-letter/";
const base = requested === "/" ? "/" : `/${requested.replace(/^\/+|\/+$/g, "")}/`;
await build({ base });

const publicEntries = await fs.readdir("public", { withFileTypes: true });
const escape = value => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const roots = publicEntries.map(entry => escape(entry.name) + (entry.isDirectory() ? "/" : "(?=[?\\\"'`\\s)#]|$)"));
const assetUrl = new RegExp("([\\\"'`(=])/((?:" + roots.join("|") + "))", "g");
async function rebase(directory) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) await rebase(filename);
    else if (/\.(html|css|js|json|svg)$/.test(entry.name)) {
      const content = await fs.readFile(filename, "utf8");
      const result = content.replace(assetUrl, (_, delimiter, asset) => `${delimiter}${base}${asset}`);
      if (result !== content) await fs.writeFile(filename, result);
    }
  }
}
if (base !== "/") await rebase("dist");
await fs.writeFile("dist/.nojekyll", "");
console.log(`GitHub Pages build ready at ${base}`);
