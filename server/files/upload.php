<?php

header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");


$response = array();

//$image = $_FILES['image'];

//$error = $_FILES['image']['error'];



if(isset($_FILES['image']) && $_FILES['image']['error'] == 0){

    $fileName = $_FILES['image']['name'];
    $fileSize = $_FILES['image']['size'];
    $fileTmpPath = $_FILES['image']['tmp_name'];
    $fileType = $_FILES['image']['type'];
    //$fileNameCmps = explode(".", $fileName);
    //$fileExtension = strtolower(end($fileNameCmps));
    $fileInfo = pathinfo($fileName);
    $fileExtension = $fileInfo['extension'];
    $extensionAllowed = array('png','jpg','jpeg');

    
    if($fileSize <= 2000000){
        if(in_array($fileExtension,$extensionAllowed)){
        $folderPath = '../uploads/';

            if(move_uploaded_file($fileTmpPath,$folderPath.$fileName)){
                $response = array(
                    'status' => 'success',
                    'error' => false,
                    'message' => 'File uploaded successfully !'
                );
            }
            else{
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "impossible to upload !"
            );
            }
        }
    }


}
else{
    $response = array(
        "status" => "error",
        "error" => true,
        "message" => "no file was sent !"
    );
}
echo json_encode($response);

?>