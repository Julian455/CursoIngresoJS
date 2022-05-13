/*
Bienvenidos.
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.
*/
function mostrar()
{
 var medidas;
 //var sumaDeLosLados
 var i=0;
 var acumulador=0;

    while(i<3)
    {
      medidas=prompt("Ingrese medidas");
      medidas=parseInt(medidas);

      acumulador=acumulador + medidas;

      i=i+1;
    }


    alert(medidas);
}
