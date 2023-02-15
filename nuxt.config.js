export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  target: "static",
  ssr: false,
  generate: {
    fallback: true
  },

  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: "Download free Tailwind, Bootstrap themes & templates | Aamir R.",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:image', property: 'og:image', content: "/icon.png" },
      {
        hid: "title",
        name: "title",
        content: "Download free Tailwind, Bootstrap themes & templates | Aamir R."
      },
      {
        hid: "description",
        name: "description",
        content:
          "Aamir R. presents Hght quality, free TailwindCSS, and Bootstrap themes, templates, and UI components to download. Get them now!"
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "tailwindui, tailwind css, tailwind ui kit, top bootstrap themes, 2021 tailwind templates to download, free download templates,  free templates, tailwind components, tailwind templates, react templates, angular templates, free components, vue templates, free bootstrap themes, 2021 bootstrap themes, 2021 bootstrap templates, 2021 tailwind themes, "
      }
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
    '~/plugins/disqus',
    { src: '@/plugins/vue-shortkey.js', mode: 'client' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/ngrok',
    'nuxt-ssr-cache',
    '@nuxtjs/moment',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', {
      id: 'UA-129128246-1'
    }]
  ],

  pwa: {
    icon: {
        iconSrc: "./static/icon.png"
    },
    meta: [
      {
        hid: "title",
        name: "title",
        content: "Download free Tailwind, Bootstrap themes & templates | Aamir R."
      },
    ],
    manifest: {
        short_name: "Aamir R.",
        name: "Aamir R.",
        lang: "en",
        start_url: "/",
        background_color: "#fcd34d",
        display: "standalone",
        scope: "/",
        theme_color: "#000000"
    },
  },

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

  render: {
    static: {
      maxAge: 60 * 60 * 24 * 365 * 1000,
    },
  },


  cache: {
    useHostPrefix: false,
    pages: [
      '/',
    ],
    store: {
      type: 'memory',
      max: 100,
      ttl: 60,
    },
  },



}
