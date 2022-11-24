export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss'],
	build: { transpile: ['yup', 'lodash', '@vee-validate/rules'] },
})
