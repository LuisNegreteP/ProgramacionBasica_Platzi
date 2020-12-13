var imagenes = [];                           //arreglo para guardar el nombre y la dirección de la imagen
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];                                  //arreglo para guardar los pakiman existentes y sus características
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for (var pakin of coleccion)                       //Muestra todos los pakiman y sus imagenes
{
pakin.mostrar();
}

for (var x in coleccion[0])                       //Muestra en la consola los elmentos de la clase
{
console.log(x);
}
