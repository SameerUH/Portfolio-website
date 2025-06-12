import * as THREE from 'three';
import {OrbitControls} from 'https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'https://unpkg.com/three@0.160.0/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'https://unpkg.com/three@0.160.0/examples/jsm/geometries/TextGeometry.js';

const container = document.getElementById('SAMEERHAQ');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xF7F7F7);

const base_FOV = 40;
const camera = new THREE.PerspectiveCamera(base_FOV, container.clientWidth /container.clientHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true; //Enables shadow in the renderer.
renderer.shadowMap.type = THREE.PCFShadowMap; //Softer edges.


const controls = new OrbitControls(camera, renderer.domElement);
controls.mouseButtons = {
    LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: null
};
controls.enableDamping = true;
controls.dampingFactor = 0.05;

//Ambient Light: Soft light that affects all objects equally.
const ambient = new THREE.AmbientLight(0xffffff, 0.3); //Colour, intensity.
scene.add(ambient);

//Directional Light: Like sunlight.
const directional = new THREE.DirectionalLight(0xffffff, 1);
directional.position.set(5, 6, 5); //Light direction.
scene.add(directional);

//Point Light: Like a light bulb.
const point = new THREE.PointLight(0xffaa00, 1, 10); //Warm yellow tone.
point.position.set(0, 2, 2); //Above and in front of the object.
scene.add(point);

//Shadow:
directional.castShadow = true;
directional.shadow.mapSize.width = 1024; //Sets the resolution of the shadow map with height and width.
directional.shadow.mapSize.height = 1024;
directional.shadow.camera.near = 1; //Minimum distance from the light to start casting.
directional.shadow.camera.far = 20; //Maximum distance from the light to cast shadows.
directional.shadow.camera.left = -5; //Bounds which define how wide the shadow casting area is.
directional.shadow.camera.right = 5;
directional.shadow.camera.top = 5;
directional.shadow.camera.bottom = -5;

//Create a floor so we can see the shadow effect.
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.ShadowMaterial({opacity: 0.4}) //Only shows shadows and not colour.
);

floor.rotation.x = -Math.PI / 2; //Rotates it to be horizontal.
floor.position.y = -1; //Lowers it beneath the sphere.
floor.receiveShadow = true; //Floor accepts shadow.
scene.add(floor);

//Spotlight:
const spotlight = new THREE.SpotLight(0xffddaa, 1); //colour, intensity.
spotlight.position.set(4, 4, 10); //Places it above and to the side.
spotlight.target.position.set(0, 0, 0); //Aims the spotlight and adds it to the scene..
scene.add(spotlight.target);

spotlight.castShadow = true; //Enables shadows and sets dimensions.
spotlight.shadow.mapSize.width = 1024;
spotlight.shadow.mapSize.height = 1024;

spotlight.angle = Math.PI / 6; //Cone spread.
spotlight.penumbra = 0.2; //Softnes around the edges of the spotlight.
spotlight.decay = 2; //Light fade-off.
spotlight.distance = 10; //How far the light reached.

scene.add(spotlight);

//Adjusts the camera's position and FOV based on the screen size adjustment to make the name fit the camera.
function fitCamera(camera, textMesh, controls, padding=1.2) {
    const box = new THREE.Box3().setFromObject(textMesh); //Get a bounding box based on the 3D object.
    const size = box.getSize(new THREE.Vector3()); //Get the size and center point of the bounding box.
    const center = box.getCenter(new THREE.Vector3());

    const fovRad = camera.fov * (Math.PI / 180); //Convert the camera's FOV from degees to radians.
    const aspect = camera.aspect; //Current aspect ratio.

    const height = size.y; //Calculate the required height based on the object's height.
    let distanceHeight = (height/2) / Math.tan(fovRad/2);

    const width = size.x; //Calcate the required width based on the object's width.
    let distanceWidth = (width/2) / Math.tan(fovRad/2) / aspect;

    let finalDistance = Math.max(distanceHeight, distanceWidth); //Maximum distance to ensure entire object is visible.
    camera.position.set(center.x, center.y, center.z + finalDistance * padding); //Sets the camera's position to be centered and positioned in front of the object.
    controls.target.copy(center);
    controls.update();
}


//Text
const textloader = new FontLoader();
const letterSpacing = 0.47;
const text = "SAMEER HAQ"; //Text that wil be displayed.

const video = document.createElement('video'); //Creates a video element in the PHP.
video.src = '../assets/thumbnails/lettertexture.mp4';
video.loop = true;
video.muted = true; //REQUIRED TO ADD THE TEXT WITHOUT HAVING CONSOLE ERRORS.
video.play();

const videoTexture = new THREE.VideoTexture(video); //Converts the video into a texture.
videoTexture.minFilter = THREE.LinearFilter; //Determines how the texture is sampled when scaled down.
videoTexture.magFilter = THREE.LinearFilter; //Determines how the texture is sampled when scaled up.
videoTexture.format = THREE.RGBAFormat; //Interpretation of the pixels in the texture i.e. How they're arranged.

