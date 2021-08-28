export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Learn With Aamir',
    htmlAttrs: {
      lang: 'en'
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

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  plugins: [
    '~/plugins/githubApi',
    '~/plugins/queries',
    '~/plugins/disqus'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/ngrok',
    ['@nuxtjs/google-analytics', {
      id: 'UA-129128246-1'
    }]
  ],

  router: {
    middleware: 'visit'
  },

  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/sitemap'
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://manage.amirr.net/graphql"
      }
    }
  },

  build: {
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://amirr.net',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    routes: [
      '/',
      '/themes',
      '/templates',
      '/clones',
      '/ui-components',
      '/podcasts',
      '/blogs',
      '/support'
    ].map(route => ({
      url: route,
      changefreq: 'monthly',
      priority: 1,
      lastmodISO: new Date().toISOString().split('T')[0]
    }))
  },
}
