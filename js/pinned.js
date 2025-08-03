import * as THREE from "three";
import {OrbitControls} from 'https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js';
import {EdgesGeometry, LineSegments, LineBasicMaterial} from 'three';


const container = document.getElementById("new-pinned");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio); //Makes the image way cleaner and better quality.
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

const projects = [
    {name: 'Pong', image: '../assets/thumbnails/pong-thumbnail.png'},
    {name: 'Gratithink', image: '../assets/thumbnails/gratithink-thumbnail.png'},
    {name: 'Placement', image: '../assets/thumbnails/northumbriauniversity.jpg'}
];

const loader = new THREE.TextureLoader();
const cubes = [];
projects.forEach((project, index) => {
    loader.load(project.image, (texture) => {
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const materials = [new THREE.MeshStandardMaterial({map: texture}), new THREE.MeshStandardMaterial({map: texture}), new THREE.MeshBasicMaterial({color:0x0000ff}), new THREE.MeshBasicMaterial({color:0x0000ff}), new THREE.MeshStandardMaterial({map: texture}), new THREE.MeshStandardMaterial({map: texture})];
        const cube = new THREE.Mesh(geometry, materials);
        const edges = new EdgesGeometry(cube.geometry);
        const edgeLines = new LineSegments(edges, new LineBasicMaterial({color:0x000000}))
        cube.add(edgeLines);
        cube.position.x = index * 2 - (projects.length - 1);
        cube.userData = {name: project.name}
        cubes.push(cube)
        scene.add(cube);
    });
});

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(5,5,10).normalize();
scene.add(light);

function animate() {
    requestAnimationFrame(animate);
    cubes.forEach(cube => {
        cube.rotation.y -= 0.01;
    });
    controls.update();
    renderer.render(scene, camera)
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
})