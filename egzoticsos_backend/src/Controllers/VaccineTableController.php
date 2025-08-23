<?php
require_once __DIR__ . "/../Models/VaccineTableModel.php";

class VaccineTableController {
    protected $model;

    public function __construct($pdo, $table){
        $this->model = new VaccineTableModel($pdo, $table);
    }

    public function getAll(){
        $vaccineList = $this->model->getAllVaccines();
        if($vaccineList === false){
            http_response_code(404);
            echo json_encode(["Klaida" => "Nepavyko gauti vakcinų sąrašo"], JSON_UNESCAPED_UNICODE);
            return;
        }else{
            http_response_code(200);
            echo json_encode($vaccineList);
        }
    }

    public function get($id){
        $vaccine = $this->model->getVaccine($id);
        if($vaccine === false){
            http_response_code(404);
            echo json_encode(["Klaida" => "Nepavyko rasti vakcinos"], JSON_UNESCAPED_UNICODE);
            return;
        }else{
            http_response_code(200);
            echo json_encode($vaccine);
        }
    }

    public function add($data){
        if(empty($data["name"]) || empty($data["description"])) {
            http_response_code(400);
            echo json_encode(["Klaida" => "Trūksta būtinų laukų"], JSON_UNESCAPED_UNICODE);
            return;
        }

        $id = $this->model->addVaccine($data["name"], $data["description"]);

        if($id === false){
            http_response_code(500);
            echo json_encode(["Klaida" => "Vakcinos pridėti nepavyko"], JSON_UNESCAPED_UNICODE);
            return;
        }else if($id === null){
                http_response_code(409);
                echo json_encode(["Klaida" => "Vakcina jau egzistuoja."], JSON_UNESCAPED_UNICODE);
                return;
        }else{
            http_response_code(200);
            echo json_encode(["Pavyko" => "Vakcina pridėta sėkmingai."], JSON_UNESCAPED_UNICODE);
        }                   

    }

    public function delete($id){
        $result = $this->model->deleteVaccine($id);
        if ($result === false) {
            http_response_code(500);
            echo json_encode(["Klaida" => "Vakcinos ištrinti nepavyko"], JSON_UNESCAPED_UNICODE);
            return;
        }else{
            http_response_code(200);
            echo json_encode(["Pavyko" => "Vakcina sėkmingai pašalinta."], JSON_UNESCAPED_UNICODE);
        }
    }

    public function edit($id, $data){
        if(empty($data["name"]) || empty($data["description"])) {
            http_response_code(400);
            echo json_encode(["Klaida" => "Trūksta būtinų laukų"], JSON_UNESCAPED_UNICODE);
            return;
        }

        $entryExists = $this->model->getVaccine($id);
        if($entryExists === false){
            http_response_code(404);
            echo json_encode(["Klaida" => "Įrašas neegzistuoja"], JSON_UNESCAPED_UNICODE);
            return;
        }

        $result = $this->model->editVaccine($id, $data["name"], $data["description"]);
        if ($result === false) {
            http_response_code(500);
            echo json_encode(["Klaida" => "Vakcinos įrašo atnaujinti nepavyko"], JSON_UNESCAPED_UNICODE);
            return;
        }else{
            http_response_code(200);
            echo json_encode(["Pavyko" => "Vakcinos duomenys atnaujinti sėkmingai."], JSON_UNESCAPED_UNICODE);
        }
    }

    
}

?>