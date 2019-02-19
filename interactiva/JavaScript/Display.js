function setCel(id) {
		//se cambian los tamaños de celular 
		document.getElementById(id).style.height = "100px";
		document.getElementById(id).style.width = "82px";
	
	}	
function setCel1(id) {
		//se restauran los valores
		document.getElementById(id).style.height = "120px";
		document.getElementById(id).style.width = "100px";
	
	}	



function setMarca(id){
		//se modifican los tamaños de las marcas
		document.getElementById(id).style.height = "75px";
		document.getElementById(id).style.width = "75px";
}
function setMarca1(id){
		//se manda a traer el elemnto de marca a modificar 
		document.getElementById(id).style.height = "95%";
		document.getElementById(id).style.width = "150px";
}
function activoPap2()
{
	//obtenemos el elmento imagen con id "papIzq" y modificamos su tamaño
	document.getElementById("papDer").style.height="50%";
	document.getElementById("papDer").style.width = "50%";

}
function activoPap1()
{
	//obtenemos el elmento imagen con id "papIzq" y modificamos su tamaño
	document.getElementById("papIzq").style.height="50%";
	document.getElementById("papIzq").style.width = "50%";
}
function desac1()
{
		//se restaura el valor predeterminado del tamaño
		document.getElementById("papIzq").style.height="100%";
		document.getElementById("papIzq").style.width = "100%";
}
function desac2()
{
		//se restaura el valor predeterminado del tamaño

		document.getElementById("papDer").style.height="100%";
		document.getElementById("papDer").style.width = "100%";
}