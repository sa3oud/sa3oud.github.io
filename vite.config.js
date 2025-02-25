import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Ensures relative URLs for resources
  plugins: [react()],
  build: {
    outDir: 'dist' // Specifies the output directory for built files
  }
});
