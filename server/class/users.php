<?php

//include_once './../modele/userModel.php';
class User{
   
    private $connection;

    private $db_table = 'users';

    public $id;
    public $name;
    public $firstname;
    public $email;
    public $identifiant;
    public $password;
    public $role;
    public $status;


    public function __construct($db){
        $this->connection = $db;
    }



// RULES

public function isNameValid(string $name):bool{
    $valid = TRUE;
    $length = mb_strlen($name);
    if(($length<4)||($length>16))
    {
        $valid=FALSE;
    }
    return $valid;
}
public function isPassValid(string $password):bool{
    $valid = TRUE;
    $regex = '/^(?=.*[.*=\d])(?=.*[a-z])(?=.*[A-Z]){6,16}$/';
    if(preg_match($regex,$password)){
        $valid=FALSE;
    }
    return $valid;
}
public function isEmailValid(string $email):bool{
    $valid = TRUE;
    if(!filter_var($email,FILTER_VALIDATE_EMAIL))
    {
        $valid = FALSE;
    }
    return $valid;
}




    // READ ALL OR ONE USER
    public function getUser($post_id){

        $sql = is_numeric($post_id) ? 'SELECT * FROM '.$this->db_table.' WHERE id='.$post_id
        : 'SELECT * FROM '.$this->db_table;
        
        $stmt = $this->connection->prepare($sql);
        $stmt->execute();
        return $stmt;

    }

    
    // CREATE USER
    public function createUser(){

        $sql ='INSERT INTO '.$this->db_table.' (name,firstname,email,username,password,role,status) 
        VALUES (:name,:firstname,:email,:username,:password,:role,:status)';

        $stmt = $this->connection->prepare($sql);

        if(!$this->isNameValid($this->name))
        {
            throw new Exception('Nom non valide');
        }

        if(!$this->isPassValid($this->password))
        {
            throw new Exception('Mot de passe non valide.');
        }
        if (!$this->isEmailValid($this->email)) 
        {
            throw new Exception('Adresse mail non valide.');
        } 

        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->firstname=htmlspecialchars(strip_tags($this->firstname));
        $this->email=htmlspecialchars(strip_tags($this->email));
        $this->username=htmlspecialchars(strip_tags($this->username));
        $this->password=htmlspecialchars(strip_tags($this->password));
        $this->role=htmlspecialchars(strip_tags($this->role));
        $this->status=htmlspecialchars(strip_tags($this->status));

        // HASHAGE DU MDP
        $this->password = password_hash($this->password, PASSWORD_DEFAULT);

        $stmt->bindParam(':name', $this->name,PDO::PARAM_STR);
        $stmt->bindParam(':firstname', $this->firstname,PDO::PARAM_STR);
        $stmt->bindParam(':username', $this->username,PDO::PARAM_STR);
        $stmt->bindParam(':email', $this->email,PDO::PARAM_STR);
        $stmt->bindParam(':password', $this->password,PDO::PARAM_STR);
        $stmt->bindParam(':role', $this->role,PDO::PARAM_STR);
        $stmt->bindParam(':status', $this->status,PDO::PARAM_INT);

        if($stmt->execute()){
            return true;
        }
        return false;

    }



}


?>