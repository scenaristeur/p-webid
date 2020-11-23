const publicPath = process.env.NODE_ENV === 'production' ? '/p-webid/' : '/'

module.exports = {
  // options...
  publicPath: publicPath,
  // router en mode history
  //https://cli.vuejs.org/core-plugins/pwa.html#example-configuration
  //https://stackoverflow.com/questions/55590275/how-to-fix-that-url-query-params-are-not-working-via-the-web-share-target-api-in
  //https://github.com/nico-martin/todo-pwa
  //https://github.com/nico-martin/todo-pwa/blob/9ae64f77c622785e4be05bb1ce6ccfdbc96f43cc/vue/webpack.config.babel.js
  pwa: {
    name: 'p-webid',
    //  themeColor: '#4DBA87',
    //  msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    // manifestOptions: {
    //   share_target: {
    //     action: publicPath+'bookmarks',
    //     method: "GET",
    //     enctype: "application/x-www-form-urlencoded",
    //     params: {
    //       title: "title",
    //       text: "text",
    //       url: "url"
    //     }
    //   },
    // },


    // configure the workbox plugin
    /*  workboxPluginMode: 'InjectManifest',
    workboxOptions: {
    // swSrc is required in InjectManifest mode.
    swSrc: 'src/registerServiceWorker.js',
    // ...other Workbox options...
  }*/
},
// chainWebpack: config => {
//   //http://kazupon.github.io/vue-i18n/guide/sfc.html#webpack
//   config.module
//   .rule("i18n")
//   .resourceQuery(/blockType=i18n/)
//   .type('javascript/auto')
//   .use("i18n")
//   .loader("@kazupon/vue-i18n-loader")
//   .end();
// }
/* pages: {
loadShape: {
entry: 'src/components/LoadShape.vue',
template: 'client/public/index.html',
},
helloWorld: {
entry: 'src/components/HelloWorld.vue',
template: 'client/public/index.html',
},
SolidLogin: {
entry: 'src/components/solid/SolidLogin.vue',
template: 'client/public/index.html',
},
},*/
}
