<?php
use PHPUnit\Framework\TestCase;

require_once __DIR__ . "/../../../src/Models/UserTableModel.php";

class UserTableModelUnitTest extends TestCase{
    #getAllUsers()
    public function testGetAllUsersHandlesPDOExceptions(){
        $testTable = "mockTable";

        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())->method("prepare")
                ->with("SELECT * FROM {$testTable} ORDER BY id")
                ->will($this->throwException(new PDOException("Database error")));
                
        $model = new UserTableModel($pdoMock, $testTable);

        $result = $model->getAllUsers();

        $this->assertFalse($result, "getAllUsers should return false when PDO exception occurs.");
    }

    #getUser($id)
    public function testGetUserHandlesPDOExceptions(){
        $testTable = "mockTable";
        $testID = 1;
        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())->method("prepare")
        ->with("SELECT * FROM {$testTable} WHERE id = :id LIMIT 1")
        ->will($this->throwException(new PDOException("Database error")));

        $model = new UserTableModel($pdoMock, $testTable);

        $result = $model->getUser($testID);
        $this->assertFalse($result, "getUser should return false when a PDOException occurs");
    }

    #addUser($data)
    public function testAddUserHandlesPDOExceptions() {
        $testTable = "mockTable";
        $pdoMock = $this->createMock(PDO::class);

        $selectStmtMock = $this->createMock(PDOStatement::class);
        $selectStmtMock->method('execute')->willReturn(true);
        $selectStmtMock->method('fetch')->willReturn(false);

        $insertStmtMock = $this->createMock(PDOStatement::class);
        $insertStmtMock->method('execute')->will($this->throwException(new PDOException("Database error")));

        $pdoMock->method('prepare')->willReturnCallback(function($sql) use ($selectStmtMock, $insertStmtMock, $testTable) {
            if (strpos($sql, "SELECT * FROM {$testTable}") !== false) {
                return $selectStmtMock;
            }
            if (strpos($sql, "INSERT INTO {$testTable}") !== false) {
                return $insertStmtMock;
            }
            return false; 
        });

        $model = new UserTableModel($pdoMock, $testTable);

        $insertData = [
            "email" => "user3@mail.com",
            "password" => "fasfg",
            "activationString" => "fsagf2342fs",
            "isActive" => 1,
            "role" => "admin"
        ];

        $result = $model->addUser($insertData);

        $this->assertFalse($result, "addUser should return false when a PDOException occurs");

    }


    #deleteUser($id)
    public function testDeleteUserHandlesPDOExceptions(){
        $testTable = "mockTable";
        $testID = 1;
        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())->method("prepare")
        ->with("DELETE FROM {$testTable} WHERE id = :id")
        ->will($this->throwException(new PDOException("Database error")));

        $model = new UserTableModel($pdoMock, $testTable);

        $result = $model->deleteUser($testID);
        $this->assertFalse($result, "deleteUser should return false when a PDOException occurs");
    }

    #editUser($id, $data)
    public function testEditUserHandlesPDOExceptions(){
        $testTable = "mockTable";
        $testID = 1;
        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())->method("prepare")
        ->with("UPDATE {$testTable} SET 
            email = :email, 
            password = :password,
            activationString = :activationString,
            isActive = :isActive,
            role = :role
            WHERE id = :id")
        ->will($this->throwException(new PDOException("Database error")));

        $model = new UserTableModel($pdoMock, $testTable);
        $editData = [
            "email" => "user3@mail.com",
            "password" => "fasfg",
            "activationString" => "fsagf2342fs",
            "isActive" => 1,
            "role" => "admin"
        ];
        $result = $model->editUser(1, $editData);
        $this->assertFalse($result, "editUser should return false when a PDOException occurs");
    }


}
?>