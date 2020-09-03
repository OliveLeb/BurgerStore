<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require('database.php');
$db_connection = new Database();
$connect = $db_connection->connect();


if(isset($_GET['id']))
{
    $post_id = filter_var($_GET['id'], FILTER_VALIDATE_INT,[
        'options' => ['default'=>'all_posts','min_range'=>1]
    ]);
}
else{
    $post_id = 'all_posts';
}

// REQUETE PAR ID OU TABLE ENTIERE
//$sql = is_numeric($post_id) ? 'SELECT * FROM `items` WHERE id ='.$post_id : 'SELECT * FROM `items`';
$sql = 'SELECT i.id,i.name,i.description,i.price,i.image,categories.name as category FROM items as i LEFT JOIN categories ON i.category = categories.id ORDER BY i.id DESC';
$stmt = $connect->prepare($sql);
$stmt->execute();

if($stmt->rowCount() > 0) // VERIFIER SI ARTICLES PRESENTS
{
    $posts_array = [];

    while($row = $stmt->fetch(PDO::FETCH_ASSOC))
    {
        $post_data= [
            'id' => $row['id'],
            'name' => html_entity_decode($row['name']),
            'description' => html_entity_decode($row['description']),
            'price' => html_entity_decode($row['price']),
            'image' => html_entity_decode($row['image']),
            'category' => html_entity_decode($row['category'])
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