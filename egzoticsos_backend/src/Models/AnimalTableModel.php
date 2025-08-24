<?php

require_once __DIR__ . '/../DTOs/AnimalDTO.php';

class AnimalTableModel{
    protected $pdo;
    protected $table;
    protected $primaryKey = "id";

    public function __construct($pdo, $table, $primaryKey = "id"){
        $this->pdo = $pdo;
        $this->table = $table;
        $this->primaryKey = $primaryKey;
    }

    public function getAllAnimals(){
        try{
            $stmt = $this->pdo->prepare("SELECT * FROM {$this->table} ORDER BY id");
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }catch(PDOException $e){
            error_log("Nepavyko gauti gyvūnų sąrašo: " . $e->getMessage());
            return false;
        }
    }

    public function getAnimal($id){
        try {
            $stmt = $this->pdo->prepare("SELECT * FROM {$this->table} WHERE {$this->primaryKey} = :id LIMIT 1");
            $stmt->execute([":id" => $id]);
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            if (!$row) {
                return null;
            }

            $data = [
                'sex' => $row['sex'] ?? null,
                'dateOfBirth' => $row['dateOfBirth'] ?? null,
                'dateOfArrival' => $row['dateOfArrival'] ?? null,
                'isSterilized' => isset($row['isSterilized']) ? (bool)$row['isSterilized'] : null,
                'isChipped' => isset($row['isChipped']) ? (bool)$row['isChipped'] : null,
                'isAvailableForAdoption' => isset($row['isAvailableForAdoption']) ? (bool)$row['isAvailableForAdoption'] : null,
                'vaccineList' => $row['vaccineList'] ?? null,
                'isAdopted' => isset($row['isAdopted']) ? (bool)$row['isAdopted'] : null,
                'dateOfAdoption' => $row['dateOfAdoption'] ?? null,
                'isDead' => isset($row['isDead']) ? (bool)$row['isDead'] : null,
                'dateOfDeath' => $row['dateOfDeath'] ?? null,
                'additionalInfo' => $row['additionalInfo'] ?? null,
                'photoUrl' => $row['photoUrl'] ?? null
            ];

            return new AnimalDTO(
                $row['name'],
                $row['breed'],
                $row['class'],
                $row['dateOfDatabaseEntry'],
                $data
            );
        } catch (PDOException $e) {
            error_log("Nepavyko rasti gyvūno: " . $e->getMessage());
            return false;
        }
    }

    public function addAnimal(AnimalDTO $animal){
        try {
            $stmt = $this->pdo->prepare("
                INSERT INTO {$this->table} 
                (name, breed, class, sex, dateOfBirth, dateOfArrival, isSterilized, isChipped, isAvailableForAdoption, vaccineList, isAdopted, dateOfAdoption, isDead, dateOfDeath, additionalInfo, dateOfDatabaseEntry, photoUrl)
                VALUES
                (:name, :breed, :class, :sex, :dateOfBirth, :dateOfArrival, :isSterilized, :isChipped, :isAvailableForAdoption, :vaccineList, :isAdopted, :dateOfAdoption, :isDead, :dateOfDeath, :additionalInfo, :dateOfDatabaseEntry, :photoUrl)
            ");

            $stmt->execute([
                ':name' => $animal->name,
                ':breed' => $animal->breed,
                ':class' => $animal->class,
                ':sex' => $animal->sex,
                ':dateOfBirth' => $animal->dateOfBirth,
                ':dateOfArrival' => $animal->dateOfArrival,
                ':isSterilized' => $animal->isSterilized,
                ':isChipped' => $animal->isChipped,
                ':isAvailableForAdoption' => $animal->isAvailableForAdoption,
                ':vaccineList' => $animal->vaccineList,
                ':isAdopted' => $animal->isAdopted,
                ':dateOfAdoption' => $animal->dateOfAdoption,
                ':isDead' => $animal->isDead,
                ':dateOfDeath' => $animal->dateOfDeath,
                ':additionalInfo' => $animal->additionalInfo,
                ':dateOfDatabaseEntry' => $animal->dateOfDatabaseEntry,
                ':photoUrl' => $animal->photoUrl
            ]);

            return $this->pdo->lastInsertId();

        } catch(PDOException $e) {
            error_log("Gyvūno pridėti nepavyko: " . $e->getMessage());
            return false;
        }
    }

    public function deleteAnimal($id){
        try{
            $stmt = $this->pdo->prepare("DELETE FROM {$this->table} WHERE {$this->primaryKey} = :id");
            $stmt->execute([":id" => $id]);
            return true;
        }catch(PDOException $e){
            error_log("Gyvūno ištrinti nepavyko: " . $e->getMessage());
            return false;
        }
    }

    public function editAnimal($id, AnimalDTO $animal) {
        try {
            $fields = [];
            $params = [':id' => $id];

            $allFields = [
                'name', 'breed', 'class', 'sex', 'dateOfBirth', 'dateOfArrival', 
                'isSterilized', 'isChipped', 'isAvailableForAdoption', 'vaccineList', 
                'isAdopted', 'dateOfAdoption', 'isDead', 'dateOfDeath', 
                'additionalInfo', 'dateOfDatabaseEntry', 'photoUrl'
            ];

            foreach ($allFields as $field) {
                if ($animal->$field !== null) {
                    $fields[] = "$field = :$field";
                    $params[":$field"] = $animal->$field;
                }
            }

            if (empty($fields)) {
                return true;
            }

            $sql = "UPDATE {$this->table} SET " . implode(', ', $fields) . " WHERE {$this->primaryKey} = :id";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute($params);

            if ($stmt->rowCount() === 0) {
                return false;
            }

            return true;

        } catch (PDOException $e) {
            error_log("Nepavyko atnaujinti gyvūno informacijos: " . $e->getMessage());
            return false;
        }
    }
}
?>