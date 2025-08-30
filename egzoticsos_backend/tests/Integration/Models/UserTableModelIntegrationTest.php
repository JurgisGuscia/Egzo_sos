<?php
use PHPUnit\Framework\TestCase;

require_once __DIR__ . "/../../../src/Models/UserTableModel.php";

class UserTableModelIntegrationTest extends TestCase{
    protected $pdo;
    protected string $testTable = "testTable";
    protected UserTableModel $model;

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
        $this->model = new UserTableModel($this->pdo, $this->testTable);
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

    #getAllUsers()
    public function testGetAllUsersReturnsArray(){
        $testData = [
            ["email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"],
            ["email" => "user2@mail.com", "password" => "fasfg", "activationString" => "fsagf2342fs", "isActive" => 0, "role" => "admin"],
            ["email" => "user3@mail.com", "password" => "rewga", "activationString" => "hnbcxgytty4", "isActive" => 1, "role" => "admin"]
        ];
        $this->populateDataBase($testData);

        $result = $this->model->getAllUsers();

        $this->assertIsArray($result, "getAllUsers should return an array.");
    }

    public function testGetAllUsersEmptyTableReturnsArray(){
        $result = $this->model->getAllUsers();

        $this->assertIsArray($result, "getAllUsers empty table should return an array");
    }

    public function testGetAllUsersReturnsAssocArrayStructure(){
        $testData = [
            ["email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"],
            ["email" => "user2@mail.com", "password" => "fasfg", "activationString" => "fsagf2342fs", "isActive" => 0, "role" => "admin"],
            ["email" => "user3@mail.com", "password" => "rewga", "activationString" => "hnbcxgytty4", "isActive" => 1, "role" => "admin"]
        ];
        $this->populateDataBase($testData);

        $result = $this->model->getAllUsers();

        foreach ($result as $row) {
            $this->assertIsArray($row, "Each class should be an associative array");
            $this->assertArrayHasKey("id", $row, "Each row must have an 'id' key");
            $this->assertArrayHasKey("email", $row, "Each row must have a 'email' key");
            $this->assertArrayHasKey("password", $row, "Each row must have a 'password' key");
            $this->assertArrayHasKey("activationString", $row, "Each row must have a 'activationString' key");
            $this->assertArrayHasKey("isActive", $row, "Each row must have a 'isActive' key");
            $this->assertArrayHasKey("role", $row, "Each row must have a 'role' key");
        }
    }

    public function testGetAllUsersPreservesSpecialCharactersInData(){
        $testData =[
            ["email" => "usër1@mail.com", "password" => "dkäfe", "activationString" => "gklgnäfdsgs", "isActive" => 1, "role" => "admin"]
        ];
        $this->populateDataBase($testData);

        $result = $this->model->getAllUsers();

        $this->assertEquals($testData[0]["email"], $result[0]["email"], "Special characters in 'email' should be preserved");
    }

    public function testGetAllUsersReturnsFullDatasetForMultipleRows(){
        $testData = [
            ["id" => 1, "email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"],
            ["id" => 2, "email" => "user2@mail.com", "password" => "fasfg", "activationString" => "fsagf2342fs", "isActive" => 0, "role" => "admin"],
            ["id" => 3, "email" => "user3@mail.com", "password" => "rewga", "activationString" => "hnbcxgytty4", "isActive" => 1, "role" => "admin"]
        ];
        $this->populateDataBase($testData);

        $result = $this->model->getAllUsers();

        $this->assertCount(count($testData), $result, "Returned dataset should have the same number of rows as mock data");
        $this->assertEquals($testData, $result, "Returned dataset should match the full mock data exactly");
    }

    #getUser($id)
    public function testGetUserReturnsCorrectUser(){
        $testData = [
            ["id" => 1, "email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"],
            ["id" => 2, "email" => "user2@mail.com", "password" => "fasfg", "activationString" => "fsagf2342fs", "isActive" => 0, "role" => "admin"],
            ["id" => 3, "email" => "user3@mail.com", "password" => "rewga", "activationString" => "hnbcxgytty4", "isActive" => 1, "role" => "admin"]
        ];
        $this->populateDataBase($testData);

        $result = $this->model->getUser(2);

        $this->assertEquals(2, $result["id"], "Class should return the correct row.");
        $this->assertEquals($testData[1]["email"], $result["email"], "getUser should return the correct row.");
        $this->assertEquals($testData[1]["password"], $result["password"], "getUser should return the correct row.");
    }

    public function testGetUserNotFoundRowReturnsFalse(){
         $testData = [
            ["id" => 1, "email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"],
            ["id" => 2, "email" => "user2@mail.com", "password" => "fasfg", "activationString" => "fsagf2342fs", "isActive" => 0, "role" => "admin"],
            ["id" => 3, "email" => "user3@mail.com", "password" => "rewga", "activationString" => "hnbcxgytty4", "isActive" => 1, "role" => "admin"]
        ];
        $this->populateDataBase($testData);

        $result = $this->model->getUser(4);

        $this->assertEquals(false, $result, "getUser should handle not found row.");
    }

    public function testGetUserPreservesSpecialCharactersInData(){
        $testData =[
            ["email" => "usër1@mail.com", "password" => "dkäfe", "activationString" => "gklgnäfdsgs", "isActive" => 1, "role" => "admin"]
        ];
        $this->populateDataBase($testData);

        
        $result = $this->model->getUser(1);

        $this->assertEquals($testData[0]["email"], $result["email"], "Special characters in 'email' should be preserved");
        $this->assertEquals($testData[0]["password"], $result["password"], "Special characters in 'password' should be preserved");
    }

