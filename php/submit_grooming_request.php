<?php
//variables

# connect to database
$db = new mysqli('localhost','root','pwdpwd','pet_shop');
$firstname = strip_tags(htmlspecialchars($_POST['firstname']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['message']));
$lastname = strip_tags(htmlspecialchars($_POST['lastname']));
$address = strip_tags(htmlspecialchars($_POST['address']));
$city = strip_tags(htmlspecialchars($_POST['city']));
$state = strip_tags(htmlspecialchars($_POST['state']));
$zipcode = strip_tags(htmlspecialchars($_POST['zipcode']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$pet_type = strip_tags(htmlspecialchars($_POST['type']));
$pet_name = strip_tags(htmlspecialchars($_POST['petname']));
$pet_age = strip_tags(htmlspecialchars($_POST['petage']));
$breed = strip_tags(htmlspecialchars($_POST['breed']));
$ns_val = strip_tags(htmlspecialchars($_POST['ns_val']));

####################################
# check if we successfully connected
####################################
if (!$db) {
    die("Connection failed: " . mysqli_connect_error());
    return '500';
}
####################
# build SQL query
####################
$sql = "INSERT INTO grooming (FirstName, LastName, Address, City, State, Zip, PhoneNumber, Email, PetName, Breed, PetType, NeuteredOrSpayed) VALUES (\"$firstname\", \"$lastname\", \"$address\", \"$city\", \"$state\", \"$zipcode\", \"$phone\", \"$email\",\"$pet_name\", \"$breed\", \"$pet_type\", \"$ns_val\")";

#############################
# send info to database
#############################
if (mysqli_query($db, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($db);
}

mysqli_close($db);
return '200';

