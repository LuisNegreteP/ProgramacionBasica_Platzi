document.addEventListener("mousedown", dibujarActivado);          //Cuando se queda el mouse presionado
document.addEventListener("mouseup", dibujarDesactivado);         //Cuando se quita la presión del mouse
document.addEventListener("mousemove", dibujarMouse);             //Cuando se mueve el mouse por el canvas


var cuadrito = document.getElementById("area_de_dibujo");         //Obtiene el elemento area_de_dibujo por el ID
var papel = cuadrito.getContext("2d");                            //Obtiene el contexto 2D del canvas
var colorcito = "blue";                                           //color de la línea
var estado = 0;                                                   //Estado que diferencia entre el mouse presionado y no presionado
var x;                                                            //Guarda la coordenada x
var y;                                                            //Guarda la coordenada y

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) //función que dibuja líneas
{
  lienzo.beginPath();                        //inicia el trazo
  lienzo.strokeStyle = color;                //Color
  lienzo.moveTo(xinicial,yinicial);          //punto de inicio
  lienzo.lineTo(xfinal, yfinal);             //punto final
  lienzo.stroke();                           //traza la raya
  lienzo.closePath();                        //termina el trazo
}

dibujarLinea(colorcito, 1,1,1,299, papel);            //borde izquierdo
dibujarLinea(colorcito, 1,299,299,299, papel);        //borde inferior
dibujarLinea(colorcito, 299,299,299,1, papel);        //borde derecho
dibujarLinea(colorcito, 299,1,1,1, papel);            //borde superior

function dibujarActivado(evento)
{
  estado=1;                                           //Cambia el estado del mouse a presionado
  x = evento.layerX;                                  //Actualiza la coordenada x y la guarda
  y = evento.layerY;                                  //Actualiza la coordenada y y la guarda
}

function dibujarDesactivado(evento)
{
  estado=0;                                            //Cambia el estado del mouse a no presionado
  x = evento.layerX;                                   //Actualiza la coordenada x y la guarda
  y = evento.layerY;                                   //Actualiza la coordenada y y la guarda
}

function dibujarMouse(evento)
{
  if(estado==1)                                        //Evalua el estado del mouse para dibujar o no
  {
    dibujarLinea(colorcito, x, y, evento.layerX, evento.layerY, papel);     //llama a la función dibujarLinea
  }
  x = evento.layerX;                                   //Actualiza la coordenada x y la guarda
  y = evento.layerY;                                   //Actualiza la coordenada y y la guarda
}
