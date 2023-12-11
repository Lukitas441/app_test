<?php
    $code = rand(100000, 999999);

    $destinatario = 'lucasrabimorad@gmail.com';
    $asunto = "Verificación de cuenta";
    $cuerpo = "
    Hola,

    Este es un mensaje automatico para verificar tu cuenta
    El codigo es ".$code."
    
    Ingresalo para verificar tu cuenta
    ";


    echo $destinatario;
    $mailResult = mail($destinatario, $asunto, $cuerpo);
    echo $mailResult
  ?>