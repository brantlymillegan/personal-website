import { readFile, writeFile } from "node:fs/promises";
import React from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const outputPath = new URL("../dist/index.html", import.meta.url);
const rootMarker = '<div id="root"></div>';
const vite = await createServer({
  appType: "custom",
  logLevel: "error",
  server: { hmr: false, middlewareMode: true, ws: false },
});

try {
  const { default: Home } = await vite.ssrLoadModule("/app/page.tsx");
  const markup = renderToString(React.createElement(Home));
  const template = await readFile(outputPath, "utf8");

  if (!template.includes(rootMarker)) {
    throw new Error("Could not find the root marker in the production HTML.");
  }

  await writeFile(
    outputPath,
    template.replace(rootMarker, `<div id="root">${markup}</div>`),
  );
} finally {
  await vite.close();
}
