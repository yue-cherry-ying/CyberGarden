
/* initializing the scene, camera and renderer */
let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
camera.position.z = 15
let renderer = new THREE.WebGLRenderer()

renderer.setSize( window.innerWidth, window.innerHeight )

document.body.appendChild( renderer.domElement )

/* add objects to the scene */
let controls = new THREE.OrbitControls( camera, renderer.domElement )

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

let flowerFactory = new Flower([
	{
		name: 'PUSHILIN_sunflower.gltf',
		path: 'models/sunflower/',
		scale: 2
	},
	{
		name: 'PipeOrganCactus.gltf',
		path: 'models/cactus/',
		scale: 0.5
	},
	{
		name: 'model.gltf',
		path: 'models/flowers/',
		scale: 1.5
	},
	{
		name: 'DesertLily.gltf',
		path: 'models/lily/',
		scale: 0.5
	},
	{
		name: 'Rose_Bush_01.gltf',
		path: 'models/rosebush/',
		scale: 0.3
	},
	{
		name: 'Vines.gltf',
		path: 'models/vines/',
		scale: 0.3
	},
])

// Load background texture

let backgroundLoader = new THREE.TextureLoader();
backgroundLoader.load('texture/grassland.jpg' , function(texture){
	texture.wrapS = THREE.RepeatWrapping
	texture.wrapT = THREE.RepeatWrapping
	texture.repeat.set(2,1)
	let geometry = new THREE.SphereBufferGeometry( 52, 45, 45 );
	let material = new THREE.MeshBasicMaterial( {
		side: THREE.BackSide,
		map: texture
	} );
	let sphere = new THREE.Mesh( geometry, material )
	scene.add( sphere );
});

// raytracing
let quoteLoader = new THREE.TextureLoader();
quoteLoader.load('texture/quote1.png' , function(texture){
	let geometry1 = new THREE.PlaneBufferGeometry( 16, 4, 8 )
	let material1 = new THREE.MeshBasicMaterial( {
		side: THREE.DoubleSide,
		map: texture
	} )
	let plane = new THREE.Mesh( geometry1, material1 )
	plane.position.set(0,4.5,0)
	scene.add( plane );
	// scene.background = texture;
});

/* functions for event listener */
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize( window.innerWidth, window.innerHeight )
	}

let fl = []

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
	alert(quote)
}

window.addEventListener( 'resize', onWindowResize, false )
window.addEventListener( 'click', () => {
	// addflower()
	let f = flowerFactory.cloneFlower(45, -2, 26)
	scene.add(f)
	fl.push(f)
	newQuote()
}, false)

/* Animate Function */
function animate() {
	requestAnimationFrame( animate )
	renderer.render( scene, camera )
}
animate()
