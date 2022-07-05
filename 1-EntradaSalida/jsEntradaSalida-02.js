/*Julian Trasar Div E
Ejercicio 1
Una reconocida empresa de desarrollo nos contratara para realizar un nuevo proyecto, necesitamos crear un
software para el Hospital Garrahan que nos pide recopilar la información del ingreso de niños en la semana, para eso
debemos tomar los siguientes datos:
- El nombre del niño:
- El turno de ingreso (validar: mañana, tarde y noche).
- Temperatura corporal con la que ingresa en ºC (validar que este entre 37 a 41 inclusive).
- Edad (entre 0 y 15 años inclusive).
Debemos informar:
a) La cantidad total de niños que ingresaron en la semana.
b) De los tres turnos debemos informar cual fue el turno que mayor cantidad de niños menores de 12 años
recibió.
c) El nombre del niño con más temperatura en la semana.
*/
/*function mostrar()
{
   //declaramos variables
   var nombreIngresado;
   var turnoIngresado;
   var temperaturaCorporal;
   var edadIngresada;
   var respuesta="si";
   var maxTemperatura;
   var mensaje;

   //acumuladores
   var acumulador=0;
   var acumuladorManana=0;
   var acumuladorTarde=0;
   var acumuladorNoche=0;
   var flagT=0;



      do
      {
         nombreIngresado=prompt("Ingrese el nombre")

         turnoIngresado=prompt("Ingrese turno : mañana,tarde,noche")
            while(turnoIngresado!="mañana" && turnoIngresado!="tarde" && turnoIngresado!="noche")
            {
               turnoIngresado=prompt("Error, reingrese turno")
            }
         temperaturaCorporal=prompt("Ingrese la temperatura")
         temperaturaCorporal=parseInt(temperaturaCorporal);
            while(isNaN(temperaturaCorporal) || temperaturaCorporal<37 || temperaturaCorporal>41)
            {
               temperaturaCorporal=prompt("Error el minimo es 37ºC y maximo 41ºC ")
               temperaturaCorporal=parseInt(temperaturaCorporal);
            }

         edadIngresada=prompt("ingrese la edad")
         edadIngresada=parseInt(edadIngresada);
            while(isNaN(edadIngresada) || edadIngresada<-1 || edadIngresada>15)
            {
               edadIngresada=prompt("Error edad entre 0 y 15 años");
               edadIngresada=parseInt(edadIngresada);
            }  
            if(edadIngresada<13)
            {
                  switch(turnoIngresado)
            {
               case "Mañana":
               acumuladorManana=acumuladorManana++;
               break;
               case "tarde":
               acumuladorTarde=acumuladorTarde++;
               break;
               case "noche":
               acumuladorNoche=acumuladorNoche++;
               break;
            }

           }
         

              if(flagT==0 || maxTemperatura<temperaturaCorporal)
              {
               maxTemperatura=temperaturaCorporal;
               maxTemperatura=nombreIngresado;
               flagT=1;
              }

               respuesta=prompt("Desea serguir ingresando datos si/no")
               while(!(respuesta=="si" || respuesta=="no"))
               {
                  respuesta=prompt("Error");
               }
      }while(respuesta=="si")


      if(acumuladorManana>acumuladorTarde && acumuladorManana>acumuladorNoche)
      {
           mensaje="El turno mañana recibio mas personas que los demas turnos"  
      }
      else if(acumuladorTarde>acumuladorNoche)
      {
         mensaje="El turno mañana recibio mas personas que los demas turnos" 
      }
      else
      {
         mensaje="El turno noche recibio mas personas que los demas turnos" 
      }

      document.write("La cantidad de niños que ingreso toda la semana es " + contador + "<br>");
      document.write("el turno que mayor cantidad de niños menores de 12 años recibió es " + edadIngresada + "<br>");
      document.write("El nombre del niño con mas temepratura es " + maxTemperatura + "<br>");
      

       
}
*/

/*Ejercicio 2
La aerolínea UTN viajes nos pide generar un software para vender sus packs de viajes, la carga de datos pedirá lo
siguiente:
- Nombre del piloto.
- Destino (“Ushuaia”, “Córdoba” o ”Jujuy”).
- Cantidad de personas en el avión (tiene que ser mayor a 0 y menor 250).
- Tipo de clase en la que viaja (promocional, turista, ejecutiva).
Debemos informar:
a) La clase con más pasajeros.
b) El nombre del piloto que lleva más pasajeros a Ushuaia.
c) El promedio de personas que usan la clase Ejecutiva.
*/
/*function mostrar()
{
   
   //declaramos variables
   var nombrePiloto;
   var destino;
   var cantidadPersonas;
   var clase;
   var masUshuaia;
   var flagPiloto=0;
   var pasajeroTotales;
   var mensaje;
   var pilotoUshuaia;
   var pasajeroEjecutiva;


   //acumuladores
   var acumuladorPromo=0;
   var acumuladorTuri=0;
   var acumuladorEje=0;

   
   var promedioEjecutiva;

         do
      {
         nombrePiloto=prompt("Ingrese el nombre")

         destino=prompt("Ingrese destino")
            while(destino!="ushuaia" && destino!="cordoba" && destino!="jujuy")
            {
               destino=prompt("Error, reingrese turno")
            }
         cantidadPersonas=prompt("Ingrese cantidad personas")
         cantidadPersonas=parseInt(cantidadPersonas);
            while(isNaN(cantidadPersonas) || cantidadPersonas<-1|| cantidadPersonas>250)
            {
               temperaturaCorporal=prompt("Error , es entre 0 y 250 personas")
               cantidadPersonas=parseInt(cantidadPersonas);
            }

            clase=prompt("Ingrese clase , promocional , turista , ejecutiva")
               while(clase!="promocional" && clase!="turista" && clase!="ejecutiva")
               {
                  clase=prompt("Error reingrese clase");
               }

               switch(clase)
               {
                  case "promocional":
                  acumuladorPromo=acumuladorPromo + cantidadPersonas;
                  break;
                  case "turista":
                  acumuladorTuri=acumuladorTuri+ cantidadPersonas;
                  break;
                  case "ejecutiva":
                  acumuladorEje=acumuladorEje+ cantidadPersonas;
                  break;
               }

               if(destino=="Ushuaia" && (flagPiloto==0 || masUshuaia>cantidadPersonas))
               {
                  masUshuaia=cantidadPersonas
                  masUshuaia=nombrePiloto;
                  flagPiloto=1;
               }
                    
              respuesta=prompt("Desea serguir ingresando datos si/no")
               while(!(respuesta=="si" || respuesta=="no"))
               {
                  respuesta=prompt("Error");
               }
   
       }while(respuesta=="si");

        pasajerosTotales= acumuladorPromo + acumuladorTuri + acumuladorEje;
       promedioEjecutiva=acumuladorEje/pasajerosTotales*100;
       promedioEjecutiva=parseInt(promedioEjecutiva);

       if(acumuladorPromo>acumuladorTuri && acumuladorPromo>acumuladorEje)
       {
         mensaje=" clase promocional es la que mas pasajero tiene";
       }
       else if(acumuladorTuri>acumuladorEje)
       {
         mensaje=" clase turista es la que mas pasajero tiene";
       }
       else
       {
         mensaje="calse ejecutiva es la que mas pasajeros tiene";
       }


     document.write("la " + mensaje + "<br>");
     document.write("El nombre del piloto que llevo mas personas a Ushuaia es " + nombrePiloto + "<br>");
     document.write("El promedio de personas que usan la clase ejectuvia es " + promedioEjecutiva + "%"+ "<br>");

}


*/


/*
Ejercicio 3
Una agencia de autos nos contrata para generarle un software que permita el ingreso de sus autos, sin limite de
ingresos, al comenzar la carga de datos debemos pedir:
- Marca.
- El Peso en kg. del auto que ingresa (tiene que estar entre 917 y 3900).
- El importe del auto en pesos (mayor a 600000).
- Validar que tipo de auto es sedan o coupé.
Debemos informar:
a) Mostrar el promedio total del importe de todos los autos que ingresaron.
b) Mostrar La marca y el importe del auto más liviano que sea sedan.
c) El auto mas pesado que sea coupé.
*/
/*function mostrar()
{

   //declaramos variables
   var marcaAuto;
   var pesoAuto
   var importeAuto;
   var tipoAuto;

   var acumuladorImportes=0;
   var contadorAutos=0;
   var promedioImportes;
   var flagAuto=0;
   var sedanLiviano;
   var marcaLiviano;
   var importeLiviano;
   var coupePesado;
   



   do
      {
         marcaAuto=prompt("Ingrese la marca ")

         pesoAuto=prompt("Ingrese el peso del auto")
         pesoAuto=parseInt(pesoAuto);
            while(isNaN(pesoAuto) || pesoAuto<917 || pesoAuto>3900)
            {
               pesoAuto=prompt("error , el peso del auto es entre 917 y 3900kg");
               pesoAuto=parseInt(pesoAuto);
            }
         
         importeAuto=prompt("ingrese importe del auto")
         importeAuto=parseInt(importeAuto);
            while(isNaN(importeAuto) || importeAuto<600000)
            {
               importeAuto=prompt("Error, no puede valer menos de 600000")
               importeAuto=parseInt(importeAuto);
            }

            tipoAuto=prompt("Ingrese el tipo de auto que quiere sedan o coupe")
               while(tipoAuto!="sedan" && tipoAuto!="coupe")
               {
                  clase=prompt("Error reingrese el tipo de auto que quiere");
               }

               //le agino un acumuladro para cada vez que suban un importe(precio) pueda acumularlo 
                    //para poder dividir;
               acumuladorImportes=acumuladorImportes+importeAuto;
               contadorAutos++;
                    
                    
                    
                   //Mostrar La marca y el importe del auto más liviano que sea sedan.
                    if(tipoAuto=="sedan" && (flagAuto==0 || sedanLiviano>pesoAuto ) )
                    {
                       sedanLiviano=pesoAuto;
                       importeLiviano=importeAuto;
                       marcaLiviano=marcaAuto;
                    

                    }
                    if(tipoAuto=="coupe" && (flagAuto==0 || coupePesado<pesoAuto ))
                    {
                     coupePesado=pesoAuto;
                     flagAuto=1;
                    }


                    
              respuesta=prompt("Desea serguir ingresando datos si/no")
               while(!(respuesta=="si" || respuesta=="no"))
               {
                  respuesta=prompt("Error");
               }
   
       }while(respuesta=="si");

                  //saco promedio del precio acumulador divido los autos que ingresan
               promedioImportes=acumuladorImportes/contadorAutos;

                   

            document.write("el promedio total del importe de todos los autos que ingresaron es " + promedioImportes + "<br>");
            document.write("El sedan mas liviano es de la marca " + marcaLiviano + " y vale " + importeLiviano + "<br>");
            document.write("el coupe mas pesado pesa " + coupePesado + "<br>");

}
*/


/*
EJERCICIO EXTRA
Nos piden hacer un programa para saber la cantidad de tropas que llevaron al combate
entre rusia y ucrania
Nos piden
 - Nombre del grupo
 - Tanques que llevaron(entre 10 y 50)
 - cantidad de soldados (min 1000)
 - Pais(ucrania, rusia o eeuu)

Debemos informar:
 - Qué pais envio mas tanques
 - El porcentaje de soldados que posee eeuu
 - Mostrar el nombre del grupo con mas soldados de ruso

*/

/*function mostrar()
{

   //declaramos variables
   var nombreGrupo;
   var cantidadTanques;
   var cantidadSoldados;
   var pais;
   var respuesta="si";
   var mensaje;

   
   var acumuladorUcrania=0;
   var acumuladorRusia=0;
   var acumuladorEeuu=0;
   var maxSold;
   var flag=0;
   var promedioSoldados;
   var soldadosTotales;
   var nombreMax;
   var acumuladorSoldadosUcrania=0;
   var acumuladoresSoldadosRusia=0;
   var acumuladoresSoldadosEeuu=0;
   var cantidadSoldados;


      do
      {
         nombreGrupo=prompt("Ingrese nombre del grupo");

         cantidadTanques=prompt("Ingrese cantidad de tanques");
         cantidadTanques=parseInt(cantidadTanques);
            while(isNaN(cantidadTanques) || cantidadTanques<10 || cantidadTanques>50)
            {
               cantidadTanques=prompt("Error , pueden llevar entre 10 y 50 tanques");
               cantidadTanques=parseInt(cantidadTanques);
            }

         cantidadSoldados=prompt("Ingrese la cantidadad de soldados");
         cantidadSoldados=parseInt(cantidadSoldados);
            while(isNaN(cantidadSoldados)|| cantidadSoldados<100)
            {
               cantidadSoldados=prompt("No pueden ser menos de 100 soldades ");
               cantidadSoldados=parseInt(cantidadSoldados);
            }

         pais=prompt("Ingrese pais ucrania , rusia o eeuu")
            while(pais!="ucrania" && pais!="rusia"&&pais!="eeuu")
            {
               pais=prompt("Error reingrese el pais");
            }
            
            //- Qué pais envio mas tanques
         switch(pais)
         {
              case "ucrania":
              acumuladorUcrania=acumuladorUcrania+cantidadTanques;
              acumuladorSoldadosUcrania=acumuladorSoldadosUcrania+cantidadSoldados;
              break;
              case "rusia":
              acumuladorRusia=acumuladorRusia+cantidadTanques;
              acumuladoresSoldadosRusia=acumuladoresSoldadosRusia+cantidadSoldados;
              break;
              case "eeuu":
              acumuladorEeuu=acumuladorEeuu+cantidadTanques;
              acumuladoresSoldadosEeuu=acumuladoresSoldadosEeuu+cantidadSoldados;
              break;
         }
            //Mostrar el nombre del grupo con mas soldados de ruso
            if(pais="rusia" && (flag==0 || cantidadSoldados>maxSold ))
            {
               maxSold=cantidadSoldados;
               nombreMax=nombreGrupo;
               flag=1;
            }
            

             respuesta=prompt("Desea serguir ingresando datos si/no")
               while(!(respuesta=="si" || respuesta=="no"))
               {
                  respuesta=prompt("Error");
               }
         

      }while(respuesta=="si");

      

      if(acumuladorUcrania>acumuladorRusia && acumuladorUcrania>acumuladorEeuu)
      {
         mensaje="Ucrania";
      }
      else if(acumuladorRusia>acumuladorEeuu)
      {
         mensaje="Rusia "  
      }
      else
      {
         mensaje="EEUU ";
      }

      //- El porcentaje de soldados que posee eeuu
       
      soldadosTotales= acumuladorSoldadosUcrania + acumuladoresSoldadosRusia + acumuladoresSoldadosEeuu;
      promedioSoldados=acumuladoresSoldadosEeuu/soldadosTotales*100;
      promedioSoldados=parseInt(promedioSoldados); 
      

      document.write("El pais que mando mas tanques fue " + mensaje + "<br>");
      document.write("El porsentaje de soldados que posee eeuu es " + promedioSoldados + "<br>");
      document.write("el nombre del grupo con mas soldados de ruso es " + nombreMax + "<br>");


}

*/

/*
PARTE 1
el hospital mi pueblo nos pide realizar un programa para tomar los siguientes datos:
pedir el ingreso de datos hasta que el usuario quiera
vacunas aplicadas validar (0 para ninguna,1 para 1°dosis,2 para 2°dosis,3 para 3°dosis)
edad (validar que no sea negativo y no puede sobrepasar los 150 años)
doctor (validar su apellido debe ser (perez, lopez,diaz))
nombre del paciente.

a) la cantidad de pacientes que no tengan vacunas y sean mayor a 60 años.
b) el menor paciente que tenga 1 dosis o más, su nombre y su edad.
c)el doctor que más pacientes tuvo, sacar el promedio de edades.

*/
/*function mostrar()
{
   //declaramos variables
   var vacunas;
   var edad;
   var doctor;
   var nombrePaciente;
   var respuesta="si";
   var vacunasMinimas;
   var pacientesMinimos;
   var acumuladorPacientes;


      do
      {
         vacunas=prompt("Ingrese 0 para ninguna,1 para 1°dosis,2 para 2°dosis,3 para 3°dosis ")
         vacunas=parseInt(vacunas);
            while(vacunas!="o" && vacunas!="1" && vacunas!="2" && vacunas!="3")
            {
               vacunas=prompt("Error");
               vacunas=parseInt(vacunas);
            }

         edad=prompt("Ingrese edad")
         edad=parseInt(edad);
          while(isNaN(edad) || edad<0 || edad>150)
          {
            edad=prompt("Error es entre 0-150 años");
            edad=parseInt(edad);
          }

         doctor=prompt("Ingrese docotro perez, lopez o diaz")
            while(doctor!="perez" && doctor!="lopez" && doctor!="diaz")
            {
               doctor=prompt("Error");
            }

         nombrePaciente=prompt("Ingrese el nombre");

         if(edad>60)
         {
            if(flagUno==0 || vacunas<vacunasMinimas )
            {
               vacunasMinimas=vacunas;
               acumuladorPacientes=acumuladorPacientes + nombrePaciente;
               pacientesMinimos=nombrePaciente;
               flagUno=1;


            }
         }

        
           respuesta=prompt("Desea serguir ingresando datos si/no")
               while(!(respuesta=="si" || respuesta=="no"))
               {
                  respuesta=prompt("Error");
               }

      }while(respuesta=="si");

   



}
*/

/* 
Ejercicio 2:
una pinturería solicita nuestros servicios para desarrollar el siguiente programa:
tomar 5 pedidos
cantidad de litros validar (mayor a 0).
precio por litro validar (no puede ser menor a 4000).
marca validar (tersuave, colorin, plavicon).
Color.
a) la cantidad de litros que se compró en total.
b) de la compra más cara, mostrar su color y marca.
c)mostrar la cantidad total de importe por las ventas y si supera los 50000 mostrar un
 mensaje el siguiente 
mensaje:” usted es un gran vendedor”.
*/
/*function mostrar()
{

  var cantidadLitros;
  var precio;
  var marca;
  var color;
  var mensaje;
  var acuPrecio=0;
  var cantidadPrecio=0;
  var contadorPedidos=0;
  var contadorPrecio;
  var acuLitros=0;
  var cantidadLitros;
  var PrecioMax;
  var flag=0;
  var marcaMax;
  var colorMax;


      
     while(contadorPedidos < 5)
     {
      
         cantidadLitros=prompt("Ingrese cantidad de litro")
         cantidadLitros=parseInt(cantidadLitros);
            while(isNaN(cantidadLitros) || cantidadLitros<0)
            {
               cantidadLitros=prompt("Error");
               cantidadLitros=parseInt(cantidadLitros);
            }

         precio=prompt("Ingrese precio ")
         precio=parseInt(precio);
            while(isNaN(precio) || precio>4000)
            {
               precio=prompt("error no puede ser mayor que 4000")
               precio=parseInt(precio);
            }

         marca=prompt("Ingrese marca: tersuave, colorin, plavicon ")
            while(marca!="tersuave" && marca!="colorin" && marca!="plavicon")
            {
               marca=prompt("Error");
            }
         color=prompt("Ingrese color");

         acuLitros=acuLitros+cantidadLitros;

         acuPrecio=acuPrecio+cantidadPrecio;
         contadorPrecio++;

        //b) de la compra más cara, mostrar su color y marca.
        if(flag==0||precio>PrecioMax)
        { 
         PrecioMax=precio;
         marcaMax=marca;
         colorMax=color;
         flag=1;

        }

        

       contadorPedidos++;
         
      }    
     
      if(acuPrecio>5000)
      {
        acuPrecio=acuPrecio+"Eres un gran vendero"
      }
   


   document.write("La cantidad de litros que compro fue" + acuLitros + "<br>");
   document.write("De la compra mas cara el color fue " + colorMax + "y la marca " + marcaMax + "<br>");
   document.write("El importe total es " + acuPrecio + "<br>");

   

 

      


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
            color=prompt("Ingrese color gris azul o rojo");
            while(color!="gris" && color!="azul" && color!="rojo")
            {
               color=prompt("Error");
            }
         
         nombre=prompt("Ingrese nombre del vendedor");

         kilometros=prompt("Ingrese kilometros 10.000 o 100000");
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
				respuesta=prompt("Desea seguir ingresando datos si o no")
					while(!(respuesta=="si" || respuesta=="no"))
					{
						respuesta=prompt("Error");
					}
			}
		}while(respuesta=="si");
			

      if (contadorAzules>0)
		{
			porcentaje=contadorAzules/contadorAzules *100;
		}

		document.write("El nombre del vendedor que vendió el auto con más kilometraje es : " + nombreMaximo + "<br>");
		document.write("El porcentaje de autos azules que se vendieron es :" + porcentaje + "<br>");
		document.write("La marca del auto rojo con menos kilometraje es : " + marcaMinimo + "<br>");
}

*/

