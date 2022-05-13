/*
Bienvenidos (SWITCH +IF).
Se ingresa una hora.
Si está entre las 6 y las 11 mostrar:"es de mañana",
si es desde las 12 a las 19: "es de tarde",
de lo contrario informar que es de noche.
Informar si la hora no es válida.
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".

Aclaración: hacer un switch y dentro toda la lógica.
*/
function mostrar()
{
  var hora;
 var mensaje;

 hora=document.getElementById("laHora").value; 

 switch(hora)
 {
     case "6":
     mensaje="Es de mañana";
     break;
     case "7":
     mensaje="Es de mañana";
     break;
     case "8":
     mensaje="Es de mañana";
     break;
     case "9":
     mensaje="Es de mañana";
     break;
     case "10":
     mensaje="Es de mañana";
     break;
     case "11":
     mensaje="Es de mañana";
     break;

     case "12":
     mensaje="Es de tarde";
     break;
     case "13":
     mensaje="Es de tarde";
     break;
     case "14":
     mensaje="Es de tarde";
     break;
     case "15":
     mensaje="Es de tarde";
     break;
     case "16":
     mensaje="Es de tarde";
     break;
     case "17":
     mensaje="Es de tarde";
     break;
     case "18":
     mensaje="Es de tarde";
     break;
     case "19":
    mensaje="Es de tarde";
    break;  

    case "20":
    mensaje="es de noche y a dormir";
    break;
    case "21":
    mensaje="Es de noche y a dormir";
    break;
    case "22":
    mensaje="Es de noche y a dormir";
    break;
    case "23":
    mensaje="Es de noche y a dormir";
    break;

    default:
    mensaje="Error"
    

    
 }

 alert(mensaje);


   




}
