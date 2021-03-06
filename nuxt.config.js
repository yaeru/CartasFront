export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/demo/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cards of Mythology',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'og:title',
      name: 'og:title',
      content: 'Cartas CMS',
    },
    {
      hid: 'description',
      name: 'description',
      content: 'Juego de cartas online sobre Mitología.',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: 'Juego de cartas online sobre Mitología.',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://entangle.fi/img/share.jpg',
    },
    { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  router: {
    linkActiveClass: 'uk-active'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  '@assets/css/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  { src: '~/plugins/uikit.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  '@nuxtjs/strapi'
  ],
  strapi: {
    // Options
    url: process.env.STRAPI_URL || 'http://localhost:1337/api',
    entities: ['cards','decks'],
    //prefix: '/api',
    version: 'v4'
  },
  env: {
    STRAPI_URL: `http://localhost:1337/api`,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  '@nuxtjs/apollo',
  '@nuxtjs/markdownit',
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql',
        baseUrl: 'http://localhost:1337',
      }
    }
  },

  middleware: ['auth'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
