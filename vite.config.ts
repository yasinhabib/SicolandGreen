import { defineConfig } from "vite";
import tsconfigPaths from 'vite-tsconfig-paths'
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/SicolandGreen/', // 👈 use your repo name here
  plugins: [
    tsconfigPaths(),
    react()
  ],
  build: {
    outDir: 'dist',
  },
  resolve: {
     alias: [{ find: '@', replacement: '/src' }],
  },
});
