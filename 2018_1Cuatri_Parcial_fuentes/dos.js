/*
Bienvenidos.
mostrar por alert el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx".
*/
function mostrar()
{
  	//delcaramos variables
  	var nombreIngresado;
  	var localidadIngresada;

   		//tremos todo por id
   		nombreIngresado=document.getElementById("elNombre").value;
   		localidadIngresada=document.getElementById("laLocalidad").value;

   			//mostramos por alert
   			alert("Usted se llama " + nombreIngresado + " y vive en la localidad de " + localidadIngresada);

}
