// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: false },
	css: ['~/assets/css/global.css'],
	modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxt/fonts'],
	alias: {
		pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
	},
})
