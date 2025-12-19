<!DOCTYPE html>
<!--
TO DO:
xxx Finish the @media for the projects page.
xxx Fix the CSS of the description for @media.
xxx Make the container larger to fit all the information.
xxx Add rounded corners to most/all elements.
xxx Fix the URL rewriting and make it compatible with .htaccess changes.
xxx Change the CSS on pages to import other CSS files, makes it easier on file organization and structure (Maybe look into Sass).
--- Add a features section to put between the skills and first image.
--- Try and change the material to an animated one, maybe ask Ryan which one he used for his?
--- Add the portfolio description and if it comes out then add the claude hackathon one too.
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