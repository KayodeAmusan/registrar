import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const args = process.argv.slice(2).filter((arg) => arg !== "--");
const build = spawnSync(process.execPath, [resolve("node_modules/vite/bin/vite.js"), "build", ...args], { stdio: "inherit" });
if (build.error) throw build.error;
if (build.status !== 0) process.exit(build.status ?? 1);
await import("./build-pages.mjs");
