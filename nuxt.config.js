export default {
  head: {
    title: 'sms-history',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    'normalize.css/normalize.css',
    'reset-css/reset.css',
    { src: '@/assets/styles/_index.scss', lang: 'scss' }
  ],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg'
  ],
  styleResources: {
    scss: ['./assets/styles/variables/*.scss', './assets/styles/mixins/*.scss']
  },

  modules: [
    '@nuxtjs/composition-api/module'
  ],

  build: {}
}
