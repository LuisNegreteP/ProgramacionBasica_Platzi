var teclas = {                                 //Define el código de cada tecla
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

console.log(teclas);                          //Mensaje en consola para ver que hay dentro de la variable

document.addEventListener("keyup", dibujarTeclado);       //Agrega un listener para el evento keyup y que función mandará a llamar

var cuadrito=document.getElementById("area_de_dibujo");  //Obtiene el elemento por su ID
var papel=cuadrito.getContext("2d");                    //Le da el contexto en 2d
var x=150;                                             //Posición inicial que mas tarde sirve como variable para guardar la última posición usada
var y=150;                                             //Posición inicial que mas tarde sirve como variable para guardar la última posición usada


dibujarLinea("red",149,149,151,151, papel);          //Punto central representado en el canvas

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) //función que dibuja líneas
{
  lienzo.beginPath();                        //inicia el trazo
  lienzo.strokeStyle = color;                //Color
  lienzo.moveTo(xinicial,yinicial);          //punto de inicio
  lienzo.lineTo(xfinal, yfinal);             //punto final
  lienzo.stroke();                           //traza la raya
  lienzo.closePath();                        //termina el trazo
}

function dibujarTeclado(evento)            //Función que dibuja Linea con el teclado
{
  var colorcito = "blue"                   //Color línea
  var movimiento = 10;                     //Movimiento en pixeles
 switch (evento.keyCode)                   //Define que flecha se presiona por su código y que hace
 {
   case keyCode = teclas.UP:                                    //Arriba
     dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
     y = y - movimiento;
    break;

   case keyCode = teclas.DOWN:                                   //Abajo
   dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
   y = y + movimiento;
    break;

    case keyCode = teclas.LEFT:                                  //Izquierda
    dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
    x = x - movimiento;
    break;

    case keyCode = teclas.RIGHT:                                //Derecha
    dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
    x = x + movimiento;
    break;

   default:
    console.log("Nope");                                        //Cuando se presiona otra tecla que no sean las flechas
 }
}
