/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/
function mostrar()
{
	var i=0;
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;

	var tipoMax;
	var flag=0;
	var cantidadMax;
	var fabricanteMax;
	var contadorBarbijo=0;
	var contadorJabon=0;
	var contadorAlcohol=0;
	var acumuladorBarbijo=0;
	var acumuladorJabon=0;
	var acumuladorAlcohol=0;
	var promedio;
	var mensaje;


	while(i <5 )
	{
		tipo=prompt("Ingrese barbijo , jabon o alcohol");
			while(tipo!="barbijo" && tipo!="jabon" && tipo!="alcohol")
			{
				tipo=prompt("Error, barbijo , jabon o alcohol")
			}
		
		precio=prompt("Ingrese precio")
		precio=parseInt(precio);
			while(isNaN(precio) || precio<100 || precio>300)
			{
				precio=prompt("Error, entre 100 y 300")
				precio=parseInt(precio);
			}
		
		cantidad=prompt("Ingrese cantidad")
		cantidad=parseInt(cantidad);
			while(isNaN(cantidad) || cantidad<0 || cantidad>1000)
			{
				cantidad=prompt("Error, no puede ser 0, o negativo o mayor a 1000");
				cantidad=parseInt(cantidad);
				
			}

		marca=prompt("Ingrese marca");

		fabricante=prompt("Ingrese fabricante");

		if(tipo == "jabon")
		{
			if(flag==0 || tipo>tipoMax)
			{
				tipoMax=tipo;
				fabricanteMax=fabricante;
				flag=1;
			}
		}

		switch(tipo)
		{
			case "barbijo":
			contadorBarbijo=contadorBarbijo + 1;
			acumuladorBarbijo=acumuladorBarbijo + cantidad;
			break;
			case "jabon":
			contadorJabon=contadorJabon  + 1;
			acumuladorJabon=acumuladorJabon + cantidad;
			break;
			case "alcohol":
			contadorAlcohol=contadorAlcohol +1;
			acumuladorAlcohol=acumuladorAlcohol + cantidad;
		}


		i=i + 1;
	}
	if(contadorBarbijo>contadorBarbijo && contadorAlcohol>contadorAlcohol)
	{
		promedio=acumuladorBarbijo/contadorBarbijo
		mensaje="el promedio de compra de barbijo es" + promedio;
	}
	 else if (contadorJabon>contadorAlcohol)
	 {
		 promedio=acumuladorJabon/contadorJabon;
		 mensaje="el promedio de compra de jabon es " + promedio;
	 }
	else
	{
		promedio=acumuladorAlcohol/contadorAlcohol;
		mensaje="el promedio de compra del alcolhol es " + promedio;
	}

	document.write(" Del más caro de los jabones, la cantidad de unidades es " + acumuladorJabon +  " y el fabricante es " + fabricanteMax + "<br>");
	document.write( mensaje + "<br>");
	document.write("la unidades de Barbijos se compraron en total es " + acumuladorBarbijo + "<br>"); 


}

/*
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total

*/
