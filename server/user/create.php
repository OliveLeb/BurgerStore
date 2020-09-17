<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


include_once '../database.php';
include_once './../class/users.php';

$db_connection = new Database();
$connect = $db_connection->connect();

$item = new User($connect);

// get data from request
$data = json_decode(file_get_contents('php://input'));







$item->name = trim($data->name);
$item->firstname = trim($data->firstname);
$item->email = trim($data->email);
$item->username = trim($data->username);
$item->password = $data->password;
$item->role = $data->role;
$item->status = $data->status;

if($item->createUser())
{
    echo 'Utilisateur créé avec succès !';
}
else 
{
    echo 'Erreur lors de la création..';
};





?>