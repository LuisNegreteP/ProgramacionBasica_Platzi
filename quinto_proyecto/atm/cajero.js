class Billete                        //clase que genera los objetos/billetes
{
  constructor(v, c)
  {
    this.valor = v;                  //Agrega la característica valor del billete
    this.cantidad = c;               //Agrega la cantidad de billetes disponibles
  }
}

function entregarDinero()
{
  var t=document.getElementById('dinero');
  dinero = parseInt (t.value);       //Obtiene el valor del cuadro de texto y lo convierte a un entero númerico
  for (var bi of caja)               //Itera cada billete de x denominación a través del número en el array(arreglo)
  {
    if(dinero > 0)                   //Condición para cuando se hayan dispuesto el número de billetes de x denominaciones hasta alcanzar el dinero solicitado
    {

      div = Math.floor(dinero / bi.valor);  //Divide el dinero entre el valor del billete correspondiente del array y lo redondea hacía abajo
      if( div > bi.cantidad)       //Decide si se guarda la cantidad de billetes de div o de bi.cantidad
      {
        papeles = bi.cantidad;    //Guarda la cantidad de billetes correspondientes
      }
      else
        {
          papeles = div;         //Guarda la cantidad de billetes correspondientes x2
        }

        entregado.push (new Billete(bi.valor, papeles));          //Guarda la cantidad de billetes y la denominación em el array entrega hasta llegar al dinero solicitado
        dinero = dinero - (bi.valor * papeles);                  //le resta al dinero total lo billetes que ya se guardaron (monto)
      }
    }

    if (dinero > 0)                                              //Si la cantidad exigida es mayor a la disponible en el cajero, entonces manda un mensaje
    {
     resultado.innerHTML = "Soy un cajero pobre y no tengo dinero :c";
    }
    else
      {
        for (var e of entregado)                                  //Itera la cantidad y el valor del billete por un array
        {
          if (e.cantidad > 0)                                    //Muestra solo los billetes usados
          {
          resultado.innerHTML += e.cantidad + " billetes de  $ " + e.valor + "<br />";   //Muestra solo los billetes usados x2
        }
      }
    }
    console.log(entregado);                                     //Mensaje en consola para ver la denominación y cantidad de billetes entregados
  }


var caja = [];                           //arreglo para agregar billetes de diferente denominación y su cantidad en papel
var entregado = [];                      //arreglo que entrega los billetes al final
caja.push( new Billete (100, 5) );
caja.push( new Billete (50, 10) );
caja.push( new Billete (20, 30) );
caja.push( new Billete (10, 10) );
caja.push( new Billete (5, 5) );

var dinero;                       //El dinero que el usuario pide
var div = 0;                            //Divisón
var papeles = 0;                        //Número de billetes de x denominación a entregrar

var resultado = document.getElementById('resultado');
var b = document.getElementById('extraer');     //Obtiene el elemento Extraer a través de su ID
b.addEventListener("click", entregarDinero)     //Agrega un escuchador para que al hacer click al botón, llame a la función correpondiente
