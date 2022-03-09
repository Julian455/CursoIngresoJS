

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

	var contadorTurnos=0;
	var acumuladorIoma=0;
	var acumuladorOsde=0;
	var acumuladorOmint=0;
	var apellidoMasJoven;
	var flagUno;
	var edadMenor;
	var acumuladorExtraccion=0;
	var acumuladorCaries=0;
	var acumuladorBrackets=0;
	var tratamientosTotales;
	var contadorTratamientos=0;
	var promedioBrackets=0;
	//var acumuladorTotales=0;
	var mensaje;


			while(contadorTurnos<5)
			{
				apellido=prompt("Ingrese apellido");

				obraSocial=prompt("Ingrese obra social :ioma, osde y omint ");
					while(obraSocial!="ioma" && obraSocial!="osde" && obraSocial!="omint")
					{
						obraSocial=prompt("Error ingrese: ioma, osde y omint ")
					}

				tratamiento=prompt("Ingrese tratamiento:extraccion, caries y brackets");
				 	while(tratamiento!="extraccion" && tratamiento!="caries" && tratamiento!="brackets")
				 	{
				 		tratamiento=prompt(" Error,ingrese: extraccion, caries y brackets ");
				 	}

				edad=prompt("Ingrese edad");
				edad=parseInt(edad);
					while(isNaN(edad) || edad<0 || edad>150)
					{
						edad=prompt("Error , no puede ser menor a 0 ni mayor a 150 años");
						edad=parseInt(edad);
					}

					//b) La obra social más atendida.
					switch(obraSocial)
					{
						case "ioma":
						acumuladorIoma=acumuladorIoma+obraSocial;
						break;
						case "osde":
						acumuladorOsde=acumuladorOsde+obraSocial;
						break;
						case "omint":
						acumuladorOmint=acumuladorOmint+obraSocial;
					}

					//c) El apellido de la persona más joven con caries.

              if(tratamiento="caries" && (flagUno==0 || edad>edadMenor))
              {
              	edadMenor=edad;
              	apellidoMasJoven=apellido;
              }

              acumuladorExtraccion+acumuladorCaries+acumuladorBrackets;
              contadorTratamientos++;


            contadorTurnos++;
			}
        
        //acumuladorTotales=acumuladorExtraccion + acumuladorCaries + acumuladorBrackets;
        promedioBrackets=acumuladorBrackets/contadorTratamientos *100;

        if(acumuladorIoma>acumuladorOsde && acumuladorIoma<acumuladorOmint)
        {
        	mensaje="obra social ioma es la mas atentida";
        }
        else if(acumuladorOsde>acumuladorOmint)
        {
        	mensaje="obra social osde es la mas atendida";
        }
        else
        {
        	mensaje="obra social omint es la mas atendida";
        }



        document.write("El promedio de edad que utilizan brackets es " + promedioBrackets + "<br>");
        document.write("la " + mensaje + "<br>" );
        document.write("El apellido mas joven con caries es " + apellidoMasJoven + "<br>");	



 
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

   //declaramos variables
   var apellido;
   var tipoReserva;
   var cantidadPersonas;
   var temporada;
   var respuesta="si";

   var acumuladorOtoño=0;
   var acumuladorInvierno=0;
   var acumuladorPrimavera=0;
   var acumuladorVerano=0;
   var acumuladorTotales;
   var totalOtoño;;

    		do
    		{
    			apellido=prompt("Ingrese apellido");

    			tipoReserva=prompt("ingrese que tipo de reserva quiere individual, parejas o familiar");
    				while(tipoReserva!="individual" && tipoReserva!="parejas" && tipoReserva!="familiar")
    				{
    					tipoReserva=prompt("error");
    				}

    			cantidadPersonas=prompt("ingrese cantidad de personas");
    			cantidadPersonas=parseInt(cantidadPersonas);
    				while(isNaN(cantidadPersonas) || cantidadPersonas<0 || cantidadPersonas>10)
    				{
    					cantidadPersonas=prompt("Error no puede ser ni menor a 0 ni mayor a 10 personas")
    					cantidadPersonas=parseInt(cantidadPersonas);
    				}

    			temporada=prompt("Ingrese temporada otoño, invierno,primavera y verano");
    				while(temporada!= "otoño" && temporada!= "invierno" && temporada!= "primavera" && temporada!= "verano")
    				{
    					temporada=prompt("Error");
    				}

    			switch(temporada)
    			{
    				case "otoño":
    				acumuladorOtoño=acumuladorOtoño + acumuladorTotales;
    				break;
    				case "invierno":
    				acumuladorInvierno=acumuladorInvierno+acumuladorTotales;
    				break;
    				case "primavera":
    				acumuladorPrimavera=acumuladorPrimavera+acumuladorTotales;
    				break;
    				case "verano":
    				acumuladorVerano=acumuladorVerano+acumuladorTotales;
    				break;
    			}
    		}

         acumuladorTotales=acumuladorOtoño+acumuladorInvierno+acumuladorPrimavera+acumuladorVerano;
         acumuladorOtoño=acumuladorOtoño/acumuladorTotales;
         

    		if(tipoReserva=="parejas")
    		{
    			if(acumuladorOtoño>acumuladorInvierno&&acumuladorOtoño>acumuladorPrimavera&&acumuladorOtoño>acumuladorVerano)
    			{
    				mensaje="otoño reservan mas las parejas";
    			}
    			else if(acumuladorInvierno>acumuladorPrimavera&&acumuladorInvierno>acumuladorVerano)
    			{
    				mensaje="invierno reservan mas las parejas";
    			}

    			else if(acumuladorPrimavera>acumuladorVerano)
    			{
    				mensaje="primavera reservan maslas parejas";
    			}
    			else
    			{
    				mensaje="verano reservan mas las parejas";
    			}
    		}

    		document.write("En " + mensaje + "<br>");
    		document.write("El total las personas que ingresaron en otoño" + totalOtoño + "<br>");




}
*/
  

/*
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
function mostrar()
{
	//delcaramos variables
	var marca;
	var color;
	var nombreVen;
	var kilometros;
	var nombreMayor;
	var kilometrosMayor;
	var respuesta="si";


	var flag=0
	var acumuladorAzul=0;
	var acumuladorCantidadAutos;
	var contadorColores=0;
	var flagUno=0;
	var marcaMenos;
	var kilometrosMenor;
	var promedio;

		do
		{
			marca=prompt("Ingrese marca fiat , ford , renault");
				while(marca!="fiat" && marca!="ford" && marca!="renault")
				{
					marca=prompt("Error");
				}

			color=prompt("Ingrese color gris ,azul , rojo");
			 	while(color!="gris" && color!="azul" && marca!="rojo");
			 	{
			 		marca=prompt("Error");
			 	}

			 	nombreVen=prompt("Ingrese nombre dle vendedor");

			 kilometros=prompt("Ingrese kilometros")
			 kilometros=parseInt(kilometros);
			 	while(isNaN(kilometros) || kilometros<10000 || kilometros>100000)
			 	{
			 		kilometros=prompt("Error entre 10.000 y 100000")
			 		kilometros=parseInt(kilometros);
			 	}

			 	if(flag==0|| kilometrosMayor<kilometros)
			 	{
			 		kilometrosMayor=kilometros;
			 		nombreMayor=nombreVen;
			 	}

           acumuladorAzul=acumuladorAzul+acumuladorCantidadAutos;
           contadorColores++,

           if(color=="rojo" &&(flagUno==0; || kilometros<kilometrosMenor))
           {
           	kilometrosMenor=kilometros;
           	marcaMenos=marca;
           }


          respuesta=prompt("Desea serguir ingresando datos si/no")
            while(!(respuesta=="si" || respuesta=="no"))
            {
              respuesta=prompt("Error");
            }
      }while(respuesta=="si");

        promedio=acumuladorAzul/contadorColores

        document.write("El nombre del vendedor que vendió el auto con más kilometraje es " + nombreMayor + "<br>");
        document.write("El porcentaje de autos azules que se vendieron es " + promedio + "<br>");
        document.write(" La marca del auto rojo con menos kilometraje es " + marcaMenos + "<br>");



          
}

