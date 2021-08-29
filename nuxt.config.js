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
    middleware: ['visit']
  },

  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBshurXjeGkW7V8BgcPzOmGkeoXiDQ0wgo",
          authDomain: "amirr-769cd.firebaseapp.com",
          projectId: "amirr-769cd",
          storageBucket: "amirr-769cd.appspot.com",
          messagingSenderId: "512265156590",
          appId: "1:512265156590:web:939ece67dd580b593cc0ff",
          measurementId: "G-3KE3PZ3KXT",
        },
        services: {
          auth: {
            persistence: 'local',
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
            },
          }
        }
      }
    ]
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
