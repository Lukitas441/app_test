<!DOCTYPE html>
<html lang="en">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="../../normalize.css">
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mail verify</title>
</head>
<body>
<?php
    include_once '../../NEGOCIO/usuario.php';
    session_start();

    $code = rand(100000, 999999);

    $destinatario = $_SESSION['userEmail'];
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
    <h1 class="display-6">Valida tu email</h1>
    <form action="" method="post">
        <label for="verifying_code">Escribe el codigo</label>
        <input type="text" name="verifying_code" class="form-control" maxlength="6">
        <button type="submit" class="btn btn-success">Verificar</button>
  </form>

</body>
</html>