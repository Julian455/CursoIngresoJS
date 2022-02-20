/*
Julian Trasar Div E
EJ while 4
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	numeroIngresado = parseInt(numeroIngresado);

    // isNaN=verdadero y 
	while(isNaN(numeroIngresado) || (numeroIngresado < 0 || numeroIngresado > 9))
	{
       numeroIngresado = prompt("Error, reingrese un numero entre 0 y 9")
       numeroIngresado = parseInt(numeroIngresado);//parseamos de nuevo porque estamos 
       //piediendo que igrese de nuevo 
	}

	document.getElementById("txtIdNumero").value=numeroIngresado;
	
}//FIN DE LA FUNCIÓN