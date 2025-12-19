<!DOCTYPE html>
<!--
TO-DO LIST:
xxxs Add rounded corners to most/all elements.
xxx Change the CSS on pages to import other CSS files, makes it easier on file organization and structure (Maybe look into Sass).
-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/PORTFOLIO/styles/resume.css">
    <link rel="icon" href="/PORTFOLIO/favicon.png" type="image/png">
    <title>SameerUH | Resume</title>
</head>
<body>
    <?php
    include $_SERVER['DOCUMENT_ROOT'] . "/PORTFOLIO/includes/background_and_import.php";
    include $_SERVER['DOCUMENT_ROOT'] . "/PORTFOLIO/includes/navbar_fragment.php";
    ?>

    <div id="title">
        <p><strong>RESUME</strong></p>
    </div><br>

    <div id="resume">
        <embed src="/PORTFOLIO/assets/Sameer Haq CV (Base).pdf" type="application/pdf" width="100%" height="100%" />
    </div><br>

    <?php
    include $_SERVER['DOCUMENT_ROOT'] . '/PORTFOLIO/includes/footer_fragment.php';
    ?>
</body>
</html>