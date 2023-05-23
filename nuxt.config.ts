import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/styl/global.styl"],
  alias: {
    '@@': resolve(__dirname, './')
  },

  modules: [
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      {
        code: 'ru',
        file: 'ru-RU.js',
        iso: 'ru-RU',
        name: 'Russian'
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ru',
    vueI18n: './i18n.config.js' 
  },

  vite: {
    css: {
      preprocessorOptions: {
        stylus: { 
          additionalData: `@import "${resolve(__dirname, './')}/assets/styl/_options.styl";`
        }
      }
    },
    build: {
      target: 'esnext'
    },
    server: {
      watch: {
        usePolling: true
      }
    }
  }
})
