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
    private $authenticated;


    public function __construct($db){
        $this->connection = $db;
        $this->authenticated = FALSE;
    }



// RULES

public function isNameValid(string $name, string $firstname):bool{
    $valid = TRUE;
    $regex ='/^[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])+))*$/';
    if(preg_match($regex,$name,$firstname) === 0)
    {
        $valid=FALSE;
    }
    return $valid;
}
public function isPassValid(string $password):bool{
    $valid = TRUE;
    $regex ='/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/';
    if(preg_match($regex,$password) === 0){
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
public function isUsernameValid(string $username):bool{
    $valid=TRUE;
    $length = mb_strlen($username);
    if(!ctype_alnum($username))
    {
        $valid = FALSE;
    }
    if(($length<3) || ($length>16))
    {
        $valid = FALSE;
    }
    return $valid;
}
// CHECK IF EMAIL OR USERNAME ALLREADY EXIST
public function doesEmailUsernameExist(string $email, string $username){
    $message ='';
    if(!$this->isEmailValid($email))
    {
        throw new Exception('Email non valide.');
    }

    $id= NULL;

    $sql = 'SELECT * FROM '.$this->db_table.' WHERE email = :email OR username = :username';
    $values = array(':email' => $email,':username' => $username);
    try{
        $stmt = $this->connection->prepare($sql);
        $stmt->execute($values);
    }
    catch(PDOException $e){
        throw new Exception('Database query error');
    }

    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if($email==isset($row['email'])){
        $message = 'Email deja utilisé';
         throw new Exception($message);
    }
    else if($username==isset($row['username'])){
        $message = 'username deja utilisé';
         throw new Exception($message);
    };

}

// CHECK ROLE
public function isRoleValid(string $role):bool{
    $valid = TRUE;
    if(preg_match('/(admin|visitor|client)/i',$role) === 0){
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

        if(!$this->isNameValid($this->name,$this->firstname))
        {
            throw new Exception('Nom ou prénom non valide');
        }

        if(!$this->isUsernameValid($this->username)){
            throw new Exception('Username non valide.');
        }

        if(!$this->isPassValid($this->password))
        {
            throw new Exception('Mot de passe non valide.');
        }

        if (!$this->isEmailValid($this->email)) 
        {
            throw new Exception('Adresse mail non valide.');
        } 
      
        $this->doesEmailUsernameExist($this->email,$this->username);

        if(!$this->isRoleValid($this->role)){
            throw new Exception('Role non valide.');
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

    public function logIn(string $username, string $email, string $password):bool{

        $username = trim($username);
        $email = trim($email);
        $password = trim($password);

        if(!$this->isUsernameValid($this->username)){
            return FALSE;
        }

        if(!$this->isEmailValid($this->email)){
            return FALSE;
        }

        if(!$this->isPasswordValid($password)){
            return FALSE;
        }

        $sql = 'SELECT * FROM '.$this->db_table.' WHERE (username = :username OR email = :email) AND (status =1)';

        $values = array(':username' => $name, ':email' => $email);

        try{
            $stmt = $this->connection->prepare($sql);
            $stmt->execute($values);
        }
        catch (PDOException $e){
            throw new Exception('Database query error');
        }

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if(is_array($row))
        {
            if(password_verify($password,$row['password']))
            {
                $this->id = intval($row['id'],10);
                $this->username = $username;
                $this->email = $email;
                $this->authenticated = TRUE;

                return TRUE;
            }
        }

        return FALSE;
    }



}


?>