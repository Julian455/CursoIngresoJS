/*
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
*/
function mostrar()
{
    var numero1;
    var numero2;
    var mensaje;

    numero1=prompt("Ingrese numero")
    numero1=parseInt(numero1);
    numero2=prompt("Ingrese otro numero");
    numero2=parseInt(numero2);

    if(numero1==numero2)
    {
       mensaje=numero1+""+numero2;
       mensaje="Los numeros concatenado son: " + mensaje;
    }
    else 
    {
        if(numero1>numero2)
        {
            mensaje=numero1-numero2
           
            if(mensaje>10)
            {
               mensaje="la resta es " + mensaje + " y supero el 10";
            }
            else
            {
                mensaje="La resta es: " + mensaje;
            }
        
        }
        if(numero2>numero1)
        {
            mensaje=numero1+numero2;
            mensaje="La sumas es: " + mensaje;
        }
    }
    

    alert(mensaje);



}
