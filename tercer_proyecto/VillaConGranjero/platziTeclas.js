var vp = document.getElementById('villaplatzi'); //Obtiene el elemento por el ID
var papel = vp.getContext("2d");                 //Obtiene el contexto 2D del canvas

document.addEventListener("keyup", moverTeclado); //Agrega un listener para el evento keyup y que función mandará a llamar

var fondo = {                             //Variable fondo donde se guarda la url de la imagen y una variable para saber si ya esta cargada y desplegarla
  url:"tile.png",
  cargaOk: false
};

var vaca = {                             //Variable vaca donde se guarda la url de la imagen y una variable para saber si ya esta cargada y desplegarla
  url:"vaca.png",
  cargaOk: false
};

var cerdo = {                            //Variable cerdo donde se guarda la url de la imagen y una variable para saber si ya esta cargada y desplegarla
  url:"cerdo.png",
  cargaOk: false
};

var pollo = {                            //Variable pollo donde se guarda la url de la imagen y una variable para saber si ya esta cargada y desplegarla
  url:"pollo.png",
  cargaOk: false
};

var niña = {                             //Variable niña donde se guarda la url de la imagen y una variable para saber si ya esta cargada y desplegarla
  url:"niña.png",
  cargaOk: false
};

var cantidad_1 = aleatorio(1,8);       //Genera un número aleatoria entre 1 y 8, lo guarda en la variable
var cantidad_2 = aleatorio(1,5);      //Genera un número aleatoria entre 1 y 5, lo guarda en la variable
var cantidad_3 = aleatorio(1,3);       //Genera un número aleatoria entre 1 y 3, lo guarda en la variable


fondo.image = new Image();
fondo.image.src = fondo.url;
fondo.image.addEventListener("load", cargarFondo);

vaca.image = new Image();
vaca.image.src = vaca.url;
vaca.image.addEventListener("load", cargarVacas);

pollo.image = new Image();
pollo.image.src = pollo.url;
pollo.image.addEventListener("load", cargarPollos);

cerdo.image = new Image();
cerdo.image.src = cerdo.url;
cerdo.image.addEventListener("load", cargarCerdos);

niña.image = new Image();
niña.image.src = niña.url;
niña.image.addEventListener("load", cargarNiña);

var xNiña=0;
var yNiña=0;
var xVaca = new Array();
var yVaca = new Array();
var xPollo = new Array();
var yPollo = new Array();
var xCerdo = new Array();
var yCerdo = new Array();

function moverTeclado(evento){

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
  };

  var movimiento=20;

switch (evento.keyCode)
  {
  case keyCode = teclas.UP:
    yNiña = yNiña - movimiento;
    cargarNiña();
   break;

  case keyCode = teclas.DOWN:
  yNiña = yNiña + movimiento;
  cargarNiña();
   break;

   case keyCode = teclas.LEFT:
   xNiña = xNiña - movimiento;
   cargarNiña();
   break;

   case keyCode = teclas.RIGHT:
   xNiña = xNiña + movimiento;
   cargarNiña();
   break;

  default:
   console.log("Nope");
  }
}

function cargarFondo()
{
 fondo.cargaOk = true;
 dibujar();
}

function cargarVacas()
{
 vaca.cargaOk = true;
 mantenerPosicion();
}

function cargarPollos()
{
 pollo.cargaOk = true;
 mantenerPosicion();
}

function cargarCerdos()
{
 cerdo.cargaOk = true;
 mantenerPosicion();
}

function cargarCerdos()
{
 cerdo.cargaOk = true;
 mantenerPosicion();
}

function cargarNiña()
{
 niña.cargaOk = true;
 dibujar();
}

function mantenerPosicion()
{
  for(var v=0; v < cantidad_1; v++){
  if (vaca.cargaOk){
    var x = aleatorio(0, 7);
    var y = aleatorio(0, 7);
        x = x * 60;
        y = y * 60;
        xVaca [v] = x;
        yVaca [v] = y;
        dibujar();
   }
  }

  for(var p=0; p < cantidad_2; p++){
  if (pollo.cargaOk){
    var x = aleatorio(0, 7);
    var y = aleatorio(0, 7);
        x = x * 60;
        y = y * 60;
        xPollo [p] = x;
        yPollo [p]= y;
        dibujar();
   }
  }

  for(var c=0; c < cantidad_3; c++){
  if (cerdo.cargaOk){
    var x = aleatorio(0, 7);
    var y = aleatorio(0, 7);
        x = x * 60;
        y = y * 60;
        xCerdo [c] = x;
        yCerdo [c]= y;
        dibujar();
}
}
}


function dibujar()
{
  if (fondo.cargaOk){
    papel.drawImage (fondo.image, 0, 0);
  }

if (vaca.cargaOk){
  for(var v = 0; v < cantidad_1; v++){
    papel.drawImage (vaca.image, xVaca[v], yVaca[v]);
   }
  }

if (pollo.cargaOk){
  for(var p=0; p < cantidad_2; p++){
    papel.drawImage (pollo.image, xPollo[p], yPollo[p]);
   }
  }

if (cerdo.cargaOk){
  for(var c=0; c < cantidad_3; c++){
    papel.drawImage (cerdo.image, xCerdo[c], yCerdo[c]);
   }
  }

  if(niña.cargaOk) {
    papel.drawImage (niña.image, xNiña, yNiña);
  }
}


function aleatorio(min, maxi)
{
 var resultado;
 resultado =  Math.floor(Math.random()*(maxi-min+1))+min;
 return resultado;
}
