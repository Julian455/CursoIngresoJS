/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,b 
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro   
*/

function mostrar()
{
  var tipo;
  var cantidad;
  var precio;
  var respuesta="si";

  var acumuladorPrecioArena=0;
  var acumuladorPrecioCal=0;
  var acumuladorPrecioCemento=0;
  var acumuladorCantidadArena=0;
  var acumuladorCantidadCal=0;
  var acumuladorCantidadCemento=0;

  var totalPrecio;
  var totalCantidad;

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

        cantidad=prompt("Ingrese cantidad")
        cantidad=parseInt(cantidad);
            while(isNaN(cantidad) || cantidad<0)
            {
                cantidad=prompt("Error no puede ser menor a 0 ");
                cantidad=parseInt(cantidad);
            }

        precio=prompt("Ingrese precio");
        precio=parseInt(precio);
            while(isNaN(precio) || precio<0)
            {
                precio=prompt("Error tiene que ser mayor a 0")
                precio=parseInt(precio);
            }

        switch(tipo)
        {
            case "arena":
            acumuladorPrecioArena=acumuladorPrecioArena + precio;
            acumuladorCantidadArena=acumuladorCantidadArena + cantidad;
            break;
           case "cal":
           acumuladorPrecioCal=acumuladorPrecioCal + precio;
           acumuladorCantidadCal=acumuladorCantidadCal + cantidad;
           break;
           case "cemento": 
           acumuladorCantidadCemento=acumuladorCantidadCemento + cantidad;
           acumuladorPrecioCemento=acumuladorPrecioCemento + precio;
           break;
        }

        respuesta=prompt("Desea seguir ingresando datos si o no");
            while(!(respuesta=="si" || respuesta=="no"))
            {
                respuesta=prompt("Error si o no");
            }

    }while(respuesta=="si");

    totalCantidad= acumuladorCantidadArena + acumuladorCantidadCemento + acumuladorCantidadCal;
    totalPrecio=acumuladorPrecioArena + acumuladorPrecioCal + acumuladorPrecioCemento;

    //Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
    if(cantidad>10)
    {
        descuento= totalPrecio * 15/100;
        precioDescuento=totalPrecio * descuento;
        
        //Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
        if(cantidad>30)
        {
            descuento=totalPrecio - 25/100;
            precioDescuento=totalPrecio - descuento;
        }
    }

    if(acumuladorCantidadArena>acumuladorCantidadCal && acumuladorCantidadArena>acumuladorCantidadCemento)
    {
        mensajeUno="Se llevaron mas arena";
    }
    else if(acumuladorCantidadCal>acumuladorCantidadCemento)
    {
        mensajeUno="Se llevaron mas cal";
    }
    else
    {
        mensajeUno="Se llevaron mas cemento";
    }

    if(acumuladorPrecioArena>acumuladorPrecioCal && acumuladorPrecioArena>acumuladorPrecioCemento)
    {
        mensajeDos="La bolsa de arena es la mas cara";
    }
    else if(acumuladorPrecioCal && acumuladorPrecioCemento)
    {
        mensajeDos="La bolsa de cal es la mas cara";
    }
    else
    {
        mensajeDos="La bolsa de cemento es la mas cara";
    }

    document.write("El importe a pagar sin descuento es: " + totalPrecio + "<br>");
    document.write("El importe a pagar con descuento es: " + precioDescuento + "<br>");
    document.write(mensajeUno + "<br>");
    document.write(mensajeDos + "<br>");

}



