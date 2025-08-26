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
            $this->respond(404, ["Klaida" => "Nepavyko gauti klasių sąrašo."]);
            return false;
        }
        $this->respond(200, $classList);
        return true;
    }

    public function get($id){
        if(!$id){
            $this->respond(400, ["Klaida" => "Nenurodytas klasės ID."]);
            return false;
        }

        $class = $this->model->getClass($id);

        if($class === false){
            $this->respond(404, ["Klaida" => "Nepavyko rasti klasės."]);
            return false;
        }
        $this->respond(200, $class);
        return true;
    }

    public function add($data){
        if(empty($data["name"]) || empty($data["description"])) {
            $this->respond(400, ["Klaida" => "Trūksta būtinų laukų."]);
            return false;
        }

        $id = $this->model->addClass($data["name"], $data["description"]);
        
        if($id === null){
            $this->respond(409, ["Klaida" => "Klasė jau egzistuoja."]);
            return false;
        }

        if($id === false){
            $this->respond(500, ["Klaida" => "Klasės pridėti nepavyko."]);
            return false;
        }

        $this->respond(201, ["Pavyko" => "Klasė pridėta sėkmingai."]);
        return true;
    }

    public function delete($id){
        if(!$id){
            $this->respond(400, ["Klaida" => "Nenurodytas klasės ID."]);
            return false;
        }

        $result = $this->model->deleteClass($id);

        if ($result === false) {
            $this->respond(500, ["Klaida" => "Klasės ištrinti nepavyko."]);
            return false;
        }
        $this->respond(200, ["Pavyko" => "Klasė sėkmingai pašalinta."]);
        return true;
    }

    public function edit($id, $data){
        if(!$id){
            $this->respond(400, ["Klaida" => "Nenurodytas klasės ID."]);
            return false;
        }

        if(empty($data["name"]) || empty($data["description"])) {
            $this->respond(400, ["Klaida" => "Trūksta būtinų laukų."]);
            return false;
        }

        $entryExists = $this->model->getClass($id);

        if($entryExists === false){
            $this->respond(404, ["Klaida" => "Įrašas neegzistuoja."]);
            return false;
        }

        $result = $this->model->editClass($id, $data["name"], $data["description"]);

        if($result === false){
            $this->respond(500, ["Klaida" => "Klasės įrašo atnaujinti nepavyko."]);
            return false;
        }

        $this->respond(200, ["Pavyko" => "Klasės duomenys atnaujinti sėkmingai."]);
        return true;
    }
}
?>