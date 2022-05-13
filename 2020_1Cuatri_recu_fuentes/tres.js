/*
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/
function mostrar()
{
	var nombre;
	var nacionalidad;
	var edad;
	var genero;
	var estadoCivil;
	var temperatura;

	var respuesta="si";
    
	var flag=0;
	var temperaturaMax;
	var nacionalidadMax;

	var acumuladorSoltero=0;

	var acumuladorSolteras=0;
	var acumuladorViudas=0;

	var acumuladorTercera=0;
	
	var acumuladorCasadas=0;
	var contadorCasadas=0;
	var promedio;
	

		do
		{
			nombre=prompt("Ingrese nombre");

			nacionalidad=prompt("Ingrese nacionalidad");

			edad=prompt("Ingrese edad")
			edad=parseInt(edad);

			genero=prompt("Ingrese f o m")
				while(genero!="f" && genero!="m")
				{
					genero=prompt("Error f o m")
				}
			
			estadoCivil=prompt("Ingrese estado civil")
				while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
				{
					estadoCivil=prompt("Error")
				}

			temperatura=prompt("Ingrese temeperatura")
			temperatura=parseInt(temperatura);

			//a) la Nacionalidad de la persona con mas temperatura.
			if(flag==0 || temperatura>temperaturaMax)
			{
				temperaturaMax=temperatura;
				nacionalidadMax=nacionalidad;
				flag=1;
			}

			//b) Cuantos mayores de edad( más de 17) estan solteros
			if(edad>17 && estadoCivil=="soltero")
			{
              acumuladorSoltero=acumuladorSoltero + 1;
			}

			//c) La cantidad de Mujeres que hay solteras o viudas.
			if(genero=="f")
			{
				if(estadoCivil=="soltero")
				{
					acumuladorSolteras=acumuladorSolteras + 1;
				}
			}
			
			if(genero=="f")
			{
				if(estadoCivil=="viudo")
				{
					acumuladorViudas=acumuladorViudas + 1;
				}
			}

			//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
			if(edad>60 && temperatura>38)
			{
				acumuladorTercera=acumuladorTercera + 1;
			}

			//e) El promedio de edad entre las mujeres casadas.
			if(genero=="f")
			{
				if(estadoCivil=="casado")
				{
                  acumuladorCasadas=acumuladorCasadas + 1;
				  contadorCasadas=contadorCasadas + 1;
				}
			}

			respuesta=prompt("Quiere seguir ingresando datos si o no ");
				while(!(respuesta=="si" || respuesta=="no"))
				{
					respuesta=prompt("Error si o no");
				}
             
			

		}while(respuesta=="si");

		//e) El promedio de edad entre las mujeres casadas.
		promedio=acumuladorCasadas/contadorCasadas;

		document.write("la Nacionalidad de la persona con mas temperatura es: " + nacionalidadMax + "<br>");
		document.write("Los mayores de edad( más de 17) estan solteros son: " +  acumuladorSoltero + "<br>");
		document.write(" La cantidad de Mujeres que hay solteras es: " + acumuladorSolteras + "<br>");
		document.write("La cantidad de Mujeres que hay viudas es: " + acumuladorViudas + "<br>");
		document.write("cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura " + acumuladorTercera + "<br>");
		document.write(" El promedio de edad entre las mujeres casadas: " + promedio + "<br>");

   /*
   a) la Nacionalidad de la persona con mas temperatura.
   b) Cuantos mayores de edad( más de 17) estan solteros
   c) La cantidad de Mujeres que hay solteras o viudas.
   d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
   e) El promedio de edad entre las mujeres casadas.
	*/
	
}  



