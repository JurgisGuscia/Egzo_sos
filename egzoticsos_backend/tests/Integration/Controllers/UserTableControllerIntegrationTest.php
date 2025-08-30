<?php
use PHPUnit\Framework\TestCase;
require_once __DIR__ . "/../../../src/Controllers/UserTableController.php";
require_once __DIR__ . "/../../../src/Models/UserTableModel.php";

class UserTableControllerIntegrationTest extends TestCase{
    protected PDO $pdo;
    protected string $testTable = "testTable";
    protected UserTableController $controller;

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
        $this->controller = new UserTableController($this->pdo, $this->testTable);
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

    // $testData = [
    //         ["email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"],
    //         ["email" => "user2@mail.com", "password" => "fasfg", "activationString" => "fsagf2342fs", "isActive" => 0, "role" => "admin"],
    //         ["email" => "user3@mail.com", "password" => "rewga", "activationString" => "hnbcxgytty4", "isActive" => 1, "role" => "admin"]
    //     ];   

    
    #getAllUsers()
    public function testGetAllUsersReturnsData(){
         $testData = [
            ["email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"]
        ];
        $this->populateDatabase($testData);

        $output = $this->captureOutput(fn() => $this->controller->getAll());
        $this->assertStringContainsString('"email":"user1@mail.com"', $output, "getAll should include email.");
        $this->assertStringContainsString('"password":"dkife"', $output, "getAll should include password.");
        $this->assertStringContainsString('"activationString":"gklgngfdsgs"', $output, "getAll should include activationString.");
        $this->assertStringContainsString('"isActive":' . 1, $output, 'getAll should include isActive key.');
        $this->assertStringContainsString('"role":"admin"', $output, "getAll should include role.");
    }

    public function testGetAllUsersReturnsEmptyArrayFromEmptyTable(){
        $output = $this->captureOutput(fn() => $this->controller->getAll());
        $this->assertEquals('[]', $output, "getAll should return empty array when table is empty.");
    }
    
    public function testGetAllUsersHandlesFailure(){
        $this->pdo->exec("DROP TABLE {$this->testTable}");
        $output = $this->captureOutput(fn() => $this->controller->getAll());
        $this->assertStringContainsString('"Klaida":"Nepavyko gauti vartotojų sąrašo."', $output, "getAll should handle query failure gracefully.");
       
    }

    #getUser($id)
    public function testGetUserReturnsData() {
        $testData = [
            ["email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"]
        ];
        $this->populateDatabase($testData);
        $output = $this->captureOutput(fn() => $this->controller->get(1));
        $this->assertStringContainsString('"email":"user1@mail.com"', $output, "getAll should include email.");
        $this->assertStringContainsString('"password":"dkife"', $output, "getAll should include password.");
        $this->assertStringContainsString('"activationString":"gklgngfdsgs"', $output, "getAll should include activationString.");
        $this->assertStringContainsString('"isActive":' . 1, $output, 'getAll should include isActive key.');
        $this->assertStringContainsString('"role":"admin"', $output, "getAll should include role.");
    }

    public function testGetReturnsErrorOnNotFound() {
        $output = $this->captureOutput(fn() => $this->controller->get(999));
        $this->assertStringContainsString('"Klaida":"Nepavyko rasti vartotojo."', $output, "get method should return error when nothing is found.");
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

    #deleteUser($id)
    public function testDeleteReturnsSuccessful() {
        $testData = [
            ["email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"]
        ];
        $this->populateDatabase($testData);

        $output = $this->captureOutput(fn() => $this->controller->delete(1));
        $this->assertFalse($this->controller->get(1), "detele method should remove entry.");
        $this->assertStringContainsString('"Pavyko":"Vartotojas sėkmingai pašalintas."', $output, "delete method should return success message.");
    }

    public function testDeleteSucceedsIfNotFound() {
        $output = $this->captureOutput(fn() => $this->controller->delete(999));
        $this->assertStringContainsString('"Pavyko":"Vartotojas sėkmingai pašalintas."', $output, "delete should return success if user was not found.");
    }

    #editUser($id, $data)
    public function testEditReturnsSuccessful() {
        $testData = [
            ["email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"]
        ];
        $this->populateDatabase($testData);
        $editData = ["email" => "edited@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"];
        $output = $this->captureOutput(fn() => $this->controller->edit(1, $editData));

        $check = $this->captureOutput(fn() => $this->controller->get(1));
        $decodedEditedData = json_decode($check, true);

        $this->assertEquals($editData["email"], $decodedEditedData["email"], "edit should update a field");
        $this->assertStringContainsString('"Pavyko":"Vartotojo duomenys atnaujinti sėkmingai."', $output, "edit method should return success message.");
    }

    public function testEditReturnsHandlesNotFound() {
        $testData = ["email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"];
        $output = $this->captureOutput(fn() => $this->controller->edit(999, $testData));
        $this->assertStringContainsString('"Klaida":"Įrašas neegzistuoja."', $output, "edit method should handle not found error.");
    }

    public function testEditHandlesMissingFields() {
        $testData = [
            ["email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"]
        ];
        $this->populateDatabase($testData);

        $editData = ["email" => "user1@mail.com", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"];
        $output = $this->captureOutput(fn() => $this->controller->edit(1, $editData));
        $this->assertStringContainsString('"Klaida":"Trūksta būtinų laukų."', $output, "edit method should reject requests with missing input.");
    }
}
?>