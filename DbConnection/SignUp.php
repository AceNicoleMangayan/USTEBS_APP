<?php
include('db.php');

$First_Name = $Decode_React_APP_Data['First_Name'];
$Last_Name = $Decode_React_APP_Data['Last_Name'];
$Gender = $Decode_React_APP_Data['Gender'];
$Email = $Decode_React_APP_Data['Email'];
$FB_Link = $Decode_React_APP_Data['FB_Link'];
$Id_numb = $Decode_React_APP_Data['Id_numb'];
$Address = $Decode_React_APP_Data['Address'];
$Contact_numb = $Decode_React_APP_Data['Contact_numb'];
$Password = ($Decode_React_APP_Data['Password']); //password is un-hashed mean with no hacking capability(change to md5 for secure pass)


$query = "SELECT * FROM student_users WHERE id_number = '$Id_numb'";
$query_result = mysqli_query($connect_db, $query);

if (!mysqli_num_rows($query_result))
{
    $Reg_Query = "INSERT INTO student_users(`firstname`, `lastname`, `email`, `Password`, `id_number`, `address`, `contact_number`, `gender`, `status`) VALUES ('$First_Name', '$Last_Name', '$Email', '$Password', '$Id_numb', '$Address', '$Contact_numb', '$Gender', 'Disable')";
    $Reg_Query_Result = mysqli_query($connect_db, $Reg_Query);

    if ($Reg_Query_Result) 
	{
        $Message = "Registered successfuly!";
        $lastIdQuery = "SELECT user_id from student_users ORDER BY user_id DESC LIMIT 1";
        $lastId = mysqli_query($connect_db, $lastIdQuery);
        $lid_fetch= mysqli_fetch_array($lastId);
        $Lid = $lid_fetch['user_id'];

        // insert ins social med 
        $socialMeds = "INSERT INTO social_media_links(`user_id`, `link`, `site`) VALUES ('$Lid', '$FB_Link', 'facebook')";
        $socialMed_result = mysqli_query($connect_db, $socialMeds);
    } else 
	{
        $Message = "Error - Try again";
    }
	
} else 
{
    $Message = "User Already Registered";
}

$response[] = array("Message" => $Message);

echo json_encode($response);
?>