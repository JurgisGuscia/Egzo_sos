<?php
class ClassTableModel{
    protected $pdo;
    protected $table;
    protected $primaryKey = "id";

    public function __construct($pdo, $table, $primaryKey = "id"){
        $this->pdo = $pdo;
        $this->table = $table;
        $this->primaryKey = $primaryKey;
    }

    public function getAllClasses(){
        try{
            $stmt = $this->pdo->prepare("SELECT * FROM {$this->table} ORDER BY id");
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }catch(PDOException $e){
            error_log("Nepavyko gauti klasių sąrašo: " . $e->getMessage());
            return false;
        }
    }

    public function getClass($id){
        try{
            $stmt = $this->pdo->prepare("SELECT * FROM {$this->table} WHERE {$this->primaryKey} = :id LIMIT 1");
            $stmt->execute([":id" =>$id]);
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }catch(PDOException $e){
            error_log("Klasės rasti nepavyko: " . $e->getMessage());
            return false;
        }
    }

    public function addClass($name, $description){
        $classExists = $this->pdo->prepare("SELECT * FROM {$this->table} WHERE name = :name LIMIT 1");
        $classExists->execute([":name" => $name]);
        $classExistsResult = $classExists->fetch(PDO::FETCH_ASSOC);
        if($classExistsResult){
            error_log("Klaida: klasė jau egzistuoja.");
            return null;
        }

        try{
            $stmt = $this->pdo->prepare("INSERT INTO {$this->table} (name, description) VALUES (:name, :description)");
            $stmt->execute([
                ":name" => $name,
                ":description" => $description
            ]);
            return $this->pdo->lastInsertId();
        }catch(PDOException $e){
            error_log("Klasės pridėti nepavyko: " . $e->getMessage());
            return false;
        }
    }

    public function deleteClass($id){
        try{
            $stmt = $this->pdo->prepare("DELETE FROM {$this->table} WHERE {$this->primaryKey} = :id");
            $stmt->execute([":id" => $id]);
            return true;
        }catch(PDOException $e){
            error_log("Klasės ištrinti nepavyko: " . $e->getMessage());
            return false;
        }
    }

    public function editClass($id, $name, $description){
        try{
            $stmt = $this->pdo->prepare("UPDATE {$this->table} SET name = :name, description = :description WHERE {$this->primaryKey} = :id");
            $stmt->execute([":name" => $name, ":description" => $description, ":id" => $id]);

             if ($stmt->rowCount() === 0) {
                return false;
            }
            
            return true;
        }catch(PDOException $e){
            error_log("Klasės įrašo atnaujinti nepavyko: " . $e->getMessage());
            return false;
        }
    }

}

?>