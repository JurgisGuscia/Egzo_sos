<?php
use PHPUnit\Framework\TestCase;

require_once __DIR__ . "/../../../src/Models/VaccineTableModel.php";

class VaccineTableModelUnitTest extends TestCase{
    
    #getAllVacines

    public function testGetAllVaccinesHandlesPDOExceptionAndReturnsFalse(){
        $testTable = "mockTable";

        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())->method("prepare")->with("SELECT * FROM {$testTable} ORDER BY id")->will($this->throwException(new PDOException("Database error")));

        $model = new VaccineTableModel($pdoMock, $testTable);

        $result = $model->getAllVaccines();
        $this->assertFalse($result, "getAllVaccines should return false when a PDOException occurs");
    }


    // #getVaccine($id)
    public function testGetVaccineHandlesPDOExceptionAndReturnsFalse(){
        $testTable = "mockTable";
        $testID = 1;
        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())->method("prepare")->with("SELECT * FROM {$testTable} WHERE id = :id LIMIT 1")->will($this->throwException(new PDOException("Database error")));

        $model = new VaccineTableModel($pdoMock, $testTable);

        $result = $model->getVaccine($testID);
        $this->assertFalse($result, "getVaccine should return false when a PDOException occurs");
    }
    

    // #addVaccine($name, $description)
    // public function testAddVaccineHandlesPDOExceptionAndReturnsFalse(){
        
    // }

    // #deleteVacine($id)
    // public function testDeleteVaccineHandlesPDOExceptionAndReturnsFalse(){}

    // #editVacine($id, $name, $description)
    // public function testEditVaccineHandlesPDOExceptionAndReturnsFalse(){}
}

?>