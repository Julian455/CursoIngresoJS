/*
Bienvenidos (SOLO SWITCH).
Una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 15% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África u Oceania tiene un 30% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
en cualquier continenete , si paga con cheque, se recarga un 15% de impuesto al cheque
*/
function mostrar()
{
 var dias=100;
 var continente;
 var formaPago;
 var descuento;
 var recargo;
 var tarifaFinal;

    continente=document.getElementById("selecContinente").value;
    formaPago=document.getElementById("selecPago").value;

    switch(continente)
    {
        case "America":
        
        switch(formaPago)
        {
          case "Débito":
          descuento=-10/100;
          break;
        }
        break;

        case "África":
        case "Oceania":
        descuento= - 30/100;
        
        switch(formaPago)
        {
           case "MercadoPago":
           case "Efectivo":
           descuento= - 15/100;
           break;
        }
        break;

        case "Europa":
        descuento= - 20/100;
    
        switch(formaPago)
        {
            case "Débito":
            descuento= - 15/100;
            break;
            case "MercadoPago":
            descuento= -10/100;
            break;
            default:
            descuento= - 5/100;
            break;
            
        }
        break;
    
        
    }

    switch(formaPago)
    {
        case "Cheque":
        recargo=15/100;
    }
    
    precio = horas
    tarifaFinal= tarifaFinal - (tarifaFinal *descuento);
     
    alert("El precio final es: " + tarifaFinal);



}