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
/*function mostrar()
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

/*
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m")
 y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/
function mostrar()
{
 let nombre;
 let nacionalidd;
 let edad;
 let genero;
 let estadoCivil;
 let temperatura;
 let respuesta="si";

 let flag=0;
 let masTemperatura;
 let nacionalidadMax;

 let mayorEdad=0;

 let contadorMujeres=0;

 let personasTerceraEdad=0;

 let contadorCasadas=0;
 let acumuladorMujeres=0;
 let promedio;

	do
	{
		nombre=prompt("Ingrese su nombre");

		nacionalidd=prompt("Ingrese nacionalidad");

		edad=prompt("Ingrese edad")
		edad=parseInt(edad);
			while(isFinite(edad) || edad<1 || edad>100)
			{
				edad=prompt("Error");
				edad=parseInt(edad);
			}
		
		genero=prompt("Ingrese genero f o m");
		while(genero!="f" && genero!="m")
		{
			genero=prompt("Error f o m");
		}

		estadoCivil=prompt("Ingrese estado civil: soltero casado o viudo");
			while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
			{
				estadoCivil=prompt("Error");
			}

		temperatura=prompt("Ingrese temepratura corporal");
		temperatura=parseInt(temperatura);
			while(isNaN(temperatura) || temperatura<36 || temperatura>44)
			{
				temperatura=prompt("Error");
			}

		if(flag==0 || temperatura>masTemperatura)
		{
			masTemperatura=temperatura;
			nacionalidadMax=nacionalidd;
			flag=1;
		}

		if(edad>17 && estadoCivil=="soltero")
		{
			mayorEdad=mayorEdad + 1;
		}

		if(genero=="f" && estadoCivil=="soltero" || estadoCivil=="viudo")
		{
			contadorMujeres=contadorMujeres + 1;
		}

		if(edad>60 && temperatura>38)
		{
			personasTerceraEdad=personasTerceraEdad + 1;
		}

		if(genero=="f" && estadoCivil=="casado")
		{
			acumuladorMujeres=acumuladorMujeres + edad;
			contadorCasadas=contadorCasadas + 1;
		}

		respuesta=promedio("Quiere seguir ingreaando datos si o no");
			while(!(respuesta!="si" || respuesta!="no"))
			{
				respuesta=promedio("Error");
			}
	}while(respuesta=="si");

	promedio=acumuladorMujeres/contadorCasadas;

	document.write(" la Nacionalidad de la persona con mas temperatura es: " + nacionalidadMax + "<br>");
	document.write(" mayores de edad( más de 17) estan solteros son: " + mayorEdad + "<br>");
	document.write("La cantidad de Mujeres que hay solteras o viudas es: " + contadorMujeres + "<br>");
	document.write(" personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura son: " + personasTerceraEdad + "<br>");
	document.write("El promedio de edad de mujeres casadas es: " + promedio + "<br>");
}

