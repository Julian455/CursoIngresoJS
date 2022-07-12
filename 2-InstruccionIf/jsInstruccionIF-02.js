/*
Julian Trasar Div E
Ejercico if 2
Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/
function mostrar()
{
	//declaramos variables 
	let edad;
    
	//tomamos datos
	edad=document.getElementById("txtIdEdad").value;
    
	//parseamos
	edad=parseInt(edad);

	if(edad >= 18)

	{
		alert("usted es mayor de edad");
	}
	

}