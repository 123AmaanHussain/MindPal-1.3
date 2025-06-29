import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      // Ensure _redirects file is copied to dist during build
      external: [],
    },
  },
  publicDir: 'public', // This ensures files in public/ are copied to dist/
});