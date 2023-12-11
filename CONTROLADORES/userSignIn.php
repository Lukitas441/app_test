<?php
    include_once "../NEGOCIO/usuario.php" ;
    session_start();

    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = hash('md5', $_POST['password']);

    $isValid = true;
    foreach ($_POST as $valor) {
        if (empty($valor)) {
          $isValid = false;
          break;
        }
    }

    if ($isValid) {
        try {
            Usuario::setUser($username, $name, $surname, $email, $password);
            $_SESSION['userEmail'] = $email;
            $_SESSION['loggedUser'] = Usuario::getUser($email);
        } catch (\Throwable $th) {
            echo $th;
        }
    }
?>