/*
Julian Trasar Div E
EJ if 7
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
 mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'

*/
function mostrar()
{
	//declaramos luna variable
	var estadoCivil;
	var edad;
    
    //traemos todo por id
	estadoCivil=document.getElementById("estadoCivil").value;
	edad = document.getElementById("txtIdEdad").value;
    
    //parseamos
	edad=parseInt(edad);



	if(edad < 18 && estadoCivil != "Soltero")

	{
		alert("Es muy pequeño para No ser soltero");
	}



	

	

}//FIN DE LA FUNCIÓN