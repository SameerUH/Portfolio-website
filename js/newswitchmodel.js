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
--- Fix the JSON and formatting of the PHP file for better visuals.
*/

//Colours:
const box_colour = 0x00008B; //Dark blue
const panel_colour = 0xffffff; //Gray???
const port_colour = 0x111111; //Black
const back_cable_colour = 0x111111; //Black
const screen_font_colour = 0x00ff00; //Green
const LED_ON_colour = 0x00ff00; //Green
const LED_OFF_colour = 0xffff00; //Yellow
const cable_head_colour = 0x555555; //Gray


//Elements used in PHP file.
const container = document.getElementById("newprojectmodel");

//Scene:
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
const FOV = 50;
const camera =  new THREE.PerspectiveCamera(FOV, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

//Controls:
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

//Lighting:
scene.add(new THREE.AmbientLight(0xffffff, 1.5));
const light = new THREE.DirectionalLight(0xffffff, 1.2);
light.position.set(5, 10, 5);
scene.add(light);

//Raycaster/mouse detection
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

//3D network switch model project showcase:
const clickablePorts = [];
const leds = [];

let projectData = [];

//Async function which gets JSON file without freezing the rest of the program.
async function loadProjects() {
    try {
        //Fetches the JSON file that contains the listed projects.
        const response = await fetch('../data/projects.json');
        //Turns the response into a JavaScript object.
        const data = await response.json();
        //Stores the projects data into a variable.
        projectData = data.projects;
    } catch (error) {
        //If something goes wrong such as file not found then it's displayed in the console.
        console.error('Error loading projects:', error);
        projectData = [
            {name: "Error Loading", description: "Could not load project data."}
        ];
    }
}

//Switch model:
//Group which stores the entire model.
const network_switch = new THREE.Group();

//Main blue box
const switch_box = new THREE.Mesh(
    new THREE.BoxGeometry(15, 2, 6),
    new THREE.MeshStandardMaterial({color:box_colour})
);

network_switch.add(switch_box);

//Front gray panel
const frontPanel = new THREE.Mesh(
    new THREE.BoxGeometry(14.6, 1.6, 0.3),
    new THREE.MeshStandardMaterial({color:panel_colour})
);
//Positioned so it pops out of the main box model.
frontPanel.position.set(0, 0, 3.15);

//Panel borders group to cover the gray panel in blue borders.
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

//Port creation as a function so it can be called specific number of times.
function createPortShape(portIndex) {
    //3 meshes being created to form a port.
    const portGeom = new THREE.Group();
    const portShape = new THREE.Mesh(
        new THREE.BoxGeometry(0.6, 0.4, 0.5),
        new THREE.MeshStandardMaterial({color: port_colour})
    );
    const portTop = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.1, 0.5),
        new THREE.MeshStandardMaterial({color: port_colour})
    );
    portTop.position.set(0.01, 0.25, 0)

    const portToptop = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.05, 0.5),
        new THREE.MeshStandardMaterial({color: port_colour})
    );
    portToptop.position.set(0.015, 0.3, 0);

    portGeom.add(portShape, portTop, portToptop);

    //Default user data set for each port which is then overwritten later in this script.
    portGeom.userData = {
        isPort: true,
        portIndex: portIndex,
        project: projectData[portIndex] || {name: "Coming Soon", date: "NULL", description: "Project in development"}
    }
    return portGeom;
}

