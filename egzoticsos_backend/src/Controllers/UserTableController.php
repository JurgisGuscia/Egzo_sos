<?php
require_once __DIR__ . "/../Models/UserTableModel.php";

class UserTableController{
    protected $model;

    public function __construct($pdo, $table){
        $this->model = new UserTableModel($pdo, $table);
    }
    

    public function respond($status, $data){
        http_response_code($status);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }

    public function getAll(){
        $userList = $this->model->getAllUsers();
        if($userList === false){
            $this->respond(500, ["Response" => "Nepavyko gauti vartotojų sąrašo."]);
            return false;
        }
        $this->respond(200, $userList);
        return true;
    }

    public function get($id){
        if(!$id){
            $this->respond(400, ["Response" => "Nenurodytas vartotojo ID."]);
            return false;
        }

        $user = $this->model->getUser($id);

        if($user === false){
            $this->respond(404, ["Response" => "Nepavyko rasti vartotojo."]);
            return false;
        }

        $this->respond(200, $user);
        return true;
    }

    public function delete($id){
        if(!$id){
            $this->respond(400, ["Response" => "Nenurodytas vartotojo ID."]);
            return false;
        }
        $result = $this->model->deleteUser($id);
        if ($result === false) {
            $this->respond(500, ["Response" => "Vartotojo ištrinti nepavyko."]);
            return false;
        }
        $this->respond(200, ["Response" => "Vartotojas sėkmingai pašalintas."]);
        return true;  
    }

    public function edit($id, $data){
        if(!$id){
            $this->respond(400, ["Response" => "Nenurodytas vartotojo ID."]);
            return false;
        }

        if(empty($data["email"]) || empty($data["password"]) || empty($data["activationString"]) 
           || empty($data["isActive"]) || empty($data["role"])){
            $this->respond(400, ["Response" => "Trūksta būtinų laukų."]);
            return false;
        }  

        $userExists = $this->model->getUser($id);

        if($userExists === false){
            $this->respond(404, ["Response" => "Įrašas neegzistuoja."]);
            return false;
        }

        $result = $this->model->editUser($id, $data);

        if ($result === false) {
            $this->respond(500, ["Response" => "Vartotojo įrašo atnaujinti nepavyko."]);
            return false;
        }

        $this->respond(200, ["Response" => "Vartotojo duomenys atnaujinti sėkmingai."]);
        return true;
    }
}
?>