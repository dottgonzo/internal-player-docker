module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Internal Player',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Streaming Sala del Consiglio Comunale di Sassari' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: '/css/bootstrap.min.css', rel: 'stylesheet' },
      { href: '/css/style.css', rel: 'stylesheet' }
    ],
    script: [
      { src: 'bower/jquery/dist/jquery.min.js' },
      { src: 'bower/streampagelib/dist/streampagelib.js' }
    ],
    bodyAttrs: {
      style: 'background-color:white;'
    }

  },
  mode: 'spa',
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
