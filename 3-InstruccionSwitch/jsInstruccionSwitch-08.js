/*
Julian Trasar Div E
EJ switch 8
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino

*/


function mostrar()
{
	//declaramos variables
	var destino;
	var mensaje

	//tomamos por id
	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
		 mensaje = "En Bariloche hace mucho frio";
		 break;
		case "Cataratas":
		 mensaje = "En Cataratas hace mucho calor";
		 break;
		case "Mar del plata":
		 mensaje = "En Mar del plata hace mucho calor"
		 break;
		case "Ushuaia":
		 mensaje = "En Ushuaia hace mucho frio y calor";
		 break;

	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN