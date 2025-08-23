<?php

use PHPUnit\Framework\TestCase;

require_once __DIR__ . "/../../../src/Models/AnimalTableModel.php";
require_once __DIR__ . "/../../../src/DTOs/AnimalDTO.php";

class AnimalTableModelIntegrationTest extends TestCase{
    protected $pdo;
    protected string $testTable = "testTable";
    protected AnimalTableModel $model;

    protected function createDummyAnimals(): array {
        $now = date('Y-m-d H:i:s');

        $animals = [
            // 2 full normal entries
            new AnimalDTO("Buddy", "Golden Retriever", "Dog", $now, [
                'sex' => 'Male',
                'dateOfBirth' => '2020-01-15',
                'dateOfArrival' => '2020-06-10',
                'isSterilized' => true,
                'isChipped' => true,
                'isAvailableForAdoption' => true,
                'vaccineList' => 'Rabies, DHPP',
                'isAdopted' => false,
                'dateOfAdoption' => null,
                'isDead' => false,
                'dateOfDeath' => null,
                'additionalInfo' => 'Very friendly',
                'photoUrl' => 'https://example.com/buddy.jpg'
            ]),
            new AnimalDTO("Mittens", "Siamese", "Cat", $now, [
                'sex' => 'Female',
                'dateOfBirth' => '2021-03-20',
                'dateOfArrival' => '2021-05-15',
                'isSterilized' => false,
                'isChipped' => false,
                'isAvailableForAdoption' => true,
                'vaccineList' => 'FVRCP, Rabies',
                'isAdopted' => false,
                'dateOfAdoption' => null,
                'isDead' => false,
                'dateOfDeath' => null,
                'additionalInfo' => 'Shy but affectionate',
                'photoUrl' => 'https://example.com/mittens.jpg'
            ]),

            // 2 entries with missing optional fields
            new AnimalDTO("Charlie", "Beagle", "Dog", $now, [
                'sex' => 'Male',
                'isChipped' => true
            ]),
            new AnimalDTO("Luna", "Tabby", "Cat", $now, [
                'dateOfBirth' => '2019-11-05',
                'isSterilized' => true
            ]),

            // 1 entry with special characters
            new AnimalDTO("Félix 🐱", "Persian & Exotic", "Cat", $now, [
                'sex' => 'Male',
                'additionalInfo' => 'Loves 🧶 and sleeping in "sun spots"',
                'photoUrl' => 'https://example.com/félix.jpg'
            ]),
            new AnimalDTO("Zoë 🌟", "Maine Coon", "Cat", $now, [
                'sex' => 'Female',
                'additionalInfo' => 'Playful & curious, loves climbing 🧗‍♀️',
                'photoUrl' => 'https://example.com/zoe.jpg'
            ])
        ];

    return $animals;
}



    protected function setUp():void{
        #Create in memory sqlite
        $this->pdo = new PDO("sqlite::memory:");
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->pdo->exec("
            CREATE TABLE {$this->testTable} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                breed TEXT NOT NULL,
                class TEXT NOT NULL,
                sex TEXT,
                dateOfBirth TEXT,
                dateOfArrival TEXT ,
                isSterilized INTEGER,
                isChipped INTEGER, 
                isAvailableForAdoption INTEGER,
                vaccineList TEXT,
                isAdopted INTEGER,
                dateOfAdoption TEXT,
                isDead INTEGER,
                dateOfDeath TEXT,
                additionalInfo TEXT,
                dateOfDatabaseEntry TEXT NOT NULL,
                photoUrl VARCHAR(2048)
            );
        ");
        $this->model = new AnimalTableModel($this->pdo, $this->testTable);
    }



