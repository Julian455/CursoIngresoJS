/*
Julian Trasar Div E
EJ if 9
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/

function mostrar()
{
	//creo variable
	var aleatorio = Math.random();
	var enteroAleatorio;

	//Math.floor(aleatorio * (10 - 1 + 1) + 1);

	enteroAleatorio = Math.floor(aleatorio * (10 - 1 + 1) + 1);

	alert(enteroAleatorio);

}//FIN DE LA FUNCIÓN