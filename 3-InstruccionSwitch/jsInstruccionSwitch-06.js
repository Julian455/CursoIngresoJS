/*
Julian Trasar Div E
EJ switch 6
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".


*/
function mostrar()
{
	//declaramos variables
	var hora;
	var mensaje;

	//tomamos por id
	hora = document.getElementById("txtIdHora").value;

	//parseamos
	hora=parseInt(hora);

	switch(hora)
	{
		case 7:
		 mensaje = "Es de mañana";
		 break;
		case 8:
		 mensaje = "Es de mañana";
		 break;
		case 9:
		 mensaje = "Es de mañana";
		 break;
		case 10:
		 mensaje = "Es de mañana";
		 break;
		case 11:
		 mensaje = "Es de mañana";
		 break;

		 case 0:
		  mensaje = "La hora no existe";
		  break;
		 case 24:
		  mensaje = "La hora no existe";
		  break;

		  default:
		   mensaje = "Es de tarde"
  
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN