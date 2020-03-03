//x: width of the range
//y: the offfset
//z: depth of the range

/*




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
    	//scene.add(flower1)
    	this.flowers.push(gltf.scene)
    } )
  }
  cloneFlower(X, Y, Z){
  	let random = Math.floor(Math.random() * this.flowers.length)
  	let newflower = this.flowers[random].clone()
    // let newflower = this.flowers[6].clone()
  	let x = Math.random() * X - X/2
  	let y = Y
  	let z = Math.random() * Z - Z/2
  	newflower.position.set(x,y,z)
    return newflower
  }
}
