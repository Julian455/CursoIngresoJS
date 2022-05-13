/*
Bienvenidos.
A una pareja se le pide los datos
para mostrar un mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos,
que sumados son xx kilos y el promedio de peso xx ".
*/
function mostrar()
{
  var nombre1;
  var nombre2;
  var peso1;
  var peso2;
  var sumasDePesos;
  var promedio;

    nombre1=prompt("Ingrese su nombre");
    nombre2=prompt("Ahora ingrese nombre de su pareja");

    peso1=prompt("Ingrese su peso");
    peso1=parseInt(peso1);
    peso2=prompt("Ingrese el peso de su pareja");
    peso2=parseInt(peso2);

    sumasDePesos=peso1 + peso2;
    promedio=sumasDePesos /5;

    alert("Usted se llama " + nombre1 + " y el nombre de su pareja es " + nombre2);
    alert("Usted pesa " + peso1 +  " y su pareja pesa " + peso2);
    alert("Y la suma de los 2 pesos es " + sumasDePesos + " y el promedio de los 2 pesos es  " + promedio ) 


}
