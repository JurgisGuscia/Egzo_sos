<?php
require_once __DIR__ . "/../Models/VaccineTableModel.php";

class VaccineTableController {
    protected $model;

    public function __construct($pdo, $table){
        $this->model = new VaccineTableModel($pdo, $table);
    }

    public function respond($status, $data){
        http_response_code($status);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }

    public function getAll(){
        $vaccineList = $this->model->getAllVaccines();
        if($vaccineList === false){
            $this->respond(500, ["Response" => "Nepavyko gauti vakcinų sąrašo."]);
            return false;
        }
        $this->respond(200, $vaccineList);
        return true;
    }

    public function get($id){
        if(!$id){
            $this->respond(400, ["Response" => "Nenurodytas vakcinos ID."]);
            return false;
        }

        $vaccine = $this->model->getVaccine($id);

        if($vaccine === false){
            $this->respond(404, ["Response" => "Nepavyko rasti vakcinos."]);
            return false;
        }
        $this->respond(200, $vaccine);
        return true;
    }

    public function add($data){
        if(empty($data["name"]) || empty($data["description"])) {
            $this->respond(400, ["Response" => "Trūksta būtinų laukų."]);
            return false;
        }

        $id = $this->model->addVaccine($data["name"], $data["description"]);

        if($id === false){
            $this->respond(500, ["Response" => "Vakcinos pridėti nepavyko."]);
            return false;
        }
        if($id === null){
            $this->respond(409, ["Response" => "Vakcina jau egzistuoja."]);
            return false;
        }

        $this->respond(201, ["Response" => "Vakcina pridėta sėkmingai."]);
        return true;
    }

    public function delete($id){
        if(!$id){
            $this->respond(400, ["Response" => "Nenurodytas vakcinos ID."]);
            return false;
        }
        $result = $this->model->deleteVaccine($id);
        if ($result === false) {
            $this->respond(500, ["Response" => "Vakcinos ištrinti nepavyko."]);
            return false;
        }
        $this->respond(200, ["Response" => "Vakcina sėkmingai pašalinta."]);
        return true;  
    }

    public function edit($id, $data){
        if(!$id){
            $this->respond(400, ["Response" => "Nenurodytas vakcinos ID."]);
            return false;
        }

        if(empty($data["name"]) || empty($data["description"])) {
            $this->respond(400, ["Response" => "Trūksta būtinų laukų."]);
            return false;
        }

        $entryExists = $this->model->getVaccine($id);

        if($entryExists === false){
            $this->respond(404, ["Response" => "Įrašas neegzistuoja."]);
            return false;
        }

        $result = $this->model->editVaccine($id, $data["name"], $data["description"]);

        if ($result === false) {
            $this->respond(500, ["Response" => "Vakcinos įrašo atnaujinti nepavyko."]);
            return false;
        }

        $this->respond(200, ["Response" => "Vakcinos duomenys atnaujinti sėkmingai."]);
        return true;
    }
}

?>