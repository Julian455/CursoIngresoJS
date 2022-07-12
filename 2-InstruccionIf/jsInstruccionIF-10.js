/*
Julian Trasar Div E 
Ejercicio if 10
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	//declaramos variables
	let numero;
	let aleatorio;
	
     aleatorio = Math.random();
	 numero = Math.floor(aleatorio * (10 - 1 + 1) + 1);


	 if(numero >= 9)

	 {
	     console.log("excelente aprobo");
	 }

	 else if(numero>=4 && numero <=10)

	 {
	 	console.log("aprobo ");

	 }

	 else

	 {
	 	console.log("desaprobo , Vamos, la proxima se puede ");
	 }

}