

/*
Julian Trasar Div E
EJ switch 7
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/ 
function mostrar()
{
	
	//declaramos variables
	var destino;
	var mensaje;

	//tomamos por id
	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
		 mensaje = "Bariloche se encuentra en el Sur";
		 break;
		case "Cataratas":
		 mensaje = "Cataratas se encuentra en Norte";
		 break;
		case "Mar del plata":
		 mensaje = "Mar del plata se encuentra Este";
		 break;
		case "Ushuaia":
		  mensaje = "Ushuaia se ecuentra en el norte";
		  break;

	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN