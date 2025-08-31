<?php
use PHPUnit\Framework\TestCase;
require_once __DIR__ . "/../../../src/Controllers/AuthController.php";
require_once __DIR__ . "/../../../src/Models/UserTableModel.php";

class AuthControllerIntegrationTest extends TestCase{
    protected PDO $pdo;
    protected string $testTable = "testTable";
    protected AuthController $controller;

    protected function setUp():void{
        #Create in memory sqlite
        $this->pdo = new PDO("sqlite::memory:");
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->pdo->exec("
            CREATE TABLE {$this->testTable} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT,
                password TEXT,
                activationString TEXT,
                isActive INTEGER,
                role  TEXT
            );
        ");
        $this->controller = new AuthController($this->pdo, $this->testTable);
    }

    protected function populateDatabase(array $rows):void{
        #Helper, pushes given data to sqlite
        foreach ($rows as $row){
            $this->pdo->prepare("
                INSERT INTO {$this->testTable} 
                    (email, password, activationString, isActive, role) 
                    VALUES 
                    (:email, :password, :activationString, :isActive, :role)
            ")->execute([
                ":email" => $row["email"],
                ":password" => $row["password"],
                ":activationString" => $row["activationString"],
                ":isActive" => $row["isActive"],
                ":role" => $row["role"]
            ]);
        }
    }

    protected function captureOutput(callable $fn): string {
        ob_start();
        try {
            $fn();
            return ob_get_clean();
        } catch (\Throwable $e) {
            ob_end_clean(); 
            throw $e;       
        }
    } 


    #addUser($data)
    public function testAddReturnsSuccessful() {
        $testData = ["email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"];
        $output = $this->captureOutput(fn() => $this->controller->add($testData));
        $this->assertStringContainsString('"Pavyko":"Vartotojas pridėtas sėkmingai."', $output, "add method should return success message.");
    }

    public function testAddHandlesMissingInput() {
        $testData = ["email" => "user1@mail.com", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"];
        $output = $this->captureOutput(fn() => $this->controller->add($testData));
        $this->assertStringContainsString('"Klaida":"Trūksta būtinų laukų."', $output, "add method should reject request with missing input.");
    }
    
    public function testAddHandlesVaccineAlreadyExists() {
        $testData = ["email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"];
        $this->populateDatabase([$testData]);
        $output = $this->captureOutput(fn() => $this->controller->add($testData));
        $this->assertStringContainsString('"Klaida":"Vartotojas jau egzistuoja."', $output, "add method should reject if user already exists.");
    }
}
?>