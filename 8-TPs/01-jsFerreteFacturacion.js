
/* Julian Trasar Div E 
TP1
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//guardamos variables
	var precio1;
	var precio2;
	var precio3;
	var suma;

    //traemos los valores por id
	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio3 = document.getElementById("txtIdPrecioTres").value;

	precio1=parseFloat(precio1);
	precio2=parseFloat(precio2);
	precio3=parseFloat(precio3);

	suma = precio1 + precio2 + precio3;
	
    //muestro por alert
	alert("la suma es " + suma);
}
function Promedio () 
{
	//guardamos variables
	var precio1;
	var precio2;
	var precio3;
	var promedio;

    //traemos los valores por id
	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1=parseFloat(precio1);
    precio2=parseFloat(precio2);
    precio3=parseFloat(precio3);

    promedio = (precio1 + precio2 + precio3) /3;

    //muestro por alert
    alert("El promedio es " + promedio);




}
function PrecioFinal () 
{
	
	//declaramos variables
	var precio1;
	var precio2;
	var precio3;
	var iva;
	var precioFinal;

    //traemos los valores por id
	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio3 = document.getElementById("txtIdPrecioTres").value;

	precio1=parseFloat(precio1);
	precio2=parseFloat(precio2);
	precio3=parseFloat(precio3);

	  iva = (precio1 + precio2 + precio3) * 21/100;

	  precioFinal = precio1 + precio2 + precio3 + iva;
	

    //muestro por alert

	alert("el precio final es " + precioFinal);

}