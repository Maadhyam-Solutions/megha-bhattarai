import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  
  plugins: [react()],
  base: "/megha-bhattarai/",

  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Backend server URL
    },
  },
});
