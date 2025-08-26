<?php
use PHPUnit\Framework\TestCase;
require_once __DIR__ . "/../../../src/Controllers/ClassTableController.php";
require_once __DIR__ . "/../../../src/Models/ClassTableModel.php";

class ClassTableControllerIntegrationTest extends TestCase {
    
    protected PDO $pdo;
    protected string $testTable = "testTable";
    protected ClassTableController $controller;

    protected function setUp():void{
        $this->pdo = new PDO("sqlite::memory:");
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->pdo->exec("
            CREATE TABLE {$this->testTable} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                description TEXT
            );
        ");

        $this->controller = new ClassTableController($this->pdo, $this->testTable);
    }

    protected function populateDatabase(array $rows):void {
        foreach($rows as $row){
            $this->pdo->prepare("
                INSERT INTO {$this->testTable} (name, description) VALUES (:name, :description)
            ")->execute([
                ":name" => $row["name"],
                ":description" => $row["description"]
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

    #getAll()
    public function testGetAllReturnsData() {
        $this->populateDatabase([
            ["name" => "Class A", "description" => "Description A"],
            ["name" => "Class B", "description" => "Description B"]
        ]);

        $output = $this->captureOutput(fn() => $this->controller->getAll());
        $this->assertStringContainsString('"name":"Class A"', $output, "getAll should include Class A.");
        $this->assertStringContainsString('"description":"Description A"', $output, "getAll should include Class A description.");
        $this->assertStringContainsString('"name":"Class B"', $output, "getAll should include Class B.");
        $this->assertStringContainsString('"description":"Description B"', $output, "getAll should include Class B description.");
    }

    public function testGetAllReturnsEmptyArrayForEmptyTable() {
        $output = $this->captureOutput(fn() => $this->controller->getAll());
        $this->assertEquals('[]', $output, "getAll should return empty array when table is empty.");
    }

    public function testGetAllHandlesFailure() {
        $this->pdo->exec("DROP TABLE {$this->testTable}");

        $output = $this->captureOutput(fn() => $this->controller->getAll());
        $this->assertStringContainsString('"Klaida":"Nepavyko gauti klasių sąrašo."', $output, "getAll should handle query failure gracefully.");
       
    }

    #get()
    public function testGetReturnsData() {
        $this->populateDatabase([
            ["name" => "Class A", "description" => "Description A"]
        ]);

        $output = $this->captureOutput(fn() => $this->controller->get(1));
        $this->assertStringContainsString('"name":"Class A"', $output, "get method should return data");
        $this->assertStringContainsString('"description":"Description A"', $output, "get method should return data.");
    }

    public function testGetReturnsErrorOnNotFound() {
        $output = $this->captureOutput(fn() => $this->controller->get(999));
        $this->assertStringContainsString('"Klaida":"Nepavyko rasti klasės."', $output, "get method should return error when nothing is found.");
    }

    #add()
    public function testAddReturnsSuccessful() {
        $data = ["name" => "Class C", "description" => "Description C"];
        $output = $this->captureOutput(fn() => $this->controller->add($data));
        $this->assertStringContainsString('"Pavyko":"Klasė pridėta sėkmingai."', $output, "add method should return success message.");
    }

    public function testAddHandlesMissingInput() {
        $data = ["name" => ""];
        $output = $this->captureOutput(fn() => $this->controller->add($data));
        $this->assertStringContainsString('"Klaida":"Trūksta būtinų laukų."', $output, "add method should reject request with missing input.");
    }
    
    public function testAddHandlesClassAlreadyExists() {
        $this->populateDatabase([
            ["name" => "Class B", "description" => "Description B"]
        ]);

        $data = ["name" => "Class B", "description" => "Description B"];
        $output = $this->captureOutput(fn() => $this->controller->add($data));
        $this->assertStringContainsString('"Klaida":"Klasė jau egzistuoja."', $output, "add method should reject if vaccine already exists.");
    }

    #delete()
    public function testDeleteReturnsSuccessful() {
        $this->populateDatabase([
            ["name" => "Class C", "description" => "Description C"]
        ]);

        $output = $this->captureOutput(fn() => $this->controller->delete(1));
        $this->assertStringContainsString('"Pavyko":"Klasė sėkmingai pašalinta."', $output, "detele method should return success message.");
    }

    public function testDeleteSucceedsIfNotFound() {
        $output = $this->captureOutput(fn() => $this->controller->delete(999));
        $this->assertStringContainsString('"Pavyko":"Klasė sėkmingai pašalinta."', $output, "delete should return success if vaccine was not found.");
    }

    #edit()
    public function testEditReturnsSuccessful() {
        $this->populateDatabase([
            ["name" => "Class D", "description" => "Description D"]
        ]);

        $data = ["name" => "Edited Class", "description" => "Edited Description"];
        $output = $this->captureOutput(fn() => $this->controller->edit(1, $data));
        $this->assertStringContainsString('"Pavyko":"Klasės duomenys atnaujinti sėkmingai."', $output, "edit method should return success message.");
    }

    public function testEditReturnsHandlesNotFound() {
        $data = ["name" => "Edited Class", "description" => "Edited Description"];
        $output = $this->captureOutput(fn() => $this->controller->edit(999, $data));
        $this->assertStringContainsString('"Klaida":"Įrašas neegzistuoja."', $output, "edit method should handle not found error.");
    }

    public function testEditHandlesMissingFields() {
        $this->populateDatabase([
            ["name" => "Class E", "description" => "Description E"]
        ]);

        $data = ["name" => ""];
        $output = $this->captureOutput(fn() => $this->controller->edit(1, $data));
        $this->assertStringContainsString('"Klaida":"Trūksta būtinų laukų."', $output, "edit method should reject requests with missing input.");
    }
}
?>