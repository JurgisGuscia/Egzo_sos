<?php
class VaccineModel {
    protected $pdo;
    protected $table;
    protected $primaryKey = "id";

    public function __construct($pdo, $table, $primaryKey = "id"){
        $this->pdo = $pdo;
        $this->table = $table;
        $this->primaryKey = $primaryKey;
    }

    public function getAllVaccines(){
        try{
            $stmt = $this->pdo->prepare("SELECT * FROM {$this->table}");
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }catch(PDOException $e){
            error_log("Nepavyko gauti vakcinų sąrašo: " . $e->getMessage());
            return false;
        }
    }

    public function getVaccine($id){
        try{
            $stmt = $this->pdo->prepare("SELECT * FROM {$this->table} WHERE {$this->primaryKey} = :id LIMIT 1");
            $stmt->execute([":id" =>$id]);
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }catch(PDOException $e){
            error_log("Vakcinos rasti nepavyko: " . $e->getMessage());
            return false;
        }
    }

    public function addVaccine($name, $description){
        $vaccineExists = $this->pdo->prepare("SELECT * FROM {$this->table} WHERE name = :name LIMIT 1");
        $vaccineExists->execute([":name" => $name]);
        $vaccineExistsResult = $vaccineExists->fetch(PDO::FETCH_ASSOC);
        if($vaccineExistsResult){
            error_log("Klaida: vakcina jau egzistuoja.");
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
            error_log("Vakcinos pridėti nepavyko: " . $e->getMessage());
            return false;
        }
    }

    public function deleteVaccine($id){
        try{
            $stmt = $this->pdo->prepare("DELETE FROM {$this->table} WHERE {$this->primaryKey} = :id");
            $stmt->execute([":id" => $id]);
            return true;
        }catch(PDOException $e){
            error_log("Vakcinos ištrinti nepavyko: " . $e->getMessage());
            return false;
        }
    }

    public function editVaccine($id, $name, $description){
        try{
            $stmt = $this->pdo->prepare("UPDATE {$this->table} SET name = :name, description = :description WHERE {$this->primaryKey} = :id");
            $stmt->execute([":name" => $name, ":description" => $description, ":id" => $id]);
            return true;
        }catch(PDOException $e){
            error_log("Vakcinos įrašo atnaujinti nepavyko: " . $e->getMessage());
            return false;
        }
    }
}

?>