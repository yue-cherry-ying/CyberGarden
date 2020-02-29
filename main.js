
/* initializing the scene, camera and renderer */
let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
camera.position.z = 15
let renderer = new THREE.WebGLRenderer()

renderer.setSize( window.innerWidth, window.innerHeight )

document.body.appendChild( renderer.domElement )

/* add objects to the scene */
let controls = new THREE.OrbitControls( camera, renderer.domElement )

let geometry = new THREE.BoxGeometry()
let material = new THREE.MeshNormalMaterial()
let cube = new THREE.Mesh( geometry, material )
let light = new THREE.PointLight( 0xddffdd, 1.0 )
light.position.z = 70
light.position.y = - 70
light.position.x = - 70
scene.add( light );

let light2 = new THREE.PointLight( 0xffdddd, 1.0 )
light2.position.z = 70
light2.position.x = - 70
light2.position.y = 70
scene.add( light2 )

let light3 = new THREE.PointLight( 0xddddff, 1.0 )
light3.position.z = 70
light3.position.x = 70
light3.position.y = - 70
scene.add( light3 )

// Load background texture
let backgroundloader = new THREE.TextureLoader();
backgroundloader.load('texture/grassland.jpg' , function(texture){
	scene.background = texture;
});

// Load flowers
let flower = []
let flower1, flower2, flower3, flower4, flower5, flower6
let loader = new THREE.GLTFLoader().setPath( 'models/sunflower/' )
loader.load( 'PUSHILIN_sunflower.gltf', function ( gltf ) {
	gltf.scene.traverse( function ( child ) {
		if (child.isMesh) {
			//child.material = new THREE.MeshNormalMaterial()
		}
	} )
	flower1 = gltf.scene
	flower1.scale.y = 0
	//scene.add(flower1)
	flower.push(flower1)
} )

let loader1 = new THREE.GLTFLoader().setPath( 'models/cactus/' )
loader1.load( 'PipeOrganCactus.gltf', function ( gltf ) {
	gltf.scene.traverse( function ( child ) {
		if (child.isMesh) {
			//child.material = new THREE.MeshNormalMaterial()
		}
	} )
	flower2 = gltf.scene
	flower2.scale.y = 0
	//scene.add(flower2)
	flower.push(flower2)
} )

let loader2 = new THREE.GLTFLoader().setPath( 'models/flowers/' )
loader2.load( 'model.gltf', function ( gltf ) {
	gltf.scene.traverse( function ( child ) {
		if (child.isMesh) {
			//child.material = new THREE.MeshNormalMaterial()
		}
	} )
	flower3 = gltf.scene
	flower3.scale.y = 0
	//scene.add(flower3)
	flower.push(flower3)
} )

let loader3 = new THREE.GLTFLoader().setPath( 'models/lily/' )
loader3.load( 'DesertLily.gltf', function ( gltf ) {
	gltf.scene.traverse( function ( child ) {
		if (child.isMesh) {
			//child.material = new THREE.MeshNormalMaterial()
		}
	} )
	flower4 = gltf.scene
	flower4.scale.y = 0
	//scene.add(flower4)
	flower.push(flower4)
} )

let loader4 = new THREE.GLTFLoader().setPath( 'models/rosebush/' )
loader4.load( 'Rose_Bush_01.gltf', function ( gltf ) {
	gltf.scene.traverse( function ( child ) {
		if (child.isMesh) {
			//child.material = new THREE.MeshNormalMaterial()
		}
	} )
	flower5 = gltf.scene
	flower5.scale.y = 0
	//scene.add(flower5)
	flower.push(flower5)
} )

let loader5 = new THREE.GLTFLoader().setPath( 'models/vines/' )
loader5.load( 'Vines.gltf', function ( gltf ) {
	gltf.scene.traverse( function ( child ) {
		if (child.isMesh) {
			//child.material = new THREE.MeshNormalMaterial()
		}
	} )
	flower6 = gltf.scene
	flower6.scale.y = 0
	//scene.add(flower6)
	flower.push(flower6)
} )

/* functions for event listener */
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize( window.innerWidth, window.innerHeight )
	}

let fl = []
function addflower(){
	let random = Math.floor(Math.random() * 6)
	let newflower = flower[random].clone()
	fl.push(newflower)
	let x = Math.random() * 26 - 13
	let y = -2
	let z = Math.random() * 26 - 13
	if (random == 0){
		//newflower.scale.set(Math.random()*16-8, Math.random()*8, Math.random()*16-8)
	}
	newflower.position.set(x,y,z)
	let scale = Math.random()
	newflower.scale.set(scale, scale, scale)
	scene.add(newflower)
}

let quotes = [
	'Be yourself; everyone else is already taken. - Oscar Wilde',
	'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe. - Albert Einstein',
	'So many books, so little time. ― Frank Zappa',
	'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind. - Bernard M. Baruch',
	'A room without books is like a body without a soul. - Marcus Tullius Cicero',
	'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams. - Dr. Seuss',
	'You only live once, but if you do it right, once is enough. - Mae West',
	'Be the change that you wish to see in the world. - Mahatma Gandhi',
	'In three words I can sum up everything I\'ve learned about life: it goes on. - Robert Frost',
	'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals. - J.K. Rowling, Harry Potter and the Goblet of Fire',
	'No one can make you feel inferior without your consent. - Eleanor Roosevelt, This is My Story',
	'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . . - C.S. Lewis, The Four Loves',
	'If you tell the truth, you don\'t have to remember anything. - Mark Twain',
	'A friend is someone who knows all about you and still loves you. - Elbert Hubbard',
	'Always forgive your enemies; nothing annoys them so much. - Oscar Wilde',
	'To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde',
	'Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi',
	'I am so clever that sometimes I don\'t understand a single word of what I am saying. - Oscar Wilde, The Happy Prince and Other Stories',
	'Without music, life would be a mistake. - Friedrich Nietzsche, Twilight of the Idols',
	'We accept the love we think we deserve. - Stephen Chbosky, The Perks of Being a Wallflower'
]

function newQuote(){
	let randomNumber = Math.floor(Math.random() * (quotes.length))
	let quote = quotes[randomNumber]
	//let x = Math.random() * 2
	//let y = Math.random() * 2
	//let z = Math.random() * 2
	//quote.position.set(x,y,z)
	//scene.add(quote)
	alert(quote)
}

window.addEventListener( 'resize', onWindowResize, false )
//window.addEventListener( 'click', addflower, false)
//window.addEventListener( 'click', newQuote, false)
window.addEventListener( 'click', () => {
	addflower(), newQuote()}
	, false)

/* Animate Function */
function animate() {
	requestAnimationFrame( animate )
	renderer.render( scene, camera )
  cube.rotation.y += 0.01
  cube.rotation.x += 0.02

	/* if (flower1){
		if (flower1.scale.y <= 1){
			flower1.scale.y += 0.1
		}
	}
	if (flower2){
		if (flower2.scale.y <= 1){
			flower2.scale.y += 0.1
		}
	}
	if (flower3){
		if (flower3.scale.y <= 1){
			flower3.scale.y += 0.1
		}
	}
	if (flower4){
		if (flower4.scale.y <= 1){
			flower4.scale.y += 0.1
		}
	}
	if (flower5){
		if (flower5.scale.y <= 1){
			flower5.scale.y += 0.1
		}
	}
	if (flower6){
		if (flower6.scale.y <= 1){
			flower6.scale.y += 0.1
		}
	}*/
}
animate()