//Function to add the ports to the network switch using the createPortShape function.
function createPorts() {
    //Y-levels used in for loop for positioning.
    let port_y = 0.235;
    let led_y = 0.685;
    let portIndex = 0;
    
    //for loop inside of another for loop to create 2 rows of 9 ports.
    for (let j=0; j < 2; j++) {
        for (let i=0; i < 9; i++) {
            const port = createPortShape(portIndex);
            port.position.set(-6.5 + i * 1, port_y, 3.1);
            network_switch.add(port);
            clickablePorts.push(port);

            //If it's on the second row then flip the port (for realism).
            if (j === 1) port.scale.y = -1;

            //Create and add LED above/below the port.
            const led = new THREE.Mesh(
                new THREE.SphereGeometry(0.1, 16, 16),
                new THREE.MeshStandardMaterial({color: 0xffff00, emissive: 0x00ff00, emissiveIntensity: 0.0})
            );
            led.position.set(port.position.x, led_y, 3.3);
            network_switch.add(led);

            leds.push(led);
            portIndex++;
        }
        //Changes the y levels when the first row is completed.
        port_y = -port_y;
        led_y = -led_y;
    }
}

//Function to create ethernet cables when a project is completed and added to a port.
function createCable(portpicked, direction_x, direction_y, flipped) {
    const cable = new THREE.Group();
    const cable_head = new THREE.Mesh(
        new THREE.BoxGeometry(0.6, 0.4, 0.5),
        new THREE.MeshStandardMaterial( {color: cable_head_colour} )
    );

    cable.add(cable_head);
    cable.position.set(portpicked.position.x, portpicked.position.y, 3.25);

    const cable_top = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 0.09, 0.5),
        new THREE.MeshStandardMaterial({color: cable_head_colour})
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
    //Sets a random colour for the wires, changes every time you reload the page.
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

//Back cable added (power cable) on the back of the switch.
const back_cableGeom = new THREE.TubeGeometry(back_path, 50, 0.35, 50, false);
const back_cableMat = new THREE.MeshStandardMaterial({color: back_cable_colour});
const back_cable = new THREE.Mesh(back_cableGeom, back_cableMat);
scene.add(back_cable);

//Every object that has just been created above is being positioned and added to its respective group and to the scene.
top_border.position.set(0, 0.9, 3.15);
bottom_border.position.set(0, -0.9, 3.15);
left_border.position.set(-7.4, 0, 3.15);
right_border.position.set(7.4, 0, 3.15);

panel_borders.add(top_border, bottom_border, left_border, right_border);

network_switch.add(frontPanel);
network_switch.add(panel_borders);

//Animated display screen:
function createScreen(text = "PICK A PORT") {
    //Creates a canvas to write text on.
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height =  256;
    const context = canvas.getContext('2d'); //Used to write text on the screen.

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshBasicMaterial({map: texture});
    const geometry = new THREE.BoxGeometry(3, 1.2, 1.5);

    const screen = new THREE.Mesh(geometry, material);
    const edges = new EdgesGeometry(screen.geometry);
    const edgeLines = new LineSegments(edges, new LineBasicMaterial({color: port_colour}));
    screen.add(edgeLines);
    //Positions the screen so that it's to the right of the ports.
    screen.position.set(5, 0, 2.6);

    let scrollX = canvas.width; //Start writing text just off the right side of the screen.

    function update() {
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, canvas.width, canvas.height);

        //Text styling
        context.fillStyle = "#00ff00";
        context.font = "bold 125px Arial";
        context.textAlign = "left";
        context.textBaseline = "middle";

        //Measures text width so we know how far to scroll.
        const textWidth = context.measureText(text).width;
        const gap = 150;

        //Draws the text twice to appear as a scrolling effect.
        context.fillText(text, scrollX, canvas.height / 2);
        context.fillText(text, scrollX + textWidth + gap, canvas.height / 2);

        //Moves text to the left each frame.
        scrollX -= 2;
        if (scrollX + textWidth < 0) {
            scrollX += textWidth + gap;
        }

        //Tells THREE.js the texture needs updating this frame.
        texture.needsUpdate = true;
    }

    //Returns both the screen and update function.
    return {screen, update};
}