/*Se necesita llevar el registro de un vacunatorio.
 Para ello se podrá registrar los datos de las
personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
Nombre
Edad (mayor o igual a 12)
Vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos
 solo se permite la vacuna americana
Dosis (“P” en caso de ser la primera dosis o “S”
 en caso de ser la segunda dosis)
Genero (Femenino, Masculino)
Informar:
a- Promedio de edad de los que se vacunaron con la china.
b- Nombre y vacuna del masculino más joven.
c- De las personas que recibieron la vacuna americana 
que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis 
sobre el total de vacunados
e- Vacuna más inoculada*/
/*function mostrar()
{
	var nombre;
	var edad;
	var vacunas;
	var dosis;
	var genero;
	var genero;
	var respuesta="si";
	var menoresEdad=0;
	var contadorAmericana=0;
	var contadorChinas=0;
	var acumuladorChinas=0;
	var acumuladorRusas=0;
	var flag=0;
	var nombreMinimo;
	var vacunaMinima;
	var edadMinima;
	var contadorP=0;
	var contador=0;
	var porcentaje;
	var promedioChina;
	var acumuladorAmericana=0;
	var vacunadosP;
	var mensaje;



	do 
	{
		nombre=prompt("Ingrese nombre")

		edad=prompt("Ingrese edad mayor o igual a 12 años")
		edad=parseInt(edad);
			while(isNaN(edad) || edad<12)
			{
				edad=prompt("error")
				edad=parseInt(edad);
			}

		vacunas=prompt("ingrese rusa , china , americana");
			while(vacunas!="rusa" && vacunas!="china" && vacunas!="americana")
			{
				vacunas=prompt("error");
			}
		
			dosis=prompt(" Ingrese p parap priemra dosis s para segunda dosis")
				while(dosis!="p" && dosis!="s")
				{
					dosis=prompt("error p o s")
				}
			if(edad<11 && edad>18)
			{
				vacunas="americana";
				menoresEdad=menoresEdad +1;
				contadorAmericana=contadorAmericana +1;
			}

		genero=prompt("Ingrese f femenino o m masculino")
	

			switch(vacunas)
			{
				case "americana":
				contadorAmericana=contadorAmericana +1;
				acumuladorAmericana=acumuladorAmericana +1;
				break;
				case "rusa":
				acumuladorRusas=acumuladorRusas + 1;
				break;
				case "chinas":
				contadorChinas=contadorChinas + 1;
				acumuladorChinas=acumuladorChinas + edad;
			}

			switch(genero)
			{
				case "m":
				if(flag==0 || edad<edadMinima)
				{
					edadMinima=edad;
					nombreMinimo=nombre;
					vacunaMinima=vacunas;
				}
			}

			if(dosis=="p")
			{
                contadorP=contadorP +1;
			}
			contador=contador +1;
			
          
			respuesta=prompt("Quiere seguir ingresando datos si o no")
			 	while(!(respuesta=="si" || respuesta=="no"))
				 {
					 respuesta=prompt("Error si o no");
				 }

	}while(respuesta=="si");
	promedioChina=acumuladorChinas/contadorChinas;
    
	//
	porcentaje=menoresEdad/contadorAmericana *100;
	vacunadosP=contadorP/contador *100;

	if(acumuladorChinas>acumuladorRusas && acumuladorChinas>acumuladorAmericana)
	{
		mensaje="La dosis china es la mas dada";
	}
	else if(acumuladorRusas>acumuladorAmericana)
	{
		mensaje="La dosis rusa es la mas dada";
	}
	else 
	{
		mensaje="La dosis americana es la mas dada";
	}

	document.write("Promedio de edad de los que se vacunaron con la china es " + promedioChina + "%" + "<br>");
	document.write("Nombre " + nombreMinimo +  "y vacuna del masculino más joven" + vacunaMinima + "<br>" );
	document.write(" De las personas que recibieron la vacuna americana que porcentaje son menores de edad "  + porcentaje +  "<br>");
	document.write("Porcentaje de los que están vacunados con 1 dosis  es " + vacunadosP + "<br>" );
	document.write("Vacuna más inoculada es " + mensaje + "<br>");


}
*/