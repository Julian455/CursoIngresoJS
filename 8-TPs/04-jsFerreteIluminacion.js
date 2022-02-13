/*
Julian Trasar Div E
TP 4

4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 function CalcularPrecio() {
    var cantidadLamparas;
    var marca;
    var precio;
    var precioDescuento;
    var impuesto;
    var precioFinal;

    precio = 35

    //traemos cantidadLamparas y marca por id 
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    //parseamos
    precioFinal = parseInt(precioFinal);
    cantidadLamparas = parseInt(cantidadLamparas);

    //a
    if (cantidadLamparas > 5) {
        descuento = 50 / 100;

        //B
    }
    if (cantidadLamparas == 5) {
        descuento = 40 / 100;
    } else {
        descuento = 30 / 100;
    }

    {
        if (cantidadLamparas == 4)

            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                descuento = 25 / 100

            }

        if (cantidadLamparas == 3) {


            if (marca == "ArgentinaLamparas") {
                descuento = 15 / 100;
            }

            if (marca == "FelipeMarca") {
                descuento = 10 / 100;
            } else {
                descuento = 5 / 100;
            }

        }

        precioFinal = cantidadLamparas * precio;
        precioFinal = precioFinal - (precioFinal * descuento);

        if (precioFinal > 120) {
            impuesto = precioFinal * 10 / 100;
            precioFinal = precioFinal + impuesto;
            alert("usted pago " + precioFinal + " de IIBB. , siendo " + impuesto + " el impuesto que se pago ");
        }

        document.getElementById("txtIdprecioDescuento").value = precioFinal;



    }
}
