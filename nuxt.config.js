export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  server: {
    host: '0.0.0.0'
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
    head () {
      if (this.$nuxtI18nHead){
        const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
        return {
          title: 'Pendiuk',
          htmlAttrs: {
            ...i18nHead.htmlAttrs
          },
          meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Web Developer' },
            { name: 'format-detection', content: 'telephone=no' },
            ...i18nHead.meta
          ],
          link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ...i18nHead.link
          ]
        }
      }else{
        return{
          title: 'Pendiuk',
          htmlAttrs: {
            lang: 'en',
          },
          meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Web Developer' },
            { name: 'format-detection', content: 'telephone=no' },
          ],
          link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        }
      }
    },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/firebase.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-highlightjs',{
      style:'tokyo-night-dark'
    }],
    '@nuxtjs/i18n',
    'bootstrap-vue/nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  //translations options
  i18n: {
    baseUrl: 'https://pendiuk.com',
    locales: [
      {code:'pt', iso:'pt-BR', dir:'ltr', name:'Português'},
      {code: 'en', iso:'en-US', dir:'ltr', name: 'English'},
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    vueI18nLoader: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'pendiuk_lang_redirected',
      redirectOn: 'root',  // recommended
      alwaysRedirect: true,
    },
  },

  fontawesome:{
    icons:{
      solid:true,
      brands:true
    }
  },

  image:{
    screens: {
      xxxs: 380,
      xxs: 500,
      xs: 560,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/pendiuk-com/image/upload/v1663089589/MyWebsite/'
    }
  },
}
