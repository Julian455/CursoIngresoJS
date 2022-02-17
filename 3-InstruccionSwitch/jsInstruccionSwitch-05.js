/*
Julian Trasar Div E
EJ switch 5
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".

*/

function mostrar()
{
	//declaramos variables
	var hora;
	var mensaje

	//tomamos por id
	hora = document.getElementById("txtIdHora").value;

	//parseamos
	hora=parseInt(hora)

	//usamos switch
	switch(hora)
	{
      case 7:
        mensaje = "es de mañana";
        break;
      case 8:
       mensaje = "es de mañana";
        break; 
      case 9:
       mensaje = "es de mañana";
       break;
       case 10:
        mensaje = "es de mañana";
        break;
       case 11:
        mensaje = "es de mañana";
        break;
      

	}

	alert(mensaje);
		



}
//FIN DE LA FUNCIÓN