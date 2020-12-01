import PopockListPlugin from './modules/popock-list-plugin'
import PopockTypesPlugin from './modules/popock-types-plugin'

const defaultOptions = {
  cutoff: 50
};

export default {
  // called by Vue.use(FirstPlugin)
  // merge default options with arg options

  install(Vue, options) {
    Vue.VERSION = 'v0.0.1';

    let userOptions = {...defaultOptions, ...options};
    //  console.log(userOptions)

    Vue.use(PopockListPlugin, userOptions);
    Vue.use(PopockTypesPlugin, userOptions);

    Vue.mixin({
      // created() {
      //   console.log(Vue.VERSION);
      // },
      methods: {
        localname(uri){
          var ln = uri;
          if(uri!= undefined){
            if ( uri.lastIndexOf("#") != -1) { ln = uri.substr(uri.lastIndexOf("#")).substr(1)}
            else{ ln = uri.substr(uri.lastIndexOf("/")).substr(1) }
            ln = ln.length == 0 ? uri : ln
          }
          return ln
        },
      }
    })

  },


}
