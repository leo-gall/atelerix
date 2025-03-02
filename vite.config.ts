import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
  build: {
    lib: {
      entry: "src/cli.ts",
      formats: ["cjs"],
      fileName: "cli",
    },
    rollupOptions: {
      external: ["commander"],
    },
  },
  plugins: [
    VitePluginNode({
      adapter: "express",
      appPath: "./src/cli.ts",
    }),
  ],
});
