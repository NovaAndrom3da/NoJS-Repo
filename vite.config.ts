import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: 'terser',
  },
  server: {
    port: 80,
    hmr: {
      clientPort: 442,
    },
  },
});

