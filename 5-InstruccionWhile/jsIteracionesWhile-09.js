/*
Julian Trasar Div E
EJ while 9
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var repuesta;
	var numeroMaximo;
	var numeroMinimo;
	var ingresoPrimerNumero;

	 respuesta = "si";
	 ingresoPrimerNumero=false;//bandera o flag 

	 numeroMaximo=1000;
	 numeroMinimo=-1000;

	 while(respuesta=="si")
	 {
		 do
		 {
		   numeroIngresado= prompt("Ingrese un numero");
		   numeroIngresado=parseInt(numeroIngresado);
		 }
		 while(isNaN(numeroIngresado)==true);

		 if(numeroMaximo<numeroIngresado || ingresoPrimerNumero == false)
		 	{
                numeroMaximo=numeroIngresado;//guardo
		 	}
			 if(numeroMinimo>numeroIngresado || ingresoPrimerNumero == false)
			 {
				 numeroMinimo=numeroIngresado;//guardo
				 ingresoPrimerNumero==true;
			 }

		respuesta = prompt("Desea seguir ingresando numeros? si/no");
	 }

	document.write("el numero es :" + numeroMaximo + "<br>");
	document.write("el numero es :" + numeroMinimo + "<br>");

}//FIN DE LA FUNCIÓN
 



/*function mostrar()
{	// declarar variables
	
	//var banderaDelPrimero;
	var numeroIngresado;
	var respuesta;
	var numeroMaximo;
	var numeroMinimo;
	var ingresoPrimerNumero;

	respuesta="si";
	ingresoPrimerNumero=false;//bandera o flag

	numeroMinimo;
	numeroMaximo;

	while(respuesta == "si")
	{
		do
		{
			numeroIngresado=prompt("Ingrese un numero");
			numeroIngresado=parseInt(numeroIngresado);
		
		}while(isNaN(numeroIngresado)==true);
		

		
		if(numeroMaximo<numeroIngresado || ingresoPrimerNumero == false)
		{	
			numeroMaximo=numeroIngresado;	
		}
		
		if(numeroMinimo>numeroIngresado || ingresoPrimerNumero==false)
		{   
			numeroMinimo=numeroIngresado;
			ingresoPrimerNumero=true;//bajo la bandera
		}
		

		respuesta = prompt("desea continuar ingresando numeros?si/no");
	}

	document.write("el numero maximo es: " + numeroMaximo + "<br>");
	document.write("el numero minimo es: " + numeroMinimo + "<br>");

	

	
}//FIN DE LA FUNCIÓN

*/