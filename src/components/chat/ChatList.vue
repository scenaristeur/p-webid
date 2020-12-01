<template>
  <div class="chat-list">
    <div class="container" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="300">
      <div v-if="data.length == 0">Please Wait, I'm loading data ;-)</div>
      <!-- <h3 v-else><a v-bind:href="channel.instance" target="_blank">{{channel.label}}</a></h3> -->
      <b-list-group flush>
        <b-list-group-item v-for="m in data" :key="m.id">
          <div class="item">

            <div class="avatar"></div>
            <div class="created">

  {{m.created}}
            </div>

            <div class="maker text-info">
              <!--              {{m.maker.split('/').slice(2,3)[0]}}-->
              <UserName :webId="m.maker" />
            </div>
            <div class="content">
              {{m.content}}
            </div>

          </div>
        </b-list-group-item>

      </b-list-group>
    </div>

    <b-alert
    v-model="busy"
    class="position-fixed fixed-bottom rounded-0"
    style="z-index: 2000; bottom:30px"
    variant="info"

    dismissible
    >{{title}}
  </b-alert>

  <SolidChatSend :url="url"/>
</div>
</template>

<script>
// @ is an alias to /src
import infiniteScroll from 'vue-infinite-scroll'
import { fetchDocument } from 'tripledoc';
import { sioc, dct, foaf } from 'rdf-namespaces'
import GroupMixin from '@/mixins/GroupMixin.js'
const auth = solid.auth
const fc = new SolidFileClient(auth)


//var count = 0;

