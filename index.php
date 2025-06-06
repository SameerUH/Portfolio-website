<!DOCTYPE html>
<!--
TODO LIST:
- First add buttons and make divs of the initial design.
- Decide on a colour scheme to use.
- Implement the 3D aspect of three.js.
-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="favicon.png" type="image/png">
    <link rel="stylesheet" href="./style.css">
    <title>SAMEER HAQ</title>
</head>

<body>
    <script type="importmap">
    {
        "imports": {
            "three": "https://unpkg.com/three@0.160.0/build/three.module.js", "three/examples/jsm/controls/OrbitControls.js":
            "https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js"
        }
    }
    </script>


    <button>PROJECTS</button>
    <button>CERTIFICATES</button>
    <div id='SAMEERHAQ'></div>
    <button>CONTACT ME</button>
    <button>RESUME</button>

    <script type="module" src="./js/project.js"></script>
</body>
</html>