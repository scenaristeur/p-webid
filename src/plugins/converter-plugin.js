//https://learnvue.co/2020/01/how-to-make-your-first-vuejs-plugin/
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

    // create a mixin
    Vue.mixin({
      // created() {
      //   console.log(Vue.VERSION);
      // },


    });
    Vue.prototype.$italicHTML = function (text) {
      return '<i>' + text + '</i>';
    }
    Vue.prototype.$boldHTML = function (text) {
      return '<b>' + text + '</b>';
    }

    // define a global filter
    Vue.filter('preview', (value) => {
      if (!value) {
        return '';
      }
      return value.substring(0, userOptions.cutoff) + '...';
    })

    Vue.filter('localname', (value) => {
      if (!value) {
        return '';
      }
      var ln = value;
      if(value!= undefined){
        if ( value.lastIndexOf("#") != -1) { ln = value.substr(value.lastIndexOf("#")).substr(1)}
        else{ ln = value.substr(value.lastIndexOf("/")).substr(1) }
        ln = ln.length == 0 ? value : ln
      }
      return ln
    })

    // add a custom directive
    Vue.directive('focus', {
      // When the bound element is inserted into the DOM...
      inserted: function (el) {
        // Focus the element
        el.focus();
      }
    })

  },


}
