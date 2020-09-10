<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


include_once '../database.php';
include_once './../class/articles.php';

$db_connection = new Database();
$connect = $db_connection->connect();

$item = new Article($connect);

// get data from request
$data = json_decode(file_get_contents('php://input'));

$item->name = $data->name;
$item->description = $data->description;
$item->price = $data->price;
$item->image = $data->image;
$item->category = $data->category;

if($item->createArticle())
{
    echo 'Article créé avec succès !';
}
else 
{
    echo 'Erreur lors de la création..';
};





?>