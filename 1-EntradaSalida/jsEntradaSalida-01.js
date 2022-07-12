

/*

Julian Trasar Div E

Ejercicio 1
Una reconocida empresa de desarrollo nos contratara para realizar un nuevo proyecto, necesitamos desarrollar un
software para el Hospital Italiano en el sector odontológico, que nos pide recopilar la información para los 5 turnos
que dio en el día, para eso debemos tomar los siguientes datos:
- El apellido.
- Obra social (“Ioma”, “Osde” y “Omint”).
- Tipo de tratamiento (“Extracción”,” Caries” y “Brackets”).
- Edad (entre 0 y 150 años inclusive).
Debemos informar:
a) Promedio de edad de los que utilizaron Brackets.
b) La obra social más atendida.
c) El apellido de la persona más joven con caries.

*/
/*function mostrar()
{

	//declaramos variables
	var apellido;
	var obraSocial;
	var tratamiento;
	var edad;
	var i=0;
	var promedio;
	var mensaje;

	var contadorBra=0;
	var acumuladorBra=0;
	var acumuladorIoma=0;
	var acumuladorOsde=0;
	var acumuladorOmit=0;
	var apellidoMinima; 
	var edadMinima;
	var flag=0;

    while(i <5)
	{
		apellido=prompt("Apellido");

		obraSocial=prompt("Ingrese obra social ioma, osde y omint");
			while(obraSocial!="ioma" && obraSocial!="osde" && obraSocial!="omint")
			{
				obraSocial=prompt("Error reingrese Ioma, Osde y Omint ")
				
			}
		tratamiento=prompt("Ingrese tratamiento extracción,caries y brackets ")
			while(tratamiento!="extraccion" && tratamiento!="caries" && tratamiento!="brackets")
			{
				tratamiento=prompt("Error reingrese Extracción,Caries y Brackets")
			
			}


		edad=prompt("Ingrese edad");
		edad=parseInt(edad);
			while(isNaN(edad) || edad<0 || edad>150)
			{
				edad=prompt("Error , es entre 0 y 150 años")
				edad=parseInt(edad);
			}
		
		if(tratamiento =="brackets")
		{
			acumuladorBra=acumuladorBra + edad;
			contadorBra=contadorBra+1;
		}

		switch(obraSocial)//no olvidarse las ""
		{
			case "Ioma":
			acumuladorIoma=acumuladorIoma++;
			break;
			case "Osde":
			acumuladorOsde=acumuladorOsde++;
			break;
			case "Omit":
			acumuladorOmit=acumuladorOmit++;
			break;
		}  
		
		if(tratamiento =="caries")//no olvidarse las ""
		{                 
			if(flag==0 || edad < edadMinima)
			{
				edadMinima = edad;
				apellidoMinima = apellido;
				flag=1;
			}

		}
     i=i+1;		
	}
	
		if(acumuladorBra >0)
		{
			promedio=acumuladorBra/contadorBra;
		}

	if(acumuladorIoma>acumuladorOsde && acumuladorIoma>acumuladorOmit)
	{
		mensaje="Ioma es la obra social mas usada";
	}
	if(acumuladorOsde>acumuladorOmit)
	{
		mensaje="Osde es la obra social mas usada";
	}
	else
	{
		mensaje="Omit es la obra social mas usada";
	}

	document.write(mensaje + "<br>");
	document.write("El promedio de edad de los que utulizaron Brackets son:" + promedio +  "<br>");
	document.write("El apellido de la perosna mas joven  con caries es " + apellidoMinima + "<br>");


 
}

*/

