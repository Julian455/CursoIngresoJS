/*
Julian Trasar Div E
Ej9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	//declaramos las variables
	var sueldo;
	var resultado;
	var aumento;

	//traer los valores por id
	sueldo = document.getElementById ("txtIdSueldo").value;
	
	//parsear el valor
	sueldo = parseFloat(sueldo);

     //calculamos el aumento y el resultado
	aumento = sueldo * (10/100);
	resultado = sueldo + aumento;

	//motramos el resultado
     document.getElementById("txtIdResultado").value = resultado;


}
