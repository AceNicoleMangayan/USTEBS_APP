<?php
include('db.php');

$query = "SELECT * FROM registrationapp_react WHERE id_numb = 1";
$query_result = mysqli_query($connect_db, $query);


if (mysqli_num_rows($query_result)) {
    $DB_Elements = mysqli_fetch_array($query_result);

    // if ($DB_Elements['Password'] == $Password) {
    //     $Message = "Logged In Successfully";
    // } else { 
    // 	$Message = "Password is wrong";
    // }
    // $response[] = $query_result;
    $response[] = array("content" => $query_result);
}
// else 
// {
//     $Message = "User does not exist";
// }

// $response[] = array("Message" => $Message);

echo json_encode($response);