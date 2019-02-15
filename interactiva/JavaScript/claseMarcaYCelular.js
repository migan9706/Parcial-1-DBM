	var nombrecelular,urlcel;
	var nombremarca,celulares,urlmarca;
	var cont;
	var informaciones;
class Marca {
	
	constructor(nombrem,urlmarca){
		this.nombremarca=nombrem;
		this.urlmarca=urlmarca;
        this.celulares=[];
		this.cont=0;
		
	}
	agregarCelular(cel)
	{
		this.celulares.push(cel);
		this.cont++;
	}

}

class Celular{

	constructor(nombrecel,urlcel)
	{
		this.nombrecelular=nombrecel;
		this.urlcel=urlcel;
	}
	
}
var huawei= new Marca("Sony","/marcas/logo-huawei.png");
var lanix= new Marca("Lanix","/marcas/logo-lanix.png");
var moto= new Marca("Moto","/marcas/Logo-Moto.png");
var samsung= new Marca("Samsung","/marcas/Logo-Sam.png");
var xiaomi= new Marca("Xiaomi","/marcas/logo-xiaomi.png");
var sony= new Marca("Sony","/marcas/logo-sony.png");



var sonycel= new Celular("sony1","celulares/cel1-sony.png")
var sonycel1= new Celular("sony2","celulares/cel2-sony.png")
var sonycel2= new Celular("sony3","celulares/cel3-sony.png")
var sonycel3= new Celular("sony4","celulares/cel4-sony.png")
var sonycel4= new Celular("sony5","celulares/cel5-sony.png")
var sonycel5= new Celular("sony6","celulares/cel6-sony.png")
var sonycel6= new Celular("sony7","celulares/cel7-sony.png")
var sonycel7= new Celular("sony8","celulares/cel8-sony.png")
var sonycel8= new Celular("sony9","celulares/cel9-sony.png");
var sonycel9= new Celular("sony10","celulares/cel10-sony.png")

var xiaomicel= new Celular("xiaomi1","celulares/cel1-xiaomi.png")
var xiaomicel1= new Celular("xiaomi2","celulares/cel2-xiaomi.png")
var xiaomicel2= new Celular("xiaomi3","celulares/cel3-xiaomi.png")
var xiaomicel3= new Celular("xiaomi4","celulares/cel4-xiaomi.png")
var xiaomicel4= new Celular("xiaomi","celulares/cel5-xiaomi.png")
var xiaomicel5= new Celular("xiaomi6","celulares/cel6-xiaomi.png")
var xiaomicel6= new Celular("xiaomi7","celulares/cel7-xiaomi.png")
var xiaomicel7= new Celular("xiaomi8","celulares/cel8-xiaomi.png")
var xiaomicel8= new Celular("xiaomi9","celulares/cel9-xiaomi.png");
var xiaomicel9= new Celular("xiaomi10","celulares/cel10-xiaomi.png")



sony.agregarCelular(sonycel);
sony.agregarCelular(sonycel1);
sony.agregarCelular(sonycel2);
sony.agregarCelular(sonycel3);
sony.agregarCelular(sonycel4);
sony.agregarCelular(sonycel5);
sony.agregarCelular(sonycel6);
sony.agregarCelular(sonycel7);
sony.agregarCelular(sonycel8);
sony.agregarCelular(sonycel9);

xiaomi.agregarCelular(xiaomicel);
xiaomi.agregarCelular(xiaomicel1);
xiaomi.agregarCelular(xiaomicel2);
xiaomi.agregarCelular(xiaomicel3);
xiaomi.agregarCelular(xiaomicel4);
xiaomi.agregarCelular(xiaomicel5);
xiaomi.agregarCelular(xiaomicel6);
xiaomi.agregarCelular(xiaomicel7);
xiaomi.agregarCelular(xiaomicel8);
xiaomi.agregarCelular(xiaomicel9);
/*
alert("hola soy la marca "+sony.nombremarca+" y mi foto esta en "+sony.urlmarca);
for (var i =  0; i <=sony.cont; i++) {
	alert("soy celular de marca "+sony.nombremarca+" y me llamo "+sony.celulares[i].nombrecelular+"y mi foto esta en "+
		sony.celulares[i].urlcel);
}


alert( "hola soy la marca "+xiaomi.nombremarca+" y mi foto esta en "+xiaomi.urlmarca);
for (var i =  0; i <=xiaomi.cont; i++) {
	alert("soy celular de marca "+xiaomi.nombremarca+" y me llamo "+xiaomi.celulares[i].nombrecelular+"y mi foto esta en "+
		xiaomi.celulares[i].urlcel);
}*/