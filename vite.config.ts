import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export const baseViteConfig = defineConfig(({ mode }) => {
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
        name: "ui-kit",
        formats: ["es"],
        fileName: "index",
      },
      outDir: "dist",
      emptyOutDir: true,
      sourcemap: true,
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
    server: {
      host: "localhost",
      port: 3000,
      proxy: {
        "/api": {
          target: env.VITE_PRODUCTION_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    base: env.VITE_CDN_ADDRESS || "/",
  };
});

export default baseViteConfig;
