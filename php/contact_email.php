<?php

// Debugging tools. Only turn these on in your development environment.

//error_reporting(-1);
//ini_set('display_errors', 'On');
//set_error_handler("var_dump");

// Special mail settings that can make mail less likely to be considered spam
// and offers logging in case of technical difficulties.

ini_set("mail.log", "/tmp/mail.log");
ini_set("mail.add_x_header", TRUE);

//variables
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = 'brickyjenkins@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from example... contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nMessage:\n$message\n\n\nAs i promised, this is a working contact form  made by csandreas1. If you need any help email me at webdominar1@gmail.com and i would be glad to help. You can support me by subscribing and sharing the video. Any donations are highly accepted, this will help me to continue making helpful videos! https://www.paypal.me/csandreas1 ";
$headers = "From: noreply@sandyspetshop.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
/*
$headers = "Content-Type: text/html; charset=UTF-8"; //Do you see "chinese" in your email? Add this if your language is  supported by the Unicode Standard. Also make sure to replace any php \n with <br> Find if your language is supported at: http://www.unicode.org/standard/supported.html
*/

if(mail($to,$email_subject,$email_body,$headers)){ echo "Mail sent!";} else{ echo "Error, check your logs."; }
return true;