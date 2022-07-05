/*
Julian Trasar Div E 
ej7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
/*function sumar()

{	
	//declaramos variables	var numUno;
	var numUno;
	var numDos;
	var resultado;



	numUno  = document.getElementById("txtIdNumeroUno").value;
	numDos  = document.getElementById("txtIdNumeroDos").value;

	//parseInt para convertir el valor text a un valor numerico
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	//muestro resultado 
	resultado = numUno + numDos;

	alert("la suma es " + resultado);

		
}

function restar()

{

//declaramos variables
	var numUno;
	var numDos;
	var resultado;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

	//parseInt para convertir el valor text a un valor numerico
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	//muestro resultado
	resultado = numUno - numDos;

	alert("la resta es " + resultado);
    

}

function multiplicar()
	
{ 
	
	//declaramos variables 
	var numUno;
	var numDos;
	var resultado;

	numUno = document.getElementById("txtIdNumeroUno").value;
    numDos = document.getElementById("txtIdNumeroDos").value;

	//parseInt para convertir el valor text a un valor numerico
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	//muestro resultado
	resultado = numUno * numDos;

	alert("la multiplicacion es " + resultado);


}

function dividir()

{
//declaramos variables 
	var numUno;
	var numDos;
	var resultado;

	numUno = document.getElementById("txtIdNumeroUno").value;
    numDos = document.getElementById("txtIdNumeroDos").value;

	//parseInt para convertir el valor text a un valor numerico
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	//muestro resultado
	resultado = numUno / numDos;

	alert(" la division es " + resultado);	

}
*/
/*

txtIdNumeroUno
txtIdNumeroDos

*/

/*
Julian Trasar Div E 
ejercicio 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

		numeroUno=document.getElementById("txtIdNumeroUno").value;
		numeroDos=document.getElementById("txtIdNumeroDos").value;

		numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);

		resultado=numeroUno + numeroDos;

		alert("La suma es: " + resultado);;
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroDos=document.getElementById("txtIdNumeroDos").value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno - numeroDos;

	alert("La resta es: " + resultado);
}
function dividir()
{

	let numeroUno;
	let numeroDos;
	let resultado;

	    numeroUno=document.getElementById("txtIdNumeroUno").value;
		numeroDos=document.getElementById("txtIdNumeroDos").value;

		numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);

		resultado=numeroUno/numeroDos;

		alert("La division es: " + resultado);


}
function multiplicar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	    numeroUno=document.getElementById("txtIdNumeroUno").value;
		numeroDos=document.getElementById("txtIdNumeroDos").value;

		numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);

		resultado=numeroUno * numeroDos;

		alert("La multiplicacion es: " + resultado);
}
