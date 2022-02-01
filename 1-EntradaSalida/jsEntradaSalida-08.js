/*
Julian Trasar Div E
Ej8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declarar las variables
	var dividendo;
	var divisor;
	var resto;


	//traemos los valores id
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	//los tranformo en enteros
	dividendo = parseInt(dividendo);
	divisor  = parseInt(divisor);

	//resulto = dividendo / divisor;

	//alert("el resultado es:" + resultado);

	resto =dividendo % divisor;

	alert("el resto de la division es: " + resto);

}
