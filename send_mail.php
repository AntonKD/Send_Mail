<?php
//require_once("../../../wp-load.php");// if it's wordpress. Use this line. If not, then let everything stand still in its place
class send_meil{
    function sc_send( ){
        $params = $_REQUEST;
        $massee = "name: " . $params['name'] . "    email: " . $params['email'] . "    phone: " . $params['phone'];
        mail("nnaannsszz@gmail.com", 'Help me', $massee); // if this is WordPress you can delete this line
        //wp_mail("nnaannsszz@gmail.com", 'Help me', $massee); //if it's wordpress. Use this line. If not, then let everything stand still in its place
    }
}
$mail= new send_meil();
$mail->sc_send();


?>
