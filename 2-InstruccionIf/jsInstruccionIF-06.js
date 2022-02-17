/*
Julian Trasar Div
6 bis

Ejercicio 6 bis(usar if else):
Al ingresar por prompt una edad debemos informar si
la persona es anciano(mas de 70), mayor de edad (entre 70 y 18 años),
adolescente (entre 13 y 17 años), niño (menor a 13 años), bebe (0 a 3 años).
mostrar por ID el resultado.
*/



function mostrar()
{           
      //declaramos variables					  
			var edad;
			var mensaje;


			//mostramos por prompt
			edad=prompt("Ingrese su edad");

			//parseamos
			edad=parseInt(edad);

			 if(edad >69)
			 {
			 		mensaje = "Usted es un anciano";
			 }
			 else
			 {
				 	if(edad<71 && edad >17)
				 	{
				 		mensaje = "Usted es mayor de edad";
				 	}
				 	else
				 	{
					 		if(edad>12 && edad <18)
						 	{
						 		mensaje = "Usted es adolecente";
						 	}
						 	else
						 	{
						 		if(edad > 3 && edad< 13)
						 		{
						 			mensaje = "Usted es un niño";
						 		}
						 		else
						 		{
                  mensaje = "Es un bebe";
						 		}

				 	 		}
				 	}
				 
				 
				 
			 	}

			 	document.getElementById("txtIdEdad").value = mensaje;



}
			  
 