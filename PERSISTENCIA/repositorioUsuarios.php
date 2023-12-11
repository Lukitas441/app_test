<?php

use PSpell\Dictionary;

include_once 'conexion.php';


class repositorioUsuarios {
    private $PDO;

    public function __construct() {
        $newConnection = new conexion;
        $this->PDO = $newConnection->getConnection();
    }

    public function userLogin($email){
        $stmt = $this->PDO->query('SELECT email, password FROM Login WHERE email = '.$email)->fetch()[0];
        return array(
            'email' => $stmt['email'],
            'password' => $stmt['password']
        );

    }
    public function getUser($email){
        $stmt = $this->PDO->query('SELECT * from Usuarios join Login on email = "'.$email.'";')->fetch()[0];
        return new Usuario($stmt['ID_usuario'], $stmt['Usuario'], $stmt['Nombre'], $stmt['Apellido']);
    }
    public function getLogin($ID_usuario){
        $stmt = $this->PDO->query('SELECT email, password FROM Login join Usuarios on Usuarios.ID_usuario = '.$ID_usuario);
        return $stmt->fetch()[0];
    }

    public function signinUser($nombreUsuario, $nombre, $apellido, $email, $password){
        $emailInUse = $this->PDO->query('SELECT email FROM Login WHERE email = "'.$email.'"')->fetch();

        if(empty($emailInUse)){
            $stmt = $this->PDO->query('INSERT INTO Usuarios (Usuario, Nombre, Apellido) VALUES ("'.$nombreUsuario.'", "'.$nombre.'", "'.$apellido.'")');
        
            $ID_usuario = $this->PDO->query('SELECT ID_usuario FROM Usuarios ORDER BY ID_usuario DESC LIMIT 1')->fetch()[0];
            $stmt = $this->PDO->query('INSERT INTO Login (ID_usuario, Email, Password) VALUES ('.$ID_usuario.', "'.$email.'", "'.$password.'")');
    
        }else{
            if($emailInUse) 
                throw new Error("PDOException: SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry '".$email."' for key 'email.unique_email'");
        }

    }
}

?>