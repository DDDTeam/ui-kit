import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

const baseViteConfig = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      tsconfigPaths(),
      svgr({
        svgrOptions: {
          plugins: ["@svgr/plugin-jsx"],
          jsxRuntimeImport: {
            namespace: "jsx",
            source: "@robocotik/react/jsx-runtime",
          },
          jsxRuntime: "automatic",
        },
        esbuildOptions: {
          jsx: "transform",
          jsxFactory: "jsx.jsx",
          jsxFragment: "Fragment",
          jsxDev: false,
        },
      }),
    ],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    build: {
      lib: {
        entry: "src/index.ts",
        name: "DDD UI Kit",
        formats: ["es"],
        fileName: "ddd-ui-kit",
      },
      outDir: "dist",
      emptyOutDir: true,
      sourcemap: false,
      cssCodeSplit: false,
      rollupOptions: {
        external: ["@robocotik/react"],
      },
    },
    esbuild: {
      jsx: "transform",
      jsxFactory: "jsx",
      jsxFragment: "Fragment",
      jsxInject: "import {jsx, Fragment} from '@robocotik/react/jsx-runtime'",
      jsxDev: false,
    },
  };
});

export default baseViteConfig;
