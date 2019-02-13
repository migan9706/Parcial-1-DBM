var registrop;
var contador_clicks=0;
$(document).ready(function(){
      $('body #carrusel').on('click', 'img', function(){
        var registro=$(this).attr('id');
        registrop=parseInt(registro);
     if(contador_clicks==0){
     	$(obtener_registros2(registrop));
       	var boton = document.getElementById("atras");
       	boton.setAttribute("style", "visibility:;");
       	contador_clicks=1;
     }
       
      })
    });

$(obtener_registros());

function obtener_registros(marcas)
{
	$.ajax({
		url : 'peticion_marca.php',
		type : 'POST',
		dataType : 'html',
		data : { marcas: marcas },
		})

	.done(function(resultado){
		var boton = document.getElementById("atras");
       	boton.setAttribute("style", "visibility:hidden;");
		contador_clicks=0;
		$("#carrusel").html(resultado);
	})
}
function obtener_registros2(marcas)
{
	$.ajax({
		url : 'peticion_marca2.php',
		type : 'POST',
		dataType : 'html',
		data : { marcas: marcas },
		})

	.done(function(resultado){
		$("#carrusel").html(resultado);
	})
}
