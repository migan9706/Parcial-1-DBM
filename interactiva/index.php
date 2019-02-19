<?php
session_start();
require_once('PHP/Conexion.php');
//$conexion = 
$_SESSION["ventana"] = "1";
?>
<!DOCTYPE html>

<html land="es">
<head>
 <meta charset="utf-8" />
 <title>Drag & drop</title>
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
  <link rel="stylesheet" href="scss/style.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <link rel="stylesheet" type="text/css" href="scss/DragAndDrop.css">
  <script type="text/javascript" src="JavaScript/Mov_DragAndDrop.js"></script>
  <script type="text/javascript" src="JavaScript/EventoCaract.js"></script>
    <script type="text/javascript" src="JavaScript/claseMarcaYCelular.js"></script>
    <script type="text/javascript" src="JavaScript/carrusel.js"></script>
    <script type="text/javascript" src="JavaScript/Display.js"></script>
    <script type="text/javascript" src="JavaScript/colores.js"></script>

 
</head>
<body>
 <section>
  <div class="col-sm-1">
    <div id="menu">
      <div id="compartir">
        <img src="Imagenes/icono/compartir.png" style="height: 65px; width: 65px" />
        Compartir
      </div>
       <div id="papelera"    ondragenter="return enter(event),activoPap1()" ondragover="return over(event)" ondragleave="return leave(event),desac1()" ondrop="return eliminar(event)">
        <img id="papIzq" src="Imagenes/icono/papelera.png" style="height: 65px; width: 60px" ondragenter="return enter(event)" ondragover="return over(event)" ondragleave="return leave(event)" ondrop="return eliminar(event)" />
          Papelera
       </div>
    </div>

  </div>

   <div class="carrusel" ondragenter="return enter(event)" ondragover="return over(event)" ondragleave="return leave(event)" ondrop="return drop(event)">
      <div class="col-sm-10" style="background-color:white;">
      <br>
      <br>
      <div class="col-sm-12" style="background-color:transparent;">
      <div class="carousel right">
      <div class="indicator"></div>
      <div class="wrap" >
      <!-- Se utiliza  la función obtener_registros para generar elementos <li></li>
      	que son las marcas y los celulares

      -->
      <button style="width:100%; height:50px; font-size: 30px;" onclick="obtener_registros()">Home</button>
      <ul id="carrusel" style="height: 130px; width: 100px; background-color: transparent;">
      
      
      
      </ul>
      </div>
      </div>
  
      <br>
      <br>
      
      </div>

      <br>
      <br>
      <br>
      <br>
      

</div>
   </div>
     <div class="col-sm-1">
        <div id="menu">
      <div id="compartirDer">
        <img src="Imagenes/icono/compartir.png" style="height: 65px; width: 65px"/>
        Compartir
      </div>
       <div id="papeleraDer"   ondragenter="return enter(event) , activoPap1()" ondragover="return over(event)" ondragleave="return leave(event),desac2()" ondrop="return eliminar(event)">
        <img id="papDer" src="Imagenes/icono/papelera.png" style="height: 65px; width: 60px" ondragenter="return enter(event)" ondragover="return over(event)" ondragleave="return leave(event)" ondrop="return eliminar(event)"  />
          Papelera
       </div>
    </div>
  </div>
 </section>

 <section>
  <div id="cuadro3-1" ondragenter="return enter(event)" ondragover="return over(event)" ondragleave="return leave(event)" ondrop="return clonar(event)">
    <h1 id="texto1" >Arrastre aqui</h1>
    <!--Se inicializa una imagen no visible para almacenar el cambio de colores-->

   <img id="imagen-colores1" src="" style="visibility: hidden;">
  
   <div id="colores1" class="colorCel1" style="visibility: hidden; background-color: transparent; border-color: transparent;">
     	<!--Aqui se crean imagenes que serviran como botones para hacer en cambio de colores mediante las funciones cargarcolor1()
     	cargarcolor2() y se usa el mismo evento quitarcolor1() para ambos casos
     -->

  		<img src="Imagenes/icono/color1.png" onmousedown ="cargarcolor1()"  onmouseup="quitarcolor1()" width="42" height="42">
  		<img src="Imagenes/icono/color2.png" onmousedown ="cargarcolor2()"  onmouseup="quitarcolor1()" width="42" height="42">

   </div>
  
  </div>
  <div id="cuadro2-1" style="background-color: white">
  </div>
  <div id="opciones">
    <ul>
    <center>
       <!--En esta parte vemos los botnes de la mesa la cual son las caracteristicas de cada celular y dependiendo de la caracteristica que se desea ver, esta llama a una funcion es ejecutada cuenado el usuario hace click en el boton, la funcion cargarinfo() se encuentra en un archivo JScript llamado EventCaract el cual este  mostrara la informacion que se requiera -->
      <li><button onclick="cargarinfo1()" ondblclick="oc()"><img src="Imagenes/icono/red.png" alt="x" />   Red</button></li>
      <li><button onclick="cargarinfo2()" ondblclick="oc()"><img src="Imagenes/icono/memoria.png" alt="x" />  CPU</button></li>
      <li><button onclick="cargarinfo3()" ondblclick="oc()"><img src="Imagenes/icono/bateria.png" alt="x" /> Bateria</button></li>
      <li><button onclick="cargarinfo4()" ondblclick="oc()"><img src="Imagenes/icono/camara.png" alt="x" />  Cámara</button></li>
      <li><button onclick="cargarinfo5()" ondblclick="oc()"><img src="Imagenes/icono/peso.png" alt="x" />  Dimensiones y Peso</button></li>
     </center>	 
    </ul>
  </div>
  <div id="cuadro2-2" style="background-color: white">
  </div>
  <div id="cuadro3-2" ondragenter="return enter(event)" ondragover="return over(event)" ondragleave="return leave(event)" ondrop="return clonar(event)">
   <h1 id="texto2">
     Arrastre Aqui
   </h1>
   <!--Aqui se crean imagenes que serviran como botones para hacer en cambio de colores mediante las funciones cargarcolor3()
     	cargarcolor4() y se usa el mismo evento quitarcolor2() para ambos casos
     -->

   <img id="imagen-colores2" src="" style="visibility: hidden;">
   <div id="colores2" class="colorCel2" style="visibility: hidden; background-color: transparent; border-color: transparent;">
  		<img src="Imagenes/icono/color1.png" onmouseup="cargarcolor3()" onmouseover="quitarcolor2()" width="42" height="42">
  		<img src="Imagenes/icono/color2.png" onmouseup="cargarcolor4()"  onmouseover="quitarcolor2()" width="42" height="42">

   </div>
  </div>
  <!--<div id="papelera" ondragenter="return enter(event)" ondragover="return over(event)" ondragleave="return leave(event)" ondrop="return eliminar(event)">Papelera</div>-->
 </section>
</body>
 </section>
</body>
<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script  src="JavaScript/index.js"></script>
</html>