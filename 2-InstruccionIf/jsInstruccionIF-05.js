/*
Julian Trasar Div E
Ejercicio if 5
Al ingresar una edad solo debemos informar si la persona NO es adolescente.

*/

function mostrar()
{
	//declaramos variables
	var edad;

	//traemos la edad por id
	edad = document.getElementById("txtIdEdad").value;

	//parseamos
	edad=parseInt(edad);

	if(edad < 12 || edad > 17)

	{
		console.log("usted no es adolecente");
	}
}