/*
Julian Trasar Div E

Ejercicio 2
El hotel UTN 5 Estrellas nos pide desarrollar un software para hacer sus reservas, la carga de datos pedirá lo
siguiente:
- Apellido de la persona.
- Tipo de reserva (“individual”, “Parejas” o” familiar”).
- Cantidad de personas (tiene que ser mayor a 0 y menor a 10).
- Temporada (“otoño”, “invierno”, “primavera” y “verano”).
Debemos informar:
a) La temporada en la que reservan más parejas.
b) El promedio de las personas en las habitaciones familiares.
c) El total de personas que ingresaron en el hotel, en otoño.


*/
/*function mostrar()
{

  var apellido;
  var tipo;
  var cantidad;
  var temporada;
  var respuesta="si";
  var mensaje;

  var contadorOtoño=0;
  var contadorInvierno=0;
  var contadorPrimavera=0;
  var contadorVerano=0;
  var acumuladorFamiliar=0;
  var contadorFamiliar=0;
  var acumuladorOtoño=0;
  var promedio;

	do
	{
		apellido=prompt("Ingrese apellido");

		tipo=prompt("Ingrese tipo de resereva individual , parejas o familiar");
			while(tipo!="individual" && tipo!="parejas" && tipo!="familiar")
			{
				tipo=prompt("Error, indivual , parejas o familiar");
			}
		cantidad=prompt("Ingrese cantidad de personas");
		cantidad=parseInt(cantidad);
			while(isNaN(cantidad) || cantidad<0 || cantidad>10)
			{
				cantidad=prompt("Error es entre 0 y 10 personas");
				cantidad=parseInt(cantidad);
			}
		temporada=prompt("Ingrese temporada: otoño, invierno, primavera o verano")
			while(temporada!="otoño" && temporada!="invierno" && temporada!="primavera" && temporada!="verano")
			{
			    temporada=prompt("Error otoño, invierno, primavera o verano ")
			}
		(tipo == "parejas")
		{
			switch(temporada)
			{
             case "otoño":
			 contadorOtoño=contadorOtoño + 1;
			 break;
			 case "invierno":
			 contadorInviern=contadorInvierno + 1;
			 break;
			 case "primavera":
			 contadorPrimavera=contadorPrimavera + 1;
			 break;
			 case "verano":
			 contadorVerano=contadorVerano + 1;
			 break;
				 
			}
		}
	  
	  if(tipo == "familiar")
	  {
		  acumuladorFamiliar=acumuladorFamiliar + cantidad;
		  contadorFamiliar= contadorFamiliar+1;
	  }

	  acumuladorOtoño=acumuladorOtoño + cantidad;

        respuesta=prompt("Quiere seguir ingresando datos si o no")
	  		while(!(respuesta=="si" || respuesta=="no" ))
			  {
				  respuesta=prompt("Error, si o no");
			  }
	}while(respuesta== "si");

	promedio= acumuladorFamiliar/contadorFamiliar;

	if(contadorOtoño>contadorInvierno && contadorOtoño>contadorPrimavera && contadorOtoño>contadorVerano)
	{
		mensaje= "Otoño es la estacion que mas reservo las parejas";
	}
	else if(contadorInvierno>contadorPrimavera && contadorInvierno>contadorVerano)
	{
		mensaje= "Invierno es la estaciona que mas reservo las parejas";
	}
	else if(contadorPrimavera>contadorVerano)
	{
		mensaje="Primavera es la estacion que mas reservo las parejas";
	}
	else
	{
		mensaje= "Verano es la estacion que mas reservo las parejas";
	}

	document.write(mensaje + "<br>");
	document.write("El promedio de habitaciones de familias es: " +  promedio + "<br>");
	document.write("el total de personas que ingresaron en otoño es " + acumuladorOtoño + "<br>");

}
*/

