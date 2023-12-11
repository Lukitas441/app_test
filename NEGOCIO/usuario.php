<?php
include "../PERSISTENCIA/repositorioUsuarios.php";
class Usuario {
    private $IDusuario;
    private $nombreUsuario;
    private $nombre;
    private $apellido;
    private $isAdmin;
    

    public function __construct(int $IDusuario, string $nombreUsuario, string $nombre, string $apellido) {
        $this->IDusuario = $IDusuario;
        $this->nombreUsuario = $nombreUsuario;
        $this->nombre = $nombre;
        $this->apellido = $apellido;
    }
    public function getIdUsuario(): string {
        return $this->IDusuario;
    }

    public function getNombreUsuario(): string {
        return $this->nombreUsuario;
    }

    public function getNombre(): string {
        return $this->nombre;
    }

    public function getApellido(): string {
        return $this->apellido;
    }

    public function setAdmin($isAdmin) : void {
        $this->isAdmin = $isAdmin;
    }

    public function isAdmin(): bool {
        return $this->isAdmin;
    }
    public static function getLogin($IDusuario){
        $repoUsuarios = new repositorioUsuarios();
        return $repoUsuarios->getLogin($IDusuario);
    }

    public static function userLogin($email){
        $repoUsuarios = new repositorioUsuarios();
        return $repoUsuarios->userLogin($email);
    }

    public static function getUser($email){
        $repoUsuarios = new repositorioUsuarios();
        return $repoUsuarios->getUser($email);
    }

    public static function setUser($nombreUsuario, $nombre, $apellido, $email, $password){
        $repoUsuarios = new repositorioUsuarios();
        $repoUsuarios->signinUser($nombreUsuario, $nombre, $apellido, $email, $password);
    }
}

?>