<?php
use PHPUnit\Framework\TestCase;

require_once __DIR__ . "/../../../src/Models/VaccineTableModel.php";

class VaccineTableModelIntegrationTest extends TestCase{
    
    
    protected PDO $pdo;
    protected string $testTable = "testTable";
    protected VaccineTableModel $model;

    protected function setUp():void{
        #Creates in memory sqlite
        $this->pdo = new PDO("sqlite::memory:");
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->pdo->exec("
            CREATE TABLE {$this->testTable} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                description TEXT
            );
        ");
        $this->model = new VaccineTableModel($this->pdo, $this->testTable);
    }

    protected function populateDataBase(array $rows):void{
        #Helper, pushes given data to sqlite
        foreach ($rows as $row) {
            $this->pdo->prepare("
                INSERT INTO {$this->testTable} (name, description) VALUES (:name, :description)
            ")->execute([
                ':name' => $row['name'],
                ':description' => $row['description']
            ]);
        }
    }
     
    #getAllVaccines
    public function testGetAllVaccinesReturnsArray(){
        
        $result = $this->model->getAllVaccines();
        $this->assertIsArray($result, "GetAllVaccines() should return an array.");
    }

    public function testGetAllVaccinesEmptyTableReturnsArray(){
        $result = $this->model->getAllVaccines();
        $this->assertIsArray($result, "GetAllVaccines() empty table should return an array.");
    }

    public function testGetAllVaccinesReturnsAssocArrayStructure(){
       
        $this->populateDataBase([
            ["name" => "Vaccine A", "description" => "Description A"],
            ["name" => "Vaccine B", "description" => "Description B"]
        ]);

        $result = $this->model->getAllVaccines();

        foreach ($result as $row) {
            $this->assertIsArray($row, "Each vaccine should be an associative array");
            $this->assertArrayHasKey("id", $row, "Each row must have an 'id' key");
            $this->assertArrayHasKey("name", $row, "Each row must have a 'name' key");
            $this->assertArrayHasKey("description", $row, "Each row must have a 'description' key");
        }
    }

    public function testGetAllVaccinesPreservesSpecialCharactersInData(){
        $testData = [
            ["name" => "Väccïne \"A\"", "description" => "Dëscription with ünicode & symbols < >"],
            ["name" => "Vaccine B", "description" => "Normal description"]
        ];
        $this->populateDataBase($testData);
        
        $result = $this->model->getAllVaccines();

        foreach ($result as $index => $row) {
            $this->assertEquals($testData[$index]["name"], $row["name"], "Special characters in 'name' should be preserved");
            $this->assertEquals($testData[$index]["description"], $row["description"], "Special characters in 'description' should be preserved");
        }
    }

    public function testGetAllVaccinesReturnsFullDatasetForMultipleRows(){
        $testData = [
            ["id" => 1, "name" => "Vaccine A", "description" => "Description A"],
            ["id" => 2, "name" => "Vaccine B", "description" => "Description B"],
            ["id" => 3, "name" => "Vaccine C", "description" => "Description C"]
        ];

        $this->populateDataBase($testData);
       
        $result = $this->model->getAllVaccines();

        $this->assertCount(count($testData), $result, "Returned dataset should have the same number of rows as mock data");
        $this->assertEquals($testData, $result, "Returned dataset should match the full mock data exactly");
    }

    #getVaccine($id)
    public function testGetVaccineReturnsCorrectVaccine(){
        $testData = [
            ["id" => 1, "name" => "Vaccine A", "description" => "Description A"],
            ["id" => 2, "name" => "Vaccine B", "description" => "Description B"],
            ["id" => 3, "name" => "Vaccine C", "description" => "Description C"]
        ];

        $this->populateDataBase($testData);

        $result = $this->model->getVaccine(2);

        $this->assertEquals(2, $result["id"], "getVaccine should return the correct row.");
        $this->assertEquals($testData[1]["name"], $result["name"], "getVaccine should return the correct row.");
        $this->assertEquals($testData[1]["description"], $result["description"], "getVaccine should return the correct row.");
    }

    public function testGetVaccineNotFoundRowReturnsFalse(){
        $testData = [
                ["id" => 1, "name" => "Vaccine A", "description" => "Description A"],
                ["id" => 2, "name" => "Vaccine B", "description" => "Description B"],
                ["id" => 3, "name" => "Vaccine C", "description" => "Description C"]
            ];

        $this->populateDataBase($testData);

        $result = $this->model->getVaccine(4);

        $this->assertEquals(false, $result, "getVaccine should handle not found row.");
        
    }

    public function testGetVaccinePreservesSpecialCharactersInData(){
        $testData = [
                ["name" => "Väccïne \"A\"", "description" => "Dëscription with ünicode & symbols < >"],
                ["name" => "Vaccine B", "description" => "Normal description"]
            ];
        $this->populateDataBase($testData);
        
        $result = $this->model->getVaccine(2);

        $this->assertEquals($testData[1]["name"], $result["name"], "Special characters in 'name' should be preserved");
        $this->assertEquals($testData[1]["description"], $result["description"], "Special characters in 'description' should be preserved");
    }

    #addVaccine($name, $description)
    public function testAddVaccineInsertsNewVaccineAndReturnsId(){
        $testData = [
                    ["id" => 1, "name" => "Vaccine A", "description" => "Description A"],
                    ["id" => 2, "name" => "Vaccine B", "description" => "Description B"],
                    ["id" => 3, "name" => "Vaccine C", "description" => "Description C"]
                ];

        $this->populateDataBase($testData);

        $result = $this->model->addVaccine("testName", "testDescription");
                
        $this->assertEquals(4, $result, "addVaccine should create row and return its ID.");
    }

    public function testAddVaccineReturnsNullIfVaccineAlreadyExists(){
        $testData = [
                    ["id" => 1, "name" => "Vaccine A", "description" => "Description A"],
                    ["id" => 2, "name" => "Vaccine B", "description" => "Description B"],
                    ["id" => 3, "name" => "Vaccine C", "description" => "Description C"]
                ];

        $this->populateDataBase($testData);

        $result = $this->model->addVaccine("Vaccine B", "testDescription");

        $this->assertEquals(null, $result, "addVaccine should return null if vaccine already exists");
    }
    
    public function testAddVaccineAllowsSpecialCharactersInNameAndDescription(){
        $testData = [
                    ["id" => 1, "name" => "Vaccine A", "description" => "Description A"]
                ];

        $testEntry = ["name" => "Väccïne \"A\"", "description" => "Dëscription with ünicode & symbols < >"];  

        $this->populateDataBase($testData);

        $this->model->addVaccine($testEntry["name"], $testEntry["description"]);

        $result = $this->model->getVaccine(2);

        $this->assertEquals($testEntry["name"], $result["name"], "addVaccine should handle special characters");
        $this->assertEquals($testEntry["description"], $result["description"], "addVaccine should handle special characters");
    }

    #deleteVaccine($id)
    public function testDeleteVaccineRemovesVaccineSuccessfully(){
        $testData = [
                    ["id" => 1, "name" => "Vaccine A", "description" => "Description A"],
                    ["id" => 2, "name" => "Vaccine B", "description" => "Description B"],
                    ["id" => 3, "name" => "Vaccine C", "description" => "Description C"]
                ];

        $this->populateDataBase($testData);

        $this->model->deleteVaccine(2);
        
        $result = $this->model->getVaccine(2);

        $this->assertEquals($result, false, "deleteVaccine should delete the row with given id.");

    }

    public function testDeleteVaccineReturnsTrueEvenIfIdDoesNotExist(){
        $testData = [
                    ["id" => 1, "name" => "Vaccine A", "description" => "Description A"],
                    ["id" => 2, "name" => "Vaccine B", "description" => "Description B"],
                    ["id" => 3, "name" => "Vaccine C", "description" => "Description C"]
                ];

        $this->populateDataBase($testData);

        $result = $this->model->deleteVaccine(4);
    
        $this->assertEquals($result, true, "deleteVaccine should delete the row with given id.");
    } 

    #editVaccine($id, $name, $description)
    public function testEditVaccineUpdatesVaccineSuccessfully(){
        $testData = [
                    ["id" => 1, "name" => "Vaccine A", "description" => "Description A"],
                    ["id" => 2, "name" => "Vaccine B", "description" => "Description B"],
                    ["id" => 3, "name" => "Vaccine C", "description" => "Description C"]
                ];

        $this->populateDataBase($testData);
        
        $this->model->editVaccine(2, "EditedVaccine", "EditedDescription");
        
        $result = $this->model->getVaccine(2);
        $result2 = $this->model->getVaccine(1);
        $result3= $this->model->getVaccine(3);

        $this->assertEquals("EditedVaccine", $result["name"], "editVaccine should update the row.");
        $this->assertEquals("EditedDescription", $result["description"], "editVaccine should update the row.");

        $this->assertEquals("Vaccine A", $result2["name"], "editVaccine should not update other rows.");
        $this->assertEquals("Description A", $result2["description"], "editVaccine should not update other rows.");

        $this->assertEquals("Vaccine C", $result3["name"], "editVaccine should not update other rows.");
        $this->assertEquals("Description C", $result3["description"], "editVaccine should not update other rows.");

    }
    
    public function testEditVaccineDoesNotCreateNewRecord(){
        $testData = [
                    ["id" => 1, "name" => "Vaccine A", "description" => "Description A"],
                    ["id" => 2, "name" => "Vaccine B", "description" => "Description B"],
                    ["id" => 3, "name" => "Vaccine C", "description" => "Description C"]
                ];

        $this->populateDataBase($testData);

        $this->model->editVaccine(4, "EditedVaccine", "EditedDescription");

        $result = $this->model->getAllVaccines();

        $this->assertEquals(3, count($result), "editVaccine should not create new entries.");

    }
    public function testEditVaccineAllowsSpecialCharactersInNameAndDescription(){
        $testData = [
                    ["id" => 1, "name" => "Vaccine A", "description" => "Description A"],
                    ["id" => 2, "name" => "Vaccine B", "description" => "Description B"],
                    ["id" => 3, "name" => "Vaccine C", "description" => "Description C"]
                ];

        $this->populateDataBase($testData);

        $this->model->editVaccine(2, "Väccïne \"A\"", "Dëscription with ünicode & symbols < >");

        $result = $this->model->getVaccine(2);

        $this->assertEquals("Väccïne \"A\"", $result["name"], "editVaccine should allow special characters.");
        $this->assertEquals("Dëscription with ünicode & symbols < >", $result["description"], "editVaccine should allow special characters.");        

    }
}

?>