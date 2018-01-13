<?php
/**
 * Created by PhpStorm.
 * User: lizzle
 * Date: 1/11/18
 * Time: 7:28 PM
 */

#$db = new mysqli('localhost','root','','pet_shop');
#print_r($db);

# header
include_once('static/html/header.html');

####################################################
# html content parent folder
####################################################
$content_prefix = 'static/html/';

####################################################
# determine what page the user requested
####################################################
$page = NULL;
if (isset($_GET['page'])) {
    # set the value of the page
    $page = $_GET['page'];
}

####################################################
# switch statement to control what html page get loaded
####################################################

switch ($page) {
    case "about":
        $content_page = 'about.html';
        break;
    case "grooming":
        $content_page = 'grooming.html';
        break;
    case 'location':
        $content_page = 'location.html';
        break;
    case 'contact':
        $content_page = 'contact.html';
        break;
//    case 'email_contact':
//        $content_page = 'contact_email.php';
//        break;
    default:
        # default page
        $content_page = 'home.html';
}
####################################################
# $content_path = 'static/html/home.html'
####################################################
$content_path = $content_prefix . $content_page;
include_once($content_path);

# footer
include_once('static/html/footer.html');
?>