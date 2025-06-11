/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		environment: 'happy-dom',
		setupFiles: ['./src/test/setup.ts'],
	},
} as const);
