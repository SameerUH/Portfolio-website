<!DOCTYPE html>
<!---
TODO LIST:
xxx Maybe look into removing the slideshow to different pages and maybe just have a set of logos for people to click.
xxx Start and complete email form.
--- Add rounded corners to most/all elements.
--- Do @media for the page.
--- Fix the tryhackme iframe somehow.
--- Maybe redesign the page to make it look nicer and not bland???
--->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/PORTFOLIO/styles/contact.css">
    <link rel="icon" href="/PORTFOLIO/favicon.png" type="image/png">
    <title>SameerUH | Contact</title>
</head>
<body>
    <?php
    include $_SERVER['DOCUMENT_ROOT'] . "/PORTFOLIO/includes/background_and_import.php";
    include $_SERVER['DOCUMENT_ROOT'] . "/PORTFOLIO/includes/navbar_fragment.php";
    ?>

    <div id="title">
        <p><strong>CONTACT</strong></p>
    </div><br>

    <div id="socialsection">
        <div class="row">
            <a href="https://www.linkedin.com/in/sameer-ul-haq-6861b923b"><img src="/PORTFOLIO/assets/thumbnails/socialsicons/linkedin1.jpg" alt="LINKEDIN LOGO"></a>
            <a href=""><iframe src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3019828" scrolling="no" frameborder="0"></iframe></a>
            <a href="https://github.com/SameerUH"><img src="/PORTFOLIO/assets/thumbnails/socialsicons/github.jpg" alt="GITHUB LOGO"></a>
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
    include $_SERVER['DOCUMENT_ROOT'] . '/PORTFOLIO/includes/footer_fragment.php';
    ?>
</body>
</html>