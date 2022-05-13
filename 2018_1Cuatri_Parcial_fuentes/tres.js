/*

Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/
function mostrar()
{
  //declaramos variables
  var precioIngresado;
  var descuento;
  var precioFinal;

   	precioIngresado=prompt("Ingrese un precio");
   	precioIngresado=parseInt(precioIngresado);

   	descuento=prompt("Ingrese descuento");
   	descuento=parseInt(descuento);

   	//calculamos

   	precioFinal= precioIngresado * descuento/100;

   	document.getElementById("elPrecioFinal").value=precioFinal;




}
