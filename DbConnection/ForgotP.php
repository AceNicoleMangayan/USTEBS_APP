<?php
include('db.php');

$Id_numb = $Decode_React_APP_Data['id_numb'];
$Password = $Decode_React_APP_Data['Password']; 


$query = "SELECT * FROM registrationapp_react WHERE id_numb = '$Id_numb'";
$query_result = mysqli_query($connect_db, $query);


if (mysqli_num_rows($query_result)) {
$DB_Elements= mysqli_fetch_array($query_result);

    if ($DB_Elements['Password'] == $Password) {
        $Message = "Logged In Successfully";
    } else { 
		$Message = "Password is wrong";
    }
} 
else 
{
    $Message = "User does not exist";
}

$response[] = array("Message" => $Message);

echo json_encode($response);

?>