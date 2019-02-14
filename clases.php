<?php
class Carrusel {
	private $Marcas;
	public function agregarM(Marca $m1)
	{
		
		if ($m1 instanceof Marca) {
			
			$this->Marcas[]=$m1;
		}
	}
	
}
class Marca{
	 private $nombre;
	 private $url;
	 private $celulares;
	 private $id;
	  public function __construct()
    {
        $this->nombre = " ";
        $this->url = " ";
        $this->id=" ";
    }
 
	 public function agregarCel(Celular $cel)
	 {
	 	if ($cel instanceof Celular) {
	 			$this->Celulares[]=$cel;
	 		}
	 }		
	public function setUrlM($url)
	{
		$this->url=$url;
	}
	public function setNombre($nom)
	{
		$this->nombre=$nom;
	}
	 public  function GetURL(){
    return $this->url;
   }
   public  function GetNombre(){
    return $this->nombre;
   }
   public  function GetId(){
    return $this->id;
   }
    public  function setId($i){
     $this->id=$i;
   }
}  
class Celular{
	private $nombre;
	private $id;
 	private $url;
 	private $descripciones;
	public function agregarDes(Descripcion $d)
	{	
		if ($d instanceof Descripcion)
		{
			$this->descripciones=$d;
		}
	}
	public function setUrl($url)
	{
		$this->url=$url;
	}
	public function setNombre($nom)
	{
		$this->nombre=$nom;
	}
	 public  function GetURL(){
    return $this->url;
   }
   public  function GetNombre(){
    return $this->nombre;
   }
   public  function GetId(){
    return $this->id;
   }
    public  function setId($i){
     $this->id=$i;
   }	

}
class Descripcion
{
	private $url;
	private $id;
	public function setUrl($ur)
	{
		$this->url=$ur;
	}
	public function getUrl()
	{
		return $this->url;
	}
	public function setId($i)
	{
		$this->id=$i;
	}
	public function getId()
	{
		return $this->id;
	}
}	

$carru1=new Carrusel();
$mar1=new Marca();
$mar1->setId("1");
$mar1->setNombre("Huawei");
$mar1->setUrlM("Imagenes/Marcas/logo-huawei.png");

$mar2=new Marca();
$mar2->setId("2");
$mar2->setNombre("Lanix");
$mar2->setUrlM("Imagenes/Marcas/logo-lanix.png");

$mar3=new Marca();
$mar3->setId("3");
$mar3->setNombre("Motorola");
$mar3->setUrlM("Imagenes/Marcas/Logo-Moto.png");

$mar4=new Marca();
$mar4->setId("4");
$mar4->setNombre("Samsung");
$mar4->setUrlM("Imagenes/Marcas/Logo-Sam.png");

$mar5=new Marca();
$mar5->setId("5");
$mar5->setNombre("Sony");
$mar5->setUrlM("Imagenes/Marcas/logo-sony.png");

$mar6=new Marca();
$mar6->setId("6");
$mar6->setNombre("Xiaomi");
$mar6->setUrlM("Imagenes/Marcas/logo-xiaomi.png");


$cel1=new Celular();
$carac1=new Descripcion();
$carac1->setUrl("Imagenes/Informacion/info1.jpg");
$carac1->setId("1");

$carac2=new Descripcion();
$carac2->setUrl("Imagenes/Informacion/info2.jpg");
$carac2->setId("2");

$carac3=new Descripcion();
$carac3->setUrl("Imagenes/Informacion/info3.jpg");
$carac3->setId("3");

$carac4=new Descripcion();
$carac4->setUrl("Imagenes/Informacion/info4.jpg");
$carac4->setId("4");

