<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styles/404.css">
    <link rel="icon" href="/favicon.png" type="image/png">
    <title>Nice try...</title>
</head>
<body>
    <?php
    include $_SERVER['DOCUMENT_ROOT'] . "/includes/background_and_import.php";
    include $_SERVER['DOCUMENT_ROOT'] . "/includes/navbar_fragment.php";
    ?>

    <h1>This is not the page you are looking for...</h1>

    <a href="/index" id="return">RETURN HOME</a><br><br><br>

    <?php
    include $_SERVER['DOCUMENT_ROOT'] . '/includes/footer_fragment.php';
    ?>
</body>
</html>