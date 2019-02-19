contador = 1; // Variable global para tener poder poner un id unico a cada elemento cuando se clona.
cuadro = "";
cel = "";
        function start(e) {
            e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
            e.dataTransfer.setData("Data", e.target.id); // Toma el elemento que se va a mover
            e.dataTransfer.setDragImage(e.target, 0, 0); // Define la imagen que se vera al ser arrastrado el elemento y por donde se coje el elemento que se va a mover (el raton aparece en la esquina sup_izq con 0,0)
            //e.target.style.opacity = '0.4'; 
        }

        function end(e){
            e.target.style.opacity = ''; // Pone la opacidad del elemento a 1           
            e.dataTransfer.clearData("Data");//Al finalizar se limpia la imagen
        }

        function enter(e) {
           // e.target.style.border = '3px dotted #555'; 
           var id = e.target.id; // Elemento sobre el que se arrastra
             if (id == 'papIzq'){
                document.getElementById("papIzq").style.height="100%";
                document.getElementById("papIzq").style.width = "100%";
            }
            // return false para que se pueda soltar
            if (id == 'papDer'){
                document.getElementById("papDer").style.height="100%";
                document.getElementById("papDer").style.width = "100%";
            }
            if (id == 'compIzq'){
                document.getElementById("compIzq").style.height="100%";
                document.getElementById("compIzq").style.width = "100%";
            }
            // return false para que se pueda soltar
            if (id == 'compDer'){
                document.getElementById("compDer").style.height="100%";
                document.getElementById("compDer").style.width = "100%";
            }
        }

        function leave(e) {
            e.target.style.border = ''; 
            var id = e.target.id; // Elemento sobre el que se arrastra
             if (id == 'papIzq'){
                document.getElementById("papIzq").style.height="50%";
                document.getElementById("papIzq").style.width = "50%";
            }
            // return false para que se pueda soltar
            if (id == 'papDer'){
                document.getElementById("papDer").style.height="50%";
                document.getElementById("papDer").style.width = "50%";
            }
            if (id == 'compIzq'){
                document.getElementById("compIzq").style.height="50%";
                document.getElementById("compIzq").style.width = "50%";
            }
            // return false para que se pueda soltar
            if (id == 'compDer'){
                document.getElementById("compDer").style.height="50%";
                document.getElementById("compDer").style.width = "50%";
            }
        }

        function over(e) {
            var elemArrastrable = e.dataTransfer.getData("Data"); // Elemento arrastrado
            var id = e.target.id; // Elemento sobre el que se arrastra
            
            // return false para que se pueda soltar
            if (id == 'cuadro1'){
                return false; // Cualquier elemento se puede soltar sobre el div destino 1
            }

            if ((id == 'cuadro2') && (elemArrastrable != 'arrastrable3')){
                return false; // En el cuadro2 se puede soltar cualquier elemento menos el elemento con id=arrastrable3
            }   

            if (id == 'cuadro3-1'){//Espacio celular 1
                cel="izq";
                cuadro="cuadro3-1";
                return false;
            }

            if (id == 'cuadro3-2'){//espacio celular 2 
                cel="der";
                cuadro="cuadro3-2";
                return false;
            }

            if (id == 'papelera'){

                return false; // Cualquier elemento se puede soltar en la papelera
            }
            
            if (id == 'papeleraDer'){

                return false; // Cualquier elemento se puede soltar en la papelera
            }
            if (id == 'papDer'){//id de imagen de la papelera
                return false; // Cualquier elemento se puede soltar en la papelera
            }  
            if (id == 'papIzq'){//id de imagen de la papelera
                return false; // Cualquier elemento se puede soltar en la papelera
            } 
            if (id == 'compIzq'){
                return false;
            }
            // return false para que se pueda soltar
            if (id == 'compDer'){
                return false;
            }

        }

    
        /**
        * 
        * Mueve el elemento
        *
        **/
        function drop(e){

            var elementoArrastrado = e.dataTransfer.getData("Data"); // Elemento arrastrado
            e.target.appendChild(document.getElementById(elementoArrastrado));
            e.target.style.border = '';  // Quita el borde
            //Obten el tamaño de la ventana
            tamContX = $('#'+e.target.id).width();
            tamContY = $('#'+e.target.id).height();

            //Obten el tamaño del elemento
            tamElemX = $('#'+elementoArrastrado).width();
            tamElemY = $('#'+elementoArrastrado).height();
            //Se obtiene la posicion del elemento
            posXCont = $('#'+e.target.id).position().left;
            posYCont = $('#'+e.target.id).position().top;

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

            document.getElementById(elementoArrastrado).style.position = "absolute";
            document.getElementById(elementoArrastrado).style.left = x + "px";
            document.getElementById(elementoArrastrado).style.top = y + "px";
        }

        /**
        * 
        * Elimina el elemento que se mueve
        *
        **/
        function eliminar(e){
            var elementoArrastrado = document.getElementById(e.dataTransfer.getData("Data")); // Elemento arrastrado
            //Se verifica de que celular estamos arrastrando
            if(cel == "izq"){
                //Se ocultan todos elementos del celular 1
                document.getElementById("cuadro2-1").style.visibility="hidden";
                document.getElementById("papelera").style.visibility="hidden";
                document.getElementById("compartir").style.visibility="hidden";
                document.getElementById("colores1").style.visibility="hidden";
                document.getElementById("texto1").style.visibility="visible";
                document.getElementById("papIzq").style.height="50%";
                document.getElementById("papIzq").style.width = "50%";
                //Se verifica si hay otro celular
                if (document.getElementById("der")==null) {
                    //se oculta el div de opciones
                    document.getElementById("opciones").style.visibility="hidden";
                }
            }
            if (cel == "der") {
                //Se ocultan todos elementos del celular 2
                document.getElementById("cuadro2-2").style.visibility="hidden";
                document.getElementById("papeleraDer").style.visibility="hidden";
                document.getElementById("compartirDer").style.visibility="hidden";
                document.getElementById("colores2").style.visibility="hidden";
                document.getElementById("texto2").style.visibility="visible";
                document.getElementById("papDer").style.height="50%";
                document.getElementById("papDer").style.width = "50%";
                //Se verifica si hay otro celular
                if (document.getElementById("izq")==null) {
                    //se oculta el div de opciones
                    document.getElementById("opciones").style.visibility="hidden";
                }
            }
            elementoArrastrado.parentNode.removeChild(elementoArrastrado); // Elimina el elemento
            e.target.style.border = '';   // Quita el borde
        }

        /**
        * 
        * Clona el elemento que se mueve
        *
        **/
        function clonar(e){
            var elementoArrastrado = document.getElementById(e.dataTransfer.getData("Data")); // Elemento arrastrado
            elementoArrastrado.style.opacity = ''; // Dejamos la opacidad a su estado anterior para copiar el elemento igual que era antes
            
            if (document.getElementById(cel) != null) {
                e.target.removeChild(document.getElementById(cel)); // Se elimina celular
            }
            var elementoClonado = elementoArrastrado.cloneNode(true); // Se clona el elemento
            elementoClonado.id = cel; // Se cambia el id porque tiene que ser unico
            contador += 1;  
            document.getElementById("opciones").style.visibility="visible";
            if(cuadro == 'cuadro3-1'){
                document.getElementById("cuadro2-1").style.visibility="visible";
                document.getElementById("papelera").style.visibility="visible";
                document.getElementById("compartir").style.visibility="visible";
                document.getElementById("colores1").style.visibility="visible";
                document.getElementById("texto1").style.visibility="hidden";
                document.getElementById('cuadro2-1').style.background='#FBB678 url("Imagenes/informacion/cel1red.png") no-repeat right top';
            }
            if (cuadro == 'cuadro3-2'){
                document.getElementById("cuadro2-2").style.visibility="visible";
                document.getElementById("papeleraDer").style.visibility="visible";
                document.getElementById("compartirDer").style.visibility="visible";
                document.getElementById("texto2").style.visibility="hidden";
                document.getElementById("colores2").style.visibility="visible";
                document.getElementById('cuadro2-2').style.background='#FBB678 url("Imagenes/informacion/cel2red.png") no-repeat right top';
            }
            elementoClonado.style.position = "static";  // Se posiciona de forma "normal" (Sino habria que cambiar las coordenadas de la posición)  
            elementoClonado.style.width = "80%";
            elementoClonado.style.height = "auto";
            e.target.appendChild(elementoClonado); // Se añade el elemento clonado
            e.target.style.border = '';   // Quita el borde del "cuadro clonador"
        }

        function compartir(e){
            //var id = e.target.id; // Elemento sobre el que se arrastra
            if (cel == 'izq'){
                document.getElementById("compIzq").style.height="50%";
                document.getElementById("compIzq").style.width = "50%";
            }
            // return false para que se pueda soltar
            if (cel == 'der'){
                document.getElementById("compDer").style.height="50%";
                document.getElementById("compDer").style.width = "50%";
            }
            window.open("index.php");
        }