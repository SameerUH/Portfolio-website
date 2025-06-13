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
        <p><u>About Me:</u><br>
        I'm Sameer Ul Haq, a second-year Cyber Security student at Northumbria University, passionate about the intersection of technology, security, and meaningful impact. I hold a CCNA certification and actively develop my skills through platforms like TryHackMe and Hack The Box, where I explore real-world attack scenarios and defensive strategies.<br>
        Alongside my security focus, I enjoy programming in Python, C, and JavaScript, building everything from simple games to full-stack applications. I aim to combine this technical foundation with hands-on experience to grow into a well-rounded cyber security professional.<br><br>
        <u>Interests:</u><br>
        I'm most excited when working on projects that challenge me creatively and technically. I've developed applications like Pong, GratiThink (a web/mobile app that promotes student wellbeing), and interactive portfolio websites using modern tools like React and Three.js. I also enjoy problem-solving, collaborative teamwork, and continuously learning how different programming languages can be applied to help people in practical ways.<br><br>

        <u>Motiviations:</u><br>
        At the heart of my journey is a belief that technology should be used to protect and empower. Cybersecurity plays a crucial role in safeguarding people, data, and infrastructure — and I'm inspired by how it can also be used to build digital tools that support mental health, safety, and trust in an increasingly connected world.
    </p>
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