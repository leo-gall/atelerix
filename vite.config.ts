import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
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
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