/*
Julian Trasar Div E

Ejercicio 3
Una agencia de autos usados nos contrata para desarrollarle un software que permita la venta de sus autos, sin límite
de cargas, debemos pedir los siguientes datos:
- Marca (Fiat, Ford, Renault).
- El color del auto (gris, azul, rojo).
- Nombre del vendedor.
- Validar que el kilometraje este entre (10.000 y 100000 kilómetros).
Debemos informar:
a) El nombre del vendedor que vendió el auto con más kilometraje.
b) El porcentaje de autos azules que se vendieron.
c) La marca del auto rojo con menos kilometraje.

*/
/*function mostrar()
{
	var marca;
	var color;
	var nombre;
	var kilometros;
	var respuesta="si";

	var nombreMaximo;
	var kilometrosMax;
	var flagMax=0;
	var contadorAutos=0;
	var contadorAzules=0;
	var kilometrosMinimos;
	var marcaMinimo;
	var flagMinimo=0;
	var porcentaje;

		do 
		{
			marca=prompt("Ingrese marca fiat ford o renault");
				while(marca!="fiat" && marca!="ford" && marca!="renault")
				{
					marca=prompt("Error");
				}
			color=prompt("Ingrese color gris azul o rojo")
			 while(color!="gris" && color!="azul" && color!="rojo")
			 {
				 color=prompt("Error");
			 }

			 nombre=prompt("Ingrese nombre del vendedor");

			kilometros=prompt("Ingrese kilometros 10.000 o 100000")
			kilometros=parseInt(kilometros);
			 while(isNaN(kilometros) || kilometros<10000 || kilometros>100000)
			 {
				 kilometros=prompt("error")
				 kilometros=parseInt(kilometros);
			 }


			 if(flagMax==0 || kilometros>kilometrosMax)
			 {
				 kilometrosMax=kilometros;
				 nombreMaximo=nombre;
				 flagMax=1;
			 }

			contadorAutos=contadorAutos + 1;

			if(color == "azul")
			{
				contadorAzules=contadorAzules + 1;
			}

			if(color =="rojo")
			{
				if(flagMinimo==0 || kilometros<kilometrosMinimos)
				{
					kilometrosMinimos=kilometros;
					marcaMinimo=marca;
					flagMinimo=1;
					
				}
				
			}
			respuesta=prompt("Desea seguir ingresando datos si o no")
				while(!(respuesta=="si" || respuesta=="no"))
				{
					respuesta=prompt("Error");
				}
		}while(respuesta=="si");

		if (contadorAzules>0)
		{
			porcentaje= contadorAzules / contadorAutos * 100;
		}

		document.write("El nombre del vendedor que vendió el auto con más kilometraje es : " + nombreMaximo + "<br>");
		document.write("El porcentaje de autos azules que se vendieron es :" + porcentaje + "<br>");
		document.write("La marca del auto rojo con menos kilometraje es : " + marcaMinimo + "<br>");

		
}

	


*/


