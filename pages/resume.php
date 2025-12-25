<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styles/resume.css">
    <link rel="icon" href="/favicon.png" type="image/png">
    <title>SameerUH | Resume</title>
</head>
<body>
    <?php
    include $_SERVER['DOCUMENT_ROOT'] . "/includes/background_and_import.php";
    include $_SERVER['DOCUMENT_ROOT'] . "/includes/navbar_fragment.php";
    ?>

    <div id="title">
        <p><strong>RESUME</strong></p>
    </div><br>

    <div id="resume">
        <embed src="/assets/Sameer Haq CV (Base).pdf" type="application/pdf" width="100%" height="100%" />
    </div><br>

    <?php
    include $_SERVER['DOCUMENT_ROOT'] . '/includes/footer_fragment.php';
    ?>
</body>
</html>