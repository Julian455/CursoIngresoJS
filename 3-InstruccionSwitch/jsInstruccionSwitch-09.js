/*
Julian Trasar Div E
EJ switch 9

una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento


*/

function mostrar()
{
	//declaramos variables
	var estacionAnio;
	var mensaje;
	var lugar;
	var aumento;
	var tarifaBase;
	var tarifaFinal;

	tarifaBase = 15000

	//tomamos por id
	estacionAnio = document.getElementById("txtIdEstacion").value;
	lugar = document.getElementById("txtIdDestino").value;

	switch(estacionAnio)
	{
		case "Invierno":
	

		 switch(lugar)
		 {
		 	case "Bariloche":
		 	 aumento = 20/100;
		 	 break;
		 	case "Cataratas":
		 	 aumento = -10/100;
		 	 break;
		 	case "Cordoba":
		 	 aumento = -10/100;
		 	  break;
		 	 case "Mar del plata":
		 	  aumento = -20/100;
		 	  break;
		 }
		 break; 
		 case "Verano":
		

		 switch(lugar)
		 {
		 	case "Bariloche":
               aumento = -20/100;
		 	 break;
		 	case "Cataratas":
		 	 aumento = -10/100;
		 	case "Cordoba":
		 	 aumento = 10/100;
		 	 break;
		 	case "Mar del plata":
		 	 aumento = 20/100;
		 	 break; 
		 }
         break;
		 default:

		  switch(lugar)

		  {
		  	case "Bariloche":
		  	 aumento = 10/100
		  	 break;
		  	case "Cataratas":
		  	 aumento = 10/100;
		  	 break;
		  	case "Mar del plata":
		  	 aumento = 10/100;
		  	 break;
		  	case "Cordoba":
		  	  aumento = 0;
		  	 break;
		  }
		  break;

		  

	}
 		tarifaFinal = tarifaBase + (tarifaBase * aumento);
		  alert("El precio fina es de : " + tarifaFinal);

}//FIN DE LA FUNCIÓN