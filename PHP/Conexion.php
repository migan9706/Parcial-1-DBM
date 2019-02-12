<?php
	$hostname="localhost:8080";
	$database="mesainteractiva";
	$username="root";
	$password="";

	$conexion = mysqli_connect($hostname, $username, $password, $database);
	if (mysqli_connect_errno())
	  {
	  	echo "Fallo la conexion a MySQL: " . mysqli_connect_error();
	  }
?>