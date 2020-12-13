
class Pakiman                                              //Clase
{
  constructor(n,v,a)
  {
  this.imagen = new Image();                               //Crea una nueva imagen
  this.nombre = n;                                         //Nombre del Pakiman
  this.vida = v;                                           //Vida del Pakiman
  this.ataque = a;                                         //Ataque del Pakiman
  this.imagen.src = imagenes[this.nombre];                 //Ruta de la imagen
  }

  hablar()
  {
    alert(this.nombre);                                    //grito del Pakiman
  }

  mostrar()
  {
    document.body.appendChild (this.imagen);                //imagen
    document.write ("<br /><strong>" + this.nombre + "</strong> <br />"); //Nombre y lo toma del objeto del array
    document.write ("Vida: " + this.vida +"<br />");                      //vida y lo toma del objeto del array
    document.write ("Ataque: " + this.ataque +"<hr />");                   //ataque y lo toma del objeto del array
  }
}