    protected function populateDatabase(array $animals): void {
    # Prepare the statement once
    $stmt = $this->pdo->prepare("
        INSERT INTO {$this->testTable} (
            name, breed, class, sex, dateOfBirth, dateOfArrival,
            isSterilized, isChipped, isAvailableForAdoption, vaccineList,
            isAdopted, dateOfAdoption, isDead, dateOfDeath, additionalInfo,
            dateOfDatabaseEntry, photoUrl
        ) VALUES (
            :name, :breed, :class, :sex, :dateOfBirth, :dateOfArrival,
            :isSterilized, :isChipped, :isAvailableForAdoption, :vaccineList,
            :isAdopted, :dateOfAdoption, :isDead, :dateOfDeath, :additionalInfo,
            :dateOfDatabaseEntry, :photoUrl
        )
    ");

    foreach ($animals as $animal) {
        $stmt->execute([
            ':name' => $animal->name,
            ':breed' => $animal->breed,
            ':class' => $animal->class,
            ':sex' => $animal->sex,
            ':dateOfBirth' => $animal->dateOfBirth,
            ':dateOfArrival' => $animal->dateOfArrival,
            ':isSterilized' => $animal->isSterilized ?? 0,
            ':isChipped' => $animal->isChipped ?? 0,
            ':isAvailableForAdoption' => $animal->isAvailableForAdoption ?? 1,
            ':vaccineList' => $animal->vaccineList,
            ':isAdopted' => $animal->isAdopted ?? 0,
            ':dateOfAdoption' => $animal->dateOfAdoption,
            ':isDead' => $animal->isDead ?? 0,
            ':dateOfDeath' => $animal->dateOfDeath,
            ':additionalInfo' => $animal->additionalInfo,
            ':dateOfDatabaseEntry' => $animal->dateOfDatabaseEntry,
            ':photoUrl' => $animal->photoUrl,
        ]);
    }
}


    #getAllAnimals()
    public function testGetAllAnimalsReturnsAllRows() {
        $dummyAnimals = $this->createDummyAnimals();
        $this->populateDatabase($dummyAnimals);

        $result = $this->model->getAllAnimals();
        $expectedCount = count($dummyAnimals);
        $expectedBreed = $dummyAnimals[1]->breed;
        $expectedName = $dummyAnimals[0]->name;
        $this->assertCount($expectedCount, $result, "getAllAnimals should return all rows.");
        $this->assertSame($expectedName, $result[0]['name'], "getAllAnimals should return all rows."); 
        $this->assertSame($expectedBreed, $result[1]['breed'], "getAllAnimals should return all rows."); 
    }

    public function testGetAllAnimalsReturnsInIdOrder() {
        $dummyAnimals = $this->createDummyAnimals();
        $this->populateDatabase($dummyAnimals);

        $result = $this->model->getAllAnimals();

        for ($i = 1; $i < count($result); $i++) {
            $this->assertGreaterThan($result[$i - 1]['id'], $result[$i]['id'], "getAllAnimals should return rows in order.");
        }
    }

    public function testGetAllAnimalsReturnsEmptyArrayWhenNoData() {
        $result = $this->model->getAllAnimals();
        $this->assertIsArray($result, "getAllAnimals should return empty array with empty table");
        $this->assertCount(0, $result, "getAllAnimals should return empty array with empty table");
    }

    public function testGetAllAnimalsPreservesSpecialCharacters() {
        $dummyAnimals = $this->createDummyAnimals();
        $this->populateDatabase($dummyAnimals);

        $result = $this->model->getAllAnimals();

        $specialAnimal = $dummyAnimals[4];
        $found = false;
        foreach ($result as $row) {
            if ($row['name'] === $specialAnimal->name) {
                $found = true;
                $this->assertEquals($specialAnimal->additionalInfo, $row['additionalInfo']);
                break;
            }
        }
        $this->assertTrue($found, "getAllAnimals should preserver special characters");
    }

    public function testGetAllAnimalsHandlesNullOptionalFields() {
        $dummyAnimals = $this->createDummyAnimals();
        $this->populateDatabase($dummyAnimals);

        $result = $this->model->getAllAnimals();

        $animalWithNulls = $dummyAnimals[2];
        $row = array_filter($result, fn($r) => $r['name'] === $animalWithNulls->name);
        $row = array_values($row)[0] ?? null;

        $this->assertNotNull($row, "getAllAnimals should handle null optional fields");
        $this->assertNull($row['dateOfBirth'], "getAllAnimals should handle null optional fields");
        $this->assertEquals(1, $row['isAvailableForAdoption'], "getAllAnimals should handle null optional fields");
    }


    #getAnimal($id)
    public function testGetAnimalReturnsCorrectDTO() {
        $this->populateDatabase($this->createDummyAnimals());
        $allRows = $this->model->getAllAnimals();
        $id = $allRows[0]['id'];

        $animalDTO = $this->model->getAnimal($id);

        $this->assertInstanceOf(AnimalDTO::class, $animalDTO, "Expected getAnimal() to return an instance of AnimalDTO");
        $this->assertEquals('Buddy', $animalDTO->name, "Animal name did not match expected value for ID $id");
        $this->assertEquals('Golden Retriever', $animalDTO->breed, "Animal breed did not match expected value for ID $id");
        $this->assertEquals('Dog', $animalDTO->class, "Animal class did not match expected value for ID $id");
    }

    public function testGetAnimalPreservesOptionalFields() {
        $this->populateDatabase($this->createDummyAnimals());
        $allRows = $this->model->getAllAnimals();
        $id = $allRows[2]['id']; 

        $animalDTO = $this->model->getAnimal($id);

        $this->assertInstanceOf(AnimalDTO::class, $animalDTO, "Expected getAnimal() to return an instance of AnimalDTO");
        $this->assertEquals('Charlie', $animalDTO->name, "Animal name did not match expected value for ID $id");
        $this->assertNull($animalDTO->dateOfBirth, "Expected dateOfBirth to be null for animal with missing optional field");
        $this->assertTrue($animalDTO->isChipped, "Expected isChipped to be true for animal with that flag set");
    }

    public function testGetAnimalPreservesSpecialCharacters() {
        $this->populateDatabase($this->createDummyAnimals());
        $allRows = $this->model->getAllAnimals();
        $specialAnimalId = $allRows[4]['id'];

        $animalDTO = $this->model->getAnimal($specialAnimalId);

        $this->assertStringContainsString('🐱', $animalDTO->name, "Special character emoji missing in animal name");
        $this->assertStringContainsString('🧶', $animalDTO->additionalInfo, "Special character emoji missing in additionalInfo");
    }

    public function testGetAnimalReturnsNullForNonExistentId() {
        $animalDTO = $this->model->getAnimal(9999);
        $this->assertNull($animalDTO, "Expected getAnimal() to return null for a non-existent ID");
    }

    public function testGetAnimalBooleanFields() {
        $this->populateDatabase($this->createDummyAnimals());
        $allRows = $this->model->getAllAnimals();
        $id = $allRows[0]['id'];

        $animalDTO = $this->model->getAnimal($id);

        $this->assertIsBool($animalDTO->isChipped, "Expected isChipped to be boolean for ID $id");
        $this->assertIsBool($animalDTO->isSterilized, "Expected isSterilized to be boolean for ID $id");
    }
 
    #addAnimal(AnimalDTO $animal)
    public function testAddAnimalInsertsFullRecord() {
        $now = date('Y-m-d H:i:s');
        $animal = new AnimalDTO("Rex", "German Shepherd", "Dog", $now, [
            'sex' => 'Male',
            'dateOfBirth' => '2019-02-14',
            'dateOfArrival' => '2020-03-01',
            'isSterilized' => true,
            'isChipped' => true,
            'isAvailableForAdoption' => true,
            'vaccineList' => 'Rabies, DHPP',
            'isAdopted' => false,
            'dateOfAdoption' => null,
            'isDead' => false,
            'dateOfDeath' => null,
            'additionalInfo' => 'Very active and friendly',
            'photoUrl' => 'https://example.com/rex.jpg'
        ]);

        $id = $this->model->addAnimal($animal);

        $this->assertIsInt((int)$id, "addAnimal should return the last insert ID as an integer");

        $fetchedAnimal = $this->model->getAnimal($id);

        $this->assertInstanceOf(AnimalDTO::class, $fetchedAnimal, "getAnimal should return AnimalDTO after adding");
        $this->assertEquals("Rex", $fetchedAnimal->name, "Animal name should match inserted value");
        $this->assertEquals("German Shepherd", $fetchedAnimal->breed, "Animal breed should match inserted value");
        $this->assertTrue($fetchedAnimal->isChipped, "Boolean fields should be stored correctly");
    }

    public function testAddAnimalHandlesNullOptionalFields() {
        $now = date('Y-m-d H:i:s');
        $animal = new AnimalDTO("Shadow", "Black Cat", "Cat", $now);

        $id = $this->model->addAnimal($animal);
        $this->assertIsInt((int)$id, "addAnimal should return last insert ID");

        $fetchedAnimal = $this->model->getAnimal($id);

        $this->assertInstanceOf(AnimalDTO::class, $fetchedAnimal, "getAnimal should return AnimalDTO");
        $this->assertEquals("Shadow", $fetchedAnimal->name, "Animal name should match inserted value");
        $this->assertNull($fetchedAnimal->sex, "Optional fields should be null if not set");
        $this->assertNull($fetchedAnimal->isAvailableForAdoption, "Default boolean value should be null if optional");
    }

    public function testAddAnimalPreservesSpecialCharacters() {
        $now = date('Y-m-d H:i:s');
        $animal = new AnimalDTO("Lúcia 🐶", "Collie & Shepherd", "Dog", $now, [
            'additionalInfo' => 'Loves playing with 🧸 and running',
        ]);

        $id = $this->model->addAnimal($animal);

        $fetchedAnimal = $this->model->getAnimal($id);

        $this->assertStringContainsString('🐶', $fetchedAnimal->name, "Special characters in name should be preserved");
        $this->assertStringContainsString('🧸', $fetchedAnimal->additionalInfo, "Special characters in additionalInfo should be preserved");
    }


    #deleteAnimal($id)
    public function testDeleteAnimalRemovesRecord() {
        $dummyAnimals = $this->createDummyAnimals();
        $this->populateDatabase($dummyAnimals);

        $idToDelete = 1;
        $result = $this->model->deleteAnimal($idToDelete);

        $this->assertTrue($result, "deleteAnimal should return true when deleting an existing record.");

        $animal = $this->model->getAnimal($idToDelete);
        $this->assertNull($animal, "Animal with deleted ID should no longer exist in the database.");
    }

    public function testDeleteAnimalNonExistingId() {
        $dummyAnimals = $this->createDummyAnimals();
        $this->populateDatabase($dummyAnimals);

        $nonExistingId = 999;
        $result = $this->model->deleteAnimal($nonExistingId);

        $this->assertTrue($result, "deleteAnimal should return true even if the ID does not exist.");
    }

    public function testDeleteAllAnimals() {
        $dummyAnimals = $this->createDummyAnimals();
        $this->populateDatabase($dummyAnimals);

        foreach (range(1, count($dummyAnimals)) as $id) {
            $this->model->deleteAnimal($id);
        }

        $all = $this->model->getAllAnimals();
        $this->assertCount(0, $all, "All animals should be deleted from the table.");
    }

    public function testDeleteAnimalDoesNotAffectOtherRecords() {
        $dummyAnimals = $this->createDummyAnimals();
        $this->populateDatabase($dummyAnimals);

        $idToDelete = 2;
        $this->model->deleteAnimal($idToDelete);

        $remaining = $this->model->getAllAnimals();
        $this->assertCount(count($dummyAnimals) - 1, $remaining, "Only one animal should be deleted.");
        
        foreach ($remaining as $row) {
            $this->assertNotEquals($idToDelete, $row['id'], "Deleted animal ID should not exist in remaining rows.");
        }
    }

    #editAnimal($id, AnimalTDO $animal)
    public function testEditAnimalUpdatesAllFields() {
        $this->populateDatabase($this->createDummyAnimals());
        $allRows = $this->model->getAllAnimals();
        $id = $allRows[0]['id'];

        $updatedData = new AnimalDTO(
            "BuddyUpdated",
            "Golden Retriever Updated",
            "Dog",
            date('Y-m-d H:i:s'),
            [
                'sex' => 'Male',
                'dateOfBirth' => '2020-01-01',
                'isChipped' => false,
                'isSterilized' => true,
                'isAvailableForAdoption' => false,
                'additionalInfo' => 'Updated info',
                'photoUrl' => 'https://example.com/buddy-updated.jpg'
            ]
        );

        $result = $this->model->editAnimal($id, $updatedData);

        $this->assertTrue($result, "editAnimal should return true on successful update");

        $fetched = $this->model->getAnimal($id);
        $this->assertEquals("BuddyUpdated", $fetched->name, "Name should be updated");
        $this->assertEquals(false, $fetched->isChipped, "Boolean field should be updated correctly");
        $this->assertEquals("Updated info", $fetched->additionalInfo, "Optional string field should be updated");
    }

    public function testEditAnimalUpdatesOnlyProvidedFields() {
        $this->populateDatabase($this->createDummyAnimals());
        $allRows = $this->model->getAllAnimals();
        $id = $allRows[1]['id'];

        // Only update a single field
        $updatedData = new AnimalDTO($allRows[1]['name'], $allRows[1]['breed'], $allRows[1]['class'], $allRows[1]['dateOfDatabaseEntry'], [
            'isAvailableForAdoption' => false
        ]);

        $this->model->editAnimal($id, $updatedData);
        $fetched = $this->model->getAnimal($id);

        $this->assertFalse($fetched->isAvailableForAdoption, "Only the provided field should change");
        $this->assertEquals($allRows[1]['name'], $fetched->name, "Other fields should remain unchanged");
    }

    public function testEditAnimalWithNullDoesNothing() {
        $this->populateDatabase($this->createDummyAnimals());
        $allRows = $this->model->getAllAnimals();
        $id = $allRows[2]['id'];

        // Create DTO with all fields null
        $updatedData = new AnimalDTO("Charlie", "Beagle", "Dog", $allRows[2]['dateOfDatabaseEntry'], []);

        $result = $this->model->editAnimal($id, $updatedData);
        $this->assertTrue($result, "editAnimal should return true even if nothing changes");

        $fetched = $this->model->getAnimal($id);
        $this->assertEquals("Charlie", $fetched->name, "Name should remain unchanged");
        $this->assertTrue($fetched->isChipped, "Existing boolean field should remain unchanged");
    }

    public function testEditAnimalPreservesSpecialCharacters() {
        $this->populateDatabase($this->createDummyAnimals());
        $allRows = $this->model->getAllAnimals();
        $id = $allRows[4]['id'];

        $updatedData = new AnimalDTO($allRows[4]['name'], $allRows[4]['breed'], $allRows[4]['class'], $allRows[4]['dateOfDatabaseEntry'], [
            'additionalInfo' => 'Loves 🧶 and sleeping in sun spots updated'
        ]);

        $this->model->editAnimal($id, $updatedData);
        $fetched = $this->model->getAnimal($id);

        $this->assertStringContainsString('🐱', $fetched->name, "Special characters in name should remain");
        $this->assertStringContainsString('🧶', $fetched->additionalInfo, "Special characters in updated info should remain");
    }

    public function testEditAnimalReturnsFalseOnInvalidId() {
        $updatedData = new AnimalDTO("Ghost", "Unknown", "Cat", date('Y-m-d H:i:s'), []);
        $result = $this->model->editAnimal(9999, $updatedData);
        $this->assertFalse($result, "editAnimal should return false if ID does not exist");
}

}
?>