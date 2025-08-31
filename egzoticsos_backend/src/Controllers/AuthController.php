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
        http_response_code($status);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }

    public function register($data){
        try {
            $preparedData = $this->authService->prepareUser($data);
            $id = $this->model->addUser($preparedData);
            if($id === null){
                $this->respond(409, ["Klaida" => "Vartotojas jau egzistuoja."]);
                return false;
            }
            $this->respond(201, ["Pavyko" => "Vartotojas užregistruotas.", "id" => $id]);
        } catch (Exception $e) {
            $this->respond(400, ["Klaida" => $e->getMessage()]);
        }
    }

    
}
?>

