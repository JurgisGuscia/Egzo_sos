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
    // public function testGetVaccineReturnsCorrectVaccineById(){}
    // public function testGetVaccineReturnsFalseIfPDOExceptionOccurs(){}
    // public function testGetVaccineReturnsNullIfVaccineDoesNotExist(){}
    // public function testGetVaccineWithInvalidIdReturnsNullOrFalse(){}
    // public function testGetVaccinePreservesSpecialCharactersInData(){}

    // #addVaccine($name, $description)
    // public function testAddVaccineInsertsNewVaccineAndReturnsId(){}
    // public function testAddVaccineReturnsNullIfVaccineAlreadyExists(){}
    // public function testAddVaccineRejectsEntriesWithMissingInput(){}
    // public function testAddVaccineHandlesPDOExceptionAndReturnsFalse(){}
    // public function testAddVaccineAllowsSpecialCharactersInNameAndDescription(){}

    // #deleteVacine($id)
    // public function testDeleteVaccineRemovesVaccineSuccessfully(){}
    // public function testDeleteVaccineReturnsTrueEvenIfIdDoesNotExist(){} 
    // public function testDeleteVaccineHandlesPDOExceptionAndReturnsFalse(){}
    // public function testDeleteVaccineWithInvalidIdReturnsFalse(){}
    // #editVacine($id, $name, $description)

    // public function testEditVaccineUpdatesVaccineSuccessfully(){}
    // public function testEditVaccineReturnsFalseIfPDOExceptionOccurs(){}
    // public function testEditVaccineDoesNotCreateNewRecordIfIdDoesNotExist(){}
    // public function testEditVaccineAllowsSpecialCharactersInNameAndDescription(){}
    // public function testEditVaccineWithEmptyNameOrDescriptionReturnsError(){} 
}

?>