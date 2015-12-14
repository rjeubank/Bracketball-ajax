<?php
require_once '../includes/db.php'; // The mysql database connection script
if(isset($_GET['user']) && isset($_GET['password'])){
	$user = $mysqli->real_escape_string($_GET['user']);
	$password = $mysqli->real_escape_string($_GET['password']);

	$query="SELECT password FROM users WHERE user = '$user'";
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
	}
if(isset($_GET['email']) && isset($_GET['password'])){
    $email = $mysqli->real_escape_string($_GET['email']);
    $password = $mysqli->real_escape_string($_GET['password']);

    $query="SELECT password FROM users WHERE email = '$email'";
    $result = $mysqli->query($query) or die($mysqli->error.__LINE__);
    }

 if (hash_equals($result['password'], crypt($password, $result['password'])) ) {
    echo $json_response = json_encode('success');
?>