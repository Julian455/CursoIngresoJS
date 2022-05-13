/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y
 temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.

*/
function mostrar()
{

    var nombre;
    var edad;
    var genero;
    var estadoCivil;
    var temperatura;
    var respuesta="si";

    var flag=0;
    var temperaturaMax;
    var nombreMax;

    var contadorViudos=0;
    
    var contadorViudosUno=0;

    var contadorMayorTemperatura=0;
    
    var acumuladorSoltero=0;
    var contadorSolteros=0;
    var promedio;

        do
        {
            nombre=prompt("Ingrese nombre");

            edad=prompt("Ingrese edad");
            edad=parseInt(edad);
                while(isNaN(edad) || edad<1 || edad>100)
                {
                    edad=prompt("Error");
                    edad=parseInt(edad);
                }

            genero=prompt("Ingrese f o m");
                while(genero!="f" && genero!="m")
                {
                    genero=prompt("Error");
                }

            estadoCivil=prompt("Ingrese soltero, casado o viudo");
                while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
                {
                    estadoCivil=prompt("Error");
                }

            temperatura=prompt("Ingrese temperatura");
            temperatura=parseInt(temperatura);
                while(isNaN(temperatura) || temperatura<36 || temperatura>43)
                {
                    temperatura=prompt("Error es entre 36 y 43")
                    temperatura=parseInt(temperatura);
                }

            //a) El nombre de la persona con mas temperatura.
            if(flag==0 || temperatura>temperaturaMax)
            {
                temperaturaMax=temperatura;
                nombreMax=nombre;
                flag=1;
            }

            //b) Cuantos mayores de edad estan viudos
            if(edad>40 && estadoCivil=="viudo")
            {
                contadorViudos=contadorViudos + 1;
                if(genero=="m")
                {
                    if(estadoCivil=="viudo")
                    {
                        contadorViudosUno=contadorViudosUno + 1;
                    }
                }
            }

            //c) La cantidad de hombres que hay solteros o viudos.
            // El promedio de edad entre los hombres solteros.
            if(genero=="m")
            {
                if(estadoCivil == "soltero")
                {
                acumuladorSoltero=acumuladorSoltero + edad;
                contadorSolteros=contadorSolteros + 1;
                }
              
            }
           

            //d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
            if(edad>60 && temperatura>38)
            {
                contadorMayorTemperatura=contadorMayorTemperatura + 1;
                contadorSolteros=contadorSolteros + 1;
            }

            respuesta=prompt("Quiere seguir ingresando datos si o no");
                while(!(respuesta=="si" || respuesta=="no"))
                {
                    respuesta=prompt("Error si o no");
                }

        }while(respuesta=="si");

        promedio=acumuladorSoltero/contadorSolteros;

        document.write("El nombre de la personas con mas temperatura es: " + nombreMax + "<br>");
        document.write("La cantidad de mayor de edad viudos son: " + contadorViudos + "<br>");
        document.write("La cantidad de personas  viudos son: " + contadorViudosUno + "<br>");
        document.write("La La cantidad de personas solteros son: " + contadorSolteros + "<br>");
        document.write("personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura es: " + contadorMayorTemperatura + "<br>");
        document.write("El promedio de hombres solteros es: " + promedio + "<br>");

        

}
