import { defineConfig, loadEnv, } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    test: {
      globals: true,
      setupFiles: "src/setupTests.ts",
    },
    root: ".",
  };
});
