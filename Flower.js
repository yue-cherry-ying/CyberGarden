/*
  This js document is used to create flowers.
  The loadFlower function loads a flower model to the scene.
  Instead of loading the flower models over and over again, I stored the
flower models in an array. Every single time, when I am calling a flower, I
clone the flower, then place the flower in a random location of the website.
  X: the width of the range where flower is placed
  Y: the offset for where flower is placed (this represents the grass ground
  level)
  Z: the depth of the range where flower is placed
*/

class Flower{
  constructor(models){
    this.flowers = []
    for (let i = 0; i < models.length; i++) {
      this.loadFlower(models[i].path, models[i].name, models[i].scale)
    }
  }
  loadFlower(path, model, scale){
    let loader = new THREE.GLTFLoader().setPath( path )
    loader.load( model,  ( gltf ) => {
    	gltf.scene.traverse(  ( child ) => {
    		if (child.isMesh) {
    			//child.material = new THREE.MeshNormalMaterial()
    		}
    	} )
    	gltf.scene.scale.x = scale
      gltf.scene.scale.y = scale
      gltf.scene.scale.z = scale
    	this.flowers.push(gltf.scene)
    } )
  }
  cloneFlower(X, Y, Z){
  	let random = Math.floor(Math.random() * this.flowers.length)
  	let newflower = this.flowers[random].clone()
  	let x = Math.random() * X - X/2
  	let y = Y
  	let z = Math.random() * Z - Z/2
  	newflower.position.set(x,y,z)
    return newflower
  }
}
