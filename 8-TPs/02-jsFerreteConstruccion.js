/* Julian Trasar Div E
tp2
2.	Para el departamento de Construcción:
A.mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
  /*
   Julian Trasar
   Div E
   TP 2 A
  */
 let largoTerreno;
 let anchoTerreno;
 let perimetroTerreno;
 let resultado;

  largoTerreno = document.getElementById("txtIdLargo").value;
  anchoTerreno = document.getElementById("txtIdAncho").value;

  largoTerreno=parseInt(largoTerreno);
  anchoTerreno=parseInt(anchoTerreno);
  
  perimetroTerreno = 2 * largoTerreno + 2 * anchoTerreno;
  resultado = perimetroTerreno * 3;

  alert("la cantidad de alambre que necesitas son: " + resultado);


}
function Circulo () 
{   
	/*
    Julian Trasar
	Div E
	TP 2 B
	*/
	let radio;
	let pi;
	let resultado;

	radio= document.getElementById("txtIdRadio").value;

	radio=parseInt(radio);
    
    pi = 3.14
	resultado = (2 * radio * pi) *3;

	alert("la cantidad de alambre que se necesita es " + resultado + " metros ");



    
	
}
function Materiales () 
{   
	/*
    Julian Trasar
	Div E
	TP 2 C
	*/
	let areaTerreno;
	let bolsaCemento;
	let bolsaCal;
	let anchoTerreno;
	let largoTerreno;

	largoTerreno = document.getElementById("txtIdLargo").value;
	anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno=parseInt(largoTerreno);
	anchoTerreno=parseInt(anchoTerreno);

	areaTerreno = largoTerreno * anchoTerreno;
	bolsaCemento = areaTerreno * 2;
	bolsaCal = areaTerreno * 3;

	alert("la cantidad de bolsa de cemento que necesitas son: " + bolsaCemento);
	alert("la cantidad de bolsa de cal que necesitas son: " + bolsaCal);

	
}