//Function that updates the HTML if a port is clicked.
function updateProjectInfo(project) {
    //Find the project tile element.
    const projectTitle = document.getElementById('projecttitle');
    if (projectTitle) {
        //If it exists then look further for the p and strong elements within the projectTitle.
        const titleText = projectTitle.querySelector('p strong');
        //If that exists then update the text content to contain the title and the date.
        if (titleText) {
            const name = project.name ? project.name.toUpperCase() : "PROJECT";
            const date = project.date ? project.date.toUpperCase() : "";
            titleText.textContent = date ? `${name} | ${date}` : name;
        }
    }

    //Find the skills element.
    const projectSkills = document.getElementById('skills');
    if (projectSkills) {
        //If it exists then fetch the data from the JSON file with the name of skills or technologies or an empty array.
        const skillsArr = project.skills || [];
        //Change the HTML so it looks like a list with commas instead of just outputting the raw array.
        projectSkills.innerHTML = skillsArr.length ? skillsArr.join(", ") : "";
    }
    const descriptionContainer = document.getElementById('description');
    if (descriptionContainer) {
        if (project.name === "Select a Port" || project.name === "Coming Soon") {
            descriptionContainer.classList.add("center-description");
            descriptionContainer.classList.remove('expanded');
        } else {
            descriptionContainer.classList.remove("center-description");
            descriptionContainer.classList.add('expanded');
        }
    }
    //Find the text description element.
    const projectDescription = document.getElementById('fulldescription');
    if (projectDescription) {
        //If it exists look for the <strong> element inside the full description div.
        const description = projectDescription.querySelector('strong');
        //If it exists then replace the <strong> element's text content with whats in the JSON file.
        if (description) {
            description.textContent = project.fullDescription || project.description || "";
        }
    }

    const projectImage = document.getElementById('project-image');
    if (projectImage) {
        if (project.image) {
            projectImage.src = project.image;
            projectImage.style.display = "block";
        } else {
            projectImage.style.display = "none";
        }
    }

    const projectLink = document.getElementById('projectlink');
    if (projectLink) {
        if (project.githubUrl) {
            const urls = project.githubUrl.split(",");
            projectLink.innerHTML = urls.map(url =>
                `<a href="${url.trim()}" target="_blank">${url.trim()}</a>`).join("<br>");
        } else {
            projectLink.innerHTML = "";
        }
    }
}


function onMouseClick(event) {
    //Size of the scene on the screen and converts the mouse position to the 3D scene coordinates.
    const rect  = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    //Makes a ray that detects for mouse events such as clicks.
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(clickablePorts, true);  

    //If at least one object is clicked, check the parent objects and verify that it is a port.    
    if (intersects.length > 0) {
        const clickedPort = intersects[0].object.parent;
        if (clickedPort.userData.isPort) {
            //If it is a port and it has data inside of it, update the PHP below to display the project information.
            updateProjectInfo(clickedPort.userData.project);
        }
    }
}


//Initialize the 3D scene and start the animation.
async function init() {
    await loadProjects(); //Let the JSON load before continuing
    createPorts(); //Create the clickable ports and add them to the switch.

    //Add cables to the switch and connect them to the ports.
    createCable(clickablePorts[0], 0, 5, false);
    createCable(clickablePorts[1], 0, 5, false);
    createCable(clickablePorts[2], 0, 5, false);
    createCable(clickablePorts[3], 0, 5, false);

    //Create a screen and add text to it.
    const {screen, update: updateScreen} = createScreen("PICK A PORT");
    network_switch.add(screen);

    renderer.domElement.addEventListener('click', onMouseClick);

    scene.add(network_switch);

    //LED flicker update so it lights up randomly.
    let lastUpdate = 0;
    function animate(time) {
        requestAnimationFrame(animate);

        if (time - lastUpdate > 200) {
            leds.forEach((led, index) => {
                if (index < 4) {
                    if (Math.random() > 0.8) {
                        led.material.color.set(LED_ON_colour);
                    } else {
                        led.material.color.set(LED_OFF_colour);
                    }
                } else {
                    led.material.color.set(LED_OFF_colour);
                }
            });
            lastUpdate = time;
        }

        updateScreen();
        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    //Default text before the user clicks a port.
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
