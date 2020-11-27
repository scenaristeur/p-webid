


class Pod {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }

  async load(pod){
    let folder = await fc.readFolder( pod )
    //await testFolder(folder)
    console.log(folder)
    return folder
  }

}
