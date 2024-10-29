import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
    build: {
    rollupOptions: {
      external: ['react-icons/fa'], // Add this line if you want to externalize it
    },
  },

  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Backend server URL
      'base': "/megha-bhattarai",

    },
  },
});
