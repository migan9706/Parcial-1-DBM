<?php

 interface Observer {
  
  public function update(float $humidity,float $presure,float $temperature);
  
  
 }

  interface Subject {
   public function registrerObserver(Observer $obs);
   public function notifyObserver();
   public function removeObserver(Observer $obs);
  }

  class WheatherData implements Subject {
  private   $humidity;
  private   $temperature;
  private   $presure;
  private $Observers =  array();
    

   public function registrerObserver(Observer $obs){
     if ($obs instanceof Observer) {
            $this->Observers[]=$obs;
          
        }
   }
   public function notifyObserver(){
    $max= count($this->Observers);
    
   for ($i=0; $i < $max; $i++) { 
     $this->Observers[$i]->update($this->humidity,$this->presure,$this->temperature);
   }
    
   }
   public function removeObserver(Observer $obs){
      $max= count($this->Observers);
      $i=0;
      $ban=false;
      while ( $i<$max && $ban!=true) {
        if($this->Observers[$i]==$obs)
        {
          unset($this->Observers[$i]); 
          echo "eliminado";
          $ban=true;
        }
        
        $i++;
      }
    
  }
  public function measurementsChanges()
  {
    $this->notifyObserver();
  }
  public function setMeasurementsChanges(float $h,float $p,float $t)
  {
      $this->humidity=$h;
      $this->presure=$p;
      $this->temperature=$t;
      $this->measurementsChanges();
  }
   public  function GetHumidity(){
    return $humidity;
   }
   public  function GetTemperature(){
    return $temperature;
   }
   public  function GetPresure(){
    return $presure;
   }

   public  function SetHumidity(float $h){
    $humidity=$h;
   }
   public  function SetTemperature(float $t){
    $temperature=$t;
   }
   public  function SetPresure(float $s){
     $presure=$s;
   }
    
  }
  interface DisplayElement
  {
    public function Display();
  }
  class StaticsDisplay implements Observer,DisplayElement{
      
     public function update(float $hum,float $pre,float $tem)
    {
        
    }
   public function Display()
   {

   }
}
class CurrentConditions implements Observer,DisplayElement{
      
     public function update(float $hum,float $pre,float $tem)
    {
        
    }
   public function Display()
   {
      echo "<br>";
        echo "Soy CurrentConditions";
        echo "<br>";
        echo "La presión  es de ";
        echo  $pre;
        echo "<br>";
   }
}
class ThirdPartyDisplay implements Observer,DisplayElement{
      
     public function update(float $hum,float $pre,float $tem)
    {
        echo "<br>";
        echo "Soy ThirdPartyDisplay";
        echo "<br>";
        echo "La temperatura es de ";
        echo  $tem;
        echo "<br>";

    }
   public function Display()
   {

   }
}

class ForecasDisplay implements Observer,DisplayElement{
     
  
     public function update(float $hum,float $pre,float $tem)
    {
        echo "<br>";
        echo "Soy ForecasDisplay";
        echo "<br>";
        echo "Esta es la humedad";
        echo  $hum;
        echo "<br>";
    }
  
   public function Display()
   {

   }
}

  $hola=new WheatherData;
  $x= new ThirdPartyDisplay;
  $x1= new ForecasDisplay;
  $x3=new CurrentConditions;
  $hola->registrerObserver($x1);
  $hola->registrerObserver($x);
  $hola->registrerObserver($x3);
  $hola->setMeasurementsChanges(10,20,30);
  $hola->setMeasurementsChanges(15,25,33);
  
?>
