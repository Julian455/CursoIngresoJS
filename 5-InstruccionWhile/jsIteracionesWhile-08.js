/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta == "si")
	{
		numeroIngresado =prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado >=0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
			}
		else
			{
				multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
			}

      respuesta=prompt("Quiere seguir ingresando numeros?");
	  

	  while(!(respuesta == "si" || respuesta == "no"))
	  		{
		  		respuesta = prompt("Error . quiere seguir ingrsando numeros? (si o no)"); //respuesta
		
	 	    }
	 
	}


	txtIdSuma.value=sumaPositivos;  
	txtIdProducto.value=multiplicacionNegativos; 

}//FIN DE LA FUNCIÓN