<?php
$host_db="localhost";
$user_db="root";
$pass_db="";
$db_name="dbm";
$conexion= new mysqli($host_db,$user_db,$pass_db,$db_name);

if($conexion->connect_error)
{
	die("la conexion fallo" . $conexion->connect_error);
}
?>