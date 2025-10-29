<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/contact.css">
    <title>SameerUH | Contact</title>
</head>
<body>
    <?php
    include "../includes/background_and_import.php";
    include "../includes/navbar_fragment.php";
    ?>

    <div id="title">
        <p><strong>CONTACT</strong></p>
    </div><br>

    <div id="socialsection">
        <div class="slide socials fade">
            <img src="../assets/linkedin_face.png" alt="LinkedIn picture">
            <p><strong>LINKEDIN.</strong></p>
            <p>IT Student Placement @ Northumbria University | BSc Computer Networks and Cyber Security student @ Northumbria University | CCNA</p>
            <a href="https://uk.linkedin.com/in/sameer-ul-haq-6861b923b">Profile Link</a>
        </div>
        <div class="slide socials fade">
            <img src="../assets/github_face.png" alt="GitHub picture">
            <p><strong>GITHUB.</strong></p>
        </div>
        <div class="slide socials fade">
            <img src="../assets/tryhackme_face.png" alt="TryHackMe picture">
            <p><strong>TRYHACKME.</strong></p>
        </div>
        <div class="slide socials fade">
            <img src="../assets/htb_face.png" alt="HTB picture">
            <p><strong>HTB.</strong></p>
        </div>
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div><br>
    <script src="../js/timeline.js"></script>

    <div id="form">
        <p><strong>EMAIL SECTION.</strong></p>
    </div><br>

    <?php
    include '../includes/footer_fragment.php';
    ?>
</body>
</html>