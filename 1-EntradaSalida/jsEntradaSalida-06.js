/*
Julian Trasar Div E
ej 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaramos variables
	var numUno;
	var numDos;
	var resultado;

	 numUno = document.getElementById("txtIdNumeroUno").value;
	 numDos  = document.getElementById("txtIdNumeroDos").value;

	//parseInt para convertir el valor text a un valor numerico
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	//muestro resultado
	resultado = numUno + numDos;

	alert(resultado);



}

/*

operadore + - * / %

entrada:
-prompt
-id

procesos:
-alert
-id
-document

//txtIdNumeroUno
//txtIdNumeroDos

*/