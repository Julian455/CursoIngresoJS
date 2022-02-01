/*
Julian Trasar Div E
Ej10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
  //declaramos variables
  var importe;
  var resultado;
  var descuento;

    //traer las variables por id
    importe = document.getElementById("txtIdImporte").value;

    //parsear el sueldo
    importe = parseFloat(importe);

    //calculamos el descuento y el resultado
    descuento = 25/100 * importe;
    resultado = importe - descuento;

    //mostramos resultado
    document.getElementById("txtIdResultado").value = resultado;


}
