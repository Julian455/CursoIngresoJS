/*
 Julian Trasar Div E
 EJ if 3
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
*/
function mostrar()
{
	//declaramos variables
	var edad;
    
    //traemos la edad por id
	edad = document.getElementById("txtIdEdad").value;
    
    //parseamos edad
	edad=parseInt(edad);

	if(edad >= 18) //edad>17

	{
		alert("usted es mayor de edad"); //dondicion verdadera o falsa;

	}

   	 else //usamos el else 

    {
   	 
   	 	alert("usted es menor de edad");
    }


   	 	alert("fin");

 	}

  //fin de la funcion