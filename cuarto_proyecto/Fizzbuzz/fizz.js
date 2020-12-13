var numero = 100;                    //Límite superior del ciclo
for(var i=1; i<=100; i++)           //Ciclo
{
  if(i % 3 == 0)                    //Modulo para ver si el número es divisible entre tres y escribir Fizz
  {
  document.write("Fizz");
  }

  if(i % 5 == 0)                   //Modulo para ver si el número es divisible entre cinco y escribir Buzz
  {
  document.write("Buzz");
  }

  if(i % 5 !== 0 && i % 3 !== 0)        //Escribe solo el número si no es divisible entre ninguno de los dos, en caso contrario, escribe Fizz Buzz
  {
  document.write(i);
  }
document.write("<br />");              //Salto de línea
}
