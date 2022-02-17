/*
Julian Trasar Div E
EJ switch 4
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

function mostrar()
{
	//declaramos variables
	var mes;
	var mensaje;

	//tomamos mes por id
	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		  mensaje = "Este mes tiene 31 dias";
		  break;

	    case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		 mensaje = "Este mes tiene 30 dias";
		 break;

		
		  default:
		   mensaje = "Este mes tiene 28 dias";

		   
	}
	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN