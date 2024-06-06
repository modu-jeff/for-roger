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
  server: {
    proxy: {
      '/naver_login_authorize': {
        target: 'https://nid.naver.com/oauth2.0/authorize',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/naver_login_authorize/, ''),
      },
    },
  },
};

// https://vitejs.dev/config/
export default defineConfig(config);
