/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro

*/
/*function mostrar()
{
    var tipo;
    var cantidad;
    var precio;

    var respuesta="si";

    var acumuladorPrecio=0;
    var cantidadTotal=0;
    var precioTotal;

    var precioArena=0;
    var precioCal=0;
    var precioCemento=0;
    var cantidadArena=0;
    var cantidadCal=0;
    var cantidadCemento=0;
    var cantidadTotal;

    var precioTotalArena;
    var precioTotalCal;
    var precioTotalCemento;

    var descuento;
    var precioDescuento;

    var mensaje;

    var mensajeUno;

        do{
            tipo=prompt("Ingrese arena , cal o cemento");
                while(tipo!="arena" && tipo!="cal" && tipo!="cemento")
                {
                    tipo=prompt("Error");
                }
            cantidad=prompt("Ingrese cantidad");
            cantidad=parseInt(cantidad);

            precio=prompt("Ingrese precio")
            precio=parseInt(precio);
                while(isNaN(precio) || precio<0) 
                {
                    precio=prompt("error no puede ser menor a 0 ")
                    precio=parseInt(precio);
                }

            switch(tipo)
            {
                case "arena":
                precioArena=precioArena + precio;
                cantidadArena=cantidadArena + cantidad;
                break;
                case "cal":
                precioCal=precioCal + precio;
                cantidadCal=cantidadCal + cantidad;
                break;
                case "cemento":
                precioCemento=precioCemento + precio;
                cantidadCemento=cantidadCemento + cantidad;
                break;
            }

           acumuladorPrecio=acumuladorPrecio + precio;
           cantidadTotal=cantidadTotal + cantidad;

            respuesta=prompt("Quiere seguir ingresando datos si o no");
                while(!(respuesta=="si" || respuesta=="no"))
                {
                    respuesta=prompt("error si o no")
                }
        }while(respuesta=="si");

     //Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
     //Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
     precioTotalArena=precioArena * cantidadArena;
     precioTotalCal=precioCal * cantidadCal;
     precioTotalCemento=precioCemento * cantidadCemento;

     //a) El importe total a pagar , bruto sin descuento y...
     precioTotal=precioArena + precioCal +  precioCemento;
     cantidadTotal= cantidadArena + cantidadCal + cantidadCemento;



     //b) el importe total a pagar con descuento(solo si corresponde)
     if(cantidadTotal>10)
     {
        descuento= precioTotal * 15/100;
        precioDescuento=precioTotal - descuento;
        //b) el importe total a pagar con descuento(solo si corresponde)
      if(cantidadTotal>30)
      {
        descuento= precioTotal * 25/100;
        precioDescuento=precioTotal - descuento;
      }
     }
     

     //d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
     if(cantidadArena>cantidadCal && cantidadArena>cantidadCemento)
     {
         mensaje="La bolsa de arena es la que mas se llevaron";
     }
     else if(cantidadCal>cantidadCemento)
     {
         mensaje="La bolsa de cal es la que mas se llevaron";
     }
     else
     {
        mensaje="La bolsa de cemento es la que mas se llevaron"; 
     }

     //f) El tipo mas caro
     if(precioTotalArena>precioTotalCal && precioTotalArena>precioTotalCemento)
     {
       mensajeUno="La bolsa de arena es la mas cara"
     }
     else if(precioTotalCal>precioTotalCemento)
     {
         mensajeUno="La bolsa de cal es la mas cara"
     }
     else if(precioTotalCemento>precioTotalCal && precioTotalCemento>precioTotalArena)
     {
         mensajeUno="La bolsa se cemento es la cara";
     }

     document.write("El importe total a pagar , bruto sin descuento es " + precioTotal + "<br>");
     document.write("el importe total a pagar con descuento " + precioDescuento + "<br>");
     document.write(mensaje + "<br>");
     document.write(mensajeUno + "<br>");

}
*/

/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro

*/
function mostrar()
{ 
    var tipo;
    var bolsas;
    var precio;
    var respuesta="si";

    var acumuladorPrecioArena=0;
    var acumuladorCantidadArena=0;
    var acumuladorPrecioCal=0;
    var acumuladorCantidadCal=0;
    var acumuladorPrecioCemento=0;
    var acumuladorCantidadCemento=0;

    var precioTotal;
    var cantidadTotal;
    
    var descuento;
    var precioDescuento;

    var mensajeUno;
    var mensajeDos;

    do
    {
        tipo=prompt("Ingrese arena, cal o cemento");
            while(tipo!="arena" && tipo!="cal" && tipo!="cemento")
            {
                tipo=prompt("Error");
            }
        bolsas=prompt("Ingrese cantidad de bolsas");
        bolsas=parseInt(bolsas);
         while(isNaN(bolsas) || bolsas<1)
         {
             bolsas=prompt("Error");
             bolsas=parseInt(bolsas);
         }

        precio=prompt("Ingrese precio");
        precio=parseInt(precio);
         while(isNaN(precio) || precio<100)
         {
             precio=prompt("Error");
             precio=parseInt(precio);
         }

         switch(tipo)
         {
            case "arena":
            acumuladorPrecioArena=acumuladorPrecioArena + precio;
            acumuladorCantidadArena=acumuladorCantidadArena + bolsas;
            break;
            case "cal":
            acumuladorPrecioCal=acumuladorPrecioCal + precio;
            acumuladorCantidadCal=acumuladorCantidadCal + bolsas;
            break;
            case "cemento":
            acumuladorPrecioCemento=acumuladorPrecioCemento + precio;
            acumuladorCantidadCemento=acumuladorCantidadCemento + bolsas;
            break;
         }

         respuesta=prompt("Quiere seguir ingresando datos si o no");
            while(!(respuesta=="si" || respuesta=="no"))
            {
                respuesta=prompt("Error si o no");
            }

        
    }while(respuesta=="si");

     //precio total 
     precioTotal=acumuladorPrecioArena + acumuladorPrecioCal + acumuladorPrecioCemento;

     //cantidad total
     cantidadTotal=acumuladorCantidadArena + acumuladorCantidadCal + acumuladorCantidadCemento;

     //Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
     if(bolsas>10)
    {
        descuento=precioTotal * 15/100;
        precioDescuento=precioTotal - descuento;
    }

    //Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
    if(bolsas>30)
    {
        descuento=precioTotal * 25/100;
        precioDescuento=precioTotal - descuento;
    }

    //bolsas mas llevadas
    if(acumuladorCantidadArena>acumuladorCantidadCal && acumuladorCantidadArena>acumuladorCantidadCemento)
    {
        mensajeUno="Se llevo mas arena";
    }
    else if(acumuladorCantidadCal>acumuladorCantidadCemento)
    {
        mensajeUno="Se llevo mas cal";
    }
    else
    {
        mensajeUno="Se llevo mas cemento";
    }

    //el tipo de bolsa mas cara
    if(acumuladorPrecioArena>acumuladorPrecioCal && acumuladorPrecioArena>acumuladorPrecioCemento)
    {
        mensajeDos="La bolsas de arena es la mas cara";
    }
    else if(acumuladorPrecioCal>acumuladorPrecioCemento)
    {
        mensajeDos="La bolsas de cal es la mas cara";
    }
    else
    {
        mensajeDos="La bolsas de cemento son las mas caras";
    }

    document.write(mensajeUno + "<br>");
    document.write(mensajeDos + "<br>");
    document.write("El precio con descuento es: " + precioDescuento + "<br>");
    document.write("El precio sin descuento es: " + precioTotal + "<br>");
 
    


    
}