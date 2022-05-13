/*Bienvenidos.
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.
*/
/*function mostrar()
{
  //delcaramos variables
  var anchoTerreno;
  var largoTerreno;
  var mensaje;

   anchoTerreno=prompt("Ingrese el ancho de su terreno");
   largoTerreno=prompt("Ingrese el largo de su terreno");

   //calculamos perimetro
   perimetroTerreno = 2 * largoTerreno + 2 * anchoTerreno;
   resultado = perimetroTerreno * 3;

   //mostramos por alert
   alert("El perimetro de su terrreno es " + resultado);
}
*/
/*
Bienvenidos.
Realizar el algoritmo que pida el ancho y el largo de un rectángulo 
por prompt y que muestre el perímetro por alert.
*/
function mostrar()
{
  var medidasIngresadasUno;
  var medidasIngresadasUnoDos;
  var perimetro;
  var resultado;

  medidasIngresadasUno=prompt("Ingrese ancho");
  medidasIngresadasUno=parseInt(medidasIngresadasUno);
  medidasIngresadasUnoDos=prompt("Ingrese largo");
  medidasIngresadasUnoDos=parseInt(medidasIngresadasUnoDos);

  perimetro= 2 * medidasIngresadasUnoDos + 2 * medidasIngresadasUno;
  resultado=perimetro * 3;

  alert("El perimetro de us terreno es: " + resultado);

  

}