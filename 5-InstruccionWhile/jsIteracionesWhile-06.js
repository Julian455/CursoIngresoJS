/*
Julian Trasar Div E
EJ while 6
Al presionar el botón pedir 5 números 
e informar la suma acumulada y el promedio.

*/ 
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while(contador<5)//condicion
	{
		numeroIngresado = prompt("ingrese 5 numeros");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;

		contador = contador + 1; //modifica nuestra condicion
	}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN 