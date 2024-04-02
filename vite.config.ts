/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
// https://vitest.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        coverage: {
            thresholds: {
                branches: 0,
                functions: 0,
                lines: 0,
            },
        },
    },
});
