<?php 


    class Account{

    private $id;
    private $username;
    private $loggedIn;

    public function __construct()
    {
        $this->id = NULL;
        $this->username = NULL;
        $this->loggedIn = FALSE;
    }

    public function __destruct()
    {
        
    }

}


?>