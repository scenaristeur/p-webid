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
