import * as THREE from "three";
import {OrbitControls} from 'https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js';
import {EdgesGeometry, LineSegments, LineBasicMaterial} from 'three';

/*
TO-DO:
--- Possibly add an animated background to the box of the switch.
xxx Add a screen on the right side of the switch telling the user to pick a port.
xxxx Add flicking LED lights to show activity.
xxx Add a wire from the back
xxx Add ethernet cables to some of the ports.
--- Add tooltips which are project names and have it update the project title and description on the same page.
xxx Maybe add another smaller rectangle on the ports to show realism (don't think it's necessary though).
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

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const clickablePorts = [];
const leds = [];

let projectData = [];

async function loadProjects() {
    try {
        const response = await fetch('../data/projects.json');
        const data = await response.json();
        projectData = data.projects;
        console.log('Projects loaded successfully:', projectData.length);
    } catch (error) {
        console.error('Error loading projects:', error);
        projectData = [
            {name: "Error Loading", description: "Could not load project data."}
        ];
    }
}

const network_switch = new THREE.Group();

const switch_box = new THREE.Mesh(
    new THREE.BoxGeometry(15, 2, 6),
    new THREE.MeshStandardMaterial({color:box_colour})
);

network_switch.add(switch_box);

const frontPanel = new THREE.Mesh(
    new THREE.BoxGeometry(14.6, 1.6, 0.3),
    new THREE.MeshStandardMaterial({color:panel_colour})
);
frontPanel.position.set(0, 0, 3.15);

const panel_borders = new THREE.Group();

const top_border = new THREE.Mesh(
    new THREE.BoxGeometry(15, 0.2, 0.3),
    new THREE.MeshStandardMaterial({color:box_colour})
);

const bottom_border = new THREE.Mesh(
    new THREE.BoxGeometry(15, 0.2, 0.3),
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

function createPort(portIndex) {
    const portGeom = new THREE.Group();
    const portShape = new THREE.Mesh(
        new THREE.BoxGeometry(0.6, 0.4, 0.5),
        new THREE.MeshStandardMaterial({color: 0x111111})
    );
    const portTop = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.1, 0.5),
        new THREE.MeshStandardMaterial({color: 0x111111})
    );
    portTop.position.set(0.01, 0.25, 0)

    const portToptop = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.05, 0.5),
        new THREE.MeshStandardMaterial({color: 0x111111})
    );
    portToptop.position.set(0.015, 0.3, 0);

    portGeom.add(portShape, portTop, portToptop);

    portGeom.userData = {
        isPort: true,
        portIndex: portIndex,
        project: projectData[portIndex] || {name: "Coming Soon", date: "NULL", description: "Project in development"}
    }
    return portGeom;
}

function createPorts() {
    let port_y = 0.235;
    let led_y = 0.685;
    let portIndex = 0;

    for (let j=0; j < 2; j++) {
        for (let i=0; i < 9; i++) {
            const port = createPort(portIndex);
            port.position.set(-6.5 + i * 1, port_y, 3.1);
            network_switch.add(port);
            clickablePorts.push(port);

            if (j === 1) port.scale.y = -1;

            const led = new THREE.Mesh(
                new THREE.SphereGeometry(0.1, 16, 16),
                new THREE.MeshStandardMaterial({color: 0xffff00, emissive: 0x00ff00, emissiveIntensity: 0.0})
            );
            led.position.set(port.position.x, led_y, 3.3);
            network_switch.add(led);

            leds.push(led);
            portIndex++;
        }
        port_y = -port_y;
        led_y = -led_y;
    }
}

function createCable(portpicked, direction_x, direction_y, flipped) {
    const cable = new THREE.Group();
    const cable_head = new THREE.Mesh(
        new THREE.BoxGeometry(0.6, 0.4, 0.5),
        new THREE.MeshStandardMaterial( {color: 0x555555} )
    );

    cable.add(cable_head);
    cable.position.set(portpicked.position.x, portpicked.position.y, 3.25);

    const cable_top = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 0.09, 0.5),
        new THREE.MeshStandardMaterial({color: 0x555555})
    );

    cable.add(cable_top);
    cable_top.position.set(0.01, 0.24, 0);

    if (flipped) cable.scale.y = -1;

    const path = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0.05, -1),
        new THREE.Vector3(0, 0.05, 0.5),
        new THREE.Vector3(direction_x, direction_y, 0.5)
    ]);

    const cableGeom = new THREE.TubeGeometry(path, 50, 0.2, 50, false);
    const cableMat = new THREE.MeshStandardMaterial({color: new THREE.Color(Math.random() * 0xffffff)});
    const cable_wire = new THREE.Mesh(cableGeom, cableMat);

    cable.add(cable_wire);
    cable_wire.position.set(0, 0, 0.7);

    scene.add(cable);
}

const back_path = new THREE.CatmullRomCurve3([
    new THREE.Vector3(6, 0, -2),
    new THREE.Vector3(6, 0, -10)
]);

const back_cableGeom = new THREE.TubeGeometry(back_path, 50, 0.35, 50, false);
const back_cableMat = new THREE.MeshStandardMaterial({color: 0x000000});
const back_cable = new THREE.Mesh(back_cableGeom, back_cableMat);
scene.add(back_cable);

top_border.position.set(0, 0.9, 3.15);
bottom_border.position.set(0, -0.9, 3.15);
left_border.position.set(-7.4, 0, 3.15);
right_border.position.set(7.4, 0, 3.15);

panel_borders.add(top_border, bottom_border, left_border, right_border);

network_switch.add(frontPanel);
network_switch.add(panel_borders);

function createScreen(text = "PICK A PORT") {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height =  256;
    const context = canvas.getContext('2d');

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshBasicMaterial({map: texture});
    const geometry = new THREE.BoxGeometry(3, 1.2, 1.5);

    const screen = new THREE.Mesh(geometry, material);
    const edges = new EdgesGeometry(screen.geometry);
    const edgeLines = new LineSegments(edges, new LineBasicMaterial({color: 0x000000}));
    screen.add(edgeLines);
    screen.position.set(5, 0, 2.6);

    let scrollX = canvas.width;

    function update() {
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, canvas.width, canvas.height);

        //Text
        context.fillStyle = "#00ff00";
        context.font = "bold 125px Arial";
        context.textAlign = "left";
        context.textBaseline = "middle";

        const textWidth = context.measureText(text).width;
        const gap = 150;

        context.fillText(text, scrollX, canvas.height / 2);
        context.fillText(text, scrollX + textWidth + gap, canvas.height / 2);
        
        scrollX -= 2;
        if (scrollX + textWidth < 0) {
            scrollX += textWidth + gap;
        }
        texture.needsUpdate = true;
    }

    return {screen, update};
}

function updateProjectInfo(project) {
    const projectTitle = document.getElementById('projecttitle');
    if (projectTitle) {
        const titleText = projectTitle.querySelector('p strong');
        if (titleText) {
            titleText.textContent = `${project.name.toUpperCase()} | ${project.date.toUpperCase()}`;
        }
    }

    const projectDescription = document.getElementById('description');
    if (projectDescription) {
        const description = projectDescription.querySelector('p strong');
        if (description) {
            description.textContent = project.fullDescription || project.shortDescription || project.description;
        }
    }
}


function onMouseClick(event) {
    const rect  = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(clickablePorts, true);  

    if (intersects.length > 0) {
        const clickedPort = intersects[0].object.parent;
        if (clickedPort.userData.isPort) {
            updateProjectInfo(clickedPort.userData.project);
        }
    }
}

async function init() {
    await loadProjects();
    createPorts();
    createCable(clickablePorts[0], 0, 5, false);
    createCable(clickablePorts[1], 0, 5, false);
    createCable(clickablePorts[2], 0, 5, false);
    createCable(clickablePorts[3], 0, 5, false);

    const {screen, update: updateScreen} = createScreen("PICK A PORT");
    network_switch.add(screen);

    renderer.domElement.addEventListener('click', onMouseClick);

    scene.add(network_switch);

    let lastUpdate = 0;
    function animate(time) {
        requestAnimationFrame(animate);

        if (time - lastUpdate > 200) {
            leds.forEach((led, index) => {
                if (index < 4) {
                    if (Math.random() > 0.8) {
                        led.material.color.set(0x00ff00);
                    } else {
                        led.material.color.set(0xffff00);
                    }
                } else {
                    led.material.color.set(0xffff00);
                }
            });
            lastUpdate = time;
        }

        updateScreen();
        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    const defaultProject = {
        name: "Select a Port",
        description: "Please select a port to view its details."
    }
    updateProjectInfo(defaultProject);
}
init();

window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
})

window.addEventListener('load', () => {
    const defaultProject = {
        name: "Select a Port",
        description: "Please select a port to view its details."
    };
    updateProjectInfo(defaultProject);
});
