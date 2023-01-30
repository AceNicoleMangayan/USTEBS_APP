<?php
include('db.php');

$id = $Decode_React_APP_Data['id_numb'];


$query = "SELECT b.barter_name,b.barter_item_id,b.description,b.dateCreated,b.status,b.user_id, CONCAT(u.firstname,' ',u.lastname) as fullname,u.image_link as profpic, pic.image_link, pic.images FROM student_users u, barter_items b LEFT JOIN barter_items_pics pic ON pic.image_link = b.image_link WHERE b.barter_item_id = '$id' AND b.user_id = u.user_id";

$query_result = mysqli_query($connect_db, $query);
$json_array = array();

if (mysqli_num_rows($query_result)) {
    // $DB_Elements= mysqli_fetch_array($query_result);
    // $Message = "Data Fetched.";
    while($row = mysqli_fetch_assoc($query_result)){
        $json_array[] = $row;
    }
} 
else 
{
    $Message = "No records";
    $DB_Elements = "";
}

// $response[] = array("Message" => $Message, "Alldata" => $DB_Elements );
// $marks = "helloggg";

echo json_encode($json_array);

?>