const pkg = require('./package')


module.exports = {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: 'Nuxt Blog',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }, {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Prompt:200,400,500,700,900'
        }]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#2a3744'
    },

    /*
     ** Global CSS
     */
    css: [
        '@/assets/css/bootstrap.min.css',
        '@/assets/css/animate.css'
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios'
    ],
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {

        }
    },
    env: {
        apiKey: 'AIzaSyBQwvJDlgrS0vdSnwfcyuHZFmlxD8EZjh4'
    }
}
