<?php
require_once '../includes/db.php'; // The mysql database connection script
if(isset($_GET['user']) && isset($_GET['team']) && isset($_GET['league'])){
	$user = $mysqli->real_escape_string($_GET['user']);
	$team = $mysqli->real_escape_string($_GET['team']);
	$league = $mysqli->real_escape_string($_GET['league']);


	$query="INSERT INTO ownership(uid,tid,lid)  VALUES ('$user', '$team', '$league')";
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

	$result = $mysqli->affected_rows;

	echo $json_response = json_encode($result);
	}
?>