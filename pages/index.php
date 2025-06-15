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
    <link rel="stylesheet" href="../styles/index.css">
    <title>SAMEER HAQ</title>
</head>

<body>
    <?php
    include "../includes/background_and_import.php";
    include "../includes/navbar_fragment.php";
    ?>

    <div id="keywords">
        <p><strong>CYBER SECURITY ENTHUSIAST | CCNA | PENTESTING | PROGRAMMING</strong></p>
    </div><br>

    <div id="aboutme">
        <p><strong><u>About Me:</u></strong><br>
            I'm Sameer Ul Haq, a second-year Cyber Security student at Northumbria University with a passion for tech, security, and making a meaningful impact. I'm CCNA certified and regularly develop my skills through TryHackMe and Hack The Box.<br><br>I enjoy programming in Python, C, and JavaScript — building everything from small games to full-stack apps — and aim to grow into a well-rounded cybersecurity professional.<br><br>

            <strong><u>Interests:</u></strong><br>
            I'm most excited when working on projects that challenge me creatively and technically. I've developed applications like Pong, GratiThink (a web/mobile app that promotes student wellbeing), and interactive portfolio websites using modern tools like React and Three.js. I also enjoy problem-solving, collaborative teamwork, and continuously learning how different programming languages can be applied to help people in practical ways.<br><br>

            <strong><u>Motiviations:</u></strong><br>
            I believe technology should protect and empower. Cybersecurity is evolving and is key to safeguarding people and data and I'm inspired by how tech can protect people from various attackers.
        </p>
        <div class = "image-swap-container">
            <img class="base-image" src="../assets/thumbnails/profilepicture.jpg" alt="originalimg">
            <img class="hover-image" src="../assets/thumbnails/archery.jpg" alt="hoverimg">
        </div>
    </div>

    <div id="pinned">
        <p>PONG</p>
        <p>NORTH TYNESIDE COUNCIL FRAMEWORK</p>
        <p>STUDENT PLACEMENT</p>
    </div>

    <div id="timeline">
        <p>TIMELINE</p>
    </div><br>

    <?php
    include '../includes/footer_fragment.php';
    ?>
</body>
</html>