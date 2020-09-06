<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: DELETE");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once 'database.php';
include_once './class/articles.php';

$db_connection = new Database();
$connect = $db_connection->connect();

$item = new Article($connect);

//$data = json_decode(file_get_contents('php://input'));
// VERIFIER SI id dans l'url
$item->id = isset($_GET['id']) ? $_GET['id'] : die();

//$item->id = $data->id;

if($item->deleteArticle()){
    echo json_encode('Article supprimé !');
}
else{
    echo json_encode('Impossible de supprimer l\'article...');
}


?>