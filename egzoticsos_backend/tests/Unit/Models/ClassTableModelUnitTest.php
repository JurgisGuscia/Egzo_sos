<?php
use PHPUnit\Framework\TestCase;

require_once __DIR__ . "/../../../src/Models/ClassTableModel.php";

class ClassTableModelUnitTest extends TestCase{
    #getAllClasses
    public function testGetAllClassesHandlesPDOExceptionAndReturnsFalse(){
        $testTable = "mockTable";

        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())->method("prepare")
        ->with("SELECT * FROM {$testTable} ORDER BY id")
        ->will($this->throwException(new PDOException("Database error")));

        $model = new ClassTableModel($pdoMock, $testTable);

        $result = $model->getAllClasses();
        $this->assertFalse($result, "getAllClasses should return false when a PDOException occurs");
    }


    #getClass($id)
    public function testGetClassHandlesPDOExceptionAndReturnsFalse(){
        $testTable = "mockTable";
        $testID = 1;
        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())->method("prepare")
        ->with("SELECT * FROM {$testTable} WHERE id = :id LIMIT 1")
        ->will($this->throwException(new PDOException("Database error")));

        $model = new ClassTableModel($pdoMock, $testTable);

        $result = $model->getClass($testID);
        $this->assertFalse($result, "getClass should return false when a PDOException occurs");
    }
    

    #addClass($name, $description)
    public function testAddClassHandlesPDOExceptionAndReturnsFalse() {
        $testTable = "mockTable";

        $selectStmtMock = $this->createMock(PDOStatement::class);
        $selectStmtMock->method('execute')->willReturn(true);
        $selectStmtMock->method('fetch')->willReturn(false);

        $insertStmtMock = $this->createMock(PDOStatement::class);
        $insertStmtMock->method('execute')->will($this->throwException(new \PDOException("Database error")));

        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->method('prepare')->willReturnMap([
            ["SELECT * FROM {$testTable} WHERE name = :name LIMIT 1", $selectStmtMock],
            ["INSERT INTO {$testTable} (name, description) VALUES (:name, :description)", $insertStmtMock],
        ]);

        $model = new ClassTableModel($pdoMock, $testTable);

        $result = $model->addClass("testName", "testDescription");

        $this->assertFalse($result, "addClass should return false when a PDOException occurs");
    }


    #deleteClass($id)
    public function testDeleteClassHandlesPDOExceptionAndReturnsFalse(){
        $testTable = "mockTable";
        $testID = 1;
        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())->method("prepare")
        ->with("DELETE FROM {$testTable} WHERE id = :id")
        ->will($this->throwException(new PDOException("Database error")));

        $model = new ClassTableModel($pdoMock, $testTable);

        $result = $model->deleteClass($testID);
        $this->assertFalse($result, "deleteClass should return false when a PDOException occurs");
    }

    #editClass($id, $name, $description)
    public function testEditClassHandlesPDOExceptionAndReturnsFalse(){
        $testTable = "mockTable";
        $testID = 1;
        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())->method("prepare")
        ->with("UPDATE {$testTable} SET name = :name, description = :description WHERE id = :id")
        ->will($this->throwException(new PDOException("Database error")));

        $model = new ClassTableModel($pdoMock, $testTable);

        $result = $model->editClass(1, "editName", "editDescription");
        $this->assertFalse($result, "editClass should return false when a PDOException occurs");
    }
}
?>