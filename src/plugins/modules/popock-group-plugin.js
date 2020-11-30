//https://learnvue.co/2020/01/how-to-make-your-first-vuejs-plugin/
import { getSolidDataset,
  //saveSolidDatasetAt,
  getThingAll,
  getThing,
  getStringNoLocale,
  getUrlAll,
  getUrl } from "@inrupt/solid-client";

  import { FOAF, VCARD, DCTERMS, RDF } from "@inrupt/vocab-common-rdf";
  import { createDocument, fetchDocument } from 'tripledoc';
  import { vcard, dct, foaf, ldp, rdfs, rdf} from 'rdf-namespaces' //
  //const { namedNode } = require('@rdfjs/data-model');
  //  import GroupMixin from '@/mixins/GroupMixin.js'

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
          async $groupCreate(group){
            //  this.name = this.name.trim()
            let ttl_name = group.name.replace(/\s/g, '_')
            group.path = !group.path.endsWith('/') ? group.path+'/' : group.path
            console.log(group.name, group.path)
            var dateObj = new Date();
            var date = dateObj.toISOString()
            group.url = group.path+ttl_name+".ttl"
            console.log(group.url)
            // https://www.w3.org/TR/vocab-org/#org:purpose
            //http://ipocore.sourceforge.net/1.2.0/ipo-1.2.0.html#Task
            let groupDoc = await createDocument(group.url);
            let subj =  groupDoc.addSubject({identifier:"this"})
            subj.addLiteral(vcard.fn, group.name)
            subj.addRef(ldp.inbox, "./"+ttl_name+"/inbox/")
            subj.addLiteral(dct.created, date)
            subj.addRef(foaf.maker, group.maker)
            subj.addRef(vcard.hasMember, group.maker)
            subj.addRef(vcard.hasMember, "https://spoggy-test4.solidcommunity.net/profile/card#me")
            subj.addRef(vcard.hasMember, "https://spoggy-test5.solidcommunity.net/profile/card#me")
            subj.addRef(vcard.hasMember, "https://spoggy.solidcommunity.net/profile/card#me")
            //  subj.addRef(rdf.type, this.currentWorkspace.path+'Group')
            subj.addRef(rdf.type, vcard.Group) ////////////////////////////////////////////
            subj.addLiteral('http://www.w3.org/ns/org#purpose', group.purpose)
            subj.addRef("http://www.w3.org/ns/org#subOrganizationOf", group.super)
            // if (this.tension != undefined &&  this.tension.length > 0){
            //   subj.addRef('https://www.w3.org/ns/activitystreams#object', this.tension+"#this")
            //   subj.addRef(foaf.topic_interest, this.tension)
            //   // add the group to the tension
            //   let tensionDoc = await fetchDocument(this.tension);
            //   let tensionSubj = tensionDoc.getSubject(this.tension+"#this")
            //   tensionSubj.addRef("https://www.w3.org/ns/activitystreams#actor", this.path+"#this")
            //   await tensionDoc.save();
            //
            // }

            /*  let indexSubj = chatDoc.addSubject({identifier: index, identifierPrefix: ind_prefix})
            indexSubj.addNodeRef('http://www.w3.org/2005/01/wf/flow#message',subj.asNodeRef())*/

            await groupDoc.save();
            //  this.$emit('created')



            let activity=  {
              "@context": [
                "https://www.w3.org/ns/activitystreams",
                {
                  "org": "http://www.w3.org/ns/org#",
                  "purpose": {
                    "@id": "org:purpose",
                    "@type": "@id"
                  },
                  "subOrganizationOf": {
                    "@id": "org:subOrganizationOf",
                    "@type": "@id"
                  }
                }
              ],
              "summary": "will Be auto-generated",
              "type": "Create",
              "actor": {
                "type": "webId",
                "name": group.webId
              },
              "object": {
                "type": "Group", // ["Group", "hc:Circle"],
                "name": group.name,
                "purpose": group.purpose,
                "url": group.url+"#this",
                "subOrganizationOf": group.super
              }
            }

            activity.summary  = [activity.actor.name,
              activity.type,
              "a",
              activity.object.type,
              "with name", activity.object.name].join(" ")

              console.log("ACTIVITY TO SEND",activity)
              //      this.sendActivity()


              // does not work from mixin ??


              /*@prefix vcard: <http://www.w3.org/2006/vcard/ns#>.
              @prefix ldp: <http://www.w3.org/ns/ldp#>.

              <#this> a vcard:Group;
              vcard:fn "Solid Friends";
              ldp:inbox <./friend-requests-inbox/>;
              vcard:hasMember <https://friend1.inrupt.net/profile/card#me>;
              vcard:hasMember <https://friend2.inrupt.net/profile/card#me>.*/

            },
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
