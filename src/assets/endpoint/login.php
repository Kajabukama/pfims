<?php

    require_once 'config.php';

    $data = array();
    $postdata = file_get_contents("php://input");

    if(isset($postdata)){

      $request = json_decode($postdata);
      $email = $request->email;
      $password = $request->password;


      if(empty($email) && empty($password)){
        	$data = array("status" => false);
      } else {
        	$query = "SELECT * FROM users WHERE email = '$email' AND password = '$password' LIMIT 1";
          $result = mysqli_query($link, $query);

          if(mysqli_num_rows($result) > 0){
            $data = array("status" => true);
          } else {
            $data = array("status" => false);
          }
      }
    }

    echo json_encode($data);
	  mysqli_close($link);
?>
