/*
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas 
(validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 
alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.

*/

function mostrar()
{
  var notas;
  var genero;
  var i=0;
  
  var acumuladorNotas=0;
  var contadorNotas=0;
  var promedio;

  var flag=0;
  var notaMinima;
  var generoMinimo;

  var contadorVarones=0; 

    while(i<5)
    {
        notas=prompt("Ingrese nota");
        notas=parseInt(notas);
            while(isNaN(notas) || notas<0 || notas>10)
            {
                notas=prompt("Error es entre 0 y 10");
                notas=parseInt(notas);
            }
        genero=prompt("Ingrese genero f o m")
            while(genero!="f" && genero!="m")
            {
                genero=prompt("Error");
            }

        //b) La nota más baja y el sexo de esa persona.
        if(flag==0 || notas<notaMinima)
        {
           notaMinima=notas;
           generoMinimo=genero;
           flag=1;
        }
         
         //a) El promedio de las notas totales.
         acumuladorNotas=acumuladorNotas + notas;
         contadorNotas=contadorNotas + 1;

         

        //c) La cantidad de varones que su nota haya sido mayor o igual a 6.
        if(genero=="m")
        {   
            if(notas>=6)
            {
                contadorVarones=contadorVarones + 1;
            }
            
        }

        i=i + 1;
    }

    promedio=acumuladorNotas/contadorNotas;

    document.write("El promedio de notas es: " + promedio + "<br>");
    document.write("La nota mas baja es: " + notaMinima + " y el genero es: " + generoMinimo + "<br>");
    document.write("La cantidad de varones que su nota es mayor o igual a 6 son: " + contadorVarones + "<br>");

    
}


