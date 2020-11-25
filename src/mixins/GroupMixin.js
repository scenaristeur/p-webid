import { fetchDocument } from 'tripledoc';
import { vcard } from 'rdf-namespaces'
import AffichageMixin from '@/mixins/AffichageMixin.js'
import  {saveFileInContainer, getSourceUrl } from "@inrupt/solid-client";


export default {
  mixins: [AffichageMixin],
  methods: {
    async getGroup(url) {
      let group = {members: [], subgroups: []}
      const groupDoc = await fetchDocument(url);
      let index = groupDoc.findSubject()
      group.name = index.getLiteral(vcard.fn)
      group.members = index.getAllRefs(vcard.hasMember)
      group.purpose = index.getLiteral('http://www.w3.org/ns/org#purpose')
      group.parent = index.getRef("http://www.w3.org/ns/org#subOrganizationOf")
      group.subgroups =  index.getAllRefs("http://www.w3.org/ns/org#hasSubOrganization")

      let chat_index = groupDoc.findSubject("http://www.w3.org/ns/solid/terms#forClass", "http://www.w3.org/ns/pim/meeting#LongChat")
      if (chat_index != null){
        group.chat_instance = chat_index.getRef("http://www.w3.org/ns/solid/terms#instance")
        console.log("chat instance",group.chat_instance)
      }

      return group
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
