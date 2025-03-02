import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

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
    terserOptions: {
      compress: true,
      mangle: true,
      format: {
        comments: false,
      },
    },
  },
  plugins: [
    VitePluginNode({
      adapter: "express",
      appPath: "./src/index.ts",
    }),
  ],
});
