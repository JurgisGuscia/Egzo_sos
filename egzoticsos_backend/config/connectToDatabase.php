<?php
declare(strict_types=1);

require __DIR__ . '/../vendor/autoload.php';

use Dotenv\Dotenv;

try {
    // Load environment variables from .env file
    $dotenv = Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    // Retrieve and validate environment variables
    $host = $_ENV['SERVER'] ?? throw new RuntimeException('DB_HOST not set');
    $db   = $_ENV['DATABASE'] ?? throw new RuntimeException('DB_NAME not set');
    $user = $_ENV['USERNAME'] ?? throw new RuntimeException('DB_USER not set');
    $pass = $_ENV['PASSWORD'] ?? throw new RuntimeException('DB_PASS not set');

    // Data Source Name (DSN)
    $dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Throw exceptions on errors
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,       // Fetch associative arrays
        PDO::ATTR_EMULATE_PREPARES   => false,                  // Use native prepares for security
    ]);

} catch (PDOException $e) {
    error_log('Database connection failed: ' . $e->getMessage());
    exit('Database connection error.');  
} catch (RuntimeException $e) {
    error_log('Environment error: ' . $e->getMessage());
    exit('Configuration error.');        
}