/*
El hotel UTN 5 Estrellas nos pide desarrollar un software
 para hacer sus reservas, la carga de datos pedirá lo
siguiente:
- Apellido de la persona.
- Tipo de reserva (“individual”, “Parejas” o” familiar”).
- Cantidad de personas (tiene que ser mayor a 0 y menor a 10).
- Temporada (“otoño”, “invierno”, “primavera” y “verano”).
Debemos informar:
a) La temporada en la que reservan más parejas.
b) El promedio de las personas en las habitaciones familiares.
c) El total de personas que ingresaron en el hotel, en otoño.*/
/*function mostrar()
{
	var apellido;//
	var tipo;
	var cantidad;
	var temporada;
	var seguir;
	var contadorOtoño = 0;
	var contadorPrimavera = 0;
	var contadorInvierno = 0;
	var contadorVerano = 0;
	var mensaje;
	var acumuladorFamiliar = 0;
	var contadorFamiliar = 0;
	var promedio;
	var acumuladorOtoño = 0;

	do
	{
		do
		{
			apellido = prompt("ingrese su apellido");
		}while(!(isNaN(apellido)));
		do
		{
			tipo = prompt("Tipo de reserva","Individual, Parejas y Familiar");//con la , podemos ver lo que escribiste
			tipo = tipo.toLowerCase();
		}while(!(tipo == "individual" || tipo == "pareja" || tipo == "familiar"));
		do
		{
			cantidad = prompt("cantidad de personas");
			cantidad = parseInt(cantidad);
		}while(isNaN(cantidad) || !(cantidad > 0 && cantidad < 10));
		do
		{ 
			temporada = prompt("Temporada que sale de viaje", "Otoño, Invierno, Primavera y Verano");
			temporada = temporada.toLowerCase();
		}while(!(temporada == "otoño" || temporada == "invierno" || temporada == "primavera" || temporada == "verano"));
			if(tipo == "pareja")//cantidad de personas que viajan en parejas 
			{
				switch(temporada)//latemporada de parejas que mas viajan
				{
					case "otoño":
						contadorOtoño = contadorOtoño + 1;//contadores para ver cuantas veces pone otroño y le tiene que sumar 1
					break;
					case "invierno":
						contadorInvierno = contadorInvierno + 1;
					break;
					case "primavera":
						contadorPrimavera = contadorPrimavera + 1;
					break;
					case "verano":
						contadorVerano = contadorVerano + 1;
					break;	
				}
			}
				if(tipo == "familiar")
				{
					acumuladorFamiliar = acumuladorFamiliar + cantidad;
					contadorFamiliar = contadorFamiliar + 1;
				}
				acumuladorOtoño = acumuladorOtoño + cantidad;// acumulador acumula la cantidad de personas
		do
		{
			seguir = prompt("¿quiere seguir ingresando datos?" , "si o no");
			seguir = seguir.toLowerCase();
		}while(!(seguir == "si" || seguir == "no"));
	}while(seguir == "si");
	promedio = acumuladorFamiliar / contadorFamiliar;
	if(isNaN(promedio))//si no entra ninguna familia
	{
		promedio = 0;
	}
	if(contadorOtoño > contadorVerano && contadorOtoño > contadorInvierno && contadorOtoño > contadorPrimavera)
	{
		mensaje = "Temporada mas usada para parejas es Otoño";
	}
	else if(contadorVerano > contadorInvierno && contadorVerano > contadorPrimavera)
	{
		mensaje = "Temporada mas usada para parejas es Verano";
	}
	else if(contadorInvierno > contadorPrimavera)
	{
		mensaje = "Temporada mas usada para parejas es Invierno";
	}	
	else
	{
		mensaje = "Temporada mas usada para parejas es Primavera";
	}
	document.write(mensaje + "<br>");
	document.write("El promedio de las personas en las habitaciones familiares " + promedio + "<br>");
	document.write("El total de personas que ingresaron en el hotel, en otoño " + acumuladorOtoño + "<br>");

}

*/

