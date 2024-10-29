import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  'base': "/megha-bhattarai/",
  plugins: [react()],
    build: {
    rollupOptions: {
      external: ['react-icons/fa'], // Add this line if you want to externalize it
    },
  },

  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Backend server URL
      

    },
  },
});
