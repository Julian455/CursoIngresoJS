/*
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".

*/
function mostrar()
{
    //declaramos variables
    var numeroUno=0;
    var numeroDos=0;
    var numeroConcatenados;
    var mensaje;
    var resta;
    var suma;

    numeroUno=prompt("Ingrese 1 numero");
    numeroDos=prompt("ingrese 1 numero");

         if(numeroUno==numeroDos)
        {
           numeroConcatenados= numeroUno+""+numeroDos;
           mensaje= "Los numeros concatenados son " + numeroConcatenados;

        }
        else if(numeroUno>numeroDos)
        {
           
           resta= numeroUno - numeroDos;
           mensaje= "la resta de esto numeros es " + resta;
          
        }
        else if(numeroUno<numeroDos)
        {
            suma=numeroUno+numeroDos;
            mensaje= "La suma de esto numeros es " + suma;    
        }

        if(suma>10)        
        {
            mensaje= "La suma es " + suma + " y supero el 10 ";
        }
    alert(mensaje);
}
