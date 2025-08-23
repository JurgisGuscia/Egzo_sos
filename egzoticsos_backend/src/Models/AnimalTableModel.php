<?php
class AnimalTableModel{
    protected $pdo;
    protected $table;
    protected $primaryKey = "id";

    public function __construct($pdo, $table, $primaryKey = "id"){
        $this->pdo = $pdo;
        $this->table = $table;
        $this->primaryKey = $primaryKey;
    }

    public function getAllAnimals(){

    }

    public function getAnimal($id){
        
    }

    public function addAnimal($animal){
    // animal has: name, breed, class, sex, dateOfBirth, dateOfArrival, 
    // isSterilized, isChipped, isAvailableForAdoption, vaccineList, 
    // isAdopted, dateOfAdoption, isDead, dateOfDeath, additionalInfo, dateOfDatabaseEntry, photoUrl
    // some data is optional. Constructed and formatted by controller. Assume all data is correct, 
    // only name, breed, class, dateOfDatabaseEntry must exists, others might not.
    
        
    }

    public function deleteAnimal($id){
        
    }

    public function editAnimal($id, $animal){
    // animal has: name, breed, class, sex, dateOfBirth, dateOfArrival, 
    // isSterilized, isChipped, isAvailableForAdoption, vaccineList, 
    // isAdopted, dateOfAdoption, isDead, dateOfDeath, additionalInfo, dateOfDatabaseEntry, photoUrl
    // some data is optional. Constructed and formatted by controller. Assume all data is correct, 
    // only name, breed, class, dateOfDatabaseEntry must exists, others might not.    
    }
}
?>