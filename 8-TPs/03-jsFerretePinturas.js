/* Julian Trasar Div E
TP3
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{   //declaro variables
	var temperatura;
	var fahrenheit;
	var centigrados;
    
    //tomo el dato por id
	temperatura = document.getElementById("txtIdTemperatura").value;
    
    //transforma es texto en numero 
	temperatura=parseFloat(temperatura);
    
    //cuenta 
    centigrados = (temperatura - 32) * 5/9;
    
    //mostrar por alert " 32 Fahrenheit son 0 centígrados"
    alert(temperatura + " Fahrenheit son " + centigrados);

	}

function CentigradosFahrenheit () 
{

   //declaro variables
   var fahrenheit;
   var centigrados;
   var temperatura;

   //tomo dato por id
   temperatura = document.getElementById("txtIdTemperatura").value;

   fahrenheit = (temperatura * 9/5) + 32;

   //mostramos por alert "0  centígrados son 32 Fahrenheit "
   alert(temperatura + " centigrados son " + fahrenheit + " fahrenheit ");

	
}
