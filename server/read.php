<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once ('database.php');
include_once './class/articles.php';

$db_connection = new Database();
$connect = $db_connection->connect();

$items = new Article($connect);

$stmt = $items->getArticles();
$itemCount = $stmt->rowCount();

//echo json_encode($itemCount);

if($itemCount > 0){

    $articlesArray = array();
    $articlesArray['body'] = array();
    $articlesArray['itemCount'] = $itemCount;

    while ($row =$stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $post_data = array(
            'id' => $id,
            'name' => $name,
            'description' => $description,
            'price' => $price,
            'image' => $image,
            'category' => $category
        );
        array_push($articlesArray['body'],$post_data);
    }
    echo json_encode($articlesArray);
}
else
{
    http_response_code(404);
    echo json_encode(array('message' => 'No record found.'));
}




?>