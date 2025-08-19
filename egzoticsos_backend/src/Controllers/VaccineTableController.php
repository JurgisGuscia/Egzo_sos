<?php
require_once __DIR__ . "/../models/VaccineModel.php";

class VaccineController {
    protected $model;

    public function __construct($pdo, $table){
        $this->model = new VaccineModel($pdo, $table);
    }

    public function getAll(){
        $vaccineList = $this->model->getAllVaccines();
        if($vaccineList === false){
            http_response_code(500);
            echo json_encode(["Klaida" => "Nepavyko gauti vakcinų sąrašo"]);
            return;
        }else{
            echo json_encode($vaccineList);
        }
    }

    public function get($id){
        $vaccine = $this->model->getVaccine($id);
        if($vaccine === false){
            http_response_code(404);
            echo json_encode(["Klaida" => "Nepavyko rasti vakcinos"]);
            return;
        }else{
            http_response_code(200);
            echo json_encode($vaccine);
        }
    }

    public function add($data){
        if(empty($data["name"]) || empty($data["description"])) {
            http_response_code(400);
            echo json_encode(["Klaida" => "Trūksta būtinų laukų"]);
            return;
        }

        $id = $this->model->addVaccine($data["name"], $data["description"]);
        if($id === false){
            http_response_code(500);
            echo json_encode(["Klaida" => "Vakcinos pridėti nepavyko"]);
            return;
        }else if($id === null){
                http_response_code(409);
                echo json_encode(["Klaida" => "Vakcina jau egzistuoja."]);
                return;
        }else{
            http_response_code(201);
            echo json_encode(["Pavyko" => "Vakcina pridėta sėkmingai."]);
        }                   

    }

    public function edit($id, $data){
        if(empty($data["name"]) || empty($data["description"])) {
            http_response_code(400);
            echo json_encode(["Klaida" => "Trūksta būtinų laukų"]);
            return;
        }

        $entryExists = $this->model->getVaccine($id);
        if($entryExists === false){
            http_response_code(404);
            echo json_encode(["Klaida" => "Įrašas neegzistuoja"]);
            return;
        }

        $result = $this->model->editVaccine($id, $data["name"], $data["description"]);
        if ($result === false) {
            http_response_code(500);
            echo json_encode(["Klaida" => "Vakcinos įrašo atnaujinti nepavyko"]);
            return;
        }else{
            http_response_code(200);
            echo json_encode(["Pavyko" => "Vakcinos duomenys atnaujinti sėkmingai."]);
        }
    }

    public function delete($id){
        $result = $this->model->deleteVaccine($id);
        if ($result === false) {
            http_response_code(500);
            echo json_encode(["Klaida" => "Vakcinos ištrinti nepavyko"]);
            return;
        }else{
            http_response_code(200);
            echo json_encode(["Pavyko" => true]);
        }
    }
}

?>