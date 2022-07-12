/*
Julian Trasar Div E
Ejecicio 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
/*function mostrarAumento()
{

	let sueldo;
	let resultado;
	let aumento;

	
	sueldo = document.getElementById ("txtIdSueldo").value;
	
	sueldo = parseInt(sueldo);

	aumento = sueldo * (10/100);
	resultado = sueldo + aumento;

	
     alert(" su sueldoes: " + sueldo + " y su aumento es de: " + aumento + " y su sueldo aumentado es: " + resultado);


}
*/
/******************************************************************************
 Julian Trasar 
 Div E
ejercico 9 bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento
en el cuadro de texto "RESULTADO".

El usuario debe ingresar el porcentaje del aumento
y debemos mostrar el valor del porcentaje del aumento 
por ALERT
*******************************************************************************/
function mostrarAumento()
{
  let sueldo;
  let aumento;
  let sueldoAumentado;
  let porcentaje


  sueldo = document.getElementById ("txtIdSueldo").value;
  porcentaje=prompt("Ingrese el porcentaje");

  sueldo=parseInt(sueldo);
  porcentaje=parseInt(porcentaje);

  aumento =sueldo * (porcentaje/100);
  sueldoAumentado= sueldo + aumento;
  

  document.getElementById("txtIdResultado").value=sueldoAumentado;

  alert("El aumento fue de: " + aumento);
  
}


