<?php

  require_once 'config.php';

  $obj = "";
  $data = array();

  $query = "SELECT * FROM users";
  $result = mysqli_query($link, $query);
  $count = mysqli_num_rows($result);

  if($count > 0){

    while($rows = mysqli_fetch_assoc($result)){
      $data[] = $rows;
    }

  } else {
    $data[] = "there are not records";
  }

  echo json_encode($data);

  mysqli_close($link);

?>
