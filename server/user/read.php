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


if(isset($_GET['id']))
{
    $post_id = filter_var($_GET['id'], FILTER_VALIDATE_INT,[
        'options' => [
            'default' => 'all_posts',
            'min_range' => 1
        ]
    ]);
}
else
{
    $post_id = 'all_posts';
}

$stmt = $items->getUser($post_id);
$itemCount = $stmt->rowCount();

if($itemCount > 0){

    $usersArray = array();
    $usersArray['body'] = array();
    $usersArray['itemCount'] = $itemCount;

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $post_data = array(
            'id' => $id,
            'name' => $name,
            'firstname' => $firstname,
            'email' => $email,
            'username' => $username,
            'password' => $password,
            'role' => $role,
            'status' => $status
        );
        array_push($usersArray['body'],$post_data);
    }
    echo json_encode($usersArray);
}
else{
    http_response_code(404);
    echo json_encode(array('message' => 'Aucun utilisateur trouvé.'));
}


?>