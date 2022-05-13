/*
Realizar el algoritmo que permita el ingreso de 10 bolsas de alimento por prompt,
con los kilos (validar entre 0 y 500) , sabor validar(carne vegetales pollo) e informar por alert:
a) El promedio de los kilos totales.
b) El mas liviano y su sabor
c) La cantidad de sabor carne y el promedio de kilos de sabor carne

*/
function mostrar()
{
  var bolsas;
  var kilos;
  var sabor;
  var respuesta="si";

  var acumuladorkilos=0;
  var contadorKilos=0;
  var promedioKilos;

  var KilosMinimo;
  var saborMinimo;
  var flag=0;

  var acumuladoRCarne=0;
  var contadorCarne=0;
  var promedioCarne;


    do
    {
        bolsas=prompt("Ingrese 10 bolsas")
        bolsas=parseInt(bolsas);
            while(isNaN(bolsas) || bolsas>10)
            {
                bolsas=prompt("Error")
                bolsas=parseInt(bolsas);
            }

        kilos=prompt("Ingrese kilos")
        kilos=parseInt(kilos);
            while(isNaN(kilos) || kilos<1 || kilos>500)
            {
                kilos=prompt("Error es entre 0 y 500 kilos")
                kilos=parseInt(kilos);
            }

        sabor=prompt("Ingrese sabor carne , vegetales o pollo");
            while(sabor!="carne" && sabor!="vegetales" && sabor!="pollo")
            {
                sabor=prompt("error");
            }

        acumuladorkilos=acumuladorkilos + kilos;
        contadorKilos=contadorKilos + 1;

        if(flag==0 || kilos<KilosMinimo)
        {
            KilosMinimo=kilos;
            saborMinimo=sabor;
            flag=1;
        }

        if(sabor== "carne")
        {
            acumuladoRCarne=acumuladoRCarne + kilos;
            contadorCarne=contadorCarne + 1;
        }
         

        respuesta=prompt("Quiere seguir ingresando datos si o no");
            while(!(respuesta=="si" || respuesta=="no"))
            {
                respuesta=promedioCarne("Error so o no");
            }


    }while(respuesta=="si");

    promedioKilos=acumuladorkilos/contadorKilos;
    promedioCarne=acumuladoRCarne/contadorCarne;


    alert("La cantidad de sabor a carne es " + contadorCarne);
    alert("El promedio  de kilos del sabor carne es: " + promedioCarne);
    alert("El promedio de los kilos totales es: " + promedioKilos);
    alert("El mas liviano es: " + KilosMinimo + " y su sabor es: " + saborMinimo);
}
