
/* Julian Trasar Div E 
TP1
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
   /*
    Julian Trasar 
	Div E
	TP 1 A

   */
	let precio1;
	let precio2;
	let precio3;
	let suma;

   
	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio3 = document.getElementById("txtIdPrecioTres").value;

	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);

	suma = precio1 + precio2 + precio3;
	
    
	alert("la suma es " + suma);
}
function Promedio () 
{
	/*
     Julian Trasar
	 Div E
	 TP 1 B
	*/
	let precio1;
	let precio2;
	let precio3;
	let promedio;

    
	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);

    promedio = (precio1 + precio2 + precio3) /3;

   
    alert("El promedio es " + promedio);


}
function PrecioFinal () 
{
	/*
    Julian Trasar
	Div E
	TP 1 C

	*/
	let precio1;
	let precio2;
	let precio3;
	let iva;
	let precioFinal;

    precio1 = document.getElementById("txtIdPrecioUno").value;
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio3 = document.getElementById("txtIdPrecioTres").value;

	
	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);

	  iva = (precio1 + precio2 + precio3) * 21/100;

	  precioFinal = precio1 + precio2 + precio3 + iva;
	


	alert("el precio final es " + precioFinal);
 
}