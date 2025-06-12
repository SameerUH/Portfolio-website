<!DOCTYPE html>
<!--
TODO LIST:
- First add buttons and make divs of the initial design.
- Decide on a colour scheme to use.
xxxx Implement the 3D aspect of three.js.
- Decide on the design of the buttons.
- Possibly add an animated background, (black background with white something????).
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

    <div class="video-background">
        <video autoplay muted loop playsinline id = "myVideo">
            <source src="./assets/thumbnails/PotentialBackground4.mp4" type="video/mp4">
        </video>
        <div class="video-overlay"></div>
    </div>

    <div class="navbar">
        <nav>
            <ul>
                <li> <a href="projects.php"><span>PROJECTS</span></a></li>
                <li> <a href="certificates.php"><span>CERTIFICATES</span></a></li> <!--Span: inline container for phrasing content.-->
            </ul>

            <div id='SAMEERHAQ'>
                <div id = "tooltip"></div>
            </div>

            <ul>
                <li> <a href="contact.php"><span>CONTACT ME</span></a></li>
                <li> <a href="resume.php"><span>RESUME</span></a></li>
            </ul>
        </nav>
    </div><br>

    <div id="keywords">
        <p>CYBER SECURITY ENTHUSIAST | CCNA | PENTESTING | PROGRAMMING</p>
    </div><br>

    <div id="aboutme">
        <p>ABOUT ME + MOTIVATION AND INTERESTS</p>
    </div>

    <div id="pinned">
        <p>PINNED ACHIEVEMENTS</p>
        <p>PINNED ACHIEVEMENTS</p>
        <p>PINNED ACHIEVEMENTS</p>
    </div>

    <div id="timeline">
        <p>TIMELINE</p>
    </div><br>

    <footer>
        <p>FOOTER</p>
    </footer>

    <script type="module" src="./js/project.js"></script>
</body>
</html>