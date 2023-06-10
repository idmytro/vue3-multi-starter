import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import unoCSS from '@unocss/vite';

export default defineConfig({
	plugins: [
		vue(),
		unoCSS({}),
	],
});
