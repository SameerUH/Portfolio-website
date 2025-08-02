import * as THREE from "three";

const container = document.getElementById("new-pinned");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const bwidth = 1;
const bheight = 1;
const blength = 1;
const geometry = new THREE.BoxGeometry(bwidth, bheight, blength);
const material = new THREE.MeshStandardMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5,5,10).normalize();
scene.add(light);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera)
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
})