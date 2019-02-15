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
						'
						 <script type="text/javascript" src="JavaScript/Display.js"></script>
						 <li ><img name="'.$filaMarcas["idcelulares"].'" id="'.$filaMarcas["idcelulares"].'" alt="'.$filaMarcas["nombre"].'" draggable="true"  
						  ondragstart="start(event)" onmouseout="set('.$filaMarcas["idcelulares"].','.$filaMarcas1["nombre"].')" ondragend="end(event)" src="'.$filaMarcas["url"].'"/></li>'
							;
								
					}
				}
	
	echo $resultado;

?>