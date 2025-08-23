<?php
use PHPUnit\Framework\TestCase;

require_once __DIR__ . "/../../../src/Models/AnimalTableModel.php";
require_once __DIR__ . "/../../../src/DTOs/AnimalDTO.php";

class AnimalTableModelUnitTest extends TestCase{

    #getAllAnimals
    public function testGetAllAnimalsHandlesPDOExceptionAndReturnsFalse(): void{
        $testTable = "animals";

        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())
            ->method('prepare')
            ->with("SELECT * FROM {$testTable} ORDER BY id")
            ->will($this->throwException(new PDOException("Database error")));

        $model = new AnimalTableModel($pdoMock, $testTable);

        $result = $model->getAllAnimals();
        $this->assertFalse($result, "getAllAnimals should return false when a PDOException occurs");
    }


    #getAnimal($id)
    public function testGetAnimalHandlesPDOExceptionAndReturnsFalse(): void{
        $testTable = "animals";

        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())
            ->method('prepare')
            ->with("SELECT * FROM {$testTable} WHERE id = :id LIMIT 1")
            ->will($this->throwException(new PDOException("Database error")));

        $model = new AnimalTableModel($pdoMock, $testTable);

        $result = $model->getAnimal(1);
        $this->assertFalse($result, "getAnimal should return false when a PDOException occurs");
    }

    #addAnimal(AnimalTDO $animal)
    public function testAddAnimalHandlesPDOExceptionAndReturnsFalse(): void{
        $testTable = "animals";

        $animal = new AnimalDTO("Rex", "Shepherd", "Dog", date('Y-m-d H:i:s'));

        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())
            ->method('prepare')
            ->will($this->throwException(new PDOException("Database error")));

        $model = new AnimalTableModel($pdoMock, $testTable);

        $result = $model->addAnimal($animal);
        $this->assertFalse($result, "addAnimal should return false when a PDOException occurs");
    }

    #deleteAnima($id)
    public function testDeleteAnimalHandlesPDOExceptionAndReturnsFalse(): void{
        $testTable = "animals";

        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())
            ->method('prepare')
            ->with("DELETE FROM {$testTable} WHERE id = :id")
            ->will($this->throwException(new PDOException("Database error")));

        $model = new AnimalTableModel($pdoMock, $testTable);

        $result = $model->deleteAnimal(1);
        $this->assertFalse($result, "deleteAnimal should return false when a PDOException occurs");
    }
    
    #editAnimal($id, AnimalTDO $animal)
    public function testEditAnimalHandlesPDOExceptionAndReturnsFalse(): void{
        $testTable = "animals";

        $animal = new AnimalDTO("Rex", "Shepherd", "Dog", date('Y-m-d H:i:s'), ['isChipped' => true]);

        $pdoMock = $this->createMock(PDO::class);
        $pdoMock->expects($this->once())
            ->method('prepare')
            ->will($this->throwException(new PDOException("Database error")));

        $model = new AnimalTableModel($pdoMock, $testTable);

        $result = $model->editAnimal(1, $animal);
        $this->assertFalse($result, "editAnimal should return false when a PDOException occurs");
    }
}

?>