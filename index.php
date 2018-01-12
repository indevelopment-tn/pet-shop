<?php
/**
 * Created by PhpStorm.
 * User: lizzle
 * Date: 1/11/18
 * Time: 7:28 PM
 */

#$db = new mysqli('localhost','root','','pet_shop');
#print_r($db);

include_once('static/html/header.html');
?>
<div id="content" style="margin-bottom: 200px">

    <div id="greeting">

        <p>The Best a Pet Can Get</p>

    </div>

    <div id="button">
        <a href="grooming.html"><button type="button">Start Grooming!</button></a>
    </div>

</div>
<?php
include_once('static/html/footer.html');
?>