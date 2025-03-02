import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";

export default defineConfig({
  build: {
    minify: "terser",
    lib: {
      entry: "src/index.ts",
      formats: ["cjs"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["commander"],
      output: {
        banner: "#!/usr/bin/env node",
        inlineDynamicImports: true,
      },
    },
  },
  plugins: [
    VitePluginNode({
      adapter: "express",
      appPath: "./src/index.ts",
    }),
    viteStaticCopy({
      targets: [
        {
          src: "artifacts/atelerix.jsonc",
          dest: ".",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
