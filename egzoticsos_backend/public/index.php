<?php
require __DIR__ . "/../vendor/autoload.php";
use Dotenv\Dotenv;
require "../config/connectToDatabase.php";

require_once __DIR__ . "/../src/Controllers/VaccineTableController.php";
require_once __DIR__ . "/../src/Controllers/ClassTableController.php";
require_once __DIR__ . "/../src/Controllers/AnimalTableController.php";
require_once __DIR__ . "/../src/Controllers/UserTableController.php";
require_once __DIR__ . "/../src/Controllers/AuthController.php";
require_once __DIR__ . "/../src/Services/AuthService.php";

$dotenv = Dotenv::createImmutable(__DIR__ . "/../config");
$dotenv->load();

$animalController = new AnimalTableController($pdo, $_ENV["ANIMAL_TABLE"]);
$classController = new ClassTableController($pdo, $_ENV["CLASS_TABLE"]);
$vaccineController = new VaccineTableController($pdo, $_ENV["VACCINE_TABLE"]);
$userController = new UserTableController($pdo, $_ENV["USER_TABLE"]);

$authService = new AuthService();


$authController = new AuthController($pdo, $_ENV["USER_TABLE"], $authService);

$router = new \Bramus\Router\Router();

# animal routes
$router->get("/animals", fn() => $animalController->getAll());

$router->get("/animals/(\d+)", fn($id) => $animalController->get((int)$id));

$router->post("/animals", function() use ($animalController) {
    $data = json_decode(file_get_contents("php://input"), true);
    if (!$data) {
        http_response_code(400);
        echo json_encode(["Klaida" => "Netinkamas JSON"]);
        exit;
    }  
    $animalController->add($data);
});

$router->delete("/animals/(\d+)", fn($id) => $animalController->delete((int)$id));

$router->put("/animals/(\d+)", function($id) use ($animalController) {
    $data = json_decode(file_get_contents("php://input"), true);
    if (!$data) {
        http_response_code(400);
        echo json_encode(["Klaida" => "Netinkamas JSON"]);
        exit;
    }  
    $animalController->edit((int)$id, $data);
});

# vaccine routes
$router->get("/vaccines", fn() => $vaccineController->getAll());

$router->get("/vaccines/(\d+)", fn($id) => $vaccineController->get((int)$id));

$router->post("/vaccines", function() use ($vaccineController) {
    $data = json_decode(file_get_contents("php://input"), true);
    if (!$data) {
        http_response_code(400);
        echo json_encode(["Klaida" => "Netinkamas JSON"]);
        exit;
    }  
    $vaccineController->add($data);
});

$router->delete("/vaccines/(\d+)", fn($id) => $vaccineController->delete((int)$id));

$router->put("/vaccines/(\d+)", function($id) use ($vaccineController) {
    $data = json_decode(file_get_contents("php://input"), true); 
    if (!$data) {
        http_response_code(400);
        echo json_encode(["Klaida" => "Netinkamas JSON"]);
        exit;
    } 
    $vaccineController->edit((int)$id, $data);
});

# class routes
$router->get("/classes", fn() => $classController->getAll());

$router->get("/classes/(\d+)", fn($id) => $classController->get((int)$id));

$router->post("/classes", function() use ($classController) {
    $data = json_decode(file_get_contents("php://input"), true); 
    if (!$data) {
        http_response_code(400);
        echo json_encode(["Klaida" => "Netinkamas JSON"]);
        exit;
    } 
    $classController->add($data);
});

$router->delete("/classes/(\d+)", fn($id) => $classController->delete((int)$id));

$router->put("/classes/(\d+)", function($id) use ($classController) {
    if (!$data) {
        http_response_code(400);
        echo json_encode(["Klaida" => "Netinkamas JSON"]);
        exit;
    } 
    $data = json_decode(file_get_contents("php://input"), true); 
    $classController->edit((int)$id, $data);
});

# user routes
$router->get("/users", fn() => $userController->getAll());

$router->get("/users/(\d+)", fn($id) => $userController->get($id));

$router->delete("/users/(\d+)", fn($id) => $userController->delete($id));

$router->put("/users/(\d+)", function($id) use ($userController) {
    $data = json_decode(file_get_contents("php://input"), true); 
    if (!$data) {
        http_response_code(400);
        echo json_encode(["Klaida" => "Netinkamas JSON"]);
        exit;
    } 
    $userController->edit((int)$id, $data);
});

# auth routes
$router->post("/register", function() use ($authController){
    $data = json_decode(file_get_contents("php://input"), true);
    if (!$data) {
        http_response_code(400);
        echo json_encode(["Klaida" => "Netinkamas JSON"]);
        exit;
    } 
    $authController->register($data);
});

// login route to come
$router->post("/login", function() use ($authController){
    header('Content-Type: application/json');
    $data = json_decode(file_get_contents("php://input"), true);
    if(!$data){
        http_response_code(400);
        echo json_encode(["Klaida" => "Netinkamas JSON"]);
        exit;
    }
    $result = $authController->login($data);
    echo $result;
    
});

$router->run();

?>