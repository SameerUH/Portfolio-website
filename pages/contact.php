<!DOCTYPE html>
<!---
TODO LIST:
--- Maybe look into removing the slideshow to different pages and maybe just have a set of logos for people to click.
--- Start and complete email form.
--->
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
        <div class="row">
            <a href=""><img src="../assets/linked_in_logo.png" alt="LINKEDIN LOGO"></a>
            <a href=""><img src="../assets/github.png" alt="GITHUB LOGO"></a>
        </div>
        <div class="row">
            <a href=""><iframe src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3019828"></iframe></a>
            <a href="https://www.hackthebox.eu/home/users/profile/1925576"><img src="https://www.hackthebox.com/badge/image/1925576"></a>
        </div>
    </div><br>

    <div id="form">
        <p><strong>EMAIL SECTION.</strong></p>
    </div><br>

    <?php
    include '../includes/footer_fragment.php';
    ?>
</body>
</html>