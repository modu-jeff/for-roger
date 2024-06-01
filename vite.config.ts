import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    cssMinify: true,
    sourcemap: true,
  },
};

// https://vitejs.dev/config/
export default defineConfig(config);
