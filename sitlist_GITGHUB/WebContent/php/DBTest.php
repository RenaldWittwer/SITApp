<?php
    $host_name  = "mysql.localhost";
    $database   = "database"; 
    $user_name  = "user_name";
    $password   = "password";


    $connect = mysqli_connect($host_name, $user_name, $password, $database);
    if (mysqli_connect_errno())
    {
    echo "Verbindung zum MySQL Server fehlgeschlagen: " . mysqli_connect_error();
    }
?>