export default {
  name: 'SolidChatList',
  directives: {infiniteScroll},
  mixins: [GroupMixin],
  props: ['url'],
  components: {
    'SolidChatSend' :  () => import ( '@/components/chat/SolidChatSend' ),
    'UserName': () => import('@/components/basic/UserName'),
    //  'Date': () => import('@/components/basic/Date')
  },
  data: function () {
    return {
      data: [],
      busy: true,
      title:"Select a channel",
      index_cat: `@prefix : <#>.
      @prefix XML: <http://www.w3.org/2001/XMLSchema#>.
      @prefix c: </profile/card#>.
      @prefix mee: <http://www.w3.org/ns/pim/meeting#>.
      @prefix n1: <http://purl.org/dc/elements/1.1/>.
      @prefix ui: <http://www.w3.org/ns/ui#>.
      @prefix ic: <http://www.w3.org/2002/12/cal/ical#>.
      @prefix flow: <http://www.w3.org/2005/01/wf/flow#>.

      :id1606695592333
      ic:dtstart "2020-11-30T00:19:52Z"^^XML:dateTime;
      flow:participant c:me;
      ui:backgroundColor "#eac1e3".
      :this
      a mee:LongChat;
      n1:author c:me;
      n1:created "2020-11-30T00:19:48Z"^^XML:dateTime;
      n1:title "Chat channel";
      flow:participation :id1606695592333;
      ui:sharedPreferences :SharedPreferences.`
    }
  },
  created() {
    this.update()
    // this.channel = this.$store.state.chat.channel
    // console.log("###############INSTANCE",this.channel)  //  this.webId = this.$store.state.solid.webId
    // this.channelChanged(this.channel)

  },
  methods:{
    async update(){
    //  console.log(this.url)
      let storage = await this.$getStorage(this.url)
      this.storage = `${storage}`+'chat/'
      let index = this.storage+'index.ttl'
      if( !(await fc.itemExists(index)) ) {
        await fc.createFile(index, this.index_cat, "text/turtle") // only create if it doesn't already exist
      }
      // ? await fc.createFolder(this.storage) : ""
    //  console.log(this.storage)
      // this.folder = await fc.readFolder(this.storage)
      // console.log(this.folder)
      this.data = []
      this.limite =  new Date("2020-11-27")
      this.initChat(this.storage)

    },
    async channelChanged(channel){
      //console.log(channel)
      //  this.url = channel.instance
      let d  = channel.created
      //console.log(d)
      this.limite =  new Date(d)
      //console.log("LIMITE",this.limite)
      this.date = new Date()
      this.url = this.channel.substr(0, this.channel.lastIndexOf("/") + 1);
      console.log("url",this.url)
      this.data = []
      /*  await this.readPublicAccess(this.url)
      let pattern = { read: true, append: true, write: false, control: false }
      await this.setPublicAccess(this.url, pattern)*/
      await   this.initChat(this.url)
    },
    loadMore: async function() {
      this.busy = true;

      if (this.limite <= this.date ){
        //  //console.log(this.limite)
        //  let date =  this.date
        //  //console.log(this.date)
        let path = [this.root, this.date.getFullYear(), ("0" + (this.date.getMonth() + 1)).slice(-2), ("0" + this.date.getDate()).slice(-2), "chat.ttl"].join("/")
        //  //console.log(path)

        //  let messages = this.read(path)
        //this.data = this.data.concat(messages);
        this.date.setDate(this.date.getDate() -1)
        //  this.showTop = true
        this.title = "loading "+this.date.toLocaleDateString()
        //  this.updateMessages(path, "bottom")
        await this.loadMessages(path, "bottom")
        //  this.data.push({ name: count++ , date:date});
        //this.showTop = false

      }else{
        //console.log("STOP")
        this.data.push({id:Math.random(), maker:"https://System.solid-vue-panes", content: "This is the end, my friend, there are no message before that date", created: this.limite.toLocaleString()})
        //alert ("No message before "+this.limite)
        this.makeToast("No message before", this.limite.toLocaleString(), 'warning')
      }

    },
    async loadMessages(path, sens){
      //console.log("load",path)

      try{

        const chatDoc = await fetchDocument(path);
        let  subjects = chatDoc.findSubjects();
        subjects = subjects.filter( this.onlyUnique )
        //  //console.log(subjects)
        //let triples = []
        let messages = []
        var existingIds = this.data.map((obj) => obj.id);
        //    //console.log(existingIds)
        for  (let s of subjects) {
          //    //console.log("Compare",s.asRef(), this.root+"/index.ttl#this")
          if (s.asRef() != this.root+"/index.ttl#this" && ! existingIds.includes(s.asRef())){
            //  //console.log(s)
            //  let t = s.getTriples()
            let created = s.getString(dct.created)
            let content = s.getLiteral(sioc.content)
            let maker = s.getNodeRef(foaf.maker) || "anonymous"

            let t={id:s.asRef(),
              created: new Date(created).toLocaleString(),
              content: content,
              maker: maker,
              //  pic: `${p}`
              //  parts: parts,
              //  parent: parent
            }

            //  //console.log(t)
            //  triples.push(t)
            messages.unshift(t)

          }


        }
        //console.log("m",messages)
        if (sens == "top"){
          this.today_messages = []
          this.today_messages = messages
          //console.log("TODAY",this.today_messages)
        }else{
          this.old_messages.push.apply(this.old_messages, messages)
          //console.log("OLD",this.old_messages)
        }
        ////console.log("TODAY",this.today_messages)
        ////console.log("OLD",this.old_messages)
        this.data = []
        this.data = this.today_messages.concat(this.old_messages)

        ////console.log("TODAY",this.today_messages)
        ////console.log("OLD",this.old_messages)
        ////console.log("DATA",this.data)
        ////console.log("USERS",this.$store.state.chat.users)
        /*if (this.data.length == 0){
        this.loadMore()
      }*/
      //  //console.log(triples)
      //  messages = triples.reverse()
    }catch(e){
      //   //console.log(e)
      //  this.showTop = true
      //  ! this.stopped ? this.loadMore() : ""
    }
    /*  setTimeout(() => {
    for (var i = 0, j = 10; i < j; i++) {
    this.data.push({ name: count++ });
    //console.log(this.data)
  }
  this.busy = false;
  //console.log(this.busy)
}, 1000);*/
this.busy = false
//console.log("loaded")
},
loadMore1: async function() {
  this.busy = true;
  //console.log(this.busy, this.limite, this.date)
  if (this.limite <= this.date ){

    //console.log("yes")
    let path = [this.root, this.date.getFullYear(), ("0" + (this.date.getMonth() + 1)).slice(-2), ("0" + this.date.getDate()).slice(-2), "chat.ttl"].join("/")
    //  //console.log(path)

    //  let messages = this.read(path)
    //this.data = this.data.concat(messages);
    this.date.setDate(this.date.getDate() -1)
    this.title = "loading "+this.date.toLocaleDateString()
    await  this.updateMessages(path, "bottom")
    this.busy = false
  }
  else{
    //console.log("no")

  }

},
initChat(url){
  //console.log("init : ",url)
  this.today_messages = []
  this.old_messages = []
  this.messages = []
  this.data = []
  this.stopped = false

  this.date  = new Date()
  //console.log(this.date)

  this.root = url
  this.root.endsWith('/') ? this.root = this.root.slice(0, -1) : ""

  this.fileUrl =  [this.root, this.date.getFullYear(), ("0" + (this.date.getMonth() + 1)).slice(-2), ("0" + this.date.getDate()).slice(-2), "chat.ttl"].join("/")

  //console.log(this.fileUrl)
   this.$store.commit('chat/setFileUrl', this.fileUrl)
   this.$store.commit('chat/setRoot', this.root)
  let withoutProtocol = this.root.split('//')[1]
  let sock = withoutProtocol.split('/')[0]+"/"
  let socket = new WebSocket('wss://'+sock, ['solid.0.1.0']);
  socket.onopen = function() {
    socket.send('sub '+this.fileUrl);
  }.bind(this)
  socket.onmessage = function(msg) {
    if (msg.data && msg.data.slice(0, 3) === 'pub') {
      // resource updated, refetch resource
      this.updateMessages(msg.data.substring(4), "top")
    }
  }.bind(this)
  //  this.updateMessages(this.fileUrl, "botto")
  this.loadMore()
},
async updateMessages(url, sens){
  //    console.log(url, sens)
  //  this.showTop = true
  try{

    const chatDoc = await fetchDocument(url);
    let  subjects = chatDoc.findSubjects();
    subjects = subjects.filter( this.onlyUnique )
    //  console.log(subjects)
    //let triples = []
    let messages = []
    var existingIds = this.data.map((obj) => obj.id);
    //    console.log(existingIds)
    for  (let s of subjects) {
      //    console.log("Compare",s.asRef(), this.root+"/index.ttl#this")
      if (s.asRef() != this.root+"/index.ttl#this" && ! existingIds.includes(s.asRef())){
        //  console.log(s)
        //  let t = s.getTriples()
        let created = s.getString(dct.created)
        let content = s.getLiteral(sioc.content)
        let maker = s.getNodeRef(foaf.maker) || "anonymous"

        let t={id:s.asRef(),
          created: new Date(created).toLocaleString(),
          content: content,
          maker: maker,
          //  pic: `${p}`
          //  parts: parts,
          //  parent: parent
        }

        //  console.log(t)
        //  triples.push(t)
        messages.unshift(t)
        console.log(messages)

      }


    }
    //  console.log("m",messages)
    if (sens == "top"){
      this.today_messages = []
      this.today_messages = messages
      //  console.log("TODAY",this.today_messages)
    }else{
      this.old_messages.push.apply(this.old_messages, messages)
      //  console.log("OLD",this.old_messages)
    }
    //console.log("TODAY",this.today_messages)
    //console.log("OLD",this.old_messages)
    this.data = []
    this.data = this.today_messages.concat(this.old_messages)
    this.busy = false
    //console.log("TODAY",this.today_messages)
    //console.log("OLD",this.old_messages)
    console.log("DATA",this.data, this.busy)
    //console.log("USERS",this.$store.state.chat.users)
    //  if (this.data.length <= 10){
    //  this.loadMore()
    //this.busy = false
    //  }
    //  console.log(triples)
    //  messages = triples.reverse()
  }catch(e){
    //  console.log(e)
    //  this.showTop = true
    //  ! this.stopped ? this.loadMore() : ""
  }
  //  this.showTop = false
},
makeToast(title, content, variant = null) {
  this.$bvToast.toast(content , {
    title: title,
    variant: variant,
    solid: true
  })
},
onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
},
},
watch: {
  /*  '$route' (to) {
  console.log(to)

  this.instance = this.$route.query.instance
  this.created = this.$route.query.created
  this.label = this.$route.query.label
  console.log(this.instance, this.created, this.label)
},*/
// channel: async function(channel){
//   this.channelChanged(channel)
// }
},
computed:{
  // channel: {
  //   get: function() { return this.$store.state.chat.channel},
  //   set: function() {}
  // },
}
}
</script>
<style>
.Asolid-chat-list{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-width: 320px;
  background: #fff;
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  font-size: 14px;
  line-height: 1.4285em;
  color: rgba(0,0,0,.87);
}
.Bitem{
  position: absolute;
  /*  left: 0px;
  top: 0px; */
  margin-left: 0px;
  margin-top: 0px;
  /*  width: 722px; */
  /*  height: 574px; */
  background-color: rgb(255, 255, 255);
}
.avatar{
  position: absolute;
  left: 0px;
  top: 8px;
  width: 29px;
  height: 29px;
  background-image: url(../../assets/no-avatar.png);
  background-size: contain;
  opacity: .3;
}
.maker{
  position: absolute;
  left: 35px;
  top: 4px;
  width: auto;
  height: auto;
  text-align: left;
}
.content{
  position: relative;
  padding-left: 36px;
  padding-top: 23px;
  padding-bottom: 5px;
  width: 90%;
  height: auto;
  text-align: left;
}
.created{
  color: #C5C5C5;
  font-size: 13px;
  font-weight: normal;
}
</style>
