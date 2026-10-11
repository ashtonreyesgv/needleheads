// vite config. react for the jsx, and the tailwind plugin so there's no postcss setup to babysit
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        port: 5183
    }
});
