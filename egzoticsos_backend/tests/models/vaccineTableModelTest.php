<?php
use PHPUnit\Framework\TestCase;

require_once __DIR__ . "/../../src/models/VaccineModel.php";

class VaccineModelTest extends TestCase{
    #getAllVacines
    public function testGetAllVaccinesReturnsArray(){}
    public function testGetAllVaccinesReturnsEmptyArrayIfTableEmpty(){}
    public function testGetAllVaccinesReturnsAssocArrayStructure(){}
    public function testGetAllVaccinesHandlesPDOExceptionAndReturnsFalse(){}
    public function testGetAllVaccinesPreservesSpecialCharactersInData(){}
    public function testGetAllVaccinesReturnsFullDatasetForMultipleRows(){}

    #getVacine($id)
    public function testGetVaccineReturnsCorrectVaccineById(){}
    public function testGetVaccineReturnsFalseIfPDOExceptionOccurs(){}
    public function testGetVaccineReturnsNullIfVaccineDoesNotExist(){}
    public function testGetVaccineWithInvalidIdReturnsNullOrFalse(){}
    public function testGetVaccinePreservesSpecialCharactersInData(){}

    #addVaccine($name, $description)
    public function testAddVaccineInsertsNewVaccineAndReturnsId(){}
    public function testAddVaccineReturnsNullIfVaccineAlreadyExists(){}
    public function testAddVaccineRejectsEntriesWithMissingInput(){}
    public function testAddVaccineHandlesPDOExceptionAndReturnsFalse(){}
    public function testAddVaccineAllowsSpecialCharactersInNameAndDescription(){}

    #deleteVacine($id)
    public function testDeleteVaccineRemovesVaccineSuccessfully(){}
    public function testDeleteVaccineReturnsTrueEvenIfIdDoesNotExist(){} 
    public function testDeleteVaccineHandlesPDOExceptionAndReturnsFalse(){}
    public function testDeleteVaccineWithInvalidIdReturnsFalse(){}
    #editVacine($id, $name, $description)

    public function testEditVaccineUpdatesVaccineSuccessfully(){}
    public function testEditVaccineReturnsFalseIfPDOExceptionOccurs(){}
    public function testEditVaccineDoesNotCreateNewRecordIfIdDoesNotExist(){}
    public function testEditVaccineAllowsSpecialCharactersInNameAndDescription(){}
    public function testEditVaccineWithEmptyNameOrDescriptionReturnsError(){} 
}

?>