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
	  public function __construct()
    {
        $this->nombre = " ";
        $this->url = " ";
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
}  
class Celular{
	private $nombre;
 	private $url;
 	private $descripciones;
	public function agregarDes(Descripcion $d)
	{	
		if ($d instanceof Descripcion)
		{
			$this->descripciones=$d;
		}
	}	
}
class Descripcion
{
	private $url;

}

$carru1=new Carrusel();
$mar1=new Marca();
$mar1->setNombre("Huawei");
$mar1->setUrlM("Imagenes/Marcas/logo-huawei.png");
$cel1=new Celular();
$car1=new Descripcion();
$car2=new Descripcion();
$cel1->agregarDes($car1);
$cel1->agregarDes($car2);
$mar1->agregarCel($cel1);
$carru1->agregarM($mar1);
echo "mi nombre es ";
echo "mi imagen esta ";
?>