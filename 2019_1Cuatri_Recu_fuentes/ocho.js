/*
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos de un vehiculo, 
un color (rojo verde o amarillo) y un valor entre 0 y 10000 hasta que el usuario quiera
 e informar al terminar el ingreso por document.write:
a) La cantida de rojos
b) La cantidad de rojos con precio mayor a 5000
c) La cantidad de vehiculos con precio inferior a 5000
d) El promedio de todos los vehiculos ingresados.
e) El mas caro y su color
*/
/*function mostrar()
{
  var color;
  var valor;
  var respuesta="si";

  var contadorRojos=0;

  var contadorRojosDos=0;

  var contadorIferior=0;

  var acumuladorAutos=0;
  var contadorAutos=0;
  var promedio;

  var precioMax;
  var colorMax
  var flag=0;
  
  

    do
    {
        color=prompt("Ingrese color rojo , verde o amarillo")
            while(color!="rojo" && color!="verde" && color!="amarillo")
            {
                color=prompt("Error")
            }

        valor=prompt("Ingrese valor");
        valor=parseInt(valor);
            while(isNaN(valor) || valor<1 || valor> 10000)
            {
                valor=prompt("error es entre 0 y 10000")
                valor=parseInt(valor);
            }

        //a) La cantida de rojos
        if(color =="rojo")
        {
            contadorRojos=contadorRojos + 1;
        }
        
        //) La cantidad de rojos con precio mayor a 5000
        if(color=="rojo" && valor>5000)
        {
          contadorRojosDos=contadorRojos + 1;
        }

        //c) La cantidad de vehiculos con precio inferior a 5000
        if(valor<5000)
        {
           contadorIferior=contadorIferior + 1;
        }
      
        //d) El promedio de todos los vehiculos ingresados.
        acumuladorAutos=acumuladorAutos + 1;
        contadorAutos=contadorAutos + 1;

        //e) El mas caro y su color
        if(flag==0 || valor>precioMax)
        {
            precioMax=valor;
            colorMax=color;
        }

        respuesta=prompt("Quiere seguir ingresando datos si o no");
            while(!(respuesta=="si"|| respuesta=="no"))
            {
                respuesta=prompt("Error si o no");
            }
    }while(respuesta=="si");

    promedio=acumuladorAutos/contadorAutos;

    document.write("La cantidad de rojos es: " + contadorRojos + "<br>");
    document.write("La cantidad de autos rojos que supera los 5000 es: " + contadorRojosDos + "<br>");
    document.write("La cantidad de autos que su valor es inferior a 5000 es: " + contadorIferior + "<br>" );
    document.write("La promedio de autos totales es: " +  promedio + "<br>");
    document.write("El autos mas caro vale " + precioMax + " y su color es: " + colorMax + "<br>");
}
*/

/*
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos de un vehiculo,
 un color (rojo verde o amarillo) y un valor entre 0 y 10000 hasta que el usuario quiera 
 e informar al terminar el ingreso por document.write:
a) La cantida de rojos
b) La cantidad de rojos con precio mayor a 5000
c) La cantidad de vehiculos con precio inferior a 5000
d) El promedio de todos los vehiculos ingresados.
e) El mas caro y su color

*/
function mostrar()
{
    var color;
    var valor;
    var respuesta="si";

    var contadorRojos=0;

    var contadorIferior=0;

    var acumuladorAutos=0;
    var contadorAutos=0;
    var promedio;

    var valorMax;
    var flag=0;
    var colorMax;

    do
    {
        color=prompt("Ingrese color rojo, verde o amarillo");
            while(color!="rojo" && color!="verde" && color!="amarillo")
            {
                color=prompt("Error rojo, verde o amarillo");
            }

        valor=prompt("Ingrese valor");
        valor=parseInt(valor);
            while(isNaN(valor) || valor<0 || valor>10000)
            {
                valor=prompt("Error el valor es entre 0 y 10000");
                valor=parseInt(valor);
            }

        //a) La cantida de rojos
        //b) La cantidad de rojos con precio mayor a 5000
        if(color=="rojo" && valor>5000)
        {
            contadorRojos=contadorRojos + 1;
        }

        //c) La cantidad de vehiculos con precio inferior a 5000
        if(valor<5000)
        {
            contadorIferior=contadorIferior + 1;
        }

        //d) El promedio de todos los vehiculos ingresados.
        acumuladorAutos=acumuladorAutos + 1;
        contadorAutos=contadorAutos + 1;

        //e) El mas caro y su color
        if(flag==0 || valor>valorMax)
        {
            valorMax=valor;
            colorMax=color;
            flag=1;
        }
        
        respuesta=prompt("Quiere seguir ingresando datos si o no");
            while(!(respuesta=="si" || respuesta=="no"));

       
    }while(respuesta=="si");

    promedio=acumuladorAutos/contadorAutos;

    document.write("La cantida de rojos es: " + contadorRojos + "<br>");
    document.write("La cantidad de rojos con precio mayor a 5000 es: " + contadorRojos + "<br>");
    document.write("La cantidad de vehiculos con precio inferior a 5000 es: " + contadorIferior + "<br>");
    document.write("El promedio de todos los vehiculos ingresados es: " + promedio + "<br>");
    document.write("El mas caros y su color es: " + colorMax + "<br>");


}
