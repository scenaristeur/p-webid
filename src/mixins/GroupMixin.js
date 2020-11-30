import { fetchDocument } from 'tripledoc';
import { vcard } from 'rdf-namespaces'
import AffichageMixin from '@/mixins/AffichageMixin.js'
import  {saveFileInContainer, getSourceUrl } from "@inrupt/solid-client";
import { namedNode } from '@rdfjs/data-model'
const auth = solid.auth
const fc = new SolidFileClient(auth)


export default {
  mixins: [AffichageMixin],
  methods: {
    // async getGroup(url) {
    //   let group = {members: [], subgroups: []}
    //   const groupDoc = await fetchDocument(url);
    //   let index = groupDoc.findSubject()
    //   group.name = index.getLiteral(vcard.fn)
    //   group.members = index.getAllRefs(vcard.hasMember)
    //   group.purpose = index.getLiteral('http://www.w3.org/ns/org#purpose')
    //   group.parent = index.getRef("http://www.w3.org/ns/org#subOrganizationOf")
    //   group.subgroups =  index.getAllRefs("http://www.w3.org/ns/org#hasSubOrganization")
    //
    //   let chat_index = groupDoc.findSubject("http://www.w3.org/ns/solid/terms#forClass", "http://www.w3.org/ns/pim/meeting#LongChat")
    //   if (chat_index != null){
    //     group.chat_instance = chat_index.getRef("http://www.w3.org/ns/solid/terms#instance")
    //     console.log("chat instance",group.chat_instance)
    //   }
    //
    //   return group
    // },
    async getStorage(url){
      let res = this.url.endsWith('#this') ? this.url : this.url+'#this'
      let storage = await solid.data[res].storage
      console.log(storage)
      if (storage == undefined){
        var path = this.url.substring(0,this.url.lastIndexOf("/"))
        let name = await solid.data[res].vcard$fn

        let ttl_name = `${name}`.trim().replace(/\s/g, '_')
        console.log(`${name}`, this.url, ttl_name)
        storage = [path, ttl_name, ""].join('/')
        console.log(storage)
        await !fc.itemExists(this.storage) ? await fc.createFolder(this.storage) : ""
        await solid.data[res]['http://www.w3.org/ns/pim/space#storage'].set(namedNode(storage))
      }
      return storage
    },
    async join(){
      console.log("join to create inbox folder with authenticated agent as submitter")
      let offer = `@prefix :      <#> .
      @prefix as:    <https://www.w3.org/ns/activitystreams#> .

      :it
      a as:Offer ;
      as:actor <${this.webId}> ;
      as:object :join ;
      as:summary "${this.webId} asks to join the group" ;
      as:target <${this.invitation}> .

      :join
      a as:Join ;
      as:actor <${this.webId}> ;
      as:object <${this.invitation}> ;
      as:summary "${this.webId} joins group" .
      `
      try{
        let sentFile = await saveFileInContainer(
          this.inbox,
          new Blob([offer], { type: "text/turtle" }),
          //    { slug: "new-file.ttl" }
        );
        this.makeToast("Join request sent", "A request has been sent to group Inbox", "success")
      }catch(e){
        //console.log(e)
        this.makeToast("Join request", "Can not send a request to the Group Inbox"+e, "danger")
      }
    },
    accept(){
      console.log("todo accept")
      this.makeToast("Todo", "not implemented yet")
    },
    invite(){
      console.log("todo invite")
      this.makeToast("Todo", "not implemented yet")
    },
    reject(){
      console.log("todo reject")
      this.makeToast("Todo", "not implemented yet")
    }
  }


}
