/*
Julian Trasar Div E
Ejercicio if 1
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
function mostrar()
*/
  function mostrar()
{
	//declaramos las variables 
	let edad;

	//tomamos datos
	edad = document.getElementById("txtIdEdad").value;
    
	//parseamos edad
	edad = parseInt(edad);
    
	
	if(edad == 15)
    {

      alert("Niña bonita");
    }

}