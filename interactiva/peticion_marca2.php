<?php

	include ("PHP/Conexion.php");
	$marca=$_POST['marcas'];
	$consulta="SELECT * FROM `celulares` WHERE marcas_idmarcas=".$marca."";
	$realizando=mysqli_query($conexion,$consulta);
	$resultado="\n";
	
	

				if ($realizando->num_rows > 0)
				{
						
					while($filaMarcas= $realizando->fetch_assoc())
					{
						$resultado.=
						'<li><img id="'.$filaMarcas["idcelulares"].'" alt="'.$filaMarcas["nombre"].'" draggable="true" ondragstart="start(event)" ondragend="end(event)" src="'.$filaMarcas["url"].'"/></li>'
							;
								
					}
				}
	
	echo $resultado;

?>