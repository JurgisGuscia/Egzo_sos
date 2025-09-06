<?php
class AuthService{
    public function prepareUser($data){
        // Validate required fields
        if (empty($data['email']) || empty($data['password'])) {
            throw new Exception("Trūksta būtinų laukų.");
        }

        // Validate email
        if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            
            throw new Exception("Netinkamas elektroninio pašto adresas.");
        }
        $preparedUserData["email"] = $data['email'];
        // Validate password strength
        if (strlen($data['password']) < 5) {
            throw new Exception("Slaptažodis per trumpas.");
        }
        // Hash password
        $preparedUserData['password'] = password_hash($data['password'], PASSWORD_DEFAULT);
        // Generate activation string
        $preparedUserData['activationString'] = bin2hex(random_bytes(16));
        $preparedUserData['isActive'] = false;
        $preparedUserData['role'] = 'user';
        return $preparedUserData;
        
    }
}

?>