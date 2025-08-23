<?php
class AnimalDTO{
    // required fields
    public string $name;
    public string $breed;
    public string $class;
    public string $dateOfDatabaseEntry;

    // optional
    public ?string $sex = null;
    public ?string $dateOfBirth  = null; 
    public ?string $dateOfArrival  = null; 
    public ?bool $isSterilized= null; 
    public ?bool $isChipped  = null;  
    public ?bool $isAvailableForAdoption = null;
    public ?string $vaccineList  = null; 
    public ?bool $isAdopted  = null; 
    public ?string $dateOfAdoption = null; 
    public ?bool $isDead  = null; 
    public ?string $dateOfDeath  = null; 
    public ?string $additionalInfo  = null; 
    public ?string $photoUrl  = null; 

    /**
     * Constructor
     * 
     * @param string $name
     * @param string $breed
     * @param string $class
     * @param string $dateOfDatabaseEntry
     * @param array $data Optional additional fields 
     */

    public function __construct(string $name, string $breed, string $class, string $dateOfDatabaseEntry, array $data = []){
        $this->name = $this->validateString($name, 100, 'name');
        $this->breed = $this->validateString($breed, 100, 'breed');
        $this->class = $this->validateString($class, 100, 'class');
        $this->dateOfDatabaseEntry = $this->validateString($dateOfDatabaseEntry, 20, 'dateOfDatabaseEntry');

        $optionalFields = [
            'sex', 'dateOfBirth', 'dateOfArrival', 'isSterilized', 'isChipped', 
            'isAvailableForAdoption', 'vaccineList', 'isAdopted', 'dateOfAdoption', 
            'isDead', 'dateOfDeath', 'additionalInfo', 'photoUrl'
        ];

        foreach ($optionalFields as $field) {
        if (array_key_exists($field, $data)) {
            if (in_array($field, ['isSterilized','isChipped','isAvailableForAdoption','isAdopted','isDead'])) {
                $this->$field = (bool)$data[$field];
            } else {
                $maxLength = ($field === 'photoUrl') ? 2048 : 255;
                $this->$field = $this->validateString($data[$field], $maxLength, $field);
            }
        }
    }
}

private function validateString(string $value, int $maxLength = 255, string $fieldName = ''): string {
    $value = trim($value);
    if ($maxLength && strlen($value) > $maxLength) {
        throw new InvalidArgumentException("Field '{$fieldName}' cannot exceed {$maxLength} characters.");
    }
    return $value;
    }
}
?>