/*
1. Una empresa de venta de cosméticos necesita un programa que permita la carga de productos 
vendidos,
 junto a los datos del vendedor. Se requiere ingresar los siguientes campos: • Vendedor: Juan, María, Lucrecia
• Tipo producto: Perfume, Shampoo o Maquillaje
• Importe de la venta (Numero mayor que cero)
No hay un límite total de ventas, y cada vendedor puede realizar varias ventas.
Una vez finalizada la carga de productos vendidos se debe calcular la comisión del vendedor.
Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, la comisión será del 
15%.
Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión será del 
5%.
Se debe mostrar:
a. Promedio de ventas por cada vendedor.
b. Cantidad de perfumes que vendió María
c. El importe mas barato junto con el vendedor que lo vendió.
d. El nombre del vendedor con menor comisión.

*/
/*function mostrar()
{
   var ingreseNombre;
   var producto;
   var importe;
   var respuesta="si";
   
   var acumuladorJuan=0;
   var contadorJuan=0;
   var acumuladorMaria=0;
   var contadorMaria=0;
   var acumuladorLucrecia=0;
   var contadorLucrecia=0;
   var contadorPerfumes=0;
   
   var flag=0;
   var importeBarato;
   var vendedorBarato;

   var promedioJuan;
   var promedioMaria;
   var promedioLucrecia;

   var comisionJuan;
   var comisionMaria;
   var comisionLucrecia;

   var mensaje;

      do
      {
         ingreseNombre=prompt("Ingrese nombre: juan , maria o lucrecia")
            while(ingreseNombre!="juan" && ingreseNombre!="maria" && ingreseNombre!="lucrecia")
            {
               ingreseNombre=prompt("Error ingrese juan , maria o lucrecia")
            }

         producto=prompt("Ingrese producto: perfume , shampoo o maquillaje")
            while(producto!="perfume" && producto!="shampoo" && producto!="maquillaje")
            {
               producto=prompt("Error ingrese perfume , shampoo o maquillaje ")
            }

         importe=prompt("Ingrese importe de la venta")
         importe=parseInt(importe);
            while(isNaN(importe) || importe<0)
            {
               importe=prompt("Error el importe debe ser mayor a 0 ")
               importe=parseInt(importe);
            }

         /*
         total de ventas, y cada vendedor puede realizar varias ventas.
         Una vez finalizada la carga de productos vendidos se debe calcular la comisión del vendedor.
         b. Cantidad de perfumes que vendió María
         */

       /* switch(ingreseNombre)
         {
            case "juan":
            acumuladorJuan=acumuladorJuan + importe;
            contadorJuan=contadorJuan + 1;
            break;
            case "maria":
            acumuladorMaria=acumuladorMaria + importe;
            contadorMaria=contadorMaria + 1;
            if(producto=="perfume")
            {
               contadorPerfumes + 1;
            }
            break;
            case "lucrecia":
            acumuladorLucrecia=acumuladorLucrecia + importe;
            contadorLucrecia=contadorLucrecia + 1;
            break;
         }

         //El importe mas barato junto con el vendedor que lo vendió.
         if(flag==0 || importe<importeBarato)
         {
            importeBarato=importe
            vendedorBarato=ingreseNombre;
            flag=1;
         }


         respuesta=prompt("Quiere seguir ingresando datos si o no")
            while(!(respuesta!="si" || respuesta!="no"))
            {
               respuesta=prompt("Error si o no");
            }

      }while(respuesta=="si");

      //a. Promedio de ventas por cada vendedor.
      promedioJuan=acumuladorJuan/contadorJuan;
      promedioMaria=acumuladorMaria/contadorMaria;
      promedioLucrecia=acumuladorLucrecia/contadorLucrecia;

      /*
      se debe calcular la comisión del vendedor.
      Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000,
      la comisión será del 15%.
      Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión será del 
      5%.
      */
    /* if(acumuladorJuan>5000)
     {
        comisionJuan=acumuladorJuan *15/100;

     }
     else
     {  
        if(acumuladorJuan>10000)
        comisionJuan=acumuladorJuan *20/100;

        
        {
           comisionJuan=acumuladorJuan * 5/100;
        }
     }

     if(acumuladorMaria>500)
     {
        comisionMaria=acumuladorMaria *15/100;
     }
     else
     {
        if(acumuladorMaria>10000)
        {
           comisionMaria=acumuladorMaria *20/100;
        }
        else
        {
           comisionMaria=acumuladorMaria *5/100;
        }

     }

     if(acumuladorLucrecia>5000)
     {
        comisionLucrecia=acumuladorLucrecia * 15/100;
     }
     else
     {
        if(acumuladorLucrecia>10000)
        {
           comisionLucrecia=acumuladorLucrecia * 20/100;
        }
        else
        {
           comisionLucrecia=acumuladorLucrecia *5/100;
        }
     }

     //d. El nombre del vendedor con menor comisión.
     if(comisionJuan<contadorMaria && contadorJuan<comisionLucrecia)
     {
        mensaje="Juan es el vendedor con menor comision";
     }
     if(comisionMaria<comisionLucrecia)
     {
        mensaje="Lucrecia es la vendedora con menor comision";
     }
     else
     {
        mensaje="Lucrecia es la vendedora con menor comosion";
     }

     document.write("El promedio de ventas de Juan es: " + promedioJuan +"%" + "<br>");
     document.write("El promedio de ventas de Maria es: " + promedioMaria +"%" + "<br>");
     document.write("El promedio de ventas de Lucrecia es: " + promedioLucrecia +"%" + "<br>");
     document.write("El importe mas barato es:" + importeBarato + " y el vendedor/a que lo vendio es: " + vendedorBarato + "<br>");
     document.write(mensaje + "<br>");

     /*
 a. Promedio de ventas por cada vendedor.
 b. Cantidad de perfumes que vendió María
 c. El importe mas barato junto con el vendedor que lo vendió.
 d. El nombre del vendedor con menor comisión.

     */


/*}
*/

