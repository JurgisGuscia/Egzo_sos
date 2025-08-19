<?php
use PHPUnit\Framework\TestCase;

require_once __DIR__ . "/../../../src/Models/VaccineTableModel.php";

class VaccineTableModelIntegrationTest extends TestCase{
    
    #getAllVacines
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

    // #getVaccine($id)
    // public function testGetVaccineReturnsCorrectVaccineById(){}
    // public function testGetVaccineReturnsFalseIfPDOExceptionOccurs(){}
    // public function testGetVaccineReturnsNullIfVaccineDoesNotExist(){}
    // public function testGetVaccineWithInvalidIdReturnsNullOrFalse(){}
    // public function testGetVaccinePreservesSpecialCharactersInData(){}

    // #addVaccine($name, $description)
    // public function testAddVaccineInsertsNewVaccineAndReturnsId(){}
    // public function testAddVaccineReturnsNullIfVaccineAlreadyExists(){}
    // public function testAddVaccineRejectsEntriesWithMissingInput(){}
    // public function testAddVaccineHandlesPDOExceptionAndReturnsFalse(){}
    // public function testAddVaccineAllowsSpecialCharactersInNameAndDescription(){}

    // #deleteVacine($id)
    // public function testDeleteVaccineRemovesVaccineSuccessfully(){}
    // public function testDeleteVaccineReturnsTrueEvenIfIdDoesNotExist(){} 
    // public function testDeleteVaccineHandlesPDOExceptionAndReturnsFalse(){}
    // public function testDeleteVaccineWithInvalidIdReturnsFalse(){}
    // #editVacine($id, $name, $description)

    // public function testEditVaccineUpdatesVaccineSuccessfully(){}
    // public function testEditVaccineReturnsFalseIfPDOExceptionOccurs(){}
    // public function testEditVaccineDoesNotCreateNewRecordIfIdDoesNotExist(){}
    // public function testEditVaccineAllowsSpecialCharactersInNameAndDescription(){}
    // public function testEditVaccineWithEmptyNameOrDescriptionReturnsError(){} 
}

?>