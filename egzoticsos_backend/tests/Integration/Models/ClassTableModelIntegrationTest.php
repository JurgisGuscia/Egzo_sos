<?php
use PHPUnit\Framework\TestCase;

require_once __DIR__ . "/../../../src/Models/ClassTableModel.php";

class ClassTableModelIntegrationTest extends TestCase{
    protected $pdo;
    protected string $testTable = "testTable";
    protected ClassTableModel $model;

    protected function setUp():void{
        #Create in memory sqlite
        $this->pdo = new PDO("sqlite::memory:");
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->pdo->exec("
            CREATE TABLE {$this->testTable} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                description TEXT
            );
        ");
        $this->model = new ClassTableModel($this->pdo, $this->testTable);
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

    #getAllClasses
    public function testGetAllClassesReturnsArray(){
        $testData = [
            ["id" => 1, "name" => "Class A", "description" => "Description A"],
            ["id" => 2, "name" => "Class B", "description" => "Description B"],
            ["id" => 3, "name" => "Class C", "description" => "Description C"]
        ];

        $this->populateDataBase($testData);

        $result = $this->model->getAllClasses();

        $this->assertIsArray($result, "getAllClasses should return and array");

    }

    public function testGetAllClassesEmptyTableReturnsArray(){
        $result = $this->model->getAllClasses();

        $this->assertIsArray($result, "getAllClasses empty table should return an array");
    }

    public function testGetAllClassesReturnsAssocArrayStructure(){
        $this->populateDataBase([
            ["name" => "Class A", "description" => "Description A"],
            ["name" => "Class B", "description" => "Description B"]
        ]);

        $result = $this->model->getAllClasses();

        foreach ($result as $row) {
            $this->assertIsArray($row, "Each class should be an associative array");
            $this->assertArrayHasKey("id", $row, "Each row must have an 'id' key");
            $this->assertArrayHasKey("name", $row, "Each row must have a 'name' key");
            $this->assertArrayHasKey("description", $row, "Each row must have a 'description' key");
        }
    }

    public function testGetALlClassesPreservesSpecialCharactersInData(){
        $testData = [
            ["name" => "Cläss \"A\"", "description" => "Dëscription with ünicode & symbols < >"],
            ["name" => "Class B", "description" => "Normal description"]
        ];
        $this->populateDataBase($testData);
        
        $result = $this->model->getAllClasses();

        foreach ($result as $index => $row) {
            $this->assertEquals($testData[$index]["name"], $row["name"], "Special characters in 'name' should be preserved");
            $this->assertEquals($testData[$index]["description"], $row["description"], "Special characters in 'description' should be preserved");
        }
    }

    public function testGetAllClassesReturnsFullDatasetForMultipleRows(){
        $testData = [
            ["id" => 1, "name" => "Class A", "description" => "Description A"],
            ["id" => 2, "name" => "Class B", "description" => "Description B"],
            ["id" => 3, "name" => "Class C", "description" => "Description C"]
        ];

        $this->populateDataBase($testData);
       
        $result = $this->model->getAllClasses();

        $this->assertCount(count($testData), $result, "Returned dataset should have the same number of rows as mock data");
        $this->assertEquals($testData, $result, "Returned dataset should match the full mock data exactly");
    }

    #getClass($id)
    public function testGetClassReturnsCorrectClass(){
        $testData = [
            ["id" => 1, "name" => "Class A", "description" => "Description A"],
            ["id" => 2, "name" => "Class B", "description" => "Description B"],
            ["id" => 3, "name" => "Class C", "description" => "Description C"]
        ];

        $this->populateDataBase($testData);

        $result = $this->model->getClass(2);

        $this->assertEquals(2, $result["id"], "Class should return the correct row.");
        $this->assertEquals($testData[1]["name"], $result["name"], "getClass should return the correct row.");
        $this->assertEquals($testData[1]["description"], $result["description"], "getClass should return the correct row.");
    }

    public function testGetClassNotFoundRowReturnsFalse(){
        $testData = [
                ["id" => 1, "name" => "Class A", "description" => "Description A"],
                ["id" => 2, "name" => "Class B", "description" => "Description B"],
                ["id" => 3, "name" => "Class C", "description" => "Description C"]
            ];

        $this->populateDataBase($testData);

        $result = $this->model->getClass(4);

        $this->assertEquals(false, $result, "getClass should handle not found row.");
        
    }

    public function testGetClassPreservesSpecialCharactersInData(){
        $testData = [
                ["name" => "Cläss \"A\"", "description" => "Dëscription with ünicode & symbols < >"],
                ["name" => "Class B", "description" => "Normal description"]
            ];
        $this->populateDataBase($testData);
        
        $result = $this->model->getClass(2);

        $this->assertEquals($testData[1]["name"], $result["name"], "Special characters in 'name' should be preserved");
        $this->assertEquals($testData[1]["description"], $result["description"], "Special characters in 'description' should be preserved");
    }

    #addClass($name, $description)

    public function testAddClassInsertsNewClassAndReturnsId(){
        $testData = [
                    ["id" => 1, "name" => "Class A", "description" => "Description A"],
                    ["id" => 2, "name" => "Class B", "description" => "Description B"],
                    ["id" => 3, "name" => "Class C", "description" => "Description C"]
                ];

        $this->populateDataBase($testData);

        $result = $this->model->addClass("testName", "testDescription");
                
        $this->assertEquals(4, $result, "addClass should create row and return its ID.");
    }

    public function testAddClassReturnsNullIfClassAlreadyExists(){
        $testData = [
                    ["id" => 1, "name" => "Class A", "description" => "Description A"],
                    ["id" => 2, "name" => "Class B", "description" => "Description B"],
                    ["id" => 3, "name" => "Class C", "description" => "Description C"]
                ];

        $this->populateDataBase($testData);

        $result = $this->model->addClass("Class B", "testDescription");

        $this->assertEquals(null, $result, "addClass should return null if class already exists");
    }
    
    public function testAddClassAllowsSpecialCharactersInNameAndDescription(){
        $testData = [
                    ["id" => 1, "name" => "Class A", "description" => "Description A"]
                ];

        $testEntry = ["name" => "Cläss \"A\"", "description" => "Dëscription with ünicode & symbols < >"];  

        $this->populateDataBase($testData);

        $this->model->addClass($testEntry["name"], $testEntry["description"]);

        $result = $this->model->getClass(2);

        $this->assertEquals($testEntry["name"], $result["name"], "addClass should handle special characters");
        $this->assertEquals($testEntry["description"], $result["description"], "addClass should handle special characters");
    }

    #deleteClass($id)
    public function testDeleteClassRemovesClassSuccessfully(){
        $testData = [
                    ["id" => 1, "name" => "Class A", "description" => "Description A"],
                    ["id" => 2, "name" => "Class B", "description" => "Description B"],
                    ["id" => 3, "name" => "Class C", "description" => "Description C"]
                ];

        $this->populateDataBase($testData);

        $this->model->deleteClass(2);
        
        $result = $this->model->getClass(2);

        $this->assertEquals($result, false, "deleteClass should delete the row with given id.");

    }

    public function testDeleteClassReturnsTrueEvenIfIdDoesNotExist(){
        $testData = [
                    ["id" => 1, "name" => "Class A", "description" => "Description A"],
                    ["id" => 2, "name" => "Class B", "description" => "Description B"],
                    ["id" => 3, "name" => "Class C", "description" => "Description C"]
                ];

        $this->populateDataBase($testData);

        $result = $this->model->deleteClass(4);
    
        $this->assertEquals($result, true, "deleteClass should delete the row with given id.");
    } 

    #editClass($id, $name, $description)

    public function testEditClassUpdatesClassSuccessfully(){
        $testData = [
                    ["id" => 1, "name" => "Class A", "description" => "Description A"],
                    ["id" => 2, "name" => "Class B", "description" => "Description B"],
                    ["id" => 3, "name" => "Class C", "description" => "Description C"]
                ];

        $this->populateDataBase($testData);
        
        $this->model->editClass(2, "EditedClass", "EditedDescription");
        
        $result = $this->model->getClass(2);
        $result2 = $this->model->getClass(1);
        $result3= $this->model->getClass(3);

        $this->assertEquals("EditedClass", $result["name"], "editVClass should update the row.");
        $this->assertEquals("EditedDescription", $result["description"], "editClass should update the row.");

        $this->assertEquals("Class A", $result2["name"], "editClass should not update other rows.");
        $this->assertEquals("Description A", $result2["description"], "editClass should not update other rows.");

        $this->assertEquals("Class C", $result3["name"], "editClass should not update other rows.");
        $this->assertEquals("Description C", $result3["description"], "editVClass should not update other rows.");

    }
    
    public function testEditClassDoesNotCreateNewRecord(){
        $testData = [
                    ["id" => 1, "name" => "Class A", "description" => "Description A"],
                    ["id" => 2, "name" => "Class B", "description" => "Description B"],
                    ["id" => 3, "name" => "Class C", "description" => "Description C"]
                ];

        $this->populateDataBase($testData);

        $this->model->editClass(4, "EditedClass", "EditedDescription");

        $result = $this->model->getAllClasses();

        $this->assertEquals(3, count($result), "editClass should not create new entries.");

    }
    public function testEditClassAllowsSpecialCharactersInNameAndDescription(){
        $testData = [
                    ["id" => 1, "name" => "Class A", "description" => "Description A"],
                    ["id" => 2, "name" => "Class B", "description" => "Description B"],
                    ["id" => 3, "name" => "Class C", "description" => "Description C"]
                ];

        $this->populateDataBase($testData);

        $this->model->editClass(2, "Cläss \"A\"", "Dëscription with ünicode & symbols < >");

        $result = $this->model->getClass(2);

        $this->assertEquals("Cläss \"A\"", $result["name"], "editClass should allow special characters.");
        $this->assertEquals("Dëscription with ünicode & symbols < >", $result["description"], "editClass should allow special characters.");        

    }

}
?>