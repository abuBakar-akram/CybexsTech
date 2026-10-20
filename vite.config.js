import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { cloudflare } from '@cloudflare/vite-plugin';

export default defineConfig({
    root: '.',
    base: '/',
    plugins: [react(), cloudflare()],
    build: { outDir: 'dist' },
    server: { open: true },
});
