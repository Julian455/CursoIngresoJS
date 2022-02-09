/*
Julian Trasar Div E
EJ if 8
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 
'Es soltero y no es menor.'

*/


function mostrar()
{
  
  //declaramos variables
  var edad;
  var estadoCivil;

 	 //traemos todo por id
  	edad = document.getElementById("txtIdEdad").value;

	estadoCivil = document.getElementById("estadoCivil").value;

	//parseamo
	edad=parseInt(edad);

	if(edad >= 18 && estadoCivil == "Soltero")

	{
		alert("Es soltero y no es menor");

	}




}//FIN DE LA FUNCIÓN