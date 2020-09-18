<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once ('../database.php');
include_once './../class/users.php';

$db_connection = new Database();
$connect = $db_connection->connect();

$items = new User($connect);

$data = json_decode(file_get_contents('php://input'));

$item->username = $data->username;
$item->password = $data->password;

if($item->logIn())
{
    echo 'Utilisateur connecté !';
}
else
{
    echo 'Erreur lors de la connexion..';
};








?>