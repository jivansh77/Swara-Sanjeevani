// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001', // Replace with your backend server's URL and port
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
