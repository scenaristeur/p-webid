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
      let  pubPod= "https://agora.solidcommunity.net/public/popock/inbox/" // REVOIR ACTIVITY MIXIN !!!

      // create a mixin
      Vue.mixin({
        // created() {
        //   console.log(Vue.VERSION);
        // },
        methods: {
          async $sendActivity(){
            console.log(this.activity)
            console.log(this.activity.actor.name, this.activity.type, this.activity.summary, this.date)

            var dateObj = new Date();
            let d = this.formatDate(dateObj)
            let fileUrl = this.pubPod+d+".ttl"
            var messageId = "Activity_"+dateObj.getTime()
            var date = dateObj.toISOString()
            let activityDoc = {}
            console.log(fileUrl)
            try{
              activityDoc = await fetchDocument(fileUrl);
            }catch(e){
              activityDoc = await createDocument(fileUrl);
            }

            console.log("webId",this.webId)
            let subj =   activityDoc.addSubject({identifier:messageId})
            //subj.addLiteral(sioc.content, this.activity)
            subj.addLiteral(rdfs.label, this.activity.object.name)
            subj.addLiteral(dct.created, date)
            subj.addRef(foaf.maker, this.activity.actor.name)
            subj.addRef('https://www.w3.org/ns/activitystreams#actor', this.activity.actor.name)
            subj.addRef(rdf.type, 'https://www.w3.org/ns/activitystreams#'+this.activity.type)
            subj.addLiteral('https://www.w3.org/ns/activitystreams#summary', this.activity.summary)
            subj.addRef('https://www.w3.org/ns/activitystreams#object', this.activity.object.url)
            subj.addRef(rdf.type, this.currentWorkspace.path+this.activity.object.type)
            await activityDoc.save();
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
