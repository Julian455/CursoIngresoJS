/*
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro el cuadrado del numero.
Si el primero divisible por el segundo, los resto,
de lo contrario muestro solo el resto.
si el resto es mayor a 3(tres ) informarlo por alert.
*/
function mostrar()
{
  var numeros;
  var numeros1;
  var mensaje;
  var suma;
  var resta;
  var cuadrado;

    numeros=prompt("Ingree un numero");
    numeros=parseInt(numeros);
    numeros1=prompt("Ingrese otro numero");
    numeros1=parseInt(numeros1);

    if(numeros==numeros1)
    {
        cuadrado=Math.pow(numeros, numeros1)
        mensaje="El cuadrado del numero es: " + cuadrado;
    }
    else
    {
        if((numeros % numeros1) ==0 )
        {
            resta=numeros- numeros1;
            mensaje="La restas es: " + resta;

            if(mensaje >3)
            {
                mensaje="el resto es mayor a 3"
            }
        }
        else
        {
            suma=numeros + numeros1;
            mensaje="La suma es: " + suma;
           
        }
    }
  

   alert(mensaje);

}
