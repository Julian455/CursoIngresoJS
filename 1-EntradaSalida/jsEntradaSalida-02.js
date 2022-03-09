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

   var contadorMax=0;
   var flagUno=0;
   var edadMinima;
   var nombreMinimo;
   var acuEdadPerez=0;
   var acuEdadLopez=0;
   var acuEdadDiaz=0;
   var contadorPerez=0;
   var contadorLopez=0;
   var contadorDiaz=0,
   var promedioEdad;
   var mensaje;

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

         if(vacunas=="0")
         {
            if(edad>59)
            {
               contadoMax++;
            }
         }
         //b) el menor paciente que tenga 1 dosis o más, su nombre y su edad.
         else
         {
            if(flag==0 || edad<edadMinima)
            {
              edadMinima=edad;
              nombreMinimo=nombrePaciente;
              flagUno=1;

            }
         }
         
         //c)el doctor que más pacientes tuvo, sacar el promedio de edades.
         switch(doctor)
         {
            case "perez":
            acumuladorEdadPerez=acumuladorEdadPerez+edad;
            contadorPerez++;
            break;
            case "lopez":
            acumuladorEdadLopez=acumuladorEdadLopez+edad;
            contadorLopez++;
            break;
            case "diaz"
            acumuladorEdadDiaz=acumuladorEdadDiaz+edad;
            contadorDiaz++;
            break;
         }
          
           respuesta=prompt("Desea serguir ingresando datos si/no")
               while(!(respuesta=="si" || respuesta=="no"))
               {
                  respuesta=prompt("Error");
               }

      }while(respuesta=="si");

      if(contadorPerez>contadorLopez && contadorPerez>contadorDiaz)
      {
         promedioEdad=acumuladorEdadPerez/contadorPerez;
         mensaje=" doctor perez es el que mas pacientes tuvo";

      }
      else if(contadorLopez>contadorDiaz)
      {
         promedioEdad=acumuladorEdadDiaz/contadorDiaz;
         mensaje="docotro lopez es el que mas pacientes tuvo";
      }
      else
      {
         promedioEdad=acumuladorEdadDiaz/contadorDiaz;
         mensaje="doctor diazes el que mas pacientes tuvo";
      }

      document.write("La cantidad de paciente no vacunados que son mayor a 60 años son " + contadorMax + "<br>" );
      document.write("El nombre dle menor pacientes es " + nombreMinimo + "y su edad es de " + edadMinima + ">br>");
      document.write("el promedio de edad es " + promedioEdad + ". El " + mensaje + "<br>");




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