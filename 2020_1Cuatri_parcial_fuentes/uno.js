/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{

 var tipo;
 var precio;
 var cantidad;
 var marca;
 var fabricante;
 var i=0;

 var flag=0;
 var precioMinimo;
 var cantidadMinima;
 var fabricanteMinimo; 

 var acumuladorBarbijo=0;
 var contadorBarbijo=0;
 var acumuladorJabon=0;
 var contadorJabon=0;
 var acumuladorAlcohol=0;
 var contadorAlcohol=0;
 var promedio;
 var mensaje;

    while(i<5)
    {
        tipo=prompt("Ingrese barbijo jabon o alcohol");
            while(tipo!="barbijo" && tipo!="jabon" && tipo!="alcohol")
            {
                tipo=prompt("Error");
            }

        precio=prompt("Ingrese precio");
        precio=parseInt(precio);
            while(isNaN(precio) || precio<100 || precio>300)
            {
                precio=prompt("Error es entre 100 y 300");
                precio=parseInt(precio);
            }

        cantidad=prompt("Ingrese cantidad")
        cantidad=parseInt(cantidad);
            while(isNaN(cantidad) || cantidad<0 || cantidad>1000)
            {
                cantidad=prompt("Error es entre 0 y 1000");
                cantidad=parseInt(cantidad);
            }

        marca=prompt("Ingrese marca");

        fabricante=prompt("Ingrese fabricante");
        
        //a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
        if(tipo=="alcohol")
        {
            if(flag==0 || precio<precioMinimo)
            {
                precioMinimo=precio;
                cantidadMinima=cantidad;
                fabricanteMinimo=fabricante;
                flag=1;
            }
        }

        //b) Del tipo con mas unidades, el promedio por compra
        //c) Cuántas unidades de jabones hay en total
        switch(tipo)
        {
            case "barbijo":
            acumuladorBarbijo=acumuladorBarbijo + cantidad;
            contadorBarbijo=contadorBarbijo + 1;
            break;
            case "jabon":
            acumuladorJabon=acumuladorJabon + cantidad;
            contadorJabon=contadorJabon + 1;
            break;
            case "alcohol":
            acumuladorAlcohol=acumuladorAlcohol + cantidad;
            contadorAlcohol=contadorAlcohol + 1;
            break;
        }
       
    i=i + 1;
    }

    if(contadorBarbijo>contadorJabon && contadorBarbijo>contadorAlcohol)
    {
        promedio=acumuladorBarbijo/contadorBarbijo;
        mensaje="Barbijo";

    }
    if(contadorJabon>contadorAlcohol)
    {
        promedio=acumuladorJabon/contadorJabon;
        mensaje="Jabon";
    }
    else
    {
        promedio=acumuladorAlcohol/contadorAlcohol;
        mensaje="Alcohol";
    }

    document.write("Del más barato de los alcohol la cantidad de undades es: " + cantidadMinima + " y el fabircantes es: " + fabricanteMinimo + "<br>");
    document.write("El tipo con mas unidad es " + mensaje +  " y el promedio es: " +  promedio + "<br>");
    document.write("La cantidad de unidad de jabon en total es: " + acumuladorJabon + "<br>");
   

}
 