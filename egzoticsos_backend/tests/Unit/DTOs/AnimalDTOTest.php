<?php
use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../../../src/DTOs/AnimalDTO.php';

class AnimalDTOTest extends TestCase {

    public function testConstructorSetsRequiredFields() {
        $dto = new AnimalDTO('Fido', 'Labrador', 'Dog', '2025-08-23');

        $this->assertEquals('Fido', $dto->name);
        $this->assertEquals('Labrador', $dto->breed);
        $this->assertEquals('Dog', $dto->class);
        $this->assertEquals('2025-08-23', $dto->dateOfDatabaseEntry);
    }

    public function testConstructorSetsOptionalFields() {
        $data = [
            'sex' => 'Male',
            'isChipped' => true,
            'isAvailableForAdoption' => false,
            'vaccineList' => 'Rabies, Parvo',
            'photoUrl' => str_repeat('a', 2000),
            'additionalInfo' => 'Friendly dog'
        ];

        $dto = new AnimalDTO('Fido', 'Labrador', 'Dog', '2025-08-23', $data);

        $this->assertEquals('Male', $dto->sex);
        $this->assertTrue($dto->isChipped);
        $this->assertFalse($dto->isAvailableForAdoption);
        $this->assertEquals('Rabies, Parvo', $dto->vaccineList);
        $this->assertEquals(str_repeat('a', 2000), $dto->photoUrl);
        $this->assertEquals('Friendly dog', $dto->additionalInfo);
    }

    public function testOptionalFieldsDefaultToNull() {
        $dto = new AnimalDTO('Fido', 'Labrador', 'Dog', '2025-08-23');

        $this->assertNull($dto->sex);
        $this->assertNull($dto->isChipped);
        $this->assertNull($dto->vaccineList);
        $this->assertNull($dto->photoUrl);
        $this->assertNull($dto->additionalInfo);
    }

    public function testBooleansAreCorrectlyCast() {
        $data = [
            'isChipped' => 1,
            'isSterilized' => 0,
            'isAvailableForAdoption' => 'true',
            'isDead' => 'false'
        ];

        $dto = new AnimalDTO('Fido', 'Labrador', 'Dog', '2025-08-23', $data);

        $this->assertTrue($dto->isChipped);
        $this->assertFalse($dto->isSterilized);
        $this->assertTrue($dto->isAvailableForAdoption);
        $this->assertFalse($dto->isDead);
    }

    public function testTrimsStringValues() {
        $data = [
            'sex' => '  Male  ',
            'vaccineList' => '  Rabies  '
        ];

        $dto = new AnimalDTO('  Fido  ', '  Labrador  ', '  Dog  ', ' 2025-08-23 ', $data);

        $this->assertEquals('Fido', $dto->name);
        $this->assertEquals('Labrador', $dto->breed);
        $this->assertEquals('Dog', $dto->class);
        $this->assertEquals('2025-08-23', $dto->dateOfDatabaseEntry);
        $this->assertEquals('Male', $dto->sex);
        $this->assertEquals('Rabies', $dto->vaccineList);
    }

    public function testStringLengthValidationThrowsException() {
        $this->expectException(InvalidArgumentException::class);
        $longName = str_repeat('a', 101); // exceeds 100
        new AnimalDTO($longName, 'Labrador', 'Dog', '2025-08-23');
    }

    public function testPhotoUrlAllowsMaxLength2048() {
        $longUrl = str_repeat('a', 2048);
        $data = ['photoUrl' => $longUrl];

        $dto = new AnimalDTO('Fido', 'Labrador', 'Dog', '2025-08-23', $data);

        $this->assertEquals($longUrl, $dto->photoUrl);
    }

    public function testPhotoUrlExceedingMaxLengthThrowsException() {
        $this->expectException(InvalidArgumentException::class);
        $tooLongUrl = str_repeat('a', 2049);
        $data = ['photoUrl' => $tooLongUrl];

        new AnimalDTO('Fido', 'Labrador', 'Dog', '2025-08-23', $data);
    }
}
