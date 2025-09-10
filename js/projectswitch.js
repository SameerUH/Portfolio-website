import * as THREE from "three";
import {GLTFLoader} from 'https://unpkg.com/three@0.160.0/examples/jsm/loaders/GLTFLoader.js';

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

const loader = new GLTFLoader();
loader.load(
    '../assets/cisco_style_switch_24port.gltf',

    function(gltf) {
        const model = gltf.scene;
        model.scale.set(10,10,10);
        model.position.y = -1;
        scene.add(model);
    },
    undefined, function(error) {
        console.error('An error occured while loading the model: ', error);
    }
)

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
})