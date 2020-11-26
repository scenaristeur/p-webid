const auth = window.solid.auth
const fc   = new SolidFileClient(auth)

// DEFINE A URI THAT CONTAINS A POPUP LOGIN SCREEN
//
const popUri = 'https://solidcommunity.net/common/popup.html'
let pod = 'https://spoggy-test.solidcommunity.net/'
let session = {}




describe("solid", async function () {
  it("login", async function(){
    // await driver.get('https://spoggy.solidcommunity.net/profile/card#me');
    // await driver.sleep(2000)
    // let title = await driver.getTitle()
    // console.log(title)
    session = await auth.currentSession()
    if (!session) { session = await auth.popupLogin({ popupUri:popUri }) }
    console.log(`Logged in as ${session.webId}.`)
    session.should.not.equal(null)
  })
  it("spoggy", async function(){
    let folder = await fc.readFolder( pod )
    await testFolder(folder)
  })

})



async function testFolder(folder){
  // folder.files.forEach(function(file) {
  //   describe('FILE : '+file.name, async function() {
  //     it(file.url,async  function() {
  //       //console.log(arrElement)
  //       let content = await fc.readFile( file.url )
  //       //  console.log(content)
  //       content.length.should.not.equal(0)
  //       //  await testFolder(f)
  //     });
  //   });
  // });
  if (folder.folders != undefined){
    folder.folders.forEach(function(arrElement) {
      describe('FOLDER : '+arrElement.name, async function() {
        it(arrElement.url,async  function() {
          //console.log(arrElement)
          // let content = await fc.readFile(arrElement.url)
          // console.log(content)
          let f = await fc.readFolder( arrElement.url )
          console.log(f)
          //  await testFolder(f)
        });
      });
    });
  }
}
