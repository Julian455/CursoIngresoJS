/*
Julian Trasar Div E
EJ if 6
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).

*/
function mostrar()
{
	//declaramos variables
	var edad;

	//traemos edad por id
	edad = document.getElementById("txtIdEdad").value;

	//parseamos
	edad=parseInt(edad);

	if(edad >= 18)
	{

		alert("usted es mayor de edad");

    }

    else if(edad < 12)

    {

      alert("usted es un nuño");

    }

    else

    {

      alert("usted es un adolescente");

    }
    
     }