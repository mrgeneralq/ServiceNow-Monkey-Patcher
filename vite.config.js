import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'public/manifest.json', dest: '.' },
        { src: 'public/icon.png', dest: '.' },
        { src: 'src/inject.js', dest: '.' },
        { src: 'src/assets/logo.png', dest: '.' } 
      ]
    }),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: 'index.html',
        content: 'src/content.js',
        background: 'src/background.js'
      },
      output: {
        entryFileNames: '[name].js'
      }
    }
  }
});