let mainGroup; //Holds the entire group of 3D text.

textloader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
    const textGroup = new THREE.Group(); //Creates a group to hold all characters.
    [...text].forEach((char, i) => {
        const textgeometry = new TextGeometry(char, {
            font: font, size: 0.5, height: 0.2, curveSegments: 12, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.02, bevelSegments: 5, //This feels like CSS for the text.
        });

        const textmaterial = new THREE.MeshStandardMaterial({map: videoTexture});
        const textMesh = new THREE.Mesh(textgeometry, textmaterial);
        textMesh.position.x = i * letterSpacing; //Adds spacing to the lettering, without it will cause all letters to be in the same position (jumbled up).
        textMesh.castShadow = true;
        textGroup.add(textMesh); //Adds each letter to text group.
    });

    textGroup.userData = {url:"https://w23002216.nuwebspace.co.uk/PORTFOLIO/pages/index.php"}; //Adds the link to the text.
    scene.add(textGroup); //Adds the entire textured phrase to the screen.

    // Center the group
    const box = new THREE.Box3().setFromObject(textGroup); //Creates a box around the lettering which is then used to modify the size and position of the phrase.
    const center = box.getCenter(new THREE.Vector3());
    textGroup.position.sub(center); // Center the text around (0, 0, 0)

    mainGroup = textGroup; //Assigned to the entire text group.
    onWindowResize();
});

const raycaster = new THREE.Raycaster(); //Invisible beam from a point in a space.
const mouse = new THREE.Vector2();
let hovered = null;

window.addEventListener('mousemove', (event) => {
    const bounds = container.getBoundingClientRect();
    mouse.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1; //Gets mouse coordinates and maps them into scene.
    mouse.y = - ((event.clientY - bounds.top) / bounds.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera); //Shoots ray through the mouse position.
    const intersects = raycaster.intersectObjects(scene.children, true); //Finds hits.

    if (intersects.length > 0) { //Checks if hovered.
        let hovered = intersects[0].object;

        while (hovered && !hovered.userData.url && hovered.parent) {
            hovered = hovered.parent; //Checks if the hovered object is correct if not then move to the next one.
        }

        if (hovered && hovered.userData.url) { //If it is then modify the CSS to make the tooltip display.
            tooltip.textContent = 'Left-click to open | Left-click and hold to rotate | Scroll to zoom';
            tooltip.style.display = 'block';
            tooltip.style.left = `${event.clientX + 10}px`;
            tooltip.style.top = `${event.clientY + 10}px`;
        } else {
            tooltip.style.display = 'none'; //If it's wrong then remove the tooltip.
        }
    } else {
        tooltip.style.display = 'none'; //If not hovering over an object then remove the tooltip.
    }
});



//Instead of using 'click' as an event listener I used 'mouseup' and 'mousedown' to help separate single clicks and hold/drags.
let mouse_down = 0;
renderer.domElement.addEventListener('mousedown', () => {
    mouse_down = Date.now(); //If left click is down then store the time of it.
});

renderer.domElement.addEventListener('mouseup', (event) => {
    const duration = Date.now() - mouse_down; //Check if it's a single click by seeing if it was a short amount of time that the button was held.
    if (duration < 150) {
        const bounds = container.getBoundingClientRect();
        mouse.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1; //Get the mouse position and map it to THREE.JS.
        mouse.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);

        if (intersects.length > 0) { //Checks if hovered.
            let hovered = intersects[0].object;
            

            while (hovered && !hovered.userData.url && hovered.parent) { //Checks if the hovered object is correct if not then move to the next one.
                hovered = hovered.parent;
            }

            if (hovered && hovered.userData.url) { //If it's the right object then open the link stored in a new tab.
                window.open(hovered.userData.url, '_self');
            }
        }
    }
});

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

//Function to handle camera and renderer adjustments on window resize.
function onWindowResize() {
    const width = container.clientWidth; //Current container width and height stored in constants.
    const height = container.clientHeight;
    camera.aspect = width/height; //Updated camera and standard aspect ratio.
    const aspect = width/height;

    //Adjust camera FOV based on aspect ratio to maintain consistent appearance.
    if (aspect > 1) { //If wider than tall.
        camera.fov = Math.min(base_FOV * (aspect / 1.5), 60);
    } else {//If taller than wide.
        camera.fov = Math.max(base_FOV / (aspect * 1.2), 30)
    }

    camera.updateProjectionMatrix(); //Updates the camera's projection matrix after changing FOV/apect.
    renderer.setSize(width, height);
    if (mainGroup) { //If there is a 3D text group and it's stored in mainGroup.
        fitCamera(camera, mainGroup, controls, 1.1); //Refits the camera and sets the padding value to 1.1 making the full text visible.
    }
}


window.addEventListener('resize', onWindowResize); //Whenever the window is resized call the function to make the 3D element fit on the page.