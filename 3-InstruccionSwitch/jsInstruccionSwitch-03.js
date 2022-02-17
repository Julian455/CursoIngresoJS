/*
Julian Trasar Div E
EJ switch 3
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/



function mostrar()
{
	//declaramos variables
	var mes;
	var mensaje;

	//tomamos datos por id
	mes = document.getElementById("txtIdMes").value;

	
	switch(mes)
	{
		case "Febrero":
		  mensaje = " Este mes no tiene más de 29 días.";
		  break;

		  default:
		    mensaje = "Este mes tiene 30 o más días"


	}

	alert(mensaje);
	
	


}//FIN DE LA FUNCIÓN