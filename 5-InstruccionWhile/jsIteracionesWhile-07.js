/*
Julian Trasar Div E
EJ while 7
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
/*function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta == "si")
	{
		numeroIngresado =prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;	
		contador = contador + 1;


      respuesta=prompt("Quiere seguir ingresando numeros?");
	  

	  while(!(respuesta == "si" || respuesta == "no"))
	  {
		  respuesta = prompt("Error . quiere seguir ingrsando numeros? (si o no)"); 
		
	  }
	 
	} 


	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador; 


}//FIN DE LA FUNCIÓN
*/


/*
Realizar el algoritmo que permita 
	el ingreso por prompt de
	1-alturas en centimetros	(validar entre 0 y 250) ,
	2-la edad (validar)
	3-temperatura(validar)
	4-el sexo(validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre
	de estudiantes de la UTN hasta que el usuario quiera, 
	parte 1:
	informar :
	a)Cuántas mujeres hay .
	b)Cuántos con fiebre y cuantos sin fiebre.
	c)el promedio de edad por sexo.

*/
 function mostrar()
 {
 	//declaramos variables
 	var alturaIngresada;
 	var edadIngresada;
 	var temperatura;
 	var sexoIngresado;
 	var notaIngresada;
 	var nombreIngresado;
 	var respuesta="si";
 	var contadorCantidadMujeres=0;
 	var acumuladorCantidadMujeres=0;
 	var temperaturaFiebre;

 	while(respuesta="si")
 	{
 		alturaIngresada=prompt("Ingrese su altura")
 		alturaIngresada=parseInt(alturaIngresada);

 		while(alturaIngresada>0 || alturaIngresada<250)
 		{
 			alturaIngresada=prompt("Errro , vuelta a ingresa su altura");
 			alturaIngresada=parseInt(alturaIngresada);
 		}

 		edadIngresada=prompt("Ingrese su edad")
 		edadIngresada=parseInt(edadIngresada);

 		while(edadIngresada>=18 && edadIngresada<=65)
 		{
 			edadIngresada=prompt("Error vulva a ingresa su edad");
 			edadIngresada=parseInt(edadIngresada);
 		}

 		temperatura=prompt("Ingrese su temperatura");
 		temperatura=parseInt(temperatura);

 		while(temperatura>=32 && temperatura>=43)
 		{
 			temperatura=prompt("Error eso datos lo son vallidos , reingrese su temperatura");
 			temperatura=parseInt(temperatura);
 		}

 		sexoIngresado=prompt("Ingrese f o m o nb")

 		while(!(sexoIngresado== "f" || sexoIngresado== "m" || sexoIngresado== "nb"))
 		{
 			sexoIngresado=prompt("Error , vuelva a reingresar los datos pedidos")
 		}

        notaIngresada=prompt("Ingrese nota")
        notaIngresada=parseInt(notaIngresada);

 		nombreIngresado=prompt("Ingrese su nombre");
 		

 		respuesta=prompt("Quiere seguir ingresando nombres? si/no")
 		while(!(respuesta=="si" || respuesta=="no"))
 		{
 			respuesta=prompt("Error, si o no")
 		}
 	}

 	switch(sexoIngresado)
 	{
 		case "f"
 		contadorCantidadMujeres++;
 		acumuladorCantidadMujeres=acumuladorCantidadMujeres + sexoIngresado;
 		break;
 	}

 	if(temperaturaFiebre>35)
 	{
       temperaturaFiebre=numeroIngresado;
 	}


 }


