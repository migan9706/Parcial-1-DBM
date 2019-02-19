function cargarcolor1()
{
		//lo primero que hacemos es poner la imagen como nuevo elemento
		document.getElementById("imagen-colores1").src ="./Imagenes/icono/azultapa.png";
		//cambiamos la visibilidad al elemento
		document.getElementById("izq").style.visibility="hidden";
		document.getElementById("imagen-colores1").style.visibility="visible";
		//editamos el porcentaje de altura
		document.getElementById("imagen-colores1").style.heigth="100%";
		//editamos el porcentaje de ancho
		document.getElementById("imagen-colores1").style.width="100%";
		document.getElementById("imagen-colores1").style.visibility="visible";

	
}
function cargarcolor2()
{
		document.getElementById("izq").style.visibility="hidden";
		//lo primero que hacemos es poner la imagen como nuevo elemento
		document.getElementById("imagen-colores1").src ="./Imagenes/icono/taparosa.png";
		//editamos el porcentaje de ancho
		document.getElementById("imagen-colores1").style.width="100%";
		//editamos el porcentaje de altura
		document.getElementById("imagen-colores1").style.heigth="100%";
		//cambiamos la visibilidad al elemento
		document.getElementById("imagen-colores1").style.visibility="visible";
	
}
function cargarcolor3()
{
	//lo primero que hacemos es poner la imagen como nuevo elemento
	document.getElementById("imagen-colores2").src ="./Imagenes/icono/azultapa.png";
	document.getElementById("imagen-colores2").style.visibility="visible";
	//editamos el porcentaje de ancho
	document.getElementById("imagen-colores2").style.width="100%";
	//editamos el porcentaje de altura
	document.getElementById("imagen-colores2").style.heigth="100%";
	//cambiamos la visibilidad al elemento
	document.getElementById("imagen-colores2").style.visibility="visible";
	
}
function cargarcolor4()
{
		//lo primero que hacemos es poner la imagen como nuevo elemento
		document.getElementById("imagen-colores2").src ="./Imagenes/icono/taparosa.png";
		document.getElementById("imagen-colores2").style.visibility="visible";
		//editamos el porcentaje de ancho
		document.getElementById("imagen-colores2").style.width="100%";
		//editamos el porcentaje de altura
		document.getElementById("imagen-colores2").style.heigth="100%";
		//cambiamos la visibilidad al elemento
		document.getElementById("imagen-colores2").style.visibility="visible";
	
}

function quitarcolor1()
{
	//ocultamos el elemento a la vista 
	document.getElementById("imagen-colores1").style.visibility="hidden";
	//se reduce el tamaño al minimo
	document.getElementById("imagen-colores1").style.width="0px";
	document.getElementById("imagen-colores1").style.heigth="0px";
	
	
}
function quitarcolor2()
{
	//ocultamos el elemento a la vista 
	document.getElementById("imagen-colores2").style.visibility="hidden";
	//se reduce el tamaño al minimo
	document.getElementById("imagen-colores2").style.width="0px";
	document.getElementById("imagen-colores2").style.heigth="0px";
	
	
}