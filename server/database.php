<?php

require_once('dataConnexion.php');

// CONNEXION DB
class Database
{

    public $connection = null;
        public function connect()
        {
            try
            {
                $connection = new PDO('mysql:host='.$GLOBALS['db_host'].';dbname='.$GLOBALS['db_name'],$GLOBALS['db_user'],$GLOBALS['db_password']);
                $connection->exec('set names utf8');
                $connection-> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            }
            catch(PDOException $e)
            {
                die('ERROR: '.$e->getMessage());
            }
            return $connection;
        }

        function disconnect()
        {
            $connection = null;
        }
}




?>