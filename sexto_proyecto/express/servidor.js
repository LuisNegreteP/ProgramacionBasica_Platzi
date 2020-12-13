var express = require("express");
var aplicacion = express();

aplicacion.get("/", inicio);                      //direción(url) para inicio
aplicacion.get("/cursos", cursos);               //dirección(url) para cursos

function inicio(peticion, resultado)            //Lo que muestra la página
{
  resultado.send("Este es el <strong> home </strongh>");
}

function cursos(peticion, resultado)           //Lo que muestra la página x2
{
  resultado.send("Estos son los <strong> cursos </strongh>");
}

aplicacion.listen(8989);                      //Puerto que usa para mostrar los datos
