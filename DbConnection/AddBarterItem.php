<?php
include('db.php');

$Barter_my = $Decode_React_APP_Data['Barter_my'];
$My_value = $Decode_React_APP_Data['My_value'];
$Wish_list = $Decode_React_APP_Data['Wish_list'];
$Description = $Decode_React_APP_Data['Description'];


// $query = "SELECT * FROM student_users WHERE id_number = '$Id_numb'";
// $query_result = mysqli_query($connect_db, $query);

// if (!mysqli_num_rows($query_result))
// {
    $Reg_Query = "INSERT INTO barter_items(`barter_name`, `description`, `value`, `category_id`, `status`, `user_id`) VALUES ('$Barter_my', '$Description', '$My_value', '1', 'Available', '1')";
    $Reg_Query_Result = mysqli_query($connect_db, $Reg_Query);

    if ($Reg_Query_Result) 
	{
        $Message = "Successfully Added!";
        $lastIdQuery = "SELECT barter_item_id from barter_items ORDER BY barter_item_id DESC LIMIT 1";
        $lastId = mysqli_query($connect_db, $lastIdQuery);
        $lid_fetch= mysqli_fetch_array($lastId);
        $Lid = $lid_fetch['barter_item_id'];

        // insert wishlist
        $wishlist = "INSERT INTO wishlists(`wishlist_name`, `barter_item_id`) VALUES ('$Wish_list', '$Lid')";
        $wishlist_result = mysqli_query($connect_db, $wishlist);
    } else 
	{
        $Message = "Error - Try again";
    }
	
// } else 
// {
//     $Message = "User Already Registered";
// }

$response[] = array("Message" => $Message);

echo json_encode($response);
?>