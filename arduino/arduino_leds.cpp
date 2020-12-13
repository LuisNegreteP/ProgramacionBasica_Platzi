int amarillo = 13;                 //Led Amarillo 
int rojo = 7;                      //Led Rojo
int milisegundos = 300;            //Tiempo entre cada led

void setup()                          
{
  pinMode(amarillo, OUTPUT);       // Asigna la salidad para el led
  pinMode(rojo, OUTPUT);           // Asigna la salidad para el led 
}

void loop()
{
  digitalWrite(amarillo, HIGH);   // Encendido led amarillo
  digitalWrite(rojo, LOW);        // Apagado led rojo
  delay(milisegundos);            // Retraso entre cada encendido y apagado
  digitalWrite(amarillo, LOW);    // Apagado led amarillo
  digitalWrite(rojo, HIGH);       // Encendido led rojo
  delay(milisegundos * 2);        // Multiplica por dos el retraso 
}

