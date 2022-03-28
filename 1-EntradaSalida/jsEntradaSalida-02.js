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
function mostrar()
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

   var acumuladorMenorEdad=0;
   var contadorMenorEdad=0;
   var porcentajeMenor;

   
   var acumuladorPrimer=0;
   var contadorPrimer=0;
   var porcentaje;

  
   
  

   

   

      do
      {
         nombre=prompt("Ingrese su nombre");


         edad=prompt("Ingrese edad"),
         edad=parseInt(edad);
            while(isNaN(edad) || edad>=12)
            {
              edad=prompt("Error mayor o igual a 12");
              edad=parseInt(edad);
            }
            if(edad>12 && edad<17)
            {
               mensaje1="entre 12 y 17 años no se da la vacuna americana";
            }            

         vacuna=prompt("ingrese vacuna rusa china o americana")
            while(vacuna!="rusa" && vacuna!="americana" && vacuna!="americana")
            {
               vacuna=prompt("Error rusa china o americana");
            }

         dosis=prompt("Ingrese p para primer dosis o s para segunda dosis");
            while(dosis!="p" && dosis!="s")
            {
               dosis=prompt("Error ingrese p o s")
            }
         
         genero=prompt("Ingrese genero masculino o femenimo (m o f)");
            while(genero!="masculino" && genero!="femenino");
            {
               genero=prompt("Error")
            }

            //a- Promedio de edad de los que se vacunaron con la china.
            switch(vacuna)
            {
               case "rusa":
               acumuladorRusia=acumuladorRusia + vacuna;
               break;
               case "china":
               acumuladorChina=acumuladorChina + vacuna;
               contadorChina=contadorChina + 1;
               break;
               case "americana":
               acumuladorAmericana=acumuladorAmericana + vacuna;
               break;
            }

            //b- Nombre y vacuna del masculino más joven.
            if(flag==0 || edad<edadMinima)
            {
               edadMinima=edad;
               vacunaMinima=vacuna;
               nombreMinimo=nombre;
            }
         
         //c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
         if(vacuna=="americana")
         {
            acumuladorMenorEdad=acumuladorMenorEdad + edad;
            contadorMenorEdad=contadorMenorEdad + 1;
         }

         //Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
         if(dosis=="p")
         {
           acumuladorPrimer=acumuladorPrimer + dosis;
           contadorPrimer=contadorPrimer + 1;
         }

         respuesta=prompt("quiere seguir ingresando datos si o no");
            while(!(respuesta=="si" || respuesta=="no"))
            {
               respuesta=prompt("Error si o no");
            }
      }while(respuesta=="si");

      promedio=acumuladorChina/contadorChina;

      porcentaje= acumuladorPrimer/contadorPrimer

      porcentajeMenor=acumuladorMenorEdad/contadorMenorEdad;

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


      


/*
a- Promedio de edad de los que se vacunaron con la china.
b- Nombre y vacuna del masculino más joven.
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados 
e- Vacuna más inoculada
*/
}
