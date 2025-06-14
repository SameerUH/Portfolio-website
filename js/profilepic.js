//Import everything from Three.js
import * as THREE from 'three';

const container = document.getElementById('profilepic');

//Creates a scene.
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);

//Moves the camera back so we can see the cube.
camera.position.z = 5;

//Creates a renderer to draw everything on the screen.
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(container.clientWidth, container.clientHeight); //Fullscreen
container.appendChild(renderer.domElement);//Adds canvas to the page.

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(1, 2, 5);
directionalLight.lookAt(0, 0, 0);
scene.add(directionalLight);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.7);
directionalLight2.position.set(-5, 5, -5);
directionalLight2.lookAt(0, 0, 0);
scene.add(directionalLight2);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('../assets/thumbnails/profilepicture.jpg', (texture) => {
    //Rotating circle:
    const radius = 3;
    const segments = 64;
    const circle_geometry = new THREE.CircleGeometry(radius, segments)
    const circle_material = new THREE.MeshStandardMaterial({map: texture, metalness: 0.1, roughness: 0.9});
    const circle = new THREE.Mesh(circle_geometry, circle_material);
    scene.add(circle);
});

//Animate function - called every frame (~60 times/sec).
function animate() {
  requestAnimationFrame(animate);//Asks the browser to call this again next frame

  //Renders the scene from the camera's perspective.
  renderer.render(scene, camera);
}
animate();

//Handles window resize to keep aspect ratio correct.
window.addEventListener('resize', () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();//Recalculate the camera.
  renderer.setSize(container.clientWidth, container.clientHeight);//Resize the canvas
});