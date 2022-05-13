/*
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.


*/function mostrar()
{
  var letra;
  var numero;
  var respuesta="si";

  var contadorPares=0;
  var contadorImpares=0;

  var contadorPositivos=0;
  var acumuladorPositivos=0;
  var contadorNegativos=0;
  var acumuladorNegativos=0;
  var contadorCeros=0;
  var promedioPositivos;
  var sumaNegativos;

  var numeroMaximo;
  var flag=0;
  var letraMax;
  var numeroMax;

    do
    {
        letra=prompt("Ingrese una letra");

        numero=prompt("Ingrese un umero del -100 al 100");
        numero=parseInt(numero);
            while(isNaN(numero) || numero<-100 || numero>100)
            {
                numero=prompt("Error");
                numero=parseInt(numero);
            }


        //a) La cantidad de números pares.
        if(numero % 2 == 0)// va 0 porque si devuelve 0 es par
        {
          contadorPares=contadorPares + 1;
        }


        //b) La cantidad de números impares.
        if(numero % 2 == 1)// va 1 porque si devuelve 1 es impar
        {
          contadorImpares=contadorImpares + 1;
        }

        //d) El promedio de todos los números positivos ingresados.
        //e) La suma de todos los números negativos.
        //c) La cantidad de ceros.

        if(numero)
        {
            acumuladorPositivos=acumuladorPositivos + numero;
            contadorPositivos=contadorPositivos + 1;
        }
        else
        {
            if(numero)
            {
                acumuladorNegativos=acumuladorNegativos + numero;
                contadorNegativos=contadorNegativos + 1;
            }
           else
            {
                contadorCeros=contadorCeros + 1;
            }
        }


        respuesta=prompt("quiere seguir ingresando datos");
         while(!(respuesta=="si" || respuesta=="no"))
         {
             respuesta=prompt("Error");
         }
    }while(respuesta=="si");
}
