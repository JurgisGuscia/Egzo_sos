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
            if(password_verify($data["password"], $user["password"])){
                if($user["isActive"] === 1){
                    $token = bin2hex(random_bytes(32));
                    session_start();
                    $_SESSION["token"] = $token;
                    setcookie(
                        "auth_token",
                        $token,
                        [
                            "expires" => time() + 3600,
                            "path" => "/",
                            "httponly" => true,
                            "secure" => true,
                            "samesite" => "Strict"
                        ]
                    );
                    $this->respond(200, ["Response" => "Prisijungta."]);
                }else{
                    $this->respond(400, ["Response" => "Paskyra neaktyvuota."]);        
                }               
            }else{
                $this->respond(401, ["Response" => "Slaptažodis neteisingas."]);
            }

        }catch(Exception $e){
            $this->respond(400, ["Response" => $e->getMessage()]);
        }
    }

    public function checkAuth(){
        session_start();
        $tokenFromCookie = $_COOKIE['auth_token'] ?? null;
        $tokenInSession = $_SESSION['token'] ?? null;
        if (!$tokenFromCookie || $tokenFromCookie !== $tokenInSession) {
            $this->respond(401, ["Response" => "Neleidžiama"]);
            exit;
        }

        $this->respond(200, ["Response" => "Leidžiama"]);
    }

    public function logOut(){
        session_start();
        setcookie(
            "auth_token",
            "",
            [
                "expires" => time() - 3600,
                "path" => "/",
                "httponly" => true,
                "secure" => true,
                "samesite" => "Strict"
            ]
        );
        if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params["path"], $params["domain"],
            $params["secure"], $params["httponly"]
        );
    }
    
        unset($_COOKIE["auth_token"]);
        $_SESSION = [];
        session_regenerate_id(true);
        session_destroy();
        $this->respond(200, ["Response" => "Atjungta."]);
    }
}
?>

