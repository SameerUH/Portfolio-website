import * as THREE from "three";
import {OrbitControls} from 'https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js';

/*
TO-DO:
--- Possibly add an animated background to the box of the switch.
--- Add a screen on the right side of the switch telling the user to pick a port.
--- Add flicking LED lights to show activity.
--- Add a wire from the back
--- Add ethernet cables to some of the ports.
--- Add tooltips which are project names and have it update the project title and description on the same page.
--- Maybe add another smaller rectangle on the ports to show realism (don't think it's necessary though).
--- Change the LED lights to cubes and maybe change the positioning of them.
*/

//Colours:
const box_colour = 0x00008B;
const panel_colour = 0xffffff;


//Elements used in PHP file.
const container = document.getElementById("newprojectmodel");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
const FOV = 50;
const camera =  new THREE.PerspectiveCamera(FOV, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

scene.add(new THREE.AmbientLight(0xffffff, 1.5));
const light = new THREE.DirectionalLight(0xffffff, 1.2);
light.position.set(5, 10, 5);
scene.add(light);

const network_switch = new THREE.Group();

const switch_box = new THREE.Mesh(
    new THREE.BoxGeometry(10, 2, 6),
    new THREE.MeshStandardMaterial({color:box_colour})
);

network_switch.add(switch_box);

const frontPanel = new THREE.Mesh(
    new THREE.BoxGeometry(9.6, 1.6, 0.3),
    new THREE.MeshStandardMaterial({color:panel_colour})
);
frontPanel.position.set(0, 0, 3.15);

const panel_borders = new THREE.Group();

const top_border = new THREE.Mesh(
    new THREE.BoxGeometry(10, 0.2, 0.3),
    new THREE.MeshStandardMaterial({color:box_colour})
);

const bottom_border = new THREE.Mesh(
    new THREE.BoxGeometry(10, 0.2, 0.3),
    new THREE.MeshStandardMaterial({color:box_colour})
);

const left_border = new THREE.Mesh(
    new THREE.BoxGeometry(0.2, 1.6, 0.3),
    new THREE.MeshStandardMaterial({color:box_colour})
);

const right_border = new THREE.Mesh(
    new THREE.BoxGeometry(0.2, 1.6, 0.3),
    new THREE.MeshStandardMaterial({color:box_colour})
);

function createPort() {
    const portGeom = new THREE.Group();
    const portShape = new THREE.Mesh(
        new THREE.BoxGeometry(0.6, 0.4, 0.5),
        new THREE.MeshStandardMaterial({color: 0x111111})
    );
    const portTop = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.1, 0.5),
        new THREE.MeshStandardMaterial({color: 0x111111})
    );
    portTop.position.set(0.01, 0.25, 0);
    portGeom.add(portShape, portTop);
    return portGeom;
}

let port_y = 0.25;
let led_y = 0.68;

for (let j=0; j < 2; j++) {
    for (let i=0; i < 8; i++) {
        const port = createPort();
        port.position.set(-4.2 + i * 1, port_y, 3.1);
        network_switch.add(port);

        if (j === 1) {
            port.scale.y = -1;
        }

        const led = new THREE.Mesh(
            new THREE.SphereGeometry(0.1, 16, 16),
            new THREE.MeshStandardMaterial({color: 0xff0000, emissive: 0x00ff00, emissiveIntensity: 0.5})
        );
        led.position.set(port.position.x, led_y, 3.3);
        network_switch.add(led);
    }
    port_y = -0.21;
    led_y = -0.65;
}

top_border.position.set(0, 0.9, 3.15);
bottom_border.position.set(0, -0.9, 3.15);
left_border.position.set(-4.9, 0, 3.15);
right_border.position.set(4.9, 0, 3.15);

panel_borders.add(top_border, bottom_border, left_border, right_border);

network_switch.add(frontPanel);
network_switch.add(panel_borders);

scene.add(network_switch);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
})
