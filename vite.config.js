import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  
  plugins: [react()],
  assetsInclude: ['**/*.svg'], // Allows SVGs to be imported like images
});
