//https://learnvue.co/2020/01/how-to-make-your-first-vuejs-plugin/
import { getSolidDataset,
  //saveSolidDatasetAt,
  getThingAll,
  getThing,
  getStringNoLocale,
  getUrlAll,
  getUrl } from "@inrupt/solid-client";

  import { FOAF, VCARD, DCTERMS, RDF } from "@inrupt/vocab-common-rdf";

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
        methods: {
          async $updateGroupe(url){
            let g = {url: url}
            const dataset = await getSolidDataset(url);
            g.things = getThingAll(dataset, url);
            g.thing = g.things[0]
            g.name = getStringNoLocale(g.thing, VCARD.fn);
            g.types = getUrl(g.thing, RDF.type);
            g.purpose = getStringNoLocale(g.thing, 'http://www.w3.org/ns/org#purpose');
            g.subgroups = getUrlAll(g.thing, 'http://www.w3.org/ns/org#hasSubOrganization');
            g.members = getUrlAll(g.thing, VCARD.hasMember);
            g.inbox = getUrl(g.thing, 'http://www.w3.org/ns/ldp#inbox');
            g.parent = getUrl(g.thing, 'http://www.w3.org/ns/org#subOrganizationOf');
            g.created = getStringNoLocale(g.thing, DCTERMS.created);
            g.maker = getUrl(g.thing, FOAF.maker);
            return g
          },
        }



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
