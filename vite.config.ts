import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {} as any, // ✅ تجاوز كامل لـ TypeScript
  }
});

