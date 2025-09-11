import * as THREE from "three";
import {GLTFLoader} from 'https://unpkg.com/three@0.160.0/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js';

/* TO-DO:
--- Make the switch more visible, may be a lighting issue given that I have no lighting at the moment.
--- Try and find a way to make each port clickable and redirectable to a different page.
*/

//Colours
const white  = 0xffffff;


//Elements used in PHP file.
const container = document.getElementById("project3D");

//Scenes
const scene = new THREE.Scene();
const FOV = 50;
const camera = new THREE.PerspectiveCamera(FOV, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05

const loader = new GLTFLoader();
loader.load(
    '../assets/cisco_style_switch_24port.gltf',

    function(gltf) {
        const model = gltf.scene;
        model.scale.set(10,10,10);
        scene.add(model);
    },
    undefined, function(error) {
        console.error('An error occured while loading the model: ', error);
    }
)

const intensity = 3;
const light = new THREE.DirectionalLight(white, intensity);
light.position.set(5,5,10).normalize();
scene.add(light);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
})