    #addUser($data)
    public function testAddUserInsertsNewUserAndReturnsId(){
         $testData = [
            ["id" => 1, "email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"],
            ["id" => 2, "email" => "user2@mail.com", "password" => "fasfg", "activationString" => "fsagf2342fs", "isActive" => 0, "role" => "admin"],
            ["id" => 3, "email" => "user3@mail.com", "password" => "rewga", "activationString" => "hnbcxgytty4", "isActive" => 1, "role" => "admin"]
        ];
        $this->populateDataBase($testData);

        $addData = [
            "email" => "user4@mail.com",
            "password" => "fdsasdf",
            "activationString" => "heqweqcxgytty4",
            "isActive" => 0,
            "role" => "admin"
        ];
        $result = $this->model->addUser($addData);
                
        $this->assertEquals(4, $result, "addUser should create row and return its ID.");
        $this->assertEquals($addData["email"], $this->model->getUser(4)["email"], "addUser should insert row with correct data.");
    }

    public function testAddUserReturnsNullIfUserAlreadyExists(){
        $testData = [
            ["email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"]
        ];
        $this->populateDataBase($testData);

        $result = $this->model->addUser($testData[0]);

        $this->assertEquals(null, $result, "addUser should return null if user already exists");
    }

    public function testAddUserAllowsSpecialCharacters(){
        $testData = [
            ["email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"]
        ];
        $this->populateDataBase($testData);

        $addData =[
            ["email" => "user2@mail.com", "password" => "dfdsafdsafe", "activationString" => "dasfgerter", "isActive" => 1, "role" => "admin"]
        ];
        $this->model->addUser($addData[0]);

        $result = $this->model->getUser(2);

        $this->assertEquals($addData[0]["email"], $result["email"], "addUser should handle special characters");
        $this->assertEquals($addData[0]["password"], $result["password"], "addUser should handle special characters");
    }

    #deleteUser($id)
    public function testDeleteUserRemovesUserSuccessfully(){
        $testData = [
            ["id" => 1, "email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"],
            ["id" => 2, "email" => "user2@mail.com", "password" => "fasfg", "activationString" => "fsagf2342fs", "isActive" => 0, "role" => "admin"],
            ["id" => 3, "email" => "user3@mail.com", "password" => "rewga", "activationString" => "hnbcxgytty4", "isActive" => 1, "role" => "admin"]
        ];
        $this->populateDataBase($testData);

        $this->model->deleteUser(2);
        
        $result = $this->model->getUser(2);

        $this->assertEquals($result, false, "deleteUser should delete the row with given id.");

    }

    public function testDeleteUserReturnsTrueEvenIfIdDoesNotExist(){
       $testData = [
            ["id" => 1, "email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"],
            ["id" => 2, "email" => "user2@mail.com", "password" => "fasfg", "activationString" => "fsagf2342fs", "isActive" => 0, "role" => "admin"],
            ["id" => 3, "email" => "user3@mail.com", "password" => "rewga", "activationString" => "hnbcxgytty4", "isActive" => 1, "role" => "admin"]
        ];
        $this->populateDataBase($testData);

        $result = $this->model->deleteUser(4);
    
        $this->assertEquals($result, true, "deleteUser should delete the row with given id.");
    } 

    #editUser($id, $data)
    public function testEditUserUpdatesUserSuccessfully(){
        $testData = [
            ["email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"],
            ["email" => "user2@mail.com", "password" => "fasfg", "activationString" => "fsagf2342fs", "isActive" => 0, "role" => "admin"]
        ];
        $this->populateDataBase($testData);

        $editData = ["email" => "user3@mail.com", "password" => "fasfg", "activationString" => "fsagf2342fs", "isActive" => 1, "role" => "admin"];
        
        $this->model->editUser(2, $editData);
        
        $result = $this->model->getUser(1);
        $result2 = $this->model->getUser(2);

        $this->assertEquals($testData[0]["email"], $result["email"], "editUser should not update other rows.");

        $this->assertEquals($editData["email"], $result2["email"], "editUser should update given row.");
    }

    public function testEditUserDoesNotCreateNewRecord(){
        $testData = [
            ["email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"],
            ["email" => "user2@mail.com", "password" => "fasfg", "activationString" => "fsagf2342fs", "isActive" => 0, "role" => "admin"]
        ];
        $this->populateDataBase($testData);

        $editData = ["email" => "user3@mail.com", "password" => "fasfg", "activationString" => "fsagf2342fs", "isActive" => 1, "role" => "admin"];
        
        $this->model->editUser(2, $editData);

        $result = $this->model->getAllUsers();

        $this->assertEquals(2, count($result), "editUser should not create new entries.");

    }

    public function testEditUserAllowsSpecialCharacters(){
        $testData = [
            ["email" => "user1@mail.com", "password" => "dkife", "activationString" => "gklgngfdsgs", "isActive" => 1, "role" => "admin"],
            ["email" => "user2@mail.com", "password" => "fasfg", "activationString" => "fsagf2342fs", "isActive" => 0, "role" => "admin"]
        ];
        $this->populateDataBase($testData);
        $editData = ["email" => "usër1@mail.com", "password" => "dkäfe", "activationString" => "gklgnäfdsgs", "isActive" => 1, "role" => "admin"];

        $this->model->editUser(2, $editData);

        $result = $this->model->getUser(2);

        $this->assertEquals($editData["email"], $result["email"], "editUser should allow special characters.");
        $this->assertEquals($editData["password"], $result["password"], "editUser should allow special characters.");        
    }

}

?>