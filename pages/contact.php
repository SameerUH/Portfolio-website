<!DOCTYPE html>
<!---
TODO LIST:
xxx Maybe look into removing the slideshow to different pages and maybe just have a set of logos for people to click.
xxx Start and complete email form.
xxx Add rounded corners to most/all elements.
xxx Do @media for the page.
xxx Fix the tryhackme iframe somehow.
xxx Change the CSS on pages to import other CSS files, makes it easier on file organization and structure (Maybe look into Sass).
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
            <a href="https://www.linkedin.com/in/sameer-ul-haq-6861b923b" target="_blank"><img src="/PORTFOLIO/assets/thumbnails/socialsicons/linkedin1.jpg" alt="LINKEDIN LOGO"></a>
            <a href="https://tryhackme.com/p/SameerUH" target="_blank"><img src="https://tryhackme-badges.s3.amazonaws.com/SameerUH.png" alt="Your Image Badge" id="thm_id"/>
            <a href="https://github.com/SameerUH" target="_blank"><img src="/PORTFOLIO/assets/thumbnails/socialsicons/github.jpg" alt="GITHUB LOGO"></a>
        </div>
    </div><br>

    <div id="form">
        <h1>MESSAGE ME :D</h1><br>
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