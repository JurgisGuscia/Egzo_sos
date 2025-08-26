<?php
use PHPUnit\Framework\TestCase;
require_once __DIR__ . "/../../../src/Controllers/VaccineTableController.php";
require_once __DIR__ . "/../../../src/Models/VaccineTableModel.php";

class VaccineTableControllerIntegrationTest extends TestCase {
    protected PDO $pdo;
    protected string $testTable = "testTable";
    protected VaccineTableController $controller;

    protected function setUp(): void {
        $this->pdo = new PDO("sqlite::memory:");
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->pdo->exec("
            CREATE TABLE {$this->testTable} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                description TEXT
            );
        ");

        $this->controller = new VaccineTableController($this->pdo, $this->testTable);
    }

    protected function populateDatabase(array $rows): void {
        foreach ($rows as $row) {
            $this->pdo->prepare("
                INSERT INTO {$this->testTable} (name, description) VALUES (:name, :description)
            ")->execute([
                ':name' => $row['name'],
                ':description' => $row['description']
            ]);
        }
    }

    protected function captureOutput(callable $fn): string {
        ob_start();
        try {
            $fn();
            return ob_get_clean();
        } catch (\Throwable $e) {
            ob_end_clean(); // ensure buffer is cleaned
            throw $e;       // rethrow so the test still fails
        }
    }   

    #getAll()
    public function testGetAllReturnsData() {
        $this->populateDatabase([
            ["name" => "Vaccine A", "description" => "Description A"],
            ["name" => "Vaccine B", "description" => "Description B"]
        ]);

        $output = $this->captureOutput(fn() => $this->controller->getAll());
        $this->assertStringContainsString('"name":"Vaccine A"', $output, "getAll should include Vaccine A.");
        $this->assertStringContainsString('"description":"Description A"', $output, "getAll should include Vaccine A description.");
        $this->assertStringContainsString('"name":"Vaccine B"', $output, "getAll should include Vaccine B.");
        $this->assertStringContainsString('"description":"Description B"', $output, "getAll should include Vaccine B description.");
    }

    public function testGetAllReturnsEmptyArrayForEmptyTable() {
        $output = $this->captureOutput(fn() => $this->controller->getAll());
        $this->assertEquals('[]', $output, "getAll should return empty array when table is empty.");
    }

    public function testGetAllHandlesFailure() {
        $this->pdo->exec("DROP TABLE {$this->testTable}");

        $output = $this->captureOutput(fn() => $this->controller->getAll());
        $this->assertStringContainsString('"Klaida":"Nepavyko gauti vakcinų sąrašo."', $output, "getAll should handle query failure gracefully.");
       
    }

    #get()
    public function testGetReturnsData() {
        $this->populateDatabase([
            ["name" => "Vaccine A", "description" => "Description A"]
        ]);

        $output = $this->captureOutput(fn() => $this->controller->get(1));
        $this->assertStringContainsString('"name":"Vaccine A"', $output, "get method should return data");
        $this->assertStringContainsString('"description":"Description A"', $output, "get method should return data.");
    }

    public function testGetReturnsErrorOnNotFound() {
        $output = $this->captureOutput(fn() => $this->controller->get(999));
        $this->assertStringContainsString('"Klaida":"Nepavyko rasti vakcinos."', $output, "get method should return error when nothing is found.");
    }
    #add()
    public function testAddReturnsSuccessful() {
        $data = ["name" => "Vaccine C", "description" => "Description C"];
        $output = $this->captureOutput(fn() => $this->controller->add($data));
        $this->assertStringContainsString('"Pavyko":"Vakcina pridėta sėkmingai."', $output, "add method should return success message.");
    }

    public function testAddHandlesMissingInput() {
        $data = ["name" => ""];
        $output = $this->captureOutput(fn() => $this->controller->add($data));
        $this->assertStringContainsString('"Klaida":"Trūksta būtinų laukų."', $output, "add method should reject request with missing input.");
    }
    
    public function testAddHandlesVaccineAlreadyExists() {
        $this->populateDatabase([
            ["name" => "Vaccine B", "description" => "Description B"]
        ]);

        $data = ["name" => "Vaccine B", "description" => "Description B"];
        $output = $this->captureOutput(fn() => $this->controller->add($data));
        $this->assertStringContainsString('"Klaida":"Vakcina jau egzistuoja."', $output, "add method should reject if vaccine already exists.");
    }

    #delete()
    public function testDeleteReturnsSuccessful() {
        $this->populateDatabase([
            ["name" => "Vaccine C", "description" => "Description C"]
        ]);

        $output = $this->captureOutput(fn() => $this->controller->delete(1));
        $this->assertStringContainsString('"Pavyko":"Vakcina sėkmingai pašalinta."', $output, "detele method should return success message.");
    }

    public function testDeleteSucceedsIfNotFound() {
        $output = $this->captureOutput(fn() => $this->controller->delete(999));
        $this->assertStringContainsString('"Pavyko":"Vakcina sėkmingai pašalinta."', $output, "delete should return success if vaccine was not found.");
    }


    #edit()
    public function testEditReturnsSuccessful() {
        $this->populateDatabase([
            ["name" => "Vaccine D", "description" => "Description D"]
        ]);

        $data = ["name" => "Edited Vaccine", "description" => "Edited Description"];
        $output = $this->captureOutput(fn() => $this->controller->edit(1, $data));
        $this->assertStringContainsString('"Pavyko":"Vakcinos duomenys atnaujinti sėkmingai."', $output, "edit method should return success message.");
    }

    public function testEditReturnsHandlesNotFound() {
        $data = ["name" => "Edited Vaccine", "description" => "Edited Description"];
        $output = $this->captureOutput(fn() => $this->controller->edit(999, $data));
        $this->assertStringContainsString('"Klaida":"Įrašas neegzistuoja."', $output, "edit method should handle not found error.");
    }

    public function testEditHandlesMissingFields() {
        $this->populateDatabase([
            ["name" => "Vaccine E", "description" => "Description E"]
        ]);

        $data = ["name" => ""];
        $output = $this->captureOutput(fn() => $this->controller->edit(1, $data));
        $this->assertStringContainsString('"Klaida":"Trūksta būtinų laukų."', $output, "edit method should reject requests with missing input.");
    }
}
?>
