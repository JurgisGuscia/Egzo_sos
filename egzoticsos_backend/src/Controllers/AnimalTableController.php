<?php
require_once __DIR__ . "/../Models/AnimalTableModel.php";
require_once __DIR__ . "/../DTOs/AnimalDTO.php";

class AnimalTableController{
    protected $model;
    
    public function __construct($pdo, $table){
        $this->model = new AnimalTableModel($pdo, $table);
    }

    public function respond($status, $data){
        http_response_code($status);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }

    public function getAll(){
        $animalList = $this->model->getAllAnimals();

        if($animalList === false){
            $this->respond(404, ["Response" => "Nepavyko gauti gyvūnų sąrašo."]);
            return false;
        }

        $this->respond(200, $animalList);
        return true;
    }    

    public function get($id){
        if(!$id){
            $this->respond(400, ["Response" => "Nenurodytas gyvūno ID."]);
            return false;
        }

        $animal = $this->model->getAnimal($id);

        if($animal === null){
            $this->respond(404, ["Response" => "Nepavyko rasti gyvūno."]);
            return false;
        }

        $this->respond(200, $animal);
        return true;
    }

    public function add($data){
        if(empty($data["name"]) || empty($data["breed"]) || empty($data["class"]) || empty($data["dateOfDatabaseEntry"])) {
            $this->respond(400, ["Response" => "Trūksta būtinų laukų."]);
            return false;
        }

        $animalDTO = new AnimalDTO($data["name"], $data["breed"], $data["class"], $data["dateOfDatabaseEntry"], $data);

        $result = $this->model->addAnimal($animalDTO);

        if($result === false){
            $this->respond(500, ["Response" => "Gyvūno pridėti nepavyko."]);
            return false;
        }

        $this->respond(201, ["Response" => "Gyvūnas pridėtas sėkmingai."]);
        return true;
    }

    public function delete($id){
        if(!$id){
            $this->respond(400, ["Response" => "Nenurodytas gyvūno ID."]);
            return false;
        }

        $result = $this->model->deleteAnimal($id);

        if($result === false){
            $this->respond(500, ["Response" => "Gyvūno ištrinti nepavyko."]);
            return false;
        }

        $this->respond(200, ["Response" => "Gyvūnas sėkmingai pašalintas."]);
        return true;
    }

    public function edit($id, $data){
        #http reuqueste privalo buti nurodyti: name, breed, class ir dateOfDatabaseEntry. Jie reikalingi DTO konstruktoriui.
        if(!$id){
            $this->respond(400, ["Response" => "Nenurodytas gyvūno ID."]);
            return false;
        }

        if(empty($data["name"]) || empty($data["breed"]) || empty($data["class"]) || empty($data["dateOfDatabaseEntry"])) {
            $this->respond(400, ["Response" => "Trūksta būtinų laukų."]);
            return false;
        }

        $entryExists = $this->model->getAnimal($id);

        if($entryExists === false){
            $this->respond(404, ["Response" => "Įrašas neegzistuoja."]);
            return false;
        }

        $animalDTO = new AnimalDTO($data["name"], $data["breed"], $data["class"], $data["dateOfDatabaseEntry"], $data);

        $result = $this->model->editAnimal($id, $animalDTO);

        if($result === false){
            $this->respond(500, ["Response" => "Gyvūno įrašo atnaujinti nepavyko."]);
            return false;
        }

        $this->respond(200, ["Response" => "Gyvūno duomenys atnaujinti sėkmingai."]);
        return true;
    }
}
?>