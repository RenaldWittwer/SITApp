<?php
    //connect to mysql db
    $host_name  = "mysql.localhost";
    $database   = "database"; 
    $user_name  = "user_name";
    $password   = "password";
    

    $con = mysqli_connect($host_name, $user_name, $password, $database);
    
    if (mysqli_connect_errno())
    {
    	echo "No connection to SQL Server: " . mysqli_connect_error();
    }
    

?>