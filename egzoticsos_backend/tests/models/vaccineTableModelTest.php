<?php
use PHPUnit\Framework\TestCase;

require_once __DIR__ . "/../../src/models/VaccineTableModel.php";

class VaccineTableModelTest extends TestCase{
    #getAllVacines
    public function testGetAllVaccinesReturnsArray(){
        $expectedData = [
            ["id" => 1, "name" => "Vaccine A", "description" => "Description A"],
            ["id" => 2, "name" => "Vaccine B", "description" => "Description B"],
        ];

        $stmtMock = $this->createMock(PDOStatement::class);
        $stmtMock->expects($this->once())->method("execute")->willReturn(true);
        $stmtMock->expects($this->once())->method("fetchAll")->with(PDO::FETCH_ASSOC)->willReturn($expectedData);

        $testTable = "mockTable";
        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())->method("prepare")->with("SELECT * FROM {$testTable}")->willReturn($stmtMock);

        $model = new VaccineModel($pdoMock, $testTable);

        $result = $model->getAllVaccines();

        $this->assertIsArray($result, "getAllVaccines should return an array");
        $this->assertEquals($expectedData, $result, "Returned array doesn't match expected dataset");
    }
    // public function testGetAllVaccinesReturnsEmptyArrayIfTableEmpty(){}
    // public function testGetAllVaccinesReturnsAssocArrayStructure(){}
    // public function testGetAllVaccinesHandlesPDOExceptionAndReturnsFalse(){}
    // public function testGetAllVaccinesPreservesSpecialCharactersInData(){}
    // public function testGetAllVaccinesReturnsFullDatasetForMultipleRows(){}

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