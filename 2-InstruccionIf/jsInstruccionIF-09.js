/*
Julian Trasar Div E
Ejercicio if 9
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/

function mostrar()
{
	
	let aleatorio = Math.random();
	let enteroAleatorio;

	//Math.floor(aleatorio * (10 - 1 + 1) + 1);

	enteroAleatorio = Math.floor(aleatorio * (10 - 1 + 1) + 1);

	console.log(enteroAleatorio);

}