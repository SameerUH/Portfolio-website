import * as THREE from "three";

//Elements used in PHP file.
const container = document.getElementById("newprojectmodel");

const scene = new THREE.Scene();
scene.background(0xffffff);
const FOV = 50;
const camera =  new THREE.PerspectiveCamera(FOV, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

scene.add(new THREE.AmbientLight(0xffffff, 1.5));
const light = new THREE.DirectionalLight(0xffffff, 1.2);
light.position.set(5, 10, 5);
scene.add(light);

const network_switch = new THREE.Group();

const box = new THREE.Mesh(
    new THREE.BoxGeometry(10, 2, 6),
    new THREE.MeshStandardMaterial({color:0x333333})
);
network_switch.add(box);

scene.add(network_switch);

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
