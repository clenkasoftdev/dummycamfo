<?php
define('DB_HOST', 'localhost');
define('DB_NAME', 'h298405_camfotest');
define('DB_USER', 'h298405_clemente');
define('DB_PASS', 'clemento1347');

function getDB(): PDO {
  static $pdo = null;
  if ($pdo === null) {
    $pdo = new PDO(
      'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4',
      DB_USER,
      DB_PASS,
      [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
       PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]
    );
  }
  return $pdo;
}