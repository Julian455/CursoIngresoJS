/*
Julian Trasar Div E
ejercicio 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numUno;
	let numDos;
	let resultado;

	 numUno = document.getElementById("txtIdNumeroUno").value;
	 numDos  = document.getElementById("txtIdNumeroDos").value;

	
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	resultado = numUno + numDos;

	alert(resultado);



}
