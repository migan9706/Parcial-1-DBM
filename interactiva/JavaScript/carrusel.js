var registrop;
$(document).ready(function(){
      $('body #carrusel').on('click', 'img', function(){
        var registro=$(this).attr('id');
        registrop=parseInt(registro);
     
       $(obtener_registros2(registrop));
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