/*
Una agencia de autos usados nos contrata para desarrollarle
 un software que permita la venta de sus autos, sin límite
de cargas, debemos pedir los siguientes datos:
- Marca (Fiat, Ford, Renault).
- El color del auto (gris, azul, rojo).
- Nombre del vendedor.
- Validar que el kilometraje este entre (10.000 y 100000 kilómetros).
Debemos informar:
a) El nombre del vendedor que vendió el auto con más kilometraje.
b) El porcentaje de autos azules que se vendieron.
c) La marca del auto rojo con menos kilometraje.*/
/*function mostrar()
{
	var marca;
	var color;
	var nombre;
	var km;
	var seguir;
	var flag = 0;
	var kmMaximo;
	var nombreMaximo;
	var contadorAzul = 0;
	var contadorAutos = 0;
	var porcentaje;
	var flagRojo = 0;
	var marcaMinimo;
	var kmMinimo;

	do
	{	
		do
		{
			marca = prompt("ingrese la marca" , "Fiat, Ford, Renault");
			marca = marca.toLowerCase();
		}while(!(marca == "fiat" || marca == "ford" || marca == "renault"));
		do
		{
			color = prompt("color del auto" , "gris , azul , rojo");
			color = color.toLowerCase();
		}while(!(color == "gris" || color == "azul" || color == "rojo"));
		do
		{
			nombre = prompt("nombre del vendedor");
		}while(!(isNaN(nombre)));
		do
		{
			km = prompt("Km del auto");
			km = parseInt(km);
		}while(isNaN(km) || !(km >= 10000 && km <= 100000));
			if(flag == 0 || km > kmMaximo)// ponemos km>kmMaximo , si el kilometro ingresado es mayor a kmMaximo lo remplaze 
										  //flag para que ingrese el kilometrage y el nombre Del vendedor y entre por primera vez
			{                             //y si supera lo que habia antes que lo sobrescriba/o relmplaza los datos anteriores
				nombreMaximo = nombre;    
				kmMaximo = km;
				flag = 1;
			}
			contadorAutos= contadorAutos + 1;//cantidad de autos
			if(color == "azul")
			{
				contadorAzul = contadorAzul + 1; // cantiodad de autos azules
			}
			if(color == "rojo")
			{                       //11000 //11000
				                    //10000 10000 
									//se guarda 10000 porque es el menor de los dos                   
				if(flagRojo == 0 || km < kmMinimo)
				{
					kmMinimo = km;
					marcaMinimo = marca;
					flagRojo = 1;
				}
			}
			
		do
		{
			seguir = prompt("¿quiere seguir ingresando datos?" , "si o no");
			seguir = seguir.toLowerCase();
		}while(!(seguir == "si" || seguir == "no"));
	}while(seguir == "si");
	if(flagRojo == 0)
	{
		marcaMinimo = "No se vendio ningun auto rojo";
	}
	if(contadorAzul > 0)
	{
		porcentaje = contadorAzul / contadorAutos * 100;
	}
	else
	{
		porcentaje = 0;
	}
	document.write("El auto con mas km vendido por: " + kmMaximo + "<br>");
	document.write(" El porcentaje de autos azules que se vendieron " + porcentaje + "<br>");
	document.write("La marca del auto rojo con menos kilometraje: " + marcaMinimo + "<br>");

}
/*

/*
Una reconocida empresa de desarrollo nos contratara para
 realizar un nuevo proyecto, necesitamos desarrollar un
software para el Hospital Italiano en el sector odontológico,
 que nos pide recopilar la información para los 5 turnos
que dio en el día, para eso debemos tomar los siguientes datos:
- El apellido.
- Obra social (“Ioma”, “Osde” y “Omint”).
- Tipo de tratamiento (“Extracción”,” Caries” y “Brackets”).
- Edad (entre 0 y 150 años inclusive).
Debemos informar:
a) Promedio de edad de los que utilizaron Brackets.
b) La obra social más atendida.
c) El apellido de la persona más joven con caries.*/
/*function mostrar()
{
	var apellido;
	var obraSocial;
	var tipo;
	var edad;
	var i = 0;
	var acumuladorB = 0;
	var contadorB = 0;
	var promedio;
	var contadorIoma = 0;
	var contadorOsde = 0;
	var contadorOmint = 0;
	var mensaje;
	var flag = 0;
	var apellidoMinima;
	var edadMinima;

	while(i < 5)
	{
		do
		{
			apellido = prompt("ingrese su apellido");		
		}while(!(isNaN(apellido)));
		do
		{
			obraSocial = prompt("obra social","Ioma, Osde y Omint");
			obraSocial = obraSocial.toLowerCase();
		}while(!(obraSocial == "ioma" || obraSocial == "osde" || obraSocial == "omint"));
		do 
		{
			tipo = prompt("tratamiento", "Extraccion , Caries y Brackets");
			tipo = tipo.toLowerCase();
		}while(!(tipo == "extraccion" || tipo == "caries" || tipo == "brackets"));
		do
		{
			edad = prompt("ingrese su edad");
			edad = parseInt(edad);
		}while(isNaN(edad) || !(edad > -1 && edad < 151));

			if(tipo == "brackets")
			{
				acumuladorB = acumuladorB + edad;
				contadorB = contadorB + 1;
			}
			switch(obraSocial)
			{
				case "ioma":
				 	contadorIoma = contadorIoma + 1;
				break;
				case "osde":
					contadorOsde = contadorOsde + 1;
				break;
				case "omint":
					contadorOmint = contadorOmint + 1;
				break; 	
			}
				if(tipo == "caries")
				{                   //8   //8
									//7   //entra 7 porque es menor a edad que es 8 
					if(flag == 0 || edad < edadMinima)
					{
						edadMinima = edad;
						apellidoMinima = apellido;
						flag = 1;
					}
				}
		i = i + 1;
	}
	if(flag == 0)
	{
		apellidoMinima = "no hay casos con caries";
	}	
	if(acumuladorB > 0)
	{
		promedio = acumuladorB / contadorB;
	}
	else
	{
		promedio = 0;
	}
	if(contadorOmint > contadorOsde && contadorOmint > contadorIoma)
	{
		mensaje = "Obra social mas usada es Omint"; 
	}
	else if(contadorOsde > contadorIoma)
	{
		mensaje = "Obra social mas usada es Osde";
	}
	else
	{
		mensaje = "Obra social mas usada es Ioma";
	}
	document.write("promedio de edad de los que usan brackets: " + promedio + "<br>");
	document.write(mensaje + "<br>");
	document.write("Apellido con caso de caries: " + apellidoMinima + "<br>");
}
*/
/*function mostrar()
{
	alert("esto funciona de maravilla");
}
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
/*function mostrar()
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
			while(isNaN(edad) || edad<1 || edad>100)
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

		respuesta=prompt("Quiere seguir ingreaando datos si o no");
			while(!(respuesta!="si" || respuesta!="no"))
			{
				respuesta=prompt("Error");
			}
	}while(respuesta=="si");

	promedio=acumuladorMujeres/contadorCasadas;

	document.write(" la Nacionalidad de la persona con mas temperatura es: " + nacionalidadMax + "<br>");
	document.write(" mayores de edad( más de 17) estan solteros son: " + mayorEdad + "<br>");
	document.write("La cantidad de Mujeres que hay solteras o viudas es: " + contadorMujeres + "<br>");
	document.write(" personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura son: " + personasTerceraEdad + "<br>");
	document.write("El promedio de edad de mujeres casadas es: " + promedio + "<br>");
}
*/

/*
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso 
de dos datos, una letra y un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

*/
/*function mostrar()
{
 let letras;
 let numero;
 let respuesta="si";

 let contadorPares=0;
 let contadorImpares=0;
 let contadorCeros=0;

 let contadorPositivos=0;
 let acumuladorPositivos=0;
 let promedioPositivos;
 let contadorNegativos=0;

 let flag=0;
 let letraMax;
 let numeroMax;



	do
	{
		letras=prompt("Ingrese una letra");

		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
			while(isNaN(numero) || numero<-100 || numero>100)
			{
				numero=prompt("Error es entre -100 y 100");
			}

			if(numero% 2 ==0)
			{
				contadorPares=contadorPares + 1;
			}

			if(numero%2 ==1)
			{
				contadorImpares=contadorImpares + 1;
			}

		 if(numero>0)
		 {
			acumuladorPositivos=acumuladorPositivos + numero;
			contadorPositivos=contadorPositivos + 1;
			
		 }
		 else
		 {
			if(numero<0)
			{
				contadorNegativos=contadorNegativos + 1;
   
			}
			else
			{
				contadorCeros=contadorCeros + 1;
			}
		   
		 }
		

		 if(flag==0 || numero>numeroMax)
		 {
			numeroMax=numero;
			letraMax=letras;
			flag=1;
		 }

		 respuesta=prompt("Desea seguir ingresando datos si o no?");
		 	while(!(respuesta1="si" || respuesta!="no"))
			{
				respuesta=prompt("Error si o no");
			}

	}while(respuesta=="si")

	promedioPositivos=acumuladorPositivos/contadorPositivos;

	document.write("La cantidad de numeros pares es: " + contadorPares + "<br>");
	document.write("La cantidad de numeros impares es: " + contadorImpares + "<br>");
	document.write("La suma de los numeros negativos es: " + contadorNegativos + "<br>");
	document.write("La cantidad de ceros es: " + contadorCeros + "<br>");
	document.write("La letra maxima es: " + letraMax + " y el numero maximo es: " + numeroMax + "<br>");
	document.write("El promedio de numero positivos es: " + promedioPositivos + "<br>");
	 
}
*/

