<?php
	$hostname="localhost:8080";
	$database="mesainteractiva";
	$username="root";
	$password="";

	// Create connection
	$conn = new mysqli($hostname, $database, $username, $password);

	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 
	echo "Connected successfully";
?>