$carac5=new Descripcion();
$carac5->setUrl("Imagenes/Informacion/info5.jpg");
$carac5->setId("5");

 $celular1=new Celular();
 $celular1->setId("1");
 $celular1->setNombre("Sony-1");
 $celular1->setUrl("Imagenes/Celulares/cel1-sony.png");
 $celular1->agregarDes($carac1);
 $celular1->agregarDes($carac2);
 $celular1->agregarDes($carac3);
 $celular1->agregarDes($carac4);
 $celular1->agregarDes($carac5);

 
 $celular2=new Celular();
 $celular2->setId("2");
 $celular2->setNombre("Sony-2");
 $celular2->setUrl("Imagenes/Celulares/cel2-sony.png");
 $celular2->agregarDes($carac1);
 $celular2->agregarDes($carac2);
 $celular2->agregarDes($carac3);
 $celular2->agregarDes($carac4);
 $celular2->agregarDes($carac5);

 $celular3=new Celular();
 $celular3->setNombre("Sony-3");
 $celular3->setUrl("Imagenes/Celulares/cel3-sony.png");
 $celular3->setId("3");
 $celular3->agregarDes($carac1);
 $celular3->agregarDes($carac2);
 $celular3->agregarDes($carac3);
 $celular3->agregarDes($carac4);
 $celular3->agregarDes($carac5);
 
 $celular4=new Celular();
 $celular4->setNombre("Sony-4");
 $celular4->setId("4");
 $celular4->setUrl("Imagenes/Celulares/cel4-sony.png");
 $celular4->agregarDes($carac1);
 $celular4->agregarDes($carac2);
 $celular4->agregarDes($carac3);
 $celular4->agregarDes($carac4);
 $celular4->agregarDes($carac5);
 
 $celular5=new Celular();
 $celular5->setNombre("Sony-5");
 $celular5->setId("5");
 $celular5->setUrl("Imagenes/Celulares/cel5-sony.png");
 $celular5->agregarDes($carac1);
 $celular5->agregarDes($carac2);
 $celular5->agregarDes($carac3);
 $celular5->agregarDes($carac4);
 $celular5->agregarDes($carac5);


 
 $celular6=new Celular();
 $celular6->setNombre("Sony-6");
 $celular6->setId("6");
 $celular6->setUrl("Imagenes/Celulares/cel6-sony.png");
 $celular6->agregarDes($carac1);
 $celular6->agregarDes($carac2);
 $celular6->agregarDes($carac3);
 $celular6->agregarDes($carac4);
 $celular6->agregarDes($carac5);
 
 $celular7=new Celular();
 $celular7->setNombre("Sony-7");
 $celular7->setId("7");
 $celular7->setUrl("Imagenes/Celulares/cel7-sony.png");
 $celular7->agregarDes($carac1);
 $celular7->agregarDes($carac2);
 $celular7->agregarDes($carac3);
 $celular7->agregarDes($carac4);
 $celular7->agregarDes($carac5);
 
 $celular8=new Celular();
 $celular8->setNombre("Sony-8");
 $celular8->setId("8");
 $celular8->setUrl("Imagenes/Celulares/cel8-sony.png");
 $celular8->agregarDes($carac1);
 $celular8->agregarDes($carac2);
 $celular8->agregarDes($carac3);
 $celular8->agregarDes($carac4);
 $celular8->agregarDes($carac5);
 
 $celular9=new Celular();
 $celular9->setNombre("Sony-9");
 $celular9->setId("9");
 $celular9->setUrl("Imagenes/Celulares/cel9-sony.png");
 $celular9->agregarDes($carac1);
 $celular9->agregarDes($carac2);
 $celular9->agregarDes($carac3);
 $celular9->agregarDes($carac4);
 $celular9->agregarDes($carac5);
 
 $celular10=new Celular();
 $celular10->setNombre("Sony-10");
 $celular10->setId("10");
 $celular10->setUrl("Imagenes/Celulares/cel10-sony.png");
  $celular10->agregarDes($carac1);
 $celular10->agregarDes($carac2);
 $celular10->agregarDes($carac3);
 $celular10->agregarDes($carac4);
 $celular10->agregarDes($carac5);


 $celular11=new Celular();
 $celular11->setNombre("Xiaomi-1");
 $celular11->setId("11");
 $celular11->setUrl("Imagenes/Celulares/cel1-xiaomi.png");
  $celular11->agregarDes($carac1);
 $celular11->agregarDes($carac2);
 $celular11->agregarDes($carac3);
 $celular11->agregarDes($carac4);
 $celular11->agregarDes($carac5);

 $celular12=new Celular();
 $celular12->setNombre("Xiaomi-2");
 $celular12->setId("12");
 $celular12->setUrl("Imagenes/Celulares/cel2-xiaomi.png");
 $celular12->agregarDes($carac1);
 $celular12->agregarDes($carac2);
 $celular12->agregarDes($carac3);
 $celular12->agregarDes($carac4);
 $celular12->agregarDes($carac5);

 $celular13=new Celular();
 $celular13->setNombre("Xiaomi-3");
 $celular13->setId("13");
 $celular13->setUrl("Imagenes/Celulares/cel3-xiaomi.png");
 $celular13->agregarDes($carac1);
 $celular13->agregarDes($carac2);
 $celular13->agregarDes($carac3);
 $celular13->agregarDes($carac4);
 $celular13->agregarDes($carac5);

 $celular14=new Celular();
 $celular14->setNombre("Xiaomi-4");
 $celular14->setId("14");
 $celular14->setUrl("Imagenes/Celulares/cel4-xiaomi.png");
 $celular14->agregarDes($carac1);
 $celular14->agregarDes($carac2);
 $celular14->agregarDes($carac3);
 $celular14->agregarDes($carac4);
 $celular14->agregarDes($carac5);

 $celular15=new Celular();
 $celular15->setNombre("Xiaomi-5");
 $celular15->setId("15");
 $celular15->setUrl("Imagenes/Celulares/cel5-xiaomi.png");
 $celular15->agregarDes($carac1);
 $celular15->agregarDes($carac2);
 $celular15->agregarDes($carac3);
 $celular15->agregarDes($carac4);
 $celular15->agregarDes($carac5);

 $celular16=new Celular();
 $celular16->setNombre("Xiaomi-6");
 $celular16->setId("16");
 $celular16->setUrl("Imagenes/Celulares/cel6-xiaomi.png");
 $celular16->agregarDes($carac1);
 $celular16->agregarDes($carac2);
 $celular16->agregarDes($carac3);
 $celular16->agregarDes($carac4);
 $celular16->agregarDes($carac5);

 $celular17=new Celular();
 $celular17->setNombre("Xiaomi-7");
 $celular17->setId("17");
 $celular17->setUrl("Imagenes/Celulares/cel7-xiaomi.png");
 $celular17->agregarDes($carac1);
 $celular17->agregarDes($carac2);
 $celular17->agregarDes($carac3);
 $celular17->agregarDes($carac4);
 $celular17->agregarDes($carac5);

 $celular18=new Celular();
 $celular18->setNombre("Xiaomi-8");
 $celular18->setId("18");
 $celular18->setUrl("Imagenes/Celulares/cel8-xiaomi.png");
 $celular18->agregarDes($carac1);
 $celular18->agregarDes($carac2);
 $celular18->agregarDes($carac3);
 $celular18->agregarDes($carac4);
 $celular18->agregarDes($carac5);

 $celular19=new Celular();
 $celular19->setNombre("Xiaomi-9");
 $celular19->setId("19");
 $celular19->setUrl("Imagenes/Celulares/cel9-xiaomi.png");
 $celular19->agregarDes($carac1);
 $celular19->agregarDes($carac2);
 $celular19->agregarDes($carac3);
 $celular19->agregarDes($carac4);
 $celular19->agregarDes($carac5);

 $celular20=new Celular();
 $celular20->setNombre("Xiaomi-10");
 $celular20->setId("20");
 $celular20->setUrl("Imagenes/Celulares/cel10-xiaomi.png");
 $celular20->agregarDes($carac1);
 $celular20->agregarDes($carac2);
 $celular20->agregarDes($carac3);
 $celular20->agregarDes($carac4);
 $celular20->agregarDes($carac5);









?>