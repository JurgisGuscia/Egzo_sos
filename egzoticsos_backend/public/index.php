<?php
require __DIR__ . "/../vendor/autoload.php";
use Dotenv\Dotenv;
require "../config/connectToDatabase.php";

require_once __DIR__ . "/../src/Controllers/VaccineTableController.php";
require_once __DIR__ . "/../src/Controllers/ClassTableController.php";
require_once __DIR__ . "/../src/Controllers/AnimalTableController.php";
require_once __DIR__ . "/../src/Controllers/UserTableController.php";

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$animalController = new AnimalTableController($pdo, $_ENV["ANIMAL_TABLE"]);
$classController = new ClassTableController($pdo, $_ENV["CLASS_TABLE"]);
$vaccineController = new VaccineTableController($pdo, $_ENV["VACCINE_TABLE"]);
$userController = new UserTableController($pdo, $_ENV["USER_TABLE"]);

$router = new \Bramus\Router\Router();

# animal routes
$router->get("/animals", fn() => $animalController->getAll());

$router->get("/animals/(\d+)", fn($id) => $animalController->get((int)$id));

$router->post("/animals", function() use ($animalController) {
    $data = json_decode(file_get_contents("php://input"), true); 
    $animalController->add($data);
});

$router->delete("/animals/(\d+)", fn($id) => $animalController->delete((int)$id));

$router->put("/animals/(\d+)", function($id) use ($animalController) {
    $data = json_decode(file_get_contents("php://input"), true); 
    $animalController->edit((int)$id, $data);
});

# vaccine routes
$router->get("/vaccines", fn() => $vaccineController->getAll());

$router->get("/vaccines/(\d+)", fn($id) => $vaccineController->get((int)$id));

$router->post("/vaccines", function() use ($vaccineController) {
    $data = json_decode(file_get_contents("php://input"), true); 
    $vaccineController->add($data);
});

$router->delete("/vaccines/(\d+)", fn($id) => $vaccineController->delete((int)$id));

$router->put("/vaccines/(\d+)", function($id) use ($vaccineController) {
    $data = json_decode(file_get_contents("php://input"), true); 
    $vaccineController->edit((int)$id, $data);
});

# class routes
$router->get("/classes", fn() => $classController->getAll());

$router->get("/classes/(\d+)", fn($id) => $classController->get((int)$id));

$router->post("/classes", function() use ($classController) {
    $data = json_decode(file_get_contents("php://input"), true); 
    $classController->add($data);
});

$router->delete("/classes/(\d+)", fn($id) => $classController->delete((int)$id));

$router->put("/classes/(\d+)", function($id) use ($classController) {
    $data = json_decode(file_get_contents("php://input"), true); 
    $classController->edit((int)$id, $data);
});

# user routes
$router->get("/users", fn() => $userController->getAll());

$router->get("/users/(\d+)", fn($id) => $userController->get($id));

$router->post("/users", function() use ($userController){
    $data = json_decode(file_get_contents("php://input"), true); 
    $userController->add($data);
});

$router->delete("/users/(\d+)", fn($id) => $userController->delete($id));

$router->put("/users/(\d+)", function($id) use ($userController) {
    $data = json_decode(file_get_contents("php://input"), true); 
    $userController->edit((int)$id, $data);
});


$router->run();

?>