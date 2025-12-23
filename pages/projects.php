<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/PORTFOLIO/styles/project.css">
    <link rel="icon" href="/PORTFOLIO/favicon.png" type="image/png">
    <title>SameerUH | Projects</title>
</head>
<body>
    <?php
    include $_SERVER['DOCUMENT_ROOT'] . "/PORTFOLIO/includes/background_and_import.php";
    include $_SERVER['DOCUMENT_ROOT'] . "/PORTFOLIO/includes/navbar_fragment.php";
    ?>

    <div id="title">
        <p><strong>PROJECTS</strong></p>
    </div><br>
    <div id="newprojectmodel">
        <script type="module" src="/PORTFOLIO/js/newswitchmodel.js"></script>
        <div id="tooltips"></div>
    </div><br>

    <div id="project-display">
        <div id="projecttitle">
            <p><strong>PROJECT TITLE | DATE</strong></p>
        </div><br>

        <div id="description">
            <div class="skillsandimagerow">
                <div id="languages"><strong></strong></div>
                <div id="features"><strong></strong></div>
                <img id="project-image" alt="Project Image" style="display:none;">
            </div>
            <div id="fulldescription"><strong>PROJECT DESCRIPTION</strong></div><br>
            <div class="imageandlinks">
                <img id="project-image-2" alt="Project Image 2" style="display:none;">
                <div id="projectlink"></div>
            </div>
        </div>
    </div>
    <br>

    <?php
    include $_SERVER['DOCUMENT_ROOT'] . '/PORTFOLIO/includes/footer_fragment.php';
    ?>
</body>
</html>