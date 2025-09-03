<?php
require_once __DIR__ . "/../Models/ClassTableModel.php";

class ClassTableController{
    protected $model;

    public function __construct($pdo, $table){
        $this->model = new ClassTableModel($pdo, $table);
    }

    public function respond($status, $data){
        http_response_code($status);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }

    public function getAll(){
        $classList = $this->model->getAllClasses();
        if($classList === false){
            $this->respond(404, ["Response" => "Nepavyko gauti klasių sąrašo."]);
            return false;
        }
        $this->respond(200, $classList);
        return true;
    }

    public function get($id){
        if(!$id){
            $this->respond(400, ["Response" => "Nenurodytas klasės ID."]);
            return false;
        }

        $class = $this->model->getClass($id);

        if($class === false){
            $this->respond(404, ["Response" => "Nepavyko rasti klasės."]);
            return false;
        }
        $this->respond(200, $class);
        return true;
    }

    public function add($data){
        if(empty($data["name"]) || empty($data["description"])) {
            $this->respond(400, ["Response" => "Trūksta būtinų laukų."]);
            return false;
        }

        $id = $this->model->addClass($data["name"], $data["description"]);
        
        if($id === null){
            $this->respond(409, ["Response" => "Klasė jau egzistuoja."]);
            return false;
        }

        if($id === false){
            $this->respond(500, ["Response" => "Klasės pridėti nepavyko."]);
            return false;
        }

        $this->respond(201, ["Response" => "Klasė pridėta sėkmingai."]);
        return true;
    }

    public function delete($id){
        if(!$id){
            $this->respond(400, ["Response" => "Nenurodytas klasės ID."]);
            return false;
        }

        $result = $this->model->deleteClass($id);

        if ($result === false) {
            $this->respond(500, ["Response" => "Klasės ištrinti nepavyko."]);
            return false;
        }
        $this->respond(200, ["Response" => "Klasė sėkmingai pašalinta."]);
        return true;
    }

    public function edit($id, $data){
        if(!$id){
            $this->respond(400, ["Response" => "Nenurodytas klasės ID."]);
            return false;
        }

        if(empty($data["name"]) || empty($data["description"])) {
            $this->respond(400, ["Response" => "Trūksta būtinų laukų."]);
            return false;
        }

        $entryExists = $this->model->getClass($id);

        if($entryExists === false){
            $this->respond(404, ["Response" => "Įrašas neegzistuoja."]);
            return false;
        }

        $result = $this->model->editClass($id, $data["name"], $data["description"]);

        if($result === false){
            $this->respond(500, ["Response" => "Klasės įrašo atnaujinti nepavyko."]);
            return false;
        }

        $this->respond(200, ["Response" => "Klasės duomenys atnaujinti sėkmingai."]);
        return true;
    }
}
?>