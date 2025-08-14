<?php
require "../config/connectToDatabase.php";

$animalTable = $_ENV["ANIMAL_TABLE"] ?? "animals2";
$classTable = $_ENV["CLASS_TABLE"] ?? "classes2";
$vaccineTable = $_ENV["VACCINE_TABLE"] ?? "vaccines2";

$animalSQL = "CREATE TABLE IF NOT EXISTS `$animalTable` (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    breed VARCHAR(100) NOT NULL,
    class VARCHAR(100) NOT NULL,
    sex VARCHAR(100) NOT NULL,
    dateOfBirth DATE,
    dateOfArrival DATE ,
    isSterilized BOOLEAN NOT NULL,
    isChipped BOOLEAN NOT NULL, 
    isAvailableForAdoption BOOLEAN NOT NULL,
    vaccineList VARCHAR(100) NOT NULL,
    isAdopted BOOLEAN NOT NULL,
    dateOfAdoption DATE,
    isDead BOOLEAN NOT NULL,
    dateOfDeath DATE,
    additionalInfo TEXT NOT NULL,
    dateOfDatabaseEntry DATE NOT NULL,
    photoUrl VARCHAR(2048) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4";

$classSQL = "CREATE TABLE IF NOT EXISTS `$classTable` (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    linkID int NOT NULL,
    description VARCHAR(2000)
)";

$vaccineSQL = "CREATE TABLE IF NOT EXISTS `$vaccineTable` (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(2000)
)";

$animalTableExistsCheck = $pdo->query("SHOW TABLES LIKE '$animalTable'");
if($animalTableExistsCheck->rowCount() > 0){
    error_log("$animalTable lentelė jau egzistuoja, praleidžiama...");
}else{
    try{
        $pdo->exec($animalSQL);
        error_log('Gyvūnų lentelė sėkmingai sukurta.');
    }catch(PDOException $e) {
        error_log('Įvyko klaida: ' . $e->getMessage());  
        exit('Kuriant gyvūnų lentelę, įvyko klaida.');
    }
}

$classTableExistsCheck = $pdo->query("SHOW TABLES LIKE '$classTable'");
if($classTableExistsCheck->rowCount() > 0){
    error_log("$classTable lentelė jau egzistuoja, praleidžiama...");
}else{
    try{
        $pdo->exec($classSQL);
        error_log('Klasių lentelė sėkmingai sukurta.');
    }catch(PDOException $e){
        error_log('Įvyko klaida: ' . $e->getMessage());  
        exit('Kuriant klasių lentelę, įvyko klaida.');
    }
}

$vaccineTableExistsCheck = $pdo->query("SHOW TABLES LIKE '$vaccineTable'");
if($vaccineTableExistsCheck->rowCount() > 0){
    error_log("$vaccineTable lentelė jau egzistuoja, praleidžiama...");
}else{
    try{
        $pdo->exec($vaccineSQL);
        error_log('Vakcinų lentelė sėkmingai sukurta.');
    }catch(PDOException $e){
        error_log('Įvyko klaida: ' . $e->getMessage());  
        exit('Kuriant vakcinų lentelę, įvyko klaida.');
    }
}



?>