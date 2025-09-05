<!DOCTYPE html>
<!--
TODO LIST:
xxx First add buttons and make divs of the initial design.
xxx Decide on a colour scheme to use.
xxxx Implement the 3D aspect of three.js.
xxx Decide on the design of the buttons.
xxx Possibly add an animated background, (black background with white something????).
xxx Change images to cubes that you can rotate.
--- Make a scrollable timeline using arrows on the side.
--- Add cool footer.
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
    </div>

    <div id="aboutme">
        <div class="card-content">
            <p><span class="underline bold text-large">About Me:</span><br>
                I'm Sameer Ul Haq, a second-year Cyber Security student at Northumbria University with a passion for tech, security, and making a meaningful impact. I'm CCNA certified and regularly develop my skills through TryHackMe and Hack The Box.<br><br>I enjoy programming in Python, C, and JavaScript — building everything from small games to full-stack apps — and aim to grow into a well-rounded cybersecurity professional.<br><br>

                <span class="underline bold text-large">Interests:</span><br>
                I'm most excited when working on projects that challenge me creatively and technically. I've developed applications like Pong, GratiThink (a web/mobile app that promotes student wellbeing), and interactive portfolio websites using modern tools like React and Three.js. I also enjoy problem-solving, collaborative teamwork, and continuously learning how different programming languages can be applied to help people in practical ways.<br><br>

                <span class="underline bold text-large">Motiviations:</span><br>
                I believe technology should protect and empower. Cybersecurity is evolving and is key to safeguarding people and data and I'm inspired by how tech can protect people from various attackers.
            </p>
            <div class = "image-swap-container">
                <img class="base-image" src="../assets/thumbnails/profilepicture.jpg" alt="originalimg">
                <img class="hover-image" src="../assets/thumbnails/archery.jpg" alt="hoverimg">
            </div>
        </div>
    </div>

    <script type="module" src="../js/pinned.js"></script>
    <div id="pinned">
        <div id="pinned-tooltip"></div>
    </div>

    <br>

    <div id="timeline">
        <div class="slide fade">
            <div class="year">2024</div>
            <div class="text">
                <div class="modules"><strong>UNIVERSITY MODULES (1st year):</strong>
                <br>Computers and Society (56%): Research paper on PEGI laws and regulations.
                <br>Data Fundamentals (40%): Written report on data security concepts and development of graphs based on big data using Python (Pandas, Matplotlib).
                <br>Programming (97%): Developed a productivity app using Python (Flask) with HTML and CSS including features such as to-do lists, calendars, creation and deletion of notes and user creation and authentication.
                <br>Introduction to Networks and Cyber Security (57%): Learned basic device configuration (switches, routers and hosts), IP addressing schemes and networking protocols/practices.
                <br>Computing Fundamentals (67%): Created a Caesar Cipher with x86 assembly language whilst learning set notation and logic gates.
                <br>Computational Thinking (77%): Designed wireframes for our own and existing applications.</div><br>
                <div class="projcerts"><strong>PROJECTS/CERTIFICATES:</strong>
                    <br>CCNAv7: Introductions to Networks.
                    <br>Productivity App - Python.</div><br>
                <div class="extra"><strong>EXTRA-CURRICULAR:</strong>
                    <br>Attended various networking event learning more about the industry.
                    <br>Member of Cyber Clinic to learn more about Penetration testing.
                    <br>Attended CTFs hosted by the university.
                    <br>Learning various different areas such as bash scripting and JavaScript to improve my portfolio.
                </div>
            </div>
        </div>
        <div class="slide fade">
            <div class="year">2025</div>
            <div class="text">
                <div class="modules"><strong>UNIVERSITY MODULES (2nd year):</strong>
                <br>Network Switching and Routing (86%): Network creation and security learning concepts with CISCO such as STP, RIPv2, DHCP, port-security, WLANs, VLANs and toplogys such as Router on a stick and Inter-VLAN routing.
                <br>Human Factors in Cyber Security (75%): Research paper on how consumers react to data breaches with different variables such as type of attack, duration, time and overall view on data handling using results from interviews.
                <br>Operating Systems (68%): Multithreading systems in Ubuntu using C including file, selection and loop system and creation of DNS servers with Linux (Bind9) learning various topics such as deadlocks, semaphores, etc.
                <br>Computing Consultancy Project (88%): Developed an 80-page cyber security framework with a group of talented students for primary schools with the North Tyneside Council going over concepts such as endpoint and network security, access control, etc.
                <br>Digital Forensics Incident Response (80%): Investigated and analyzed a simulated criminal case using tools such as Autopsy, DB browser, FTK Registry Viewer and Volatility learning various terms such as windows artefacts, imaging cases, etc.
                <br>Mobile & Web App Development (72%): Developed a website and mobile app using HTML, CSS, PHP, JavaScript and React with features such as filtered reviews, components, pages, routes, error pages, etc.</div><br>
            <div class="projcerts"><strong>PROJECTS/CERTIFICATES:</strong>
                <br>CCNA: Switching, Routing and Wireless Essentials
                <br>GratiThink.
                <br>Pong.
                <br>Portfolio website.</div><br>
            <div class="extra"><strong>EXTRA-CURRICULAR:</strong>
                <br>Configured a Kali Linux Environment on a Raspberry Pi for experimenting with penetration testing outside of university.
                <br>Started paths on TryHackMe and started practicing my penetration testing on HackTheBox machines.
        </div>
        </div>
        </div>
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div><br>
    <script src="../js/timeline.js"></script>

    <?php
    include '../includes/footer_fragment.php';
    ?>
</body>
</html>