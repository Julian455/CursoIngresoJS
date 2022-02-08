/*
Julian Trasar Div E
Ej if 2
Al ingresar una edad debemos informar solo si la persona es mayor de edad

*/

function mostrar()
{
	//declaramos variables 
	var edad;

	edad=document.getElementById("txtIdEdad").value;

	edad=parseInt(edad);

	if(edad >= 18)

	{
		alert("usted es mayor de edad");
	}
	

}//FIN DE LA FUNCIÓN