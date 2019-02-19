//include(JavaScript/claseMarcaYCelular.js);
//aqui se muestra las funciones que se llaman desde el index.php, cuando un usuario desea ver la informacion cierto celular, el boton llama la funcion cargarinfo() y dependiendo de la caracteristica que se desee adquirir el archivo manda el resultado que llama esa funcion
//ademas para que la informacion no se muestre aleatoriamente o una encima de otra se coloco la informacion en ciertos sectores para que asi no haya problemas de sobreexponer informacion y asi sea mas facil de ver, cada sector esta determinado en el archivo de estilo css

function cargarinfo1(){
	if (document.getElementById("cuadro2-1").style.visibility == "visible") {
        document.getElementById('cuadro2-1').style.background='#FBB678 url("Imagenes/informacion/cel1red.png") no-repeat right top';
    }
    if (document.getElementById("cuadro2-2").style.visibility == "visible") {           
    	document.getElementById('cuadro2-2').style.background='#FBB678 url("Imagenes/informacion/cel2red.png") no-repeat right top';
    }
	if (document.getElementById("cuadro2-1").style.visibility == "visible" && document.getElementById("cuadro2-2").style.visibility == "visible") {
		document.getElementById('cuadro2-1').style.background='#FBB678 url("Imagenes/informacion/cel1red.png") no-repeat right top';
		document.getElementById('cuadro2-2').style.background='#FBB678 url("Imagenes/informacion/cel2red.png") no-repeat right top';
	}
}
function cargarinfo2(){
	if (document.getElementById("cuadro2-1").style.visibility == "visible" && document.getElementById("cuadro2-2").style.visibility == "visible") {
		document.getElementById('cuadro2-1').style.background='#FBB678 url("Imagenes/informacion/cel2ram.png") no-repeat right top';
	document.getElementById('cuadro2-2').style.background='#FBB678 url("Imagenes/informacion/cel3ram.png") no-repeat right top';
	}
	if (document.getElementById("cuadro2-1").style.visibility == "visible") {
        document.getElementById('cuadro2-1').style.background='#FBB678 url("Imagenes/informacion/cel2ram.png") no-repeat right top';
	}
    if (document.getElementById("cuadro2-2").style.visibility == "visible") {           
    	document.getElementById('cuadro2-2').style.background='#FBB678 url("Imagenes/informacion/cel3ram.png") no-repeat right top';
    }
}
function cargarinfo3(){
	if (document.getElementById("cuadro2-1").style.visibility == "visible" && document.getElementById("cuadro2-2").style.visibility == "visible") {
		document.getElementById('cuadro2-1').style.background='#FBB678 url("Imagenes/informacion/cel4memoria.png") no-repeat right top';
		document.getElementById('cuadro2-2').style.background='#FBB678 url("Imagenes/informacion/cel3memoria.png") no-repeat right top';
	}
	if (document.getElementById("cuadro2-1").style.visibility == "visible") {
		document.getElementById('cuadro2-1').style.background='#FBB678 url("Imagenes/informacion/cel4memoria.png") no-repeat right top';
	}
    if (document.getElementById("cuadro2-2").style.visibility == "visible") { 
		document.getElementById('cuadro2-2').style.background='#FBB678 url("Imagenes/informacion/cel3memoria.png") no-repeat right top';
    }
}
function cargarinfo4(){
	if (document.getElementById("cuadro2-1").style.visibility == "visible" && document.getElementById("cuadro2-2").style.visibility == "visible") {
		document.getElementById('cuadro2-1').style.background='#FBB678 url("Imagenes/informacion/cel2camara.png") no-repeat right top';
		document.getElementById('cuadro2-2').style.background='#FBB678 url("Imagenes/informacion/cel3camara.png") no-repeat right top';
	}
	if (document.getElementById("cuadro2-1").style.visibility == "visible") {
        document.getElementById('cuadro2-1').style.background='#FBB678 url("Imagenes/informacion/cel2camara.png") no-repeat right top';
	}
    if (document.getElementById("cuadro2-2").style.visibility == "visible") {           
    	document.getElementById('cuadro2-2').style.background='#FBB678 url("Imagenes/informacion/cel3camara.png") no-repeat right top';
    }
}
function cargarinfo5(){
	if (document.getElementById("cuadro2-1").style.visibility == "visible" && document.getElementById("cuadro2-2").style.visibility == "visible") {
		document.getElementById('cuadro2-1').style.background='#FBB678 url("Imagenes/informacion/cel4peso.png") no-repeat right top';
		document.getElementById('cuadro2-2').style.background='#FBB678 url("Imagenes/informacion/cel3peso.png") no-repeat right top';
	}
	if (document.getElementById("cuadro2-1").style.visibility == "visible") {
        document.getElementById('cuadro2-1').style.background='#FBB678 url("Imagenes/informacion/cel4peso.png") no-repeat right top';
	}
    if (document.getElementById("cuadro2-2").style.visibility == "visible") {           
    	document.getElementById('cuadro2-2').style.background='#FBB678 url("Imagenes/informacion/cel3peso.png") no-repeat right top';
    }
	

}

function oc(){
	if (document.getElementById("cuadro2-1").style.visibility == "visible" && document.getElementById("cuadro2-2").style.visibility == "visible") {
		document.getElementById('cuadro2-1').style.backgroundColor='#FBB678';
		document.getElementById('cuadro2-2').style.backgroundColor='#FBB678';
	}
	if (document.getElementById("cuadro2-1").style.visibility == "visible") {
        document.getElementById('cuadro2-1').style.backgroundColor='#FBB678';
	}
    if (document.getElementById("cuadro2-2").style.visibility == "visible") {           
	document.getElementById('cuadro2-2').style.backgroundColor='#FBB678';
    }
}