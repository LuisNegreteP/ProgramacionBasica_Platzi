var texto = document.getElementById('texto_lineas');  //obtiene el elemento texto_lineas por el Id
var boton = document.getElementById('botoncito');    //obtiene el elemento botoncito por el Id
boton.addEventListener("click", dibujoPorClick);    //detecta el evento click y define que función se llevará a cabo con ello

var d = document.getElementById('dibujito'); //Obtiene el elemento dibujito por el Id
var ancho= d.width;                          //Obtiene el ancho del canvas
var lienzo=d.getContext("2d");               //obtiene el contexto, en esta ocasión 2d


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) //función que dibuja líneas
{
  lienzo.beginPath();                        //inicia el trazo
  lienzo.strokeStyle = color;                //Color
  lienzo.moveTo(xinicial,yinicial);          //punto de inicio
  lienzo.lineTo(xfinal, yfinal);             //punto final
  lienzo.stroke();                           //traza la raya
  lienzo.closePath();                        //termina el trazo
}

function dibujoPorClick ()                       //Función para dibujar líneas cuando el usuario escriba el número deseado de ellas
{
  var lineas= parseInt(texto.value);            //límite de lineas
  var l=0;                                     //variable que sirve como contador
  var yi, xf;                                  //posiciones de y inicial; x final
  var colorcito = "#FAA";                      //color de las líneas

  var espacio = ancho/lineas;                  //define el espacio para dibujar las líneas
  for(l=0; l < lineas; l++)                    //ciclo para dibujar lineas
  {
    yi = espacio*l;                                 // multiplicación por l
    xf = espacio*(l+1);                             // suma uno mas al valor inicial de l
    dibujarLinea(colorcito, 0, yi, xf, 300);   // llama a la función para hacer las líneas
    console.log("Línea" + l);                  // Registro de las sumas en consola
  }

  dibujarLinea(colorcito, 1,1,1,299);            //borde izquierdo
  dibujarLinea(colorcito, 1,299,299,299);        //borde inferior
  dibujarLinea(colorcito, 299,299,299,1);        //borde derecho
  dibujarLinea(colorcito, 299,1,1,1);            //borde superior
}
