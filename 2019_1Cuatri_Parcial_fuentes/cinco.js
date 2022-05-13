/*
Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% ,
por mercadoPago un 10% y cualquier otro medio 5% ,cualquier otro continente tiene un recargo del 20%
*/
/*function mostrar()
{
 var dia;
 var marca
 var descuento;
 var pago;
 var precio;
 var precioFinal;

    dia=prompt("Ingrese cuantos dias")
    dia=parseInt(dia);
    precio=dia * 100;

    pago=prompt("Ingrese metodo de pago debito , mercado pago , efectivo ")
        while(pago!="debito" && pago!="mercado pago" && pago!="efectivo")
        {
            pago=prompt("Error");
        }

    marca=document.getElementById("Marca").value;

    switch(marca)
    {
        case "América":
    
        switch(pago)
        {
            case "debito":
            descuento= precio * 10/100;
            break;
        }
        default:
        descuento= precio * 50/100;
        
        break;
    }

    switch(marca)
    {
        case "África":
        

        switch(pago)
        {
            case "mercado pago":
            case "efectivo":
            descuento=precio *15/100;
            break;
        }
        default:
        descuento= precio * 60/100;

        break;
    }

    switch(marca)
    {
        case "Europa":
       

        switch(pago)
        {
            case "debito":
            descuento=precio * 15/100;
            case "mercado pago":
            descuento=precio * 10/100;
        
        }
        default:
        descuento=precio * 20/100;
        break;
    }

    precioFinal=precio - descuento;

    alert("El total es " + precioFinal);
 
    
      
       
    
   


}
*/
function mostrar()
{
 var dia;
 var marca
 var descuento;
 var pago;
 var precio;
 var aumento;
 var precioFinal;
 var flag=0;

    dia=prompt("Ingrese cuantos dias")
    dia=parseInt(dia);
    precio=dia * 100;

    pago=prompt("Ingrese metodo de pago debito , mercado pago , efectivo ")
        while(pago!="debito" && pago!="mercado pago" && pago!="efectivo")
        {
            pago=prompt("Error");
        }

    marca=document.getElementById("Marca").value;

    switch(marca)
    {
        case "América":
        flag=1;
    
        switch(pago)
        {
            case "debito":
            descuento= precio * 60/100;
            break;
            default:
            descuento= precio * 50/100;
            break;
        }
        break;
        

        case "África":
        flag=1;

        switch(pago)
        {
           
            case "mercado pago":
            case "efectivo":
            descuento=precio *75/100;
            break;
            default:
            descuento= precio * 60/100;
            
        }
            break;
        
    
       
            case "Europa":
            flag=1;
           
    
            switch(pago)
            {
                case "debito":
                descuento=precio * 15/100;
                case "mercado pago":
                descuento=precio * 10/100;
                case "efectivo":
                descuento= precio * 5/100;
                default:
                descuento=precio * 20/100;
                break;
            
            }
            break;

            default: 
            flag=0;
            aumento=precio *20/100;
            


        
    }

   
       
    
    switch(flag)
    {
        case 0:
        precioFinal=precio + aumento; 
        break;
        default:
        precioFinal=precio - descuento;
        
    }
    

    alert("El total es " + precioFinal);
 
    
      
       
    
   


}

