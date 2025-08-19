<?php
use PHPUnit\Framework\TestCase;

require_once __DIR__ . "/../../../src/Models/VaccineTableModel.php";

class VaccineTableModelIntegrationTest extends TestCase{
    
    #getAllVacines

    public function testGetAllVaccinesReturnsArray(){
        $testTable = "mockTable";
        $expectedData = [
            ["id" => 1, "name" => "Vaccine A", "description" => "Description A"],
            ["id" => 2, "name" => "Vaccine B", "description" => "Description B"],
        ];

        $stmtMock = $this->createMock(PDOStatement::class);
        $stmtMock->expects($this->once())->method("execute")->willReturn(true);
        $stmtMock->expects($this->once())->method("fetchAll")->with(PDO::FETCH_ASSOC)->willReturn($expectedData);
        
        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())->method("prepare")->with("SELECT * FROM {$testTable}")->willReturn($stmtMock);

        $model = new VaccineModel($pdoMock, $testTable);

        $result = $model->getAllVaccines();

        $this->assertIsArray($result, "getAllVaccines should return an array");
        $this->assertEquals($expectedData, $result, "Returned array doesn't match expected dataset");
    }

    public function testGetAllVaccinesReturnsEmptyArrayIfTableEmpty(){
        $testTable = "mockTable";
        $expectedData = [];

        $stmtMock = $this->createMock(PDOStatement::class);
        $stmtMock->expects($this->once())->method("execute")->willReturn(true);
        $stmtMock->expects($this->once())->method("fetchAll")->with(PDO::FETCH_ASSOC)->willReturn($expectedData);

        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())->method("prepare")->with("SELECT * FROM {$testTable}")->willReturn($stmtMock);

        $model = new VaccineModel($pdoMock, $testTable);

        $result = $model->getAllVaccines();

        $this->assertEmpty($result, "Returned array should be empty when table has no rows");
    }

    public function testGetAllVaccinesReturnsAssocArrayStructure(){
        $testTable = "mockTable";
        $mockData = [
            ["id" => 1, "name" => "Vaccine A", "description" => "Description A"],
            ["id" => 2, "name" => "Vaccine B", "description" => "Description B"],
        ];

        $stmtMock = $this->createMock(PDOStatement::class);
        $stmtMock->expects($this->once())->method("execute")->willReturn(true);
        $stmtMock->expects($this->once())->method("fetchAll")->with(PDO::FETCH_ASSOC)->willReturn($mockData);

        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())->method("prepare")->with("SELECT * FROM {$testTable}")->willReturn($stmtMock);

        $model = new VaccineModel($pdoMock, $testTable);

        $result = $model->getAllVaccines();

        foreach ($result as $row) {
            $this->assertIsArray($row, "Each vaccine should be an associative array");
            $this->assertArrayHasKey("id", $row, "Each row must have an 'id' key");
            $this->assertArrayHasKey("name", $row, "Each row must have a 'name' key");
            $this->assertArrayHasKey("description", $row, "Each row must have a 'description' key");
        }
    }

    public function testGetAllVaccinesPreservesSpecialCharactersInData(){
        $testTable = "mockTable";
        $mockData = [
            ["id" => 1, "name" => "Väccïne \"A\"", "description" => "Dëscription with ünicode & symbols < >"],
            ["id" => 2, "name" => "Vaccine B", "description" => "Normal description"]
        ];

        $stmtMock = $this->createMock(PDOStatement::class);
        $stmtMock->expects($this->once())->method("execute")->willReturn(true);
        $stmtMock->expects($this->once())->method("fetchAll")->with(PDO::FETCH_ASSOC)->willReturn($mockData);

 
        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())->method("prepare")->with("SELECT * FROM {$testTable}")->willReturn($stmtMock);

        $model = new VaccineModel($pdoMock, $testTable);

        $result = $model->getAllVaccines();

        $this->assertIsArray($result, "getAllVaccines should return an array");

        foreach ($result as $index => $row) {
            $this->assertEquals($mockData[$index]["name"], $row["name"], "Special characters in 'name' should be preserved");
            $this->assertEquals($mockData[$index]["description"], $row["description"], "Special characters in 'description' should be preserved");
        }
    }

    public function testGetAllVaccinesReturnsFullDatasetForMultipleRows(){
        $testTable = "mockTable";
        $mockData = [
            ["id" => 1, "name" => "Vaccine A", "description" => "Description A"],
            ["id" => 2, "name" => "Vaccine B", "description" => "Description B"],
            ["id" => 3, "name" => "Vaccine C", "description" => "Description C"],
        ];

        $stmtMock = $this->createMock(PDOStatement::class);
        $stmtMock->expects($this->once())->method("execute")->willReturn(true);
        $stmtMock->expects($this->once())->method("fetchAll")->with(PDO::FETCH_ASSOC)->willReturn($mockData);

        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())->method("prepare")->with("SELECT * FROM {$testTable}")->willReturn($stmtMock);

        $model = new VaccineModel($pdoMock, $testTable);

        $result = $model->getAllVaccines();

        $this->assertCount(count($mockData), $result, "Returned dataset should have the same number of rows as mock data");
        $this->assertEquals($mockData, $result, "Returned dataset should match the full mock data exactly");
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