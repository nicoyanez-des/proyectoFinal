import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - proyecto-final',
    title: 'proyecto-final',
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase'
  ],

  firebase: {
    config: {
      apiKey: "AIzaSyCpqFK99ta5AVvmEURTEXgiivaGXJliVis",
      authDomain: "proyectofinal-18a51.firebaseapp.com",
      databaseURL: "https://proyectofinal-18a51-default-rtdb.firebaseio.com",
      projectId: "proyectofinal-18a51",
      storageBucket: "proyectofinal-18a51.appspot.com",
      messagingSenderId: "631534249954",
      appId: "1:631534249954:web:a3ec1db569f244ed3d3bbb",
      measurementId: "G-2CPXK301LE"
    },
    services : {
      // in is recommended to configure either a mutation or action but you can set both
      initialize:{
        //onAuthStateChangeMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
        //onAuthStateChangedAction: 'onAuthStatedChangedAction'
      }
    }
     

  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://proyectofinal-18a51-default-rtdb.firebaseio.com/'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    optionsPath: './vuetify.options.js'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
