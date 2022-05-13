/*
Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.

*/
/*function mostrar()
{
 var marca;
 var peso;
 var temperatura;
 var respuesta="si";

 var ContadortemperaturaPar=0;

 var flag=0;
 var pesoMax;
 var marcaMax;
 
 var contadorProducos=0;

 var acumuladorProductos=0;
 var contadorProducosUno=0;
 var promedio;


 var pesoMinimo;
 var flagUno=0;



    do
    {
        marca=prompt("Ingrese marca");

        peso=prompt("Ingrese peso")
        peso=parseInt(peso);
            while(isNaN(peso) || peso<1 || peso>100)
            {
                peso=prompt("Error es entre 1 y 100");
                peso=parseInt(peso);
            }

        temperatura=prompt("Ingrese temepratura");
        temperatura=parseInt(temperatura);
            while(isNaN(temperatura) || temperatura<-30 || temperatura>30)
            {
                temperatura=prompt("Error es entre -30 y 30 grados");
                temperatura=parseInt(temperatura);
            }
        
        //a) La cantidad de temperaturas pares.
        if(temperatura %2 ==0)
        {
           ContadortemperaturaPar=ContadortemperaturaPar + 1;
        }

        //b) La marca del producto más pesado
        //f) El peso máximo y el mínimo.

        if(flag== 0 || peso>pesoMax)
        {
            pesoMax=peso;
            marcaMax=marca;
            flag=1;
            
        }
        if(flagUno==0 || peso<pesoMinimo)
        {
            pesoMinimo=peso;
            flagUno=1;
        }

        //c) La cantidad de productos que se conservan a menos de 0 grados.
        if(temperatura<0)
        {
            contadorProducos=contadorProducos + 1;
        }

        //d) El promedio del peso de todos los productos.
        acumuladorProductos=acumuladorProductos + peso;
        contadorProducosUno=contadorProducosUno + 1;

        respuesta=prompt("Quiere seguir ingresando datos si o no")
            while(!(respuesta=="si" || respuesta=="no"))
            {
                respuesta=prompt("Error si o no");
            }

    }while(respuesta=="si");

    promedio=acumuladorProductos/contadorProducosUno;

    document.write("La cantidad de temperaturas pares es: " + ContadortemperaturaPar + "<br>");
    document.write("La marca del producto más pesado es: " + marcaMax + "<br>");
    document.write("La cantidad de productos que se conservan a menos de 0 grados es: " + contadorProducos + "<br>");
    document.write("El promedio del peso de todos los productos es: " + promedio + "<br>");
    document.write("El peso maximo es: " + pesoMax + " y peso minomo es: " + pesoMinimo + "<br>");


}
*/

/*
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos,
 una letra y un número entre -100 y 100 (validar) hasta que 
 el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/
function mostrar()
{
    var letra;
    var numero;
    var respuesta="si";
    
    //a) La cantidad de números pares.
    var contadorPares=0;

    //b) La cantidad de números impares.
    var contadorImpares=0;

    //c) La cantidad de ceros.
    //d) El promedio de todos los números positivos ingresados.
    //e) La suma de todos los números negativos.
    var contadorPositivos=0;
    var acumuladorPositivos=0;
    var contadorNegativos=0;
    var acumuladorNegativos=0;
    var contadorCeros=0;
    var promedioPositivos;
    var promedioNegativos;

    //f) El número y la letra del máximo y el mínimo.
    var numeroMax;
    var numeroMinimo;
    var flag=0;
    var flagUno=0;
    var letraMax;
    var letraMinima;

    do
    {
        letra=prompt("Ingrese una letra");
        letra=letra.toLocaleLowerCase();

        numero=prompt("Ingrese numero")
        numero=parseInt(numero);
            while(isNaN(numero) || numero<-100 || numero>100)
            {
                numero=prompt("Error es entre -100 y 100");
                numero=parseInt(numero);
            }
        
        //a) La cantidad de números pares.
        if(numero %2 == 0)
        {
            contadorPares=contadorPares + 1;
        }

        //b) La cantidad de números impares.
        if(numero % 2 ==1)
        {
            contadorImpares=contadorImpares +1;
        }

        if(numero)
        {
            contadorPositivos=contadorPositivos + 1;
            var acumuladorPositivos=acumuladorPositivos + numero;

        }
        else
        {
             if(numero)
            {
                contadorNegativos=contadorNegativos + 1;
                acumuladorNegativos=acumuladorNegativos + numero;
            }
            else
            {
                contadorCeros=contadorCeros + 1;
            }
        }
        
        //f) El número y la letra del máximo y el mínimo.
        if(flag==0 || numero>numeroMax)
        {
            numeroMax=numero;
            letraMax=letra;
            flag=1;
        }
        //f) El número y la letra del máximo y el mínimo.
        if(flagUno==0 || numero<numeroMinimo)
        {
            numeroMinimo=numero;
            letraMinima=letra;
            flagUno=1;
        }

        respuesta=prompt("Quiere seguir ingresando datos si o no");
            while(!(respuesta=="si" || respuesta=="no"))
            {
                respuesta=prompt("Error si o no");
            }
                

    }while(respuesta=="si");

    promedioNegativos=contadorNegativos/acumuladorNegativos;
    promedioPositivos=contadorPositivos/acumuladorPositivos;

    document.write("La cantidad de numeros pares es: " + contadorPares + "<br>");
    document.write("La cantidad de numeros impares es: " + contadorImpares + "<br>");
    document.write("El promedio de numeros positivios es: " + promedioPositivos + "<br>");
    document.write("El promedio de numeros negativos es: " + promedioNegativos + "<br>");
    document.write("La cantidad de ceros es: " + contadorCeros + "<br>");
    document.write("La letra y el numero del minimo es: " + letraMinima +  " y el numero es " + numeroMinimo + "<br>");
    document.write("La letra y el numero del maximo es: " + letraMax + " y el numero es " + numeroMax + "<br>");
}