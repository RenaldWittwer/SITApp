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
    
   
    //fetch table rows from mysql db
    $sql = "select RegistrationID, Name, LinkToBio, Twitter, FridayEvent, SaturdayEvent from sitRegistration ORDER BY RegistrationID";
    
    $result = mysqli_query($con, $sql) or die("Error in Selecting " . mysqli_error($connection));
    
    //create an array
    $emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
    	$emparray[] = $row;
    }
    
    //echo "{ registrations: ";
    echo json_encode($emparray);
    //echo "}";
    
    //close the db connection
    mysqli_close($con);

?>