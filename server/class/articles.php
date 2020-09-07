<?php

class Article{

    // connexion
    private $connection;

    // table
    private $db_table = 'items';

    // columns
    public $id;
    public $name;
    public $description;
    public $price;
    public $image;
    public $category;

    //db connexion
    public function __construct($db){
        $this->connection = $db;
    }

    // READ ALL ARTICLES
    public function getArticles($post_id){


        $sql = is_numeric($post_id) ? 'SELECT i.id,i.name,i.description,i.price,i.image,c.name as category,c.id as categoryId 
        FROM '.$this->db_table.' as i LEFT JOIN categories as c ON i.category = c.id WHERE i.id='.$post_id 
        :'SELECT i.id,i.name,i.description,i.price,i.image,c.name as category,c.id as categoryId 
        FROM '.$this->db_table.' as i LEFT JOIN categories as c ON i.category = c.id ORDER BY i.id DESC';
        $stmt = $this->connection->prepare($sql);
        $stmt->execute();
        return $stmt;        
    }

    // CREATE
    public function createArticle(){
              
        $sql= 'INSERT INTO '.$this->db_table.' (name,description,price,image,category) VALUES(:name,:description,:price,:image,:category)';

        $stmt = $this->connection->prepare($sql);  
        
        // sanitize
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->description=htmlspecialchars(strip_tags($this->description));
        $this->price=htmlspecialchars(strip_tags($this->price));
        $this->image=htmlspecialchars(strip_tags($this->image));
        $this->category=htmlspecialchars(strip_tags($this->category));

        // bind data
        $stmt->bindParam(":name", $this->name,PDO::PARAM_STR);
        $stmt->bindParam(":description", $this->description,PDO::PARAM_STR);
        $stmt->bindParam(":price", $this->price);
        $stmt->bindParam(":image", $this->image,PDO::PARAM_STR);
        $stmt->bindParam(":category", $this->category,PDO::PARAM_INT);

        if($stmt->execute()){
            return true;
        }
        return false;

    }

    // UPDATE
    public function updateArticle(){

        $sql = 'UPDATE '.$this->db_table.' SET 
        name = :name,
        description = :description,
        price = :price,
        image = :image,
        category = :category
        WHERE id = :id';

        $stmt = $this->connection->prepare($sql);

        $this->id=htmlspecialchars(strip_tags($this->id));
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->description=htmlspecialchars(strip_tags($this->description));
        $this->price=htmlspecialchars(strip_tags($this->price));
        $this->image=htmlspecialchars(strip_tags($this->image));
        $this->category=htmlspecialchars(strip_tags($this->category));

        $stmt->bindParam(":id", $this->id,PDO::PARAM_INT);
        $stmt->bindParam(":name", $this->name,PDO::PARAM_STR);
        $stmt->bindParam(":description", $this->description,PDO::PARAM_STR);
        $stmt->bindParam(":price", $this->price);
        $stmt->bindParam(":image", $this->image,PDO::PARAM_STR);
        $stmt->bindParam(":category", $this->category,PDO::PARAM_INT);

        if($stmt->execute()){
            return true;
        }
        return false;


    }

    // DELETE
    function deleteArticle(){

        // VERIFIER SI ARTICLE EXISTE
     /*   if(isset($data->id)){
            $msg['message']='';

            $post_id = $data->id;

            $check_postId = 'SELECT * FROM'.$this->db_table.' WHERE id=:post_id';
            $check_postId_stmt = $this->connection->prepare($check_postId);
            $check_postId_stmt->bindParam(':post_id',$this->post_id,PDO::PARAM_INT);
            $check_postId_stmt->execute();

            if($check_postId_stmt->rowCount() > 0){*/
                
                $sql = 'DELETE FROM '.$this->db_table.' WHERE id = ?';
                $stmt = $this->connection->prepare($sql);
                $this->id=htmlspecialchars(strip_tags($this->id));
                $stmt->bindParam(1,$this->id,PDO::PARAM_INT);

                if($stmt->execute()){
                    return true;
                }
                return false;
           // }

/*
        }
        else{
            $msg['message'] = 'Article introuvable';
        }
        echo json_encode($msg);*/


        
    }


}

?>