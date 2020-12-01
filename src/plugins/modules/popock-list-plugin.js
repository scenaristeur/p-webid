const auth = solid.auth
const fc = new SolidFileClient(auth)
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
  import { vcard, dct, foaf, ldp, rdfs, rdf, space} from 'rdf-namespaces'

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
          async $add(item){
            console.log(item)
            console.log(this.CLASSES)
            return item
          },
          async $update(liste){
            console.log(liste.path)
            let folder = {}
            !await fc.itemExists(liste.path) ? fc.createFolder(liste.path) : ""
            liste.path != undefined ? folder = await fc.readFolder(liste.path) : ""
            return folder
          },
          async $createFile(data){
            console.log(data)
            data.label = data.label.trim()
            data.ttl_name = data.label.replace(/\s/g, '_')

            this.activity = {
              actor: {name: this.$store.state.profile.profile.webId},
              type: "Create",
              summary: "",
              object:{
                name: data.label,
                url: "",
                type: "Tension"}
              }

              try{
                let dataDoc = {}
                if (data.url == undefined){
                  data.url = data.path+data.ttl_name+".ttl"
                  dataDoc = await createDocument(data.url);
                  this.activity.type = "Create"
                }else{
                  dataDoc = await fetchDocument(data.url);
                  this.activity.type = "Update"
                }

                let subj =  dataDoc.addSubject({identifier:"this"})
                var dateObj = new Date();
                var date = dateObj.toISOString()
                if (data.created != undefined ){
                  data.modified = date
                  subj.addLiteral(dct.modified, date)
                  subj.removeAll(rdfs.label)
                  subj.removeAll(ldp.inbox)
                  subj.removeAll("https://holacratie.solidcommunity.net/public/holacratie#whatis",data.wi)
                  subj.removeAll("https://holacratie.solidcommunity.net/public/holacratie#whatshouldbe",data.wsb)
                  //  subj.addRef(foaf.maker, this.$store.state.solid.webId)
                  subj.removeAll(rdf.type)
                  subj.removeAll("http://www.w3.org/ns/org#memberOf")
                  subj.removeAll("http://www.w3.org/ns/org#purpose")
                }else{
                  data.created = date  //http://purl.org/dc/terms/created
                  subj.addLiteral(dct.created, date)
                }

                //      console.log(data)
                subj.addLiteral(rdfs.label, data.label)
                subj.addRef(ldp.inbox, "./"+data.ttl_name+"/inbox/")

                subj.addLiteral("https://holacratie.solidcommunity.net/public/holacratie#whatis",data.wi)
                subj.addLiteral("https://holacratie.solidcommunity.net/public/holacratie#whatshouldbe",data.wsb)
                subj.addRef(foaf.maker, this.$store.state.profile.profile.webId)
                data.types.forEach((t) => {
                  subj.addRef(rdf.type, t)
                });
                if (data.roles != undefined){
                  data.roles.split(",").forEach((r) => {
                    subj.addLiteral("http://www.w3.org/ns/org#memberOf", r.trim())
                  });
                  console.log("TODO: must look at existing groups & existing frineds groups & activity published groups")
                }
                if(data.domains != undefined){
                  data.domains.split(",").forEach((d) => {
                    subj.addLiteral("http://www.w3.org/ns/org#purpose", d.trim())
                  });
                  console.log("TODO: must look at https://www.wikidata.org/w/api.php?action=wbsearchentities&language=fr&format=json&search=Ecology")
                }

                await dataDoc.save();
                console.log("data saved",data.label )
                //  this.makeToast("Created "+data.label, "ok", "success")
              }
              catch(e){
                //  this.makeToast("Error creating "+data.label, e, "danger")
                console.log(e)
              }

              console.log(this.activity)
              //       if (data.privacy == "public"){
              //     //    console.log("ACTIVITY !!")
              //         this.activity.object.url = data.url
              //         //  this.activity.summary = [this.activity.actor.name, this.activity.type, "a", this.activity.object.type, "with name", this.activity.object.name].join(" ")
              //
              //         this.sendActivity()
              // console.log("todo",data.label )
              //       //  this.makeToast("TODO : must Activity publish", data.label, "success")
              //       }
              return data
            },
            async  getFolder(url){
              //console.log("get folder",url)
              let folder = await fc.readFolder(url)
              return folder
            },

            // async $updateGroupe(url){
            //   let g = {url: url}
            //   const dataset = await getSolidDataset(url);
            //   g.things = getThingAll(dataset, url);
            //   g.thing = g.things[0]
            //   g.name = getStringNoLocale(g.thing, VCARD.fn);
            //   g.types = getUrl(g.thing, RDF.type);
            //   g.purpose = getStringNoLocale(g.thing, 'http://www.w3.org/ns/org#purpose');
            //   g.subgroups = getUrlAll(g.thing, 'http://www.w3.org/ns/org#hasSubOrganization');
            //   g.members = getUrlAll(g.thing, VCARD.hasMember);
            //   g.inbox = getUrl(g.thing, 'http://www.w3.org/ns/ldp#inbox');
            //   g.parent = getUrl(g.thing, 'http://www.w3.org/ns/org#subOrganizationOf');
            //   g.created = getStringNoLocale(g.thing, DCTERMS.created);
            //   g.maker = getUrl(g.thing, FOAF.maker);
            //   return g
            // },
          }



        });


      },


    }
