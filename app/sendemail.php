<?php

    $to = "maor.leger@gmail.com";

    $subject = "Contact from maorleger.com!";

    $data = file_get_contents("php://input");

    $objData = json_decode($data);


    $text = $objData->text;
    $from = $objData->email;
    $name = $objData->name;


    $message = sprintf("Message from %s at %s: %s", $name, $from, $text);

    mail($to, $subject, $message);
?>