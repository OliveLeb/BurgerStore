<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require('database.php');
$db_connection = new Database();
$connect = $db_connection->connect();


$sql = 'SELECT * FROM categories';
$stmt = $connect->prepare($sql);
$stmt->execute();

if($stmt->rowCount() > 0) // VERIFIER SI ARTICLES PRESENTS
{
    $posts_array = [];

    while($row = $stmt->fetch(PDO::FETCH_ASSOC))
    {
        $post_data= [
            'id' => $row['id'],
            'name' => html_entity_decode($row['name'])
        ];
        array_push($posts_array, $post_data);
    };
    echo json_encode($posts_array);
}
else // NO ARTICLES
{
    echo json_encode(['message'=>'No articles found']);
}



?>