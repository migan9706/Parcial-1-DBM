/*function start(e) {
    e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover
    e.dataTransfer.setData("Data", e.target.id); // Coje el elemento que se va a mover
    e.dataTransfer.setDragImage(e.target, 0, 0); // Define la imagen que se vera al ser arrastrado el elemento y por donde se coje el elemento que se va a mover (el raton aparece en la esquina sup_izq con 0,0)
    e.target.style.opacity = '0.4'; // Establece la opacidad del elemento que se va arrastrar
}
function end(e) {
    e.target.style.opacity = ''; // Restaura la opacidad del elemento   
    e.dataTransfer.clearData("Data");
}
function enter(e) {
    e.target.style.border = '3px dotted #555'; 
}

function leave(e) {
    e.target.style.border = ''; 
}
function over(e) {
    var elemArrastrable = e.dataTransfer.getData("Data"); // Elemento arrastrado
    var id = e.target.id; // Elemento sobre el que se arrastra
 
    // return false para que se pueda soltar
    if (id == 'cuadro1') {
        return false; // Cualquier elemento se puede soltar sobre el div destino 1
    }

    if ((id == 'cuadro2') && (elemArrastrable != 'arrastrable3')) {
        return false; // En el cuadro2 se puede soltar cualquier elemento menos el elemento con id=arrastrable3
    } 

    if (id == 'cuadro3') {
        return false;
    }
 
    if (id == 'papelera') {
        return false; // Cualquier elemento se puede soltar en la papelera
    }  
}
function drop(e) {
    var elementoArrastrado = e.dataTransfer.getData("Data"); // Elemento arrastrado
    e.target.appendChild(document.getElementById(elementoArrastrado)); // Añade el elemento arrastrado al elemento desde el que se llama a esta funcion

    // Dimensiones del elemento sobre el que se arrastra
    tamContX = $('#'+e.target.id).width();
    tamContY = $('#'+e.target.id).height();

    // Dimensiones del elemento arrastrado
    tamElemX = $('#'+elementoArrastrado).width();
    tamElemY = $('#'+elementoArrastrado).height();
  
    // Posicion del elemento sobre el que se arrastra
    posXCont = $(e.target).position().left;
    posYCont = $(e.target).position().top;

    // Posicion absoluta del raton
    x = e.layerX;
    y = e.layerY;

    // Si parte del elemento que se quiere mover se queda fuera se cambia las coordenadas para que no sea asi
    if (posXCont + tamContX <= x + tamElemX){
        x = posXCont + tamContX - tamElemX;
    }

    if (posYCont + tamContY <= y + tamElemY){
        y = posYCont + tamContY - tamElemY;
    }

    document.getElementById(elementoArrastrado).style.position="absolute";
    document.getElementById(elementoArrastrado).style.left=x+"px";
    document.getElementById(elementoArrastrado).style.top=y+"px";
    e.target.style.border = '';   // Quita el borde del cuadro al que se mueve
}
function clonar(e) {
    var elementoArrastrado = document.getElementById(e.dataTransfer.getData("Data")); // Elemento arrastrado

    elementoArrastrado.style.opacity = ''; // Dejamos la opacidad a su estado anterior para copiar el elemento igual que era antes

    var movecarclone = elementoArrastrado.cloneNode(true); // Se clona el elemento
    movecarclone.id = "ElemClonado" + contador; // Se cambia el id porque tiene que ser unico
    contador += 1;
    elementoClonado.style.position = "static"; // Se posiciona de forma "normal" (Sino habria que cambiar las coordenadas de la posición) 
    e.target.appendChild(movecarclone); // Se añade el elemento clonado
   
    e.target.style.border = '';   // Quita el borde del "cuadro clonador"
}
function eliminar(e) {
    var elementoArrastrado = document.getElementById(e.dataTransfer.getData("Data")); // Elemento arrastrado
    elementoArrastrado.parentNode.removeChild(elementoArrastrado); // Elimina el elemento
    e.target.style.border = '';   // Quita el borde
}*/
/**
* Función que se ejecuta al arrastrar el elemento. 
**/
function start(e) {
    e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
    e.dataTransfer.setData("Text", e.target.id); // Coje el elemento que se va a mover
    e.target.style.opacity = '0.4'; 
}

/**
* Función que se ejecuta se termina de arrastrar el elemento. 
**/
function end(e){
    e.target.style.opacity = ''; // Restaura la opacidad del elemento           
    e.dataTransfer.clearData("Data");           
}

/**
* Función que se ejecuta cuando un elemento arrastrable entra en el elemento desde del que se llama. 
**/
function enter(e) {
    return true;
}

/**
* Función que se ejecuta cuando un elemento arrastrable esta sobre el elemento desde del que se llama. 
* Devuelve false si el objeto se puede soltar en ese elemento y true en caso contrario.
**/
function over(e) {
    if ((e.target.className == "contenedorPieza") || (e.target.id == "contenedorPiezas"))
        return false;
    else
    return true;
}
    
/**
* Función que se ejecuta cuando un elemento arrastrable se suelta sobre el elemento desde del que se llama. 
**/
function drop(e){
    e.preventDefault(); // Evita que se ejecute la accion por defecto del elemento soltado.
    var elementoArrastrado = e.dataTransfer.getData("Text");
    e.target.appendChild(document.getElementById(elementoArrastrado)); // Coloca el elemento soltado sobre el elemento desde el que se llamo esta funcion
    comprobarPuzzle();
}

function comprobarPuzzle(){
    if((document.getElementById('pieza1').parentNode.id=='uno') &&
        (document.getElementById('pieza2').parentNode.id=='dos') &&
        (document.getElementById('pieza3').parentNode.id=='tres') &&
        //(document.getElementById(*).parentNode.id=='tres') &&
        (document.getElementById('pieza4').parentNode.id=='cuatro'))
    {
        alert('Felicidades, has hecho el puzzle.');
    }
}

/**
* Muestra un mensaje de advertencia si el navegador no soporta Drag & Drop. (En Windows no lo soportan ni IE ni Safari)
**/
function comprobarnavegador() {
    if( 
        (navigator.userAgent.toLowerCase().indexOf('msie ') > -1) || 
        ((navigator.userAgent.toLowerCase().indexOf('safari') > -1) && (navigator.userAgent.toLowerCase().indexOf('chrome') == -1)))
    {
        alert("Tu navegador no soporta correctamente las funciones Drag & Drop de HTML5. Prueba con otro navegador.");
    }

}