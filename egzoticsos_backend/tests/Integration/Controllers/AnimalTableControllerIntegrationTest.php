<?php
use PHPUnit\Framework\TestCase;
require_once __DIR__ . "/../../../src/Controllers/AnimalTableController.php";
require_once __DIR__ . "/../../../src/Models/AnimalTableModel.php";

class AnimalTableControllerIntegrationTest extends TestCase{
    protected PDO $pdo;
    protected string $testTable = "testTable";
    protected AnimalTableController $controller;

    protected function setUp():void{
        $this->pdo = new PDO("sqlite::memory:");
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->pdo->exec("
            CREATE TABLE {$this->testTable} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                breed TEXT,
                class TEXT,
                sex TEXT,
                dateOfBirth TEXT,
                dateOfArrival TEXT,
                isSterilized INTEGER,
                isChipped INTEGER,
                isAvailableForAdoption INTEGER,
                vaccineList TEXT,
                isAdopted INTEGER,
                dateOfAdoption TEXT,
                isDead INTEGER,
                dateOfDeath TEXT,
                additionalInfo TEXT,
                dateOfDatabaseEntry TEXT,
                photoUrl TEXT
            );
        ");
        
        $this->controller = new AnimalTableController($this->pdo, $this->testTable);
    }

    protected function populateDatabase(array $rows):void{
        foreach($rows as $row){
            $this->pdo->prepare("
                INSERT INTO {$this->testTable} (
                    name, 
                    breed, 
                    class, 
                    sex, 
                    dateOfBirth, 
                    dateOfArrival, 
                    isSterilized, 
                    isChipped, 
                    isAvailableForAdoption, 
                    vaccineList, 
                    isAdopted, 
                    dateOfAdoption, 
                    isDead, 
                    dateOfDeath, 
                    additionalInfo, 
                    dateOfDatabaseEntry, 
                    photoUrl
                ) VALUES (
                    :name, 
                    :breed, 
                    :class, 
                    :sex, 
                    :dateOfBirth, 
                    :dateOfArrival, 
                    :isSterilized, 
                    :isChipped, 
                    :isAvailableForAdoption, 
                    :vaccineList, 
                    :isAdopted, 
                    :dateOfAdoption, 
                    :isDead, 
                    :dateOfDeath, 
                    :additionalInfo, 
                    :dateOfDatabaseEntry, 
                    :photoUrl
                )
            ")->execute([
                ":name" => $row["name"],
                ":breed" => $row["breed"],
                ":class" => $row["class"],
                ":sex" => $row["sex"],
                ":dateOfBirth" => $row["dateOfBirth"],
                ":dateOfArrival" => $row["dateOfArrival"],
                ":isSterilized" => $row["isSterilized"],
                ":isChipped" => $row["isChipped"],
                ":isAvailableForAdoption" => $row["isAvailableForAdoption"],
                ":vaccineList" => $row["vaccineList"],
                ":isAdopted" => $row["isAdopted"],
                ":dateOfAdoption" => $row["dateOfAdoption"],
                ":isDead" => $row["isDead"],
                ":dateOfDeath" => $row["dateOfDeath"],
                ":additionalInfo" => $row["additionalInfo"],
                ":dateOfDatabaseEntry" => $row["dateOfDatabaseEntry"],
                ":photoUrl" => $row["photoUrl"],
            ]);
        }
    }
    protected function captureOutput(callable $fn):string{
        ob_start();
        try{
            $fn();
            return ob_get_clean();
        }catch(\Throwable $e){
            ob_end_clean();
            throw $e;
        }
    }

    


}
?>