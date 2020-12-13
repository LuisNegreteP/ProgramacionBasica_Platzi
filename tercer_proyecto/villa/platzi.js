var vp = document.getElementById('villaplatzi'); //Obtiene el elemento por el ID
var papel = vp.getContext("2d");                //Obtiene el contexto 2D del canvas


var fondo = {                                  //Variable fondo donde se guarda la url de la imagen y una variable para saber si ya esta cargada y desplegarla
  url:"tile.png",
  cargaOk: false
};

var vaca = {                                   //Variable vaca donde se guarda la url de la imagen y una variable para saber si ya esta cargada y desplegarla
  url:"vaca.png",
  cargaOk: false
};

var cerdo = {                                   //Variable cerdo donde se guarda la url de la imagen y una variable para saber si ya esta cargada y desplegarla
  url:"cerdo.png",
  cargaOk: false
};

var pollo = {                                 //Variable pollo donde se guarda la url de la imagen y una variable para saber si ya esta cargada y desplegarla
  url:"pollo.png",
  cargaOk: false
};

var cantidad_1 = aleatorio(1,8);     //Genera un número aleatoria entre 1 y 8, lo guarda en la variable
var cantidad_2 = aleatorio(1,5);     //Genera un número aleatoria entre 1 y 5, lo guarda en la variable
var cantidad_3 = aleatorio(1,3);     //Genera un número aleatoria entre 1 y 3, lo guarda en la variable

fondo.image = new Image();               //Crea una nueva imagen
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

function cargarFondo()
{
 fondo.cargaOk = true;
 dibujar();
}

function cargarVacas()
{
 vaca.cargaOk = true;
 dibujar();
}

function cargarPollos()
{
 pollo.cargaOk = true;
 dibujar();
}

function cargarCerdos()
{
 cerdo.cargaOk = true;
 dibujar();
}


function dibujar()
{
  if (fondo.cargaOk){
    papel.drawImage (fondo.image, 0, 0);
  }

  for(var v=0; v < cantidad_1; v++){
  if (vaca.cargaOk){
    var x = aleatorio(0, 7);
    var y = aleatorio(0, 7);
        x = x * 60;
        y = y * 60;
    papel.drawImage (vaca.image, x, y);
   }
  }

  for(var p=0; p < cantidad_2; p++){
  if (pollo.cargaOk){
    var x = aleatorio(0, 7);
    var y = aleatorio(0, 7);
        x = x * 60;
        y = y * 60;
    papel.drawImage (pollo.image, x, y);
   }
  }

  for(var c=0; c < cantidad_3; c++){
  if (cerdo.cargaOk){
    var x = aleatorio(0, 7);
    var y = aleatorio(0, 7);
        x = x * 60;
        y = y * 60;
    papel.drawImage (cerdo.image, x, y);
   }
  }
}


function aleatorio(min, maxi)
{
 var resultado;
 resultado =  Math.floor(Math.random()*(maxi-min+1))+min;
 return resultado;
}
