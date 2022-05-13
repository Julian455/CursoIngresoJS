/*
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/
function mostrar()
{
    var precio;
    var porcentaje;
    var descuento

    precio=prompt("Ingrese precio")
    porcentaje=prompt("Ingrese porcentaje")

    descuento=precio * porcentaje

    document.getElementById("elPrecioFinal").value=descuento;



}
