<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/project.css">
    <link rel="icon" href="../favicon.png" type="image/png">
    <title>Projects | SameerUH</title>
</head>
<body>
    <?php
    include "../includes/background_and_import.php";
    include "../includes/navbar_fragment.php";
    ?>

    <div id="title">
        <p><strong>PROJECTS</strong></p>
    </div><br>

    <div id="newprojectmodel">
        <script type="module" src="../js/newswitchmodel.js"></script>
    </div><br>

    <div id="projecttitle">
        <p><strong>PROJECT TITLE | DATE</strong></p>
    </div><br>

    <div id="description">
        <p><strong>PROJECT DESCRIPTION</strong></p>
    </div><br>

    <?php
    include '../includes/footer_fragment.php';
    ?>
</body>
</html>