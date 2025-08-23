<?php
require "../config/connectToDatabase.php";

$classTable = $_ENV["CLASS_TABLE"];
$failedPushes = 0;
$dataFile = __DIR__ . "/../data/initialClassTableData.json";
$jsonContent = file_get_contents($dataFile);
if($jsonContent === false){
    exit("Nepavyko nuskaityti klasių duomenų failo.");
}
$dataArray = json_decode($jsonContent, true);
if(json_last_error() !== JSON_ERROR_NONE){
    exit("JSON dekodavimo klaida: " . json_last_error_msg());
}
$sql = "INSERT INTO `$classTable` (name, description) VALUES (:name, :description)";
$stmt = $pdo->prepare($sql);

foreach($dataArray as $row){
    $checkSQL = "SELECT COUNT(*) FROM `$classTable` WHERE name = :name";
    $checkStmt = $pdo->prepare($checkSQL);
    $checkStmt->execute([":name" => $row["name"]]);
    $rowCount = $checkStmt->fetchColumn();
    if($rowCount === 0){
        try{
            $stmt->execute([
                ":name" => $row["name"],
                ":description" => $row["description"]
            ]);
        }catch (PDOException $e){
            error_log("Įvyko klaida užpildant klasių lentelę duomenimis: " . json_encode($row) . " Klaida: " . $e->getMessage());
            $failedPushes++;
            continue;
        }
    }else{
        error_log($row["name"] . " klasė jau egzistuoja duomenų bazėje, praleidžiama...");
    }
}
if($failedPushes === 0){
    error_log("Klasių lentelė sėkmingai užpildyta duomenimis");
}else{
    error_log("Užpildant klasių lentelę duomenimis įvyko $failedPushes " . " klaidos.");
}

?>