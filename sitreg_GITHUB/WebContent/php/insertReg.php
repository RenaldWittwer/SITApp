<?php
    //connect to mysql db
    $host_name  = "mysql.localhost";
    $database   = "database"; 
    $user_name  = "user_name";
    $password   = "password";


    MYSQL_CONNECT($host_name, $user_name, $password) or die ("Connect Error");
    MYSQL_SELECT_DB($database) or die ( "DB Error");

    
    // 
    session_start();
    
    //read the json file contents
    //$jsondata = file_get_contents('empdetails.json');
    
    //convert json object to php associative array
    //$data = json_decode($jsondata, true);
    
    $json = $_POST['registration'];
    //var_dump(json_decode($json, true));
    
    $registration = json_decode($json, true);

    $name = $registration['Name'];
    if ($name == ""){
    	die("Name empty");
    };
    //echo $name;
    $linkToBio = $registration['LinkToBio'];
    $twitter = $registration['Twitter'];
    $fridayEvent = $registration['FridayEvent'];
    $saturdayEvent = $registration['SaturdayEvent'];    
    $email = $registration['Email'];
    if ($email == ""){
      die("Email empty");
    };
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    	die("Invalid Email");
    }
    $phone = $registration['Phone'];
    $receipt = $registration['Receipt'];
    $address = $registration['Address'];
    $company = $registration['Company'];
    $relation = $registration['Relation'];
    $captcha = $registration['Captcha'];
    
    //echo $_SESSION['captcha_spam'];
    
    if ($captcha == $_SESSION['captcha_spam']) {
    //insert into mysql table
    $sql = "INSERT INTO sitRegistration VALUES ('', CURRENT_TIMESTAMP, '$name', '$linkToBio', '$twitter', '$fridayEvent', '$saturdayEvent', '$email', '$phone', '$receipt', '$address', '$company', '$relation')";

    MYSQL_QUERY($sql) or die ("Insert Error");
    echo "OK";
    //$sql = "INSERT INTO sitRegistration(RegistrationID, Name)
    //VALUES('$registrationID', '$name')";
    //echo $sql;
    //if(!mysql_query($sql,$con))
    //{
    //    die('Error : ' . mysql_error());
    //}
    }else {
         die("Captcha Error");
   }

    //close the db connection
    //mysqli_close($con);
    
?>