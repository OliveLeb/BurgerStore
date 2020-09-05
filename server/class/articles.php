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

    // GET ALL ARTICLES
    public function getArticles(){
        $sql = 'SELECT i.id,i.name,i.description,i.price,i.image,categories.name as category FROM items as i LEFT JOIN categories ON i.category = categories.id ORDER BY i.id DESC';
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
        $stmt->bindValue(":name", $this->name,PDO::PARAM_STR);
        $stmt->bindValue(":description", $this->description,PDO::PARAM_STR);
        $stmt->bindValue(":price", $this->price);
        $stmt->bindValue(":image", $this->image,PDO::PARAM_STR);
        $stmt->bindValue(":category", $this->category,PDO::PARAM_STR);

        if($stmt->execute()){
            return true;
        }
        return false;

    }


}

?>