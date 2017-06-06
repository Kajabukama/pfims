<?php

      require_once 'config.php';

      $data = array();
      $postdata = file_get_contents("php://input");

      if(isset($postdata)){

      $request = json_decode($postdata);

          $firstname = $request->firstname;
          $lastname = $request->lastname;
          $email = $request->email;
          $password = $request->password;

          if(empty($firstname) && empty($lastname) && empty($email) && empty($password)){
            $data = array("status" => false);
          } else {

            $query = "INSERT INTO users(firstname, lastname, email, password)
            VALUES('$firstname','$lastname','$email','$password')";
              $result = mysqli_query($link, $query);

              if($result){
                $data = array('status' => true);
              } else {
                $data = array('status' => false);
              }
          }


      }

      echo json_encode($data);
      // close connection
      mysqli_close($link);
?>
