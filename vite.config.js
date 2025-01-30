import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
// console.log(path.resolve(__dirname, './src'));
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@bu': path.resolve(__dirname, './src/components'),
			'@l': path.resolve(__dirname, './src/components/layout'),
			'@m': path.resolve(__dirname, './src/components/movie'),
		},
	},
});
