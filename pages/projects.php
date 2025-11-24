<!DOCTYPE html>
<!--
TO DO:
--- Finish the @media for the projects page.
--- Change the CSS on pages to import other CSS files, makes it easier on file organization and structure.
--- Fix the CSS of the description for @media.
--- Make the container larger to fit all the information.
xxx Add rounded corners to most/all elements.
xxx Fix the URL rewriting and make it compatible with .htaccess changes.
-->
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
        <div id="tooltip"></div>
        <script type="module" src="/PORTFOLIO/js/newswitchmodel.js"></script>
    </div><br>

    <div id="project-display">
        <div id="projecttitle">
            <p><strong>PROJECT TITLE | DATE</strong></p>
        </div><br>

        <div id="description">
            <div class="skillsandimagerow">
                <div id="skills"><strong></strong></div>
                <img id="project-image" alt="Project Image" style="display:none;"><br>
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