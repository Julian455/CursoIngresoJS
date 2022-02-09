/*
Julian Trasar Div E 
EJ if 10
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	//declaramos variables
	var numero;
	var aleatorio;
	
     aleatorio = Math.random();
	 numero = Math.floor(aleatorio * (10 - 1 + 1) + 1);


	 if(numero >= 9)

	 {
	 	alert("excelente aprobo");
	 }

	 else if(numero >4 && numero <=10)

	 {
	 	alert("aprobo ");


	 }

	 else

	 {
	 	alert("desaprobo , Vamos, la proxima se puede ");
	 }



	


	 


}//FIN DE LA FUNCIÓN