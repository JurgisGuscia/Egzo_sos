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

    protected function getDatabaseRows($int){
        #$int - how many entries should it return
        $data = [];
        for($i = 1; $i < $int + 1; $i++){
            $insertion = [
                "name" => "Animal {$i}", 
                "breed" => "Breed {$i}", 
                "class" => "Class {$i}", 
                "sex" => "male", 
                "dateOfBirth" => "2025.06.04", 
                "dateOfArrival" => "2024.11.04",
                "isSterilized" => 0,
                "isChipped" => 0,
                "isAvailableForAdoption" => 0,
                "vaccineList" => "Vaccine A, Vaccine B",
                "isAdopted" => 0,
                "dateOfAdoption" => "",
                "isDead" => 0,
                "dateOfDeath" => "",
                "additionalInfo" => "Some additional info",
                "dateOfDatabaseEntry" => "2025.05.23",
                "photoUrl" => " www.exampleUrl/images/animal1.jpg"
            ];
            array_push($data, $insertion);
        }
    
        return $data;   
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

    #getAll()
    public function testGetAllReturnsAllData(){
        $this->populateDatabase($this->getDatabaseRows(3));

        $output = $this->captureOutput(fn() => $this->controller->getAll());
        $this->assertStringContainsString('"name":"Animal 1"', $output, "getAll should include Animal 1.");
        $this->assertStringContainsString('"breed":"Breed 1"', $output, "getAll should include Breed 1.");
        $this->assertStringContainsString('"class":"Class 1"', $output, "getAll should include Class 1.");
        
        $this->assertStringContainsString('"name":"Animal 2"', $output, "getAll should include Animal 2.");
        $this->assertStringContainsString('"breed":"Breed 2"', $output, "getAll should include Breed 2.");
        $this->assertStringContainsString('"class":"Class 2"', $output, "getAll should include Class 2.");
        
        $this->assertStringContainsString('"name":"Animal 3"', $output, "getAll should include Animal 3.");
        $this->assertStringContainsString('"breed":"Breed 3"', $output, "getAll should include Breed 3.");
        $this->assertStringContainsString('"class":"Class 3"', $output, "getAll should include Class 3.");
    }

    public function testGetAllReturnsEmptyArrayForEmptyTable() {
        $output = $this->captureOutput(fn() => $this->controller->getAll());
        $this->assertEquals('[]', $output, "getAll should return empty array when table is empty.");
    }

    public function testGetAllHandlesFailure() {
        $this->pdo->exec("DROP TABLE {$this->testTable}");

        $output = $this->captureOutput(fn() => $this->controller->getAll());
        $this->assertStringContainsString('"Klaida":"Nepavyko gauti gyvūnų sąrašo."', $output, "getAll should handle query failure gracefully.");
    }

    #get()
    public function testGetReturnsData() {
        $this->populateDatabase($this->getDatabaseRows(1));

        $output = $this->captureOutput(fn() => $this->controller->get(1));
        $this->assertStringContainsString('"name":"Animal 1"', $output, "get method should return data");
    }

    public function testGetReturnsErrorOnNotFound() {
        $output = $this->captureOutput(fn() => $this->controller->get(999));
        $this->assertStringContainsString('"Klaida":"Nepavyko rasti gyvūno."', $output, "get method should return error when nothing is found.");
    }

    #add()
    public function testAddReturnsSuccessful() {
        $data = [
            "name" => "Edited name", 
            "breed" => "Edited breed",
            "class" => "Edited class",
            "dateOfDatabaseEntry" => "2055.05.05"    
            ];

        $output = $this->captureOutput(fn() => $this->controller->add($data));
        $this->assertStringContainsString('"Pavyko":"Gyvūnas pridėtas sėkmingai."', $output, "add method should return success message.");
    }

    public function testAddHandlesMissingInput() {
         $data = [
            "name" => "Edited name", 
            "breed" => "Edited breed",
            "class" => "Edited class",
            ];
        $output = $this->captureOutput(fn() => $this->controller->add($data));
        $this->assertStringContainsString('"Klaida":"Trūksta būtinų laukų."', $output, "add method should reject request with missing input.");
    }
    
    #delete()
    public function testDeleteReturnsSuccessful() {
        $this->populateDatabase($this->getDatabaseRows(3));

        $output = $this->captureOutput(fn() => $this->controller->delete(1));
        $this->assertStringContainsString('"Pavyko":"Gyvūnas sėkmingai pašalintas."', $output, "delete method should return success message.");
        $checkDeleted = $this->controller->get(1);
        $this->assertFalse($checkDeleted, "delete method should delete a row.");
    }

    public function testDeleteSucceedsIfNotFound() {
        $output = $this->captureOutput(fn() => $this->controller->delete(999));
        $this->assertStringContainsString('"Pavyko":"Gyvūnas sėkmingai pašalintas."', $output, "delete should return success if animal was not found.");
    }

    #edit()
    public function testEditReturnsSuccessful() {
        $this->populateDatabase($this->getDatabaseRows(1));

        $data = [
            "name" => "Edited name", 
            "breed" => "Edited breed",
            "class" => "Edited class",
            "dateOfDatabaseEntry" => "2055.05.05"    
            ];
        
        $output = $this->captureOutput(fn() => $this->controller->edit(1, $data));
        $this->assertStringContainsString('"Pavyko":"Gyvūno duomenys atnaujinti sėkmingai."', $output, "edit method should return success message.");

        $editedRow = $this->captureOutput(fn() => $this->controller->get(1));
        $this->assertStringContainsString('"name":"Edited name"', $editedRow, "edit method should update fields.");
        $this->assertStringContainsString('"breed":"Edited breed"', $editedRow, "edit method should update fields.");
        $this->assertStringContainsString('"class":"Edited class"', $editedRow, "edit method should update fields.");
        $this->assertStringContainsString('"dateOfDatabaseEntry":"2055.05.05"', $editedRow, "edit method should update fields.");

    }

    public function testEditReturnsHandlesNotFound() {
        $this->populateDatabase($this->getDatabaseRows(1));
        $data = [
            "name" => "Edited name", 
            "breed" => "Edited breed",
            "class" => "Edited class",
            "dateOfDatabaseEntry" => "2055.05.05"    
            ];
        $output = $this->captureOutput(fn() => $this->controller->edit(999, $data));
        $this->assertStringContainsString('"Klaida":"Gyvūno įrašo atnaujinti nepavyko."', $output, "edit method should handle not found error.");
    }

    public function testEditHandlesMissingFields() {
        $this->populateDatabase($this->getDatabaseRows(1));

        $data = [
            "name" => "Edited name", 
            "breed" => "Edited breed",
            "dateOfDatabaseEntry" => "2055.05.05"    
            ];

        $output = $this->captureOutput(fn() => $this->controller->edit(1, $data));
        $this->assertStringContainsString('"Klaida":"Trūksta būtinų laukų."', $output, "edit method should reject requests with missing input.");
    }

}
?>