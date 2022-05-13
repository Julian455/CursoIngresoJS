/*
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) ,
 el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino
*/function mostrar()
{
 var nombre;
 var edad;
 var genero;
 var nota;
 var respuesta="si";

 var contadorVarones=0;

 var acumuladorNotas=0;
 var contadorNotas=0;
 var promedioMenor;
 
 var acumuladorAdolecentes=0;
 var contadorAdolecentes=0;
 var promedioAdolecentes;

 var acumuladorMayor=0;
 var contadorMayor=0;
 var promedioMayor;

 var acumuldorF=0;
 var contadorF=0;
 var promedioF;
 var acumuladorM=0;
 var contadorM=0;
 var promedioM;


    do
    {
        nombre=prompt("Ingrese nombre");

        edad=prompt("Ingrese edad");
        edad=parseInt(edad);
            while(isNaN(edad) || edad<1 || edad>50)
            {
              edad=prompt("Error es entre 1 y 50 años");
              edad=parseInt(edad);
            }

        genero=prompt("Ingrese genero f o m");
            while(genero!="f" && genero!="m")
            {
                genero=prompt("Error");
            }

        nota=prompt("Ingrese nota");
        nota=parseInt(nota);
            while(isNaN(nota) || nombre<1 || nombre>10)
            {
                nota=prompt("Error es entre 1 y 10 la nota");
                nota=parseInt(nota);
            }

        //a) La cantidad de varones aprobados
        if(genero=="m")
        {
            if(nota>6)
            {
                contadorVarones=contadorVarones + 1;
            }
        }

        //b) El promedio de notas de los menores de edad
        if(edad<12)
        {
            acumuladorNotas=acumuladorNotas + nota;
            contadorNotas=contadorNotas + 1;
        }

        //c) El promedio de notas de los adolescentes.
        if(edad>13 || edad<18)
        {
          acumuladorAdolecentes=acumuladorAdolecentes + nota;
          contadorAdolecentes=contadorAdolecentes + 1;
        }

        //d) El promedio de notas de los mayores
        if(edad>18)
        {
            acumuladorMayor=acumuladorMayor + nota;
            contadorMayor=contadorMayor + 1;
        }

        //f) El promedio de notas por sexo masculino y femenino
        if(genero=="f")
        {
            acumuldorF=acumuldorF + nota;
            contadorF=contadorF + 1;
        }
        if(genero=="m")
        {
            acumuladorM=acumuladorM + nota;
            contadorM=contadorM + 1;
        }

        respuesta=prompt("Desea seguir ingresando datos si o no");
            while(!(respuesta=="si" || respuesta=="no"))
            {
                respuesta=prompt("Error si o no");
            }


    }while(respuesta=="si");

    promedioMenor=acumuladorNotas/contadorNotas;

    promedioAdolecentes=acumuladorAdolecentes/contadorAdolecentes;

    promedioMayor=acumuladorMayor/contadorMayor;

    promedioF=acumuldorF/contadorF;

    promedioM=acumuladorM/contadorM;

    document.write("La cantidad de varones aprobados es: " + contadorVarones + "<br>"); 
    document.write("El promedio de notas de los menores de edad es: " + promedioMenor + "<br>");
    document.write("El promedio de notas de los adolescentes es: " + promedioAdolecentes + "<br>");
    document.write("El promedio de notas de los mayores es: " + promedioMayor + "<br>");
    document.write("El promedio de notas por sexo masculino es: " + promedioM + " y femenino es: " + promedioF + "<br>");

}