/*
1. En una pizzería el cajero debe ir cargando los pedidos de los clientes. 
Los datos que se tienen que ingresar son:
Nombre, edad, qué tipo de pizza (muzza, cebolla o rellena), cantidad de pizzas(del mismo tipo) y precio por el total del pedido.
Esto se debe cargar hasta que el cajero decida.
Al final, se deberá presentar:
La cantidad de personas cuya edad supere los 25 años, que hayan comprado una pizza de muzza o cebolla.
Cuál fue el promedio de precios por tipo de pizza.
El nombre de la persona que realizó la compra más barata.

*/
/*function mostrar()
{
	let nombre;
	let edad;
	let tipo;
	let cantidad;
	let precio;
	let respuesta="si";

	let contadorMuzza=0;
	let acumuladorMuzza=0;
	let contadorCebolla=0;
	let acumuladorCebolla=0;
	let contadorRellena=0;
	let acumuladorRellena=0;
	let acumuladorCantidadMuzza=0;
	let acumuladorCantidadCebolla=0;
	let acumuladorCantidadRellena=0;

	let flag=0;
	let precioBarato;
	let nombreBarato;

	let mensaje;
	let promedioMuzza;
	let promedioCebolla;
	let promedioRellena;


		do
		{
			nombre=prompt("Ingrese su nombre");

			edad=prompt("Ingrese su  edad");
			edad=parseInt(edad);
				while(isNaN(edad)|| edad<1 || edad>100)
				{
					edad=prompt("Error");
					edad=parseInt(edad);
				}

			tipo=prompt("Ingrese que tipo de pizza quiere muzza , cebolla o rellena");
				while(tipo!="muzza" && tipo!="cebolla" && tipo!="rellena")
				{
					tipo=prompt("Error");
				}
			
			cantidad=prompt("Ingrese cantidad");
			cantidad=parseInt(cantidad);

			precio=prompt("Ingrese precio del total del pedido");
			precio=parseInt(precio);

			if(edad>25)
			{
				switch(tipo)
				{
					case "muzza":
					contadorMuzza=contadorMuzza + 1;
					break;
					case "cebolla":
					contadorCebolla=contadorCebolla + 1;
					break;
					case "rellena":
					contadorRellena=contadorRellena + 1;
				}
				
			}

			switch(tipo)
				{
					case "muzza":
					acumuladorMuzza=acumuladorMuzza + precio;
					acumuladorCantidadMuzza=acumuladorCantidadMuzza + cantidad;
					
					break;
					case "cebolla":
					acumuladorCebolla=acumuladorCebolla + precio;
					acumuladorCantidadCebolla=acumuladorCantidadCebolla + cantidad;
					
					break;
					case "rellena":
				    acumuladorRellena=acumuladorRellena + precio;
					acumuladorCantidadRellena=acumuladorCantidadRellena + cantidad;
		
					break;
				}

			if(flag==0 || precio<precioBarato)
			{
				precioBarato=precio;
				nombreBarato=nombre;
				flag=1;
			}

			respuesta=prompt("Quiere seguir ingresando datos si o no ??");
				while(!(respuesta=="si" || respuesta=="no"))
				{
					respuesta=prompt("Error si o no ");
				}

		}while(respuesta=="si");

		promedioMuzza=acumuladorMuzza/acumuladorCantidadMuzza;

		promedioCebolla=acumuladorCebolla/acumuladorCantidadCebolla;

		promedioRellena=acumuladorRellena/acumuladorCantidadRellena;

		if(contadorMuzza>contadorCebolla && contadorMuzza>contadorRellena)
		{
          mensaje="La pizza de muzza es la mas comprada por personas mayores a 25 años";
		}
		else if(contadorCebolla>contadorRellena)
		{
			mensaje="La pizza de cebolla es la mas comprada por personas mayores a 25 años";
		}
		else
		{
			mensaje="La pizza rellena es la comprada por personas mayores a 25 años";
		}

		document.write(mensaje + "<br>");
		document.write("El promedio de compras de la pizza de muzza es: " + promedioMuzza + "<br>");
		document.write("El promedio de compra de pizza de cebolla es: " + promedioCebolla + "<br>");
		document.write("El promedio de compra de pizza rellena es: " + promedioRellena + "<br>");

		
}

*/
/*
Julian Trasar Div E
Ejercicio 1
Bienvenidos.
Al presionar el botón, se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla".
*/
function mostrar()
{
	alert("esto funciona de maravilla");
}




