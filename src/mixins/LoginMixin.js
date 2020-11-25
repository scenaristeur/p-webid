//import auth from 'solid-auth-client';
const auth = solid.auth
let popupUri = 'https://solidcommunity.net/common/popup.html';

export default {
  methods: {
    async popupLogin() {
      console.log("LOG")
      let session = await auth.currentSession();
      console.log('session', session)
    //  let popupUri = './dist-popup/popup.html';  //  let popupUri = 'https://solidcommunity.net/common/popup.html';
      if (!session){
        session = await auth.popupLogin({ popupUri });
      }
    },
    makeToast(title, content,variant = null) {
      this.$bvToast.toast(content , {
        title: title,
        variant: variant,
        solid: true
      })
    }
  }


}
