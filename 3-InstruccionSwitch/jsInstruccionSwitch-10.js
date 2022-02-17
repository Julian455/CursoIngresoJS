/*
Julian Trasar Div E
EJ switch 10

una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche

*/ 

function mostrar()
{
	
  //declaramos variables  
  var estacionAnio;
  var destino;
  var mensaje;

  //tomamos por id 
  estacionAnio = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  switch(estacionAnio)
  {
  	case "Invierno":

  	switch(destino)
  	{
  		case "Bariloche":
  		 mensaje = "Se viaja";
  		 break;
  		default:
  		 mensaje = "No se viaja";
	}
    break;
	case "Verano":

	switch(destino)
	{
		case "Mar del plata":
		 mensaje = "Se viaja";
		 break;
		case "Cataratas":
		 mensaje = "Se viaja";
		 break;
		default:
		 mensaje = "No se viaja"

	} 

	break;
	default:
	mensaje = "Se viaja";

	case "Primavera":

	 switch(destino)
	 {
       case "Bariloche":
        mensaje = "No se viaja";
        break;
        default:
         mensaje = "Se viaja";
	 }


	}
  
  alert(mensaje);

	
		
	
	



}//FIN DE LA FUNCIÓN