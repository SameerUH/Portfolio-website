import * as THREE from "three";

const container = document.getElementById("new-pinned");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const projects = [
    {name: 'Pong', image: '../assets/thumbnails/pong-thumbnail.png'},
    {name: 'Gratithink', image: '../assets/thumbnails/gratithink-thumbnail.png'},
    {name: 'Placement', image: '../assets/thumbnails/northumbriauniversity.jpg'}
];

const loader = new THREE.TextureLoader();
projects.forEach((project, index) => {
    loader.load(project.image, (texture) => {
        const geometry = new THREE.BoxGeometry(1, 1, 0.2)
        const material = new THREE.MeshStandardMaterial({map: texture});
        const cube = new THREE.Mesh(geometry, material);
        cube.position.x = index * 2 - (projects.length - 1);
        cube.userData = {name: project.name}
    scene.add(cube);
    });
});

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