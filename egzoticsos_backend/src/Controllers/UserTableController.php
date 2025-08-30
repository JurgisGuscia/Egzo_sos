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

    }

    public function get($id){

    }

    public function add($data){

    }

    public function delete($id){

    }

    public function edit($id, $data){

    }
}
?>