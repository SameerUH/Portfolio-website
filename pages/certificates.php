<!DOCTYPE html>
<!-- 
xxx Add more details of the certificates including dates and possibly a bulleted list of what you learnt.
--- Add the grade unless you are still doing it.
xxx Make the formatting nice and figure out how to do full width borders.
--- Look into @media with CSS.
-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/certificates.css">
    <link rel="icon" href="../favicon.png" type="image/png">
    <title>SameerUH | Certificates</title>
</head>
<body>
    <?php
    include "../includes/background_and_import.php";
    include "../includes/navbar_fragment.php";
    ?>

    <div id="title">
        <p><strong>CERTIFICATES</strong></p>
    </div><br>

    <div id="certificates">
        <div class = "sections">
            <p class="title"><strong>CCNA V1: Introduction to Networks</strong></p>
            <p>
                <ul><li>Learnt IPv4 and IPv6 addressing.</li>
                <li>Understanding of network protocols with physical and data links.</li>
                <li>Basic router and switch configuration through simulators such as Packet Tracer and physical hardware in workshops.</li>
                <li>Learnt basic security and troubleshooting fundamentals.</li>
                <li>Learnt basic concepts such as TCP, UDP, OSI.</li></ul>
                <i>Issued: 29/01/2024</i>
            </p>
        </div><br>
        <div class = "sections">
            <p class="title"><strong>CCNA V2: Switching, Routing, and Wireless Essentials</strong></p>
            <p>
                <ul><li>Learnt about VLANs and inter-VLAN routing.</li>
                <li>Understanding of wireless networking concepts such as WLANs and NICs.</li>
                <li>Learnt about network security and best practices such as DHCP, STP, and port security.</li>
                <li>Learnt IP routing with static and dynamic routing protocols including RIPv2.</li>
                <li>Learnt various troubleshooting techniques when facing attacks or network issues.</li></ul>
                <i>Issued: 27/01/2025</i>
            </p>
        </div><br>
        <div class = "sections">
            <p class="title"><strong>CISCO: Ethical Hacker</strong></p>
            <p>
                <ul><li>Learnt about penetration testing methodologies.</li>
                <li>Learnt about documentation/reporting and various laws that takes place before, during and after pentesting such as Rules of Engagements.</li>
                <li>Learnt about information gathering and vulnerability scanning on Kali Linux machines such as OSINT.</li>
                <li><i>TBA</i></li>
                <li><i>TBA</i></li></ul>
                <i>Issued: Ongoing</i>
            </p>
        </div>
    </div><br>

    <?php
    include '../includes/footer_fragment.php';
    ?>
</body>
</html>