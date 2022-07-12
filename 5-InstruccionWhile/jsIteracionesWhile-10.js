/*

Julian Trasar Div E
EJ while 10

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadPositvos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadNumerosPares=0;
	var promedioPositivos=0;
	var promedioNegativos=0;
	var diferencia; 

	respuesta="si";

	while(respuesta=="si")
	{
		
		respuesta=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

	    if(numeroIngresado<0)
	    {
	    	sumaNegativos=sumaNegativos + numeroIngresado;  
          	cantidadNegativos =cantidadNegativos +1;
	    }
	    else
	    {
           if(numeroIngresado>0)
           {
           	sumaPositivos=sumaPositivos + numeroIngresado;
           	cantidadPositvos=cantidadPositvos +1;
           }
           else
           {
           	cantidadCeros = cantidadCeros + 1;
           }
	    }
	    

        if(numeroIngresado % 2 == 0)//para saber los pares
        {
        	cantidadNumerosPares = cantidadNumerosPares +1; //se cuanto numeros pares hay
        }

        respuesta=prompt("desea continuar? si/no");

        while(!(respuesta =="si"|| respuesta=="no"))
        {
        	respuesta=prompt("Error, desea continuar");
        	respuesta= repuesta.toLowerCase();
        }
	}
	if(cantidadPositvos>0)
	{
		promedioPositivos=promedioPositivos/cantidadPositvos;

	}
	if(cantidadNegativos>0)
	{
		promedioNegativos=promedioNegativos/cantidadNegativos;
	}

	diferencia=sumaPositivos+sumaNegativos;

	document.write("la suma de negativos es : " + sumaNegativos + "<br>");
	document.write("la suma de positivos es: " + sumaPositivos + "<br>");
	document.write("la cantidad de numeros positivos es : " + cantidadPositvos + "<br>");
	document.write("la cantidad de numeros negativo es : " + cantidadNegativos + "<br>");
	document.write("la cantidad de numeros negativos es : " + cantidadCeros + "<br>");
	document.write("la cantidad de numeros pares es : " + cantidadNumerosPares + "<br>");
	document.write("la diferencia entre numeros positivos y negativos es : " + diferencia + "<br>");


}//FIN DE LA FUNCIÓN