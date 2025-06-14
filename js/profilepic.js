import * as THREE from 'three';
import {GLTFLoader} from 'https://unpkg.com/three@0.160.0/examples/jsm/loaders/GLTFLoader.js';

const container = document.getElementById('profilepic');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);

const loader = new GLTFLoader();
loader.load(
    '../assets/thumbnails/basic_coin.gltf',

    function (gltf) {
        const model = gltf.scene;
        model.scale.set(2, 2, 2);
        model.position.y = -1;

        model.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                child.material = new THREE.MeshStandardMaterial({color: 0xFFD700, metalness: 1, roughness: 0.2,});
            }
        });
        scene.add(model);
    },
    undefined, function(error) {
        console.error('An error occured while loading the model: ', error);
    }
);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate()