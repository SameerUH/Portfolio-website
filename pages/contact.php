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
    <link rel="icon" href="../favicon.png" type="image/png">
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
            <a href="https://www.linkedin.com/in/sameer-ul-haq-6861b923b"><img src="../assets/thumbnails/socialsicons/linkedin1.jpg" alt="LINKEDIN LOGO"></a>
            <a href=""><iframe src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3019828"></iframe></a>
            <a href="https://github.com/SameerUH"><img src="../assets/thumbnails/socialsicons/github.jpg" alt="GITHUB LOGO"></a>
        </div>
    </div><br>

    <div id="form">
        <h1>MESSAGE ME :D</h1><br>
        <!-- modify this form HTML and place wherever you want your form -->
        <form action="https://formspree.io/f/mdkynobk" method="POST">
        <label>
            <i>Name:</i>
            <input type="name" name="name">
        </label>
        <label>
            <i>Email:</i>
            <input type="email" name="email">
        </label>
        <label>
            <i>Message:</i>
            <textarea name="message"></textarea>
        </label>
        <button type="submit">Send</button>
        </form>
    </div><br>

    <?php
    include '../includes/footer_fragment.php';
    ?>
</body>
</html>