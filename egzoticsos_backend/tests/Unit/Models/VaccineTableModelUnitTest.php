<?php
use PHPUnit\Framework\TestCase;

require_once __DIR__ . "/../../../src/Models/VaccineTableModel.php";

class VaccineTableModelUnitTest extends TestCase{
    
    #getAllVaccines
    public function testGetAllVaccinesHandlesPDOExceptionAndReturnsFalse(){
        $testTable = "mockTable";

        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())->method("prepare")->with("SELECT * FROM {$testTable} ORDER BY id")->will($this->throwException(new PDOException("Database error")));

        $model = new VaccineTableModel($pdoMock, $testTable);

        $result = $model->getAllVaccines();
        $this->assertFalse($result, "getAllVaccines should return false when a PDOException occurs");
    }


    #getVaccine($id)
    public function testGetVaccineHandlesPDOExceptionAndReturnsFalse(){
        $testTable = "mockTable";
        $testID = 1;
        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())->method("prepare")->with("SELECT * FROM {$testTable} WHERE id = :id LIMIT 1")->will($this->throwException(new PDOException("Database error")));

        $model = new VaccineTableModel($pdoMock, $testTable);

        $result = $model->getVaccine($testID);
        $this->assertFalse($result, "getVaccine should return false when a PDOException occurs");
    }
    

    #addVaccine($name, $description)
    public function testAddVaccineHandlesPDOExceptionAndReturnsFalse() {
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

        $model = new VaccineTableModel($pdoMock, $testTable);

        $result = $model->addVaccine("testName", "testDescription");

        $this->assertFalse($result, "addVaccine should return false when a PDOException occurs");

    }


    #deleteVaccine($id)
    public function testDeleteVaccineHandlesPDOExceptionAndReturnsFalse(){
        $testTable = "mockTable";
        $testID = 1;
        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())->method("prepare")->with("DELETE FROM {$testTable} WHERE id = :id")->will($this->throwException(new PDOException("Database error")));

        $model = new VaccineTableModel($pdoMock, $testTable);

        $result = $model->deleteVaccine($testID);
        $this->assertFalse($result, "deleteVaccine should return false when a PDOException occurs");
    }

    #editVaccine($id, $name, $description)
    public function testEditVaccineHandlesPDOExceptionAndReturnsFalse(){
        $testTable = "mockTable";
        $testID = 1;
        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())->method("prepare")->with("UPDATE {$testTable} SET name = :name, description = :description WHERE id = :id")->will($this->throwException(new PDOException("Database error")));

        $model = new VaccineTableModel($pdoMock, $testTable);

        $result = $model->editVaccine(1, "editName", "editDescription");
        $this->assertFalse($result, "editVaccine should return false when a PDOException occurs");
    }
}

?>