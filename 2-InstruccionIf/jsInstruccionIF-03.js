/*
 Julian Trasar Div E
 Ejercicio if 3
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
*/
function mostrar()
{
	//declaramos variables
	let edad;
    
    //traemos la edad por id
	edad = document.getElementById("txtIdEdad").value;
    
    //parseamos edad
	edad=parseInt(edad);

	if(edad >= 18)

	{
		alert("usted es mayor de edad"); 
	}

   	 else

    {
   	 
   	 	alert("usted es menor de edad");
    }

}

 