/*
2. Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las 
personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
Nombre 
Edad (mayor o igual a 12)
Vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
Dosis (“P” en caso de ser la primera dosis o “S” en caso de ser la segunda dosis)
Genero (Femenino, Masculino)
Informar:
a- Promedio de edad de los que se vacunaron con la china.
b- Nombre y vacuna del masculino más joven.
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados 
e- Vacuna más inoculada

*/
/*function mostrar()
{
   var nombre;
   var edad;
   var vacuna;
   var dosis;
   var genero;
   var respuesta="si";
   var mensaje1;

   var acumuladorChina=0;
   var contadorChina=0;
   var acumuladorRusia=0;
   var acumuladorAmericana=0;
   var mensaje;
   var promedio;
   
   var flag=0;
   var edadMinima;
   var nombreMinimo;
   var vacunaMinima;

   var contadorMenorEdad=0;
   var porcentajeMenor;

   
   var contadorPrimer=0;
   var porcentaje;
   
   var acumuladorVacunas=0;


      do
      {
         nombre=prompt("Ingrese su nombre");


         edad=prompt("Ingrese edad"),
         edad=parseInt(edad);
            while(isNaN(edad) || edad<=12)
            {
              edad=prompt("Error mayor o igual a 12");
              edad=parseInt(edad);
            }   

         vacuna=prompt("ingrese vacuna rusa china o americana")
            while(vacuna!="rusa" && vacuna!="china" && vacuna!="americana")
            {
               vacuna=prompt("Error rusa china o americana");
            }

            //Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
            while((edad>12 && edad<17) && (vacuna != "americana"))
            {
               vacuna=prompt("Ingrese americana porque solo esta permitida las otras vacunas no")
            }

         dosis=prompt("Ingrese p para primer dosis o s para segunda dosis");
            while(dosis!="p" && dosis!="s")
            {
               dosis=prompt("Error ingrese p o s")
            }
         
         genero=prompt("Ingrese genero masculino o femenino");
            while(genero!="masculino" && genero!="femenino")
            {
               genero=prompt("Error");
            }

          

            //a- Promedio de edad de los que se vacunaron con la china.
            switch(vacuna)
            {
               case "rusa":
               acumuladorRusia=acumuladorRusia + vacuna;
               break;
               case "china":
               acumuladorChina=acumuladorChina + edad;
               contadorChina=contadorChina + 1;
               break;
               case "americana":
               acumuladorAmericana=acumuladorAmericana + vacuna;
               break;
            }

            //b- Nombre y vacuna del masculino más joven.
            if(genero="maculino")
            {
               if(flag==0 || edad<edadMinima)
               {
                  edadMinima=edad;
                  vacunaMinima=vacuna;
                  nombreMinimo=nombre;
                  flag=1;
               }
            }
         
         //c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
         if(vacuna=="americana" && edad<18)
         {
            contadorMenorEdad=contadorMenorEdad + 1;
         }

         //Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
         if(dosis=="p")
         {
           contadorPrimer=contadorPrimer + 1;
         }

         acumuladorVacunas=acumuladorVacunas +1;

         respuesta=prompt("quiere seguir ingresando datos si o no");
            while(!(respuesta=="si" || respuesta=="no"))
            {
               respuesta=prompt("Error si o no");
            }


      }while(respuesta=="si");

      promedio=acumuladorChina/contadorChina;

      porcentaje= (contadorPrimer * 100 ) / acumuladorVacunas;

      porcentajeMenor=(contadorMenorEdad * 100 ) / acumuladorVacunas;

      if(acumuladorRusia>acumuladorChina && acumuladorRusia>acumuladorAmericana)
      {
        mensaje="la vacuna rusa es la mas dada";
      }
      if(acumuladorChina>acumuladorAmericana)
      {
         mensaje="la vacuna china es la mas dada";
      }
      else
      { 
         mensaje="la vacuna americana es la mas dada";
      }
      

   document.write("El promedio de edad de los que se vacunaron con la china es : " + promedio + "<br>");
   document.write("El nombre de la personas masculina mas joven es " + nombreMinimo + " y la vacuna que se dio es " + vacunaMinima + "<br>");
   document.write("De las personas que recibieron la vacuna americana el porcentaje de menores de edad es " + porcentajeMenor + "<br>");
   document.write("Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados es " + porcentaje + "<br>");
   document.write(mensaje + "<br>");


      




}

*/
/*
3. Llegan vuelos con vacunas de distintos lugares del mundo
 Mientras el usuario quiera se debe registrar de cada vuelo:
 -Origen (“Asia”, “Europa”, “América”)
 -Cantidad de vacunas (entre 500000 y 2500000)
 -Costo del vuelo (entre 1 millón y 5 millones de pesos)
 Informar:
 a- El origen que envió menor cantidad de vacunas
 b- El total sin descuentos a pagar por los gastos de los viajes
 c- Si en total se recibieron mas de 10 millones de vacunas se hace
 un descuento de 25%, Si se recibieron entre 5 y 10 millones (inclusive) el
 descuento es del 15% con menor cantidad no hay descuento.
 Informar si hubo descuento de cuanto fue y el importe final con
 Descuento

*/
/*function mostrar()
{
   var origen;
   var cantidad;
   var costo;
   var respuesta="si";

   var acumuladorAsia=0;
   var acumuladorEuropa=0;
   var acumuladorAmerica=0;
   var acumuladorCostoAsia=0;
   var acumuladorCostoEuropa=0;
   var acumuladorCostoAmerica=0;
   var mensaje;


   var costoTotal;

   var descuento;
   var costoDesacuento;

      do
      {
         origen=prompt("Ingreseorigen asia europa o america");
            while(origen!="asia" && origen!="europa" && origen!="america");
            {
               origen=prompt("Error");
            }

         cantidad=prompt("Ingrese cantidad")
         cantidad=parseInt(cantidad);
            while(isNaN(cantidad) || cantidad<500000|| cantidad>2500000)
            {
               cantidad=prompt("No se puede menos de 500000 y ni mas de 2500000 vacunas");
               cantidad=parseInt(cantidad);
            }

         costo=prompt("Costo del vuelo es de 1 millon y 5 millones de pesos")
         costo=parseInt(costo);
            while(isNaN(costo) || costo<1000000 || costo>5000000)
            {
               costo=prompt("error Costo del vuelo es de 1 millon y 5 millones de pesos ")
               costo=parseInt(costo);
            }
         //a- El origen que envió menor cantidad de vacunas
         switch(origen)
         {
            case "asia":
            acumuladorAsia=acumuladorAsia + origen;
            acumuladorCostoAsia=acumuladorCostoAsia + costo;
            break;
            case "europa":
            acumuladorEuropa=acumuladorEuropa + origen;
            acumuladorCostoEuropa=acumuladorCostoEuropa + costo;
            break;
            case "america":
            acumuladorAmerica=acumuladorAmerica + origen;
            acumuladorCostoAmerica=acumuladorAmerica + costo;
            break;
         }

        respuesta=prompt("quiere seguir ingresando datos si o no");
        while(!(respuesta=="si" || respuesta=="no"))
        {
           respuesta=prompt("Error");
        }

      }while(respuesta=="si");

      costoTotal=acumuladorCostoAsia + acumuladorCostoEuropa + acumuladorCostoAmerica;
      
      //i en total se recibieron mas de 10 millones de vacunas se hace
      //un descuento de 25%,
      if(costo>1000000)
      {
        descuento= costoTotal * 25/100;
        costoDesacuento=costoTotal - descuento;
        //Si se recibieron entre 5 y 10 millones (inclusive) el
        //descuento es del 15%
        if(costo>500000)
        {
          descuento=costoTotal *15/100;
          costoDesacuento=costoTotal - descuento;
        }
      }

      if(acumuladorAsia<acumuladorEuropa && acumuladorAsia<acumuladorAmerica)
      {
         mensaje="Asia envio menos vacunas"
      }
      if(acumuladorEuropa<acumuladorAmerica)
      {
         mensaje="Europa mando menos vacunas";
      }
      else
      {
         mensaje="America mando menos vacunas";
      }

      document.write(mensaje + "<br>");
      document.write("El total sin descuentos a pagar por los gastos de los viajes es " + costoTotal + "<br>");
      document.write("Precio con descuento " + costoDesacuento + "<br>");


   
}
*/

/*Ejercicio 3: De la tarde
una agencia de viajes nos contacta para realizar el siguiente programa:
tomar pedidos hasta que el usuario quiera. Nombre, cantidad de días (validar que nos sea negativo ni 0),
precio por día (validar entre 1000 y 3000), lugar al que viajan (validar Córdoba, Mendoza, Entre ríos).

a) de las personas que viajan a Mendoza mostrar el promedio del importe total que se recaudó.
b) el importe total que recaudo Córdoba.
c) mostrar cuantas personas superaron los 15 días y fueron a entre ríos.*/
/*function mostrar()
{
   var nombre;
   var dias;
   var precio;
   var lugar;
   var respuesta="si";

   var acumuladorCordoba=0;
   var promedio;
   var acumuladorMendoza=0;
   var contadorMendoza=0;

   var contadorRios=0;

      do
      {
         nombre=prompt("Ingrese su nombre")

         dias=prompt("Ingrese cantidad de dias que no sea 0 ")
         dias=parseInt(dias);
            while(isNaN(dias) || dias<1)
            {
               dias=prompt("error")
               dias=parseInt(dias);
            }

         precio=prompt("Ingrese precio por dia")
         precio=parseInt(precio);
            while(isNaN(precio) || precio<1000 || precio>3000)
            {
               precio=prompt("Error es entre 1000 y 3000")
               precio=parseInt(precio);
            }
         
         lugar=prompt("Ingrese lugar cordoba , mendoza o entre rios")
            while(lugar!="cordoba" && lugar!="mendoza" && lugar!="entre rios")
            {
               lugar=prompt("error")
            }

         //a) de las personas que viajan a Mendoza mostrar el promedio del importe total que se recaudó.
         //b) el importe total que recaudo Córdoba.

         switch(lugar)
         {
            case "cordoba":
            acumuladorCordoba=acumuladorCordoba + precio;
            break;
            case "mendoza":
            acumuladorMendoza=acumuladorMendoza + precio;
            contadorMendoza=contadorMendoza + 1;
            break;
         }
         
         //c) mostrar cuantas personas superaron los 15 días y fueron a entre ríos.

         if(dias>15)
         {
            contadorRios=contadorRios + 1;
         }
         
         respuesta=prompt("Quiere seguir ingresando datos si o no");
            while(!(respuesta=="si" || respuesta=="no"))
            {
               respuesta=prompt("Error si o no");
            }

      }while(respuesta=="si");

      promedio=acumuladorMendoza/contadorMendoza;

      document.write("de las personas que viajan a Mendoza mostrar el promedio del importe total que se recaudó es " + promedio + "%" + "<br>");
      document.write("el importe total que recaudo Córdoba es " + acumuladorCordoba + "<br>");
      document.write("Las personas superaron los 15 días y fueron a entre ríos son " + contadorRios + "<br>");

}
/*

/*
Ejercicio 1:

el hospital mi pueblo nos pide realizar un programa para tomar los siguientes datos:
pedir el ingreso de datos hasta que el usuario quiera
vacunas aplicadas validar (0 para ninguna,1 para 1°dosis,2 para 2°dosis,3 para 3°dosis)
edad (validar que no sea negativo y no puede sobrepasar los 150 años)
doctor (validar su apellido debe ser (perez, lopez,diaz))
nombre del paciente.

a) la cantidad de pacientes que no tengan vacunas y sean mayor a 60 años.
b) el menor paciente que tenga 1 dosis o más, su nombre y su edad.
c)el doctor que más pacientes tuvo, sacar el promedio de edades.

*/
/*function mostrar()
{
   var vacunas;
   var edad;
   var doctor;
   var nombre;
   var respuesta="si";
   
   var acumuladorPerez=0;
   var acumuladorLopez=0;
   var acumuladorDiaz=0;
   var contadorPerez=0;
   var contadorLopez=0;
   var contadorDiaz=0;
   var promedio;
   var mensaje;

   var contadorSin=0;

   var flag=0;
   var edadMenor;
   var nombreMenor;
   
      do
      {
         vacunas=prompt("Ingrese 0 para ninguna , o 1 para 1 dosis o 2 para 2 dosis o 3 para 3 dosis")
         vacunas=parseInt(vacunas);
            while(vacunas!="0" && vacunas!="1" && vacunas!="2" && vacunas!="3");
            {
               vacunas=prompt("Error ingrese 0 , 1 , 2 ,3")
               vacunas=parseInt(vacunas);
            }
         
         edad=prompt("Ingrese edad");
         edad=parseInt(edad);
            while(isNaN(edad) || edad<1 || edad>150)
            {
               edad=prompt("Error es entre 0 y 150 años");
               edad=parseInt(edad);
            }

         doctor=prompt("Ingrese docotro perez , lopez o diaz");
            while(doctor!="perez" && doctor!="lopez" && doctor!="diaz")
            {
               doctor=prompt("Error");
            }

         nombre=prompt("Ingrese nombre");

         //c)el doctor que más pacientes tuvo, sacar el promedio de edades.


         //a) la cantidad de pacientes que no tengan vacunas y sean mayor a 60 años.

         if(vacunas==0 && edad>60)
         {
            contadorSin=contadorSin +1;
         }
         // el menor paciente que tenga 1 dosis o más, su nombre y su edad.
         else if(vacunas==1)
         {
            if(flag==0 || edad<edadMenor)
            {
              edadMenor=edad;
              nombreMenor=nombre;
              flag=1;
            }
            
         }

         switch(doctor)
         {
            case "perez":
            acumuladorPerez=acumuladorPerez + edad;
            contadorPerez=contadorPerez +1;
            break;
            case "lopez":
            acumuladorLopez= acumuladorLopez + edad;
            contadorLopez=contadorLopez + 1;
            break;
            case "diaz":
            acumuladorDiaz=acumuladorDiaz + edad;
            contadorDiaz=contadorDiaz + 1;
            break;
         }

          respuesta=prompt("Quiere seguir ingresando datos si o no")
            while(!(respuesta=="si" || respuesta=="no"))
            {
               respuesta=prompt("Error si o no");
            }
      }while(respuesta=="si");

      if(acumuladorPerez>acumuladorLopez && acumuladorPerez>acumuladorDiaz)
      {
         promedio=acumuladorPerez/contadorPerez
         mensaje="Perezel es doctor que mas pacientes tuvo";
      }
      else if(acumuladorLopez>acumuladorDiaz)
      {
         promedio=acumuladorLopez/contadorLopez;
         mensaje="Lopez es el doctor que mas pacientes tuvo";
      }
      else
      {
         promedio=acumuladorDiaz/contadorDiaz;
         mensaje="Diaz es el doctor que mas pacientes tuvo";
      }

      document.write("la cantidad de pacientes que no tengan vacunas y sean mayor a 60 años es " + contadorSin + "<br>");
      document.write("El menor pacientes con 1 dosis se llama " + nombreMenor + " y su edad " + edadMenor + "<br>");
      document.write(mensaje + " y el promedio edades es " + promedio + "<br>");

}
*/

/*
Ejercicio 2:
una pinturería solicita nuestros servicios para desarrollar el siguiente programa:
tomar 5 pedidos

cantidad de litros validar (mayor a 0).
precio por litro validar (no puede ser menor a 4000).
marca validar (tersuave, colorin, plavicon).
Color.

a) la cantidad de litros que se compró en total.
b) de la compra más cara, mostrar su color y marca.
c)mostrar la cantidad total de importe por las ventas y si supera los 50000 mostrar un mensaje el siguiente mensaje:” usted es un gran vendedor”.

*/
/*function mostrar()
{
  var litros;
  var precio;
  var marca;
  var color;
  var i=0;

  var acumuladorLitros=0;

  var mensaje;

  var precioMaximo;
  var colorMaximo;
  var marcaMaxima;
  var flag=0;

  var acumuladorPrecios=0;
  var contadorPrecios=0;

   while(i <5)
   {
      litros=prompt("Ingrese litros")
      litros=parseInt(litros);
         while(isNaN(litros) || litros<1)
         {
            litros=prompt("error")
            litros=parseInt(litros);
         }

      precio=prompt("Ingrese precio")
      precio=parseInt(precio);
         while(isNaN(precio) || precio<4000)
         {
            precio=prompt("Error debe ser mayor a 40000")
            precio=parseInt(precio);
         }

      marca=prompt("Ingrese mara tersuave , colorin o plavicon");
            while(marca!="tersuave" && marca!="colorin" && marca!="plavicon")
            {
               marca=prompt("Error");
            }

         color=prompt("Ingrese color");

      //a) la cantidad de litros que se compró en total.
      acumuladorLitros=acumuladorLitros + litros;

     
      //c)mostrar la cantidad total de importe por las ventas 
      acumuladorPrecios=acumuladorPrecios + precio ;
      contadorPrecios=contadorPrecios+1;

       //b) de la compra más cara, mostrar su color y marca.
       if(flag==0 || precio>precioMaximo)
       {
          precioMaximo=precio;
          colorMaximo=color;
          marcaMaxima=marca;
          flag=1;
       }
 

    i=i +1;

   }

   if(acumuladorPrecios>50000)
   {
      mensaje= "Usted es un gran vendedor";
   }

   document.write("La cantidad de litros total es " + acumuladorLitros + "<br>");
   document.write("El color de la compra mas cara es " + colorMaximo + " y la marca es " + marcaMaxima + "<br>" );
   document.write("El total de la compra es " + acumuladorPrecios + "<br>");

   alert(mensaje);
}
*/


/*
Realizar el desarrollo de una plataforma web que permita organizar recorridos para 
recoletar aceites en restaurantes.El ingreso sera hasta que el usuario quiera. 

La solución será planteada sobre una arquitectura flexible que permita
a futuro realizar cambios, mejoras y sumar nuevas funcionalidades que 
potencien las plataformas.

se deben realizar  ingresos:
	Zonas(CABA-BuenosAires-GBA)
	Nombre de Choferes
	Edad del chofer(mayor a 18 años)
	Clientes(McDonals-Rodicio-SigaALaVaca)
	CantidadDeAceite(entre 800 y 1500 Litros)
debemos informar:
a)La zona mas visitada 
B)El nombre del chofer mas joven
C)La mayor cantidad de aceite recolectada en Rodicio

*/
/*function mostrar()
{
   var zona;
   var nombre;
   var edad;
   var clientes;
   var cantidadAceite;
   var respuesta="si";

   var contadorCaba=0;
   var contadorBuenos=0;
   var contadorGba=0;
   var mensaje;

   var flag=0;
   var edadMinima;
   var nombreMinimo;

   var acumuladorRodicio=0;


      do
      {
         zona=prompt("Ingrese zona caba-buenos aires o gba")
            while(zona!="caba" && zona!="buenos aires" && zona!="gba")
            { 
               zona=prompt("Error")
               
            } 

         nombre=prompt("Ingrese nombre del chofer");

         edad=prompt("Ingrese edad del chofer");
         edad=parseInt(edad);
            while(isNaN(edad) || edad<18)
            {
               edad=prompt("Error debe ser mayor a 18 años");
               edad=parseInt(edad);
            }

         clientes=prompt("Ingrese clientes Mcdonals,rodicio o sigaALaVaca");
            while(clientes!="mcdonals" && clientes!="rodicio" && clientes!="sigaAlaVaca")
            {
               clientes=prompt("Error");
               
            }

            cantidadAceite=prompt("Ingrese cantidad de aceite entre 800 y 1500 litros");
            cantidadAceite=parseInt(cantidadAceite);
               while(isNaN(cantidadAceite) || cantidadAceite<800 || cantidadAceite>1500)
               {
                  cantidadAceite=prompt("Errro")
                  cantidadAceite=parseInt(cantidadAceite);

               }
            
            //a)La zona mas visitada
            switch(zona)
            {
               case "caba":
               contadorCaba=contadorCaba + 1;
               break;
               case "buenos aires":
               contadorBuenos=contadorBuenos + 1;
               break;
               case "gba":
               contadorGba=contadorGba + 1;
               break;
            }

            //B)El nombre del chofer mas joven
            if(flag==0 || edad<edadMinima)
            {
               edadMinima=edad;
               nombreMinimo=nombre;
               flag=1;
            }

            //C)La mayor cantidad de aceite recolectada en Rodicio
            if(clientes=="rodicio")
            {
               acumuladorRodicio=acumuladorRodicio + cantidadAceite;
            }

            respuesta=prompt("Quiere seguir ingresando datos si o no")
               while(!(respuesta=="si" || respuesta=="no"))
               {
                  respuesta=prompt("Error si o no");
               }

      }while(respuesta=="si");

      if(contadorCaba>contadorBuenos && contadorCaba>contadorGba)
      {
        mensaje="Caba es la zona mas visitada";
      }
      else if(contadorBuenos>contadorGba)
      {
         mensaje="Buenos Aires es la zona mas visitada";
      }
      else
      {
         mensaje="GBA es la zona mas visitada";
      }

      document.write(mensaje + "<br>");
      document.write("El nombre del chofer mas joven es " + nombreMinimo + "<br>");
      document.write("La cantidad de aceite que acumulo Rodicio es " + acumuladorRodicio + "<br>");
}
*/

/*
1-alturas en centimetros(validar entre 0 y 250) ,
2-la edad (validar)
3-temperatura(validar)
4-el sexo(validar el sexo “f” o “m” o "nb")
5-nota (validar)
6-nombre
1ERA PARTE
informar :
a)El promedio de las alturas totales.X
b)Cantidad de personas de cada sexo.X
c)Cantidad de aprobados(más de 6)
d)La cantidad de mujeres que su altura supere
los 190 centímetros.

2-parte 
informar :
a)Cuántas mujeres hay .
b)Cuántos con fiebre y cuantos sin fiebre.
c)el promedio de edad por sexo.

3-parte
informar :
d)el primer alumno aprobado
e)el nombre y edad la máxima temperatura 
f)la altura y nota  del no binario mas joven
*/
/*function mostrar()
{
 var alturas;
 var edad;
 var genero;
 var nota;
 var nombre;
 var respuesta="si";
 var temperatura;

 var maximaTemperatura;
 var edadMaxima;
 var nombreMaximo;
 var flag=0;

 var flagUno=0;
 var alturaMinimo;
 var notaMinima;
 var edadMinima;

 var contadorFiebre=0;
 var contadorSinFiebre=0;

 var acumuladorAlturas=0;
 var contadorAlturas=0;
 var promedio;

 var contadorGenerosF=0;
 var contadorGenerosM=0;
 var contadorGenerosNb=0;
 var acumuladorGenerosF=0;
 var acumuladorGenerosM=0;
 var acumuladorGenerosNb=0;
 var promedioGenerosF;
 var promedioGenerosM;
 var promedioGenerosNb;
 

 var contadorNotas=0;

 var contadorMujeres=0;

 var i=0;
 var primerAprobado=0;

   do
   {
      alturas=prompt("Ingrese altura");
      alturas=parseInt(alturas);
         while(isNaN(alturas) || alturas<1 || alturas>250)
         {
            alturas=prompt("Error es entre 0 y 250");
            alturas=parseInt(alturas);
         }

      edad=prompt("Ingrese edad");
      edad=parseInt(edad);
      while(isNaN(edad) || edad<1 || edad>100)
      {
         edad=prompt("Error es entre 1 y 100 años");
         edad=parseInt(edad);
      }

      temperatura=prompt("Ingrese su temperatura");
      temperatura=parseInt(temperatura);
         while(isNaN(temperatura) || temperatura<36)
         {
            temperatura=prompt("Error tiene que ser mayor a 36");
            temperatura=parseInt(temperatura);
         }
      
      //b)Cuántos con fiebre y cuantos sin fiebre.
      if(temperatura>36)
      {
         contadorFiebre=contadorFiebre + 1;
      }
      else 
      {
         contadorSinFiebre=contadorSinFiebre + 1;
      }

      genero=prompt("Ingrese genero f o m o nb")
         while(genero!="f" && genero!="m" && genero!="nb")
         {
            genero=prompt("Error");
         }

      nota=prompt("Ingrese nota")
      nota=parseInt(nota);
         while(isNaN(nota) || nota<1 || nota>10)
         {
            nota=prompt("Error la nota es entre 1 y 10");
            nota=parseInt(nota);
         }

      nombre=prompt("Ingrese nombre");

      //a)El promedio de las alturas totales.X
      acumuladorAlturas=acumuladorAlturas + alturas;
      contadorAlturas=contadorAlturas + 1;

      //Cantidad de personas de cada sexo.X
      //c)el promedio de edad por sexo.
      //a)Cuántas mujeres hay 
      switch(genero)
      {
         case "m":
         acumuladorGenerosM=acumuladorGenerosM + edad;
         contadorGenerosM=contadorGenerosM +1;
         break;
         case "f":
         acumuladorGenerosF=acumuladorGenerosF + edad;
         contadorGenerosF=contadorGenerosF + 1;
         break;
         case "nb":
         acumuladorGenerosNb=acumuladorGenerosNb + edad;
         contadorGenerosNb=contadorGenerosNb + 1;
         break;
      }
      
      //c)Cantidad de aprobados(más de 6)
      if(nota>6)
      {
         contadorNotas=contadorNotas + 1;
      }
       
      //d)La cantidad de mujeres que su altura supere
      //los 190 centímetros.
      if(genero=="f" && alturas>"190")
      {
         contadorMujeres=contadorMujeres + 1;
      }

      //el nombre y edad la máxima temperatura 
      if(flag==0 || temperatura>maximaTemperatura)
      {
         maximaTemperatura=temperatura;
         nombreMaximo=nombre;
         edadMaxima=edad;
         flag=1;
      }

      //d)el primer alumno aprobado
      if(nota>5 && i==0)
      {
       primerAprobado=primerAprobado + nombre;
        i=i +1;
      }

      //f)la altura y nota  del no binario mas joven
      if(genero=="nb")
      { 
         if(flagUno==0 || edad<edadMinima)
         {
            edadMaxima=edad;
            alturaMinimo=alturas;
            notaMinima=nota;
            flagUno=1;
         }
      }
      

      respuesta=prompt("Desea seguir ingresando datos si o no");
         while(!(respuesta=="si" || respuesta=="no"))
         {
            respuesta=prompt("Error si o no");
         }
   }while(respuesta=="si");

   promedioGeneros= acumuladorGenerosM/contadorGenerosM;
   promedioGenerosF= acumuladorGenerosF/contadorGenerosF;
   promedioGenerosNb= acumuladorGenerosNb/acumuladorGenerosNb;
   promedioGenerosM= acumuladorGenerosM/contadorGenerosM;
   
   promedio=acumuladorAlturas/contadorAlturas;

   document.write("El promedio de las alturas totales es: " + promedio + "<br>");
   document.write("La cantidad de personas del genero m es: " + contadorGenerosM + "<br>");
   document.write("La cantidad de personas del genero f es: " + contadorGenerosF + "<br>");
   document.write("La cantidad de personas del genero nb es: " + contadorGenerosNb + "<br>");
   document.write("Cantidad de aprobados(más de 6) son: " + contadorNotas + "<br>");
   document.write("La cantidad de mujeres que su altura supere los 190 centímetros son: " + contadorMujeres + "<br>");
   document.write("El promedio de edad de F es: " + promedioGenerosF + "<br>");
   document.write("El promedio de edad de M es: " + promedioGenerosM + "<br>");
   document.write("El promedio de edad de Nb es: " + promedioGenerosNb + "<br>");
   document.write("La cantidad de personas con fiebre es: " + contadorFiebre + "<br>");
   document.write("La cantidad de personas si fibe es: " + contadorSinFiebre + "<br>");
   document.write("La altura y la nota de la personas no binaria es: " + alturaMinimo + " y la nota es de:  " + notaMinima + "<br>");
   document.write("La cantidad de mujeres es: " + contadorGenerosF + "<br>");
   document.write("la edad de la personas con mas temepratura es: " + edadMaxima + " y la el nombre es: " + nombreMaximo + "<br>");
   document.write("El nombre del primer aprobado es: " + primerAprobado + "<br>");

}
/*

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
   var apellido;
   var obraSocial;
   var tratamiento;
   var edad;
   var i=0;
   var mensaje;

   var acumuladorBrackets=0;
   var contadorBrackets=0;
   var promedioBrackets;

   var contadorIoma=0;
   var contadorOsde=0;
   var contadorOmint=0;

   var edadMinima;
   var apellidoMinimo;
   var flag=0;

   while(i<5)
   {
      apellido=prompt("Ingrese apellido");

      obraSocial=prompt("Ingrese obra oscial Ioma , Osde , Omint");
         while(obraSocial!="Ioma" && obraSocial!="Osde" && obraSocial!="Omint")
         {
            obraSocial=prompt("Error");
         }

      tratamiento=prompt("Ingrese tratamiento Extraccion , Caries  o Brackets");
     
         while(tratamiento!="Extraccion" && tratamiento!="Caries" && tratamiento!="Brackets")
         {
            tratamiento=prompt("Error");
         }

      edad=prompt("Ingrese edad");
      edad=parseInt(edad);
         while(isNaN(edad) || edad<0 || edad>150)
         {
            edad=prompt("Error es entre 0 y 150 años inclusive");
            edad=parseInt(edad);
         }
      
      //a) Promedio de edad de los que utilizaron Brackets.
      if(tratamiento=="Brackets")
      {
         acumuladorBrackets=acumuladorBrackets + edad;
         contadorBrackets=contadorBrackets + 1;
      }
      
      //b) La obra social más atendida.
      switch(obraSocial)
      {
         case "Ioma":
         contadorIoma=contadorIoma + 1;
         break;
         case "Osde":
         contadorOsde=contadorOsde + 1;
         break;
         case "Omint":
         contadorOmint=contadorOmint + 1;
         break;
      }
      
      //c) El apellido de la persona más joven con caries.
      if(tratamiento=="Caries")
      {
         if(flag==0 || edad<edadMinima)
         {
            edadMinima=edad;
            apellidoMinimo=apellido;
            flag=1;
         }
      }

    i=i +1;
   }

   
   promedioBrackets=acumuladorBrackets/contadorBrackets;


   if(contadorIoma>contadorOsde && contadorIoma>contadorOmint)
   {
     mensaje="Ioma es la obra social mas atendida";
   }
   else if(contadorOsde>contadorOmint)
   {
      mensaje="Osde es la bora social mas atendida";
   }
   else
   {
      mensaje="Omint es la obra social mas atendida";
   }

   document.write(mensaje + "<br>");
   document.write("El apellido de la personas mas joven con caries es: " + apellidoMinimo + "<br>");
   document.write("El promedio de edad de las personas con brackets es: " + promedioBrackets + "<br>");
}
*/



/*Ejercicio 2
La aerolínea UTN viajes nos pide generar un software para vender sus packs de viajes, la carga de datos pedirá lo
siguiente:
- Nombre del piloto.
- Destino (“Ushuaia”, “Córdoba” o ”Jujuy”).
- Cantidad de personas en el avión (tiene que ser mayor a 0 y menor 250).
- Tipo de clase en la que viaja (promocional, turista, ejecutiva).
Debemos informar:
a) La clase con más pasajeros.
b) El nombre del piloto que lleva más pasajeros a Ushuaia.
c) El promedio de personas que usan la clase Ejecutiva.
*/
/*function mostrar()
{
  var nombre;
  var destino;
  var cantidad;
  var tipo;
  var respuesta="si";

  var contadorPromocional=0;
  var contadorTurista=0;
  var contadorEjecutiva=0;
  var acumuladorEjecutiva=0;
  var promedioEjectuvia;
  var mensaje;

  var flag=0;
  var maximo;
  var nombreMaximo;

  do
  {
     nombre=prompt("Ingrese nombre del piloto");

     destino=prompt("Ingrese destino ushuaia, cordoba o jujuy");
         while(destino!="ushuaia" && destino!="cordoba" && destino!="jujuy")
         {
            destino=prompt("Error");
         }

      cantidad=prompt("Ingrese cantidad de personas");
      cantidad=parseInt(cantidad);
         while(isNaN(cantidad) || cantidad<0 || cantidad>250)
         {
            cantidad=prompt("Error tiene que ser mayor a 0 y menor a 250 personas");
            cantidad=parseInt(cantidad);

         }

      tipo=prompt("Ingreze tipo promocional, turista, ejecutiva");
         while(tipo!="promocional" && tipo!="turista" && tipo!="ejecutiva")
         {
            tipo=prompt("Error");
         }

      //a) La clase con más pasajeros.
      //c) El promedio de personas que usan la clase Ejecutiva.
      switch(tipo)
      {
         case "promocional":
         contadorPromocional=contadorPromocional + 1;
         break;
         case "turista":
         contadorTurista=contadorTurista + 1;
         break;
         case "ejecutiva":
         contadorEjecutiva=contadorEjecutiva + 1;
         acumuladorEjecutiva=acumuladorEjecutiva + cantidad;
         break;
      }

      //b) El nombre del piloto que lleva más pasajeros a Ushuaia.
      if(destino=="ushuaia" && (flag==0 || cantidad>maximo))
      {
         maximo=cantidad;
         nombreMaximo=nombre;
         flag=1;
      }

      respuesta=prompt("Quiere seguir ingresando datos si o no");
         while(!(respuesta=="si" || respuesta=="no"))
         {
            respuesta=prompt("Error");
         }
  }while(respuesta=="si");

   promedioEjectuvia=acumuladorEjecutiva/contadorEjecutiva;

   if(contadorPromocional>contadorTurista && contadorPromocional>contadorEjecutiva)
   {
     mensaje="La clase promocional es la que mas cantidad de personas hay";
   }
   else if(contadorTurista>contadorEjecutiva)
   {
      mensaje="La clase turista es la que mas cantidad de personas hay";
   }
   else
   {
      mensaje="La clase ejecutiva es la que mas cantidad de personas hay";
   }

   document.write(mensaje + "<br>");
   document.write("El nombre del piloto que llevo mas personas a ushuaia es: " + nombreMaximo + "<br>");
   document.write("El promedio de la clase ejecutiva es: " + promedioEjectuvia + "<br>"); 
 
} 
*/
function mostrar()
{
   var dato;

   dato=prompt("Ingrese algo");

   alert(dato); 
}

