<?php
require_once __DIR__ . "/../Models/UserTableModel.php";
require_once __DIR__ . "/../Services/AuthService.php";

class AuthController{
    protected $model;
    protected $authService;
    
    public function __construct($pdo, $table, AuthService $authService){
        $this->model = new UserTableModel($pdo, $table);
        $this->authService = $authService;
    }
    

    public function respond($status, $data){
        header('Content-Type: application/json');
        http_response_code($status);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }

    public function register($data){
        try {
            $preparedData = $this->authService->prepareUser($data);
            $id = $this->model->addUser($preparedData);
            if($id === null){
                $this->respond(409, ["Response" => "Vartotojas jau egzistuoja."]);
                return false;
            }
            $this->respond(201, ["Response" => "Vartotojas užregistruotas.", "id" => $id]);
        } catch (Exception $e) {
            $this->respond(400, ["Response" => $e->getMessage()]);
        }
    }

    public function login($data){
        try{
            $user = $this->model->getUser($data["email"]);
            if($user === false){
                $this->respond(404, ["Response" => "Vartotojas neegzistuoja."]);
                return false;
            }
            if($user["password"] === $data["password"]){
                $this->respond(200, ["Response" => "Prisijungta."]);
            }else{
                $this->respond(404, ["Response" => "Slaptažodis neteisingas."]);
            }
            
            

        }catch(Exception $e){
            $this->respond(400, ["Response" => $e->getMessage()]);
        }
    }
}
?>

