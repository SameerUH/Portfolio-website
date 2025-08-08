import * as THREE from "three";
import {EdgesGeometry, LineSegments, LineBasicMaterial} from 'three';

//Elements used in PHP files.
const container = document.getElementById("pinned");
const tooltip = document.getElementById('pinned-tooltip');


//Colours
const black = 0x000000;
const white = 0xffffff;
const blue = 0x0000ff

//Scenes/camera
const scene = new THREE.Scene();
const FOV = 50;
const camera = new THREE.PerspectiveCamera(FOV, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio); //Makes the image way cleaner and better quality.
container.appendChild(renderer.domElement);

//Shapes
const projects = [ //List of projects to be displayed in the scene and their corresponding details, kind of like a dictionary.
    {name: 'Pong', image: '../assets/thumbnails/pong-thumbnail.png'},
    {name: 'Gratithink', image: '../assets/thumbnails/gratithink-thumbnail.png'},
    {name: 'Placement', image: '../assets/thumbnails/northumbriauniversity.jpg'}
];

const loader = new THREE.TextureLoader();
const cubes = [];
const cubeSize = 1.5;
const margin = 3;
const totalWidth = projects.length * cubeSize + (projects.length - 1) * margin;
projects.forEach((project, index) => {
    loader.load(project.image, (texture) => {
        const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize); //Cube shape.
        const materials = [new THREE.MeshStandardMaterial({map: texture}), new THREE.MeshStandardMaterial({map: texture}), new THREE.MeshBasicMaterial({color:blue}), new THREE.MeshBasicMaterial({color:blue}), new THREE.MeshStandardMaterial({map: texture}), new THREE.MeshStandardMaterial({map: texture})]; //Sides of the cubes.
        const cube = new THREE.Mesh(geometry, materials);
        const x = index * (cubeSize + margin) - (totalWidth - cubeSize) / 2;
        cube.position.x = x;
        const edges = new EdgesGeometry(cube.geometry);
        const edgeLines = new LineSegments(edges, new LineBasicMaterial({color:black}))
        edgeLines.raycast = () => {}; //Removes edgelines from the raycaster solving hovering issues with tooltips.
        cube.add(edgeLines);
        cube.userData = {name: project.name} //Adds the projects name to their corresponding cube.
        cubes.push(cube)
        scene.add(cube);
    });
});


//Light to make the cubes visible.
const intensity = 3;
const light = new THREE.DirectionalLight(white, intensity);
light.position.set(5,5,10).normalize();
scene.add(light);

//Mouse interaction
const raycaster = new THREE.Raycaster(); //Invisible beam from a point in a space.
const mouse = new THREE.Vector2();
let hovered = null;

const normalization = 1;
const offset = 10;
window.addEventListener('mousemove', (event) => {
    const bounds = container.getBoundingClientRect();
    mouse.x = ((event.clientX - bounds.left) / bounds.width) * 2 - normalization; //Gets mouse coordinates and maps them into scene.
    mouse.y = - ((event.clientY - bounds.top) / bounds.height) * 2 + normalization;

    raycaster.setFromCamera(mouse, camera); //Shoots ray through the mouse position.
    const intersects = raycaster.intersectObjects(cubes, true); //Finds hits.

    if (intersects.length > 0) { //Checks if hovered.
        let hovered = intersects[0].object;

        while (hovered && !hovered.userData.name && hovered.parent) {
            hovered = hovered.parent; //Checks if the hovered object is correct if not then move to the next one.
        }

        if (hovered && hovered.userData.name) { //If it is then modify the CSS to make the tooltip display.
            const cube = intersects[0].object;
            tooltip.textContent = cube.userData.name;
            tooltip.style.display = 'block';
            tooltip.style.left = `${event.clientX - bounds.left + offset}px`;
            tooltip.style.top = `${event.clientY - bounds.top + offset}px`;
        } else {
            tooltip.style.display = 'none'; //If it's wrong then remove the tooltip.
        }
    } else {
        tooltip.style.display = 'none'; //If not hovering over an object then remove the tooltip.
    }
});

//Animation/renderer
const rotation = 0.01;
function animate() {
    requestAnimationFrame(animate);
    cubes.forEach(cube => {
        cube.rotation.y -= rotation;
    });
    renderer.render(scene, camera)
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
})