import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': resolve(__dirname, './src/assets'),
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages'),
      '@router': resolve(__dirname, './src/router'),
      '@styles': resolve(__dirname, './src/styles'),
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      'http://localhost:5173/api/v1/user/login/oauth2/code/kakao': {
        target: 'https://kauth.kakao.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/kakao-api/, ''),
      },
    },
  },
});
