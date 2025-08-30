<?php  
class UserTableModel{
    protected $pdo;
    protected $table;
    protected $primaryKey = "id";

    public function __construct($pdo, $table, $primaryKey = "id"){
        $this->pdo = $pdo;
        $this->table = $table;
        $this->primaryKey = $primaryKey;
    }

    public function getAllUsers(){
        try{
            $stmt = $this->pdo->prepare("SELECT * FROM {$this->table} ORDER BY {$this->primaryKey}");
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }catch(PDOException $e){
            error_log("Nepavyko gauti vartotojų sąrašo: " . $e->getMessage());
            return false;
        }
    }

    public function getUser($id){
        try{
            $stmt = $this->pdo->prepare("SELECT * FROM {$this->table} WHERE {$this->primaryKey} = :id LIMIT 1");
            $stmt->execute([":id" => $id]);
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }catch(PDOException $e){
            error_log("Vartojo rasti nepavyko: " . $e->getMessage());
            return false;
        }
    }

    public function addUser($data){
        $userExists = $this->pdo->prepare("SELECT * FROM {$this->table} WHERE email = :email LIMIT 1");
        $userExists->execute([":email" => $data["email"]]);
        $userExistsResult = $userExists->fetch(PDO::FETCH_ASSOC);
        if($userExistsResult){
            error_log("Klaida: vartotojas jau egzistuoja.");
            return null;
        }

        try{
            $stmt = $this->pdo->prepare("INSERT INTO {$this->table} (
                email, password, activationString, isActive, role
            ) VALUES (
                :email, :password, :activationString, :isActive, :role
            )");
            $stmt->execute([
                ":email" => $data["email"],
                ":password" => $data["password"],
                ":activationString" => $data["activationString"],
                ":isActive" => $data["isActive"],
                ":role" => $data["role"]
            ]);
            return $this->pdo->lastInsertId();
        }catch(PDOException $e){
            error_log("Vartotojo pridėti nepavyko: " . $e->getMessage());
            return false;
        }
    }

    public function deleteUser($id){
        try{
            $stmt = $this->pdo->prepare("DELETE FROM {$this->table} WHERE {$this->primaryKey} = :id");
            $stmt->execute([":id" => $id]);
            return true;
        }catch(PDOException $e){
            error_log("Vartotojo ištrinti napavyko: " . $e->getMessage());
            return false;
        }
    }

    public function editUser($id, $data){
        try{
            $stmt = $this->pdo->prepare("UPDATE {$this->table} SET 
            email = :email, 
            password = :password,
            activationString = :activationString,
            isActive = :isActive,
            role = :role
            WHERE {$this->primaryKey} = :id");
            $stmt->execute([
                ":email" => $data["email"],
                ":password" => $data["password"],
                ":activationString" => $data["activationString"],
                ":isActive" => $data["isActive"],
                ":role" => $data["role"],
                ":id" => $id
            ]);

            if($stmt->rowCount() === 0){
                error_log("Vartotojo atnaujinti nepavyko.");
                return false;
            }
            error_log("Vartotojas atnaujintas sėkmingai.");
            return true;
        }catch(PDOException $e){
            error_log("Vartotojo atnaujinti nepavyko: " . $e->getMessage());
            return false;
        }
    }
}
?>