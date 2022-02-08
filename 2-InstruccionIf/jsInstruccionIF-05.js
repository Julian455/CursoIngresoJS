/*
Julian Trasar Div E
EJ if 5
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
		alert("usted no es adolecente");
	}
}
//FIN DE LA FUNCIÓN