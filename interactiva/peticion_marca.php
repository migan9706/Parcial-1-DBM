<?php
/* aqu se pide la conexion a la base de datos  para jalar el id de los celulares que se tiene para mostrar en el carrusel y mostrar el efecto de drag */

	include ("PHP/Conexion.php");
	$marca=$_POST['marcas'];
	$consulta="SELECT * FROM `celulares` WHERE marcas_idmarcas=".$marca."";
	$realizando=mysqli_query($conexion,$consulta);
	$resultado="\n";
	
	if($realizando=$conexion->query($consulta)){

				if ($realizando->num_rows > 0)
				{
						
					while($filaMarcas= $realizando->fetch_assoc())
					{
						$resultado.=
						'<li ><img id="'.$filaMarcas["idcelulares"].'" alt="'.$filaMarcas["nombre"].'" draggable="true"  ondragstart="start(event)" ondragend="end(event)"  onmousedown="setCel('.$filaMarcas["idcelulares"].')" onmouseleave="setCel1('.$filaMarcas["idcelulares"].')" src="'.$filaMarcas["url"].'"/></li>'
							;
								
					}
				}
	}
	else{

		$consulta1="SELECT * FROM `marcas`";
		$realizando1=mysqli_query($conexion,$consulta1);
		if ($realizando1->num_rows > 0)
				{
					
					while($filaMarcas1= $realizando1->fetch_assoc())
					{
						$resultado.=
						' <li ><img  id="'.$filaMarcas1["idmarcas"].'" alt="'.$filaMarcas1["nombre"].'"  onmousedown="setMarca('.$filaMarcas1["idmarcas"].')" onmouseleave="setMarca1('.$filaMarcas1["idmarcas"].')" src="'.$filaMarcas1["url"].'"/></li>'
							;
								
					}
				}
	}
	echo $resultado;

?>