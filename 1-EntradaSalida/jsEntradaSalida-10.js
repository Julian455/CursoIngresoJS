/*
Julian Trasar Div E
Ejercicio 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
  //declaramos variables
  let sueldo;
  let resultado;
  let descuento;

    //traer las variables por id
    sueldo = document.getElementById("txtIdImporte").value;

    //parsear el sueldo
    sueldo = parseInt(sueldo);

    //calculamos el descuento y el resultado
    descuento = 25/100 * sueldo;
    resultado = sueldo - descuento;

    //mostramos resultado
    //document.getElementById("txtIdResultado").value = resultado;

    alert("Su sueldo es: " + sueldo + " y su descuento es de: " + descuento + " y su sueldo descontado es de : " + resultado);


}
