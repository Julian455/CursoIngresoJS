/*
Julian Trasar Div E
Ejercicio if 4
Al ingresar una edad debemos informar si la persona es adolescente, 
edad entre 13 y 17 años (inclusive) .
*/

function mostrar()
	{
	
		//declaramos variables
		let edad;

		//traemos pir id
		edad = document.getElementById("txtIdEdad").value;

		//parseamos
		edad=parseInt(edad);

		if(edad>=13 && edad <=17)

		{

           console.log("Usted es adolecente");
		}

		
   } 

    