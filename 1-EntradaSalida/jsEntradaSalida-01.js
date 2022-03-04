/*
Julian Trasar Div e

1.	Una empresa de venta de cosméticos necesita un programa que permita la carga de productos vendidos,
 junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
•	Vendedor: Juan, María, Lucrecia
•	Tipo producto: Perfume, Shampoo o Maquillaje
•	Importe de la venta (Numero mayor que cero)
No hay un límite total de ventas, y cada vendedor puede realizar varias ventas.
Una vez finalizada la carga de productos vendidos se debe calcular la comisión del vendedor.
Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, la comisión será del 15%.
Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión será del 5%.

Se debe mostrar:
a.	Promedio de ventas por cada vendedor.
b.	Cantidad de perfumes que vendió María
c.	El importe más barato junto con el vendedor que lo vendió.
d.	El nombre del vendedor con menor comisión.


*/

/*function mostrar()
{

	//declaro variables
	var respuesta="si";
	var vendedor;
	var tipoProducto;
	var importe;
	var importeMasBarato;
	var vendedorMasBarato;
	
	var comisionJuan;
	var comisionLucrecia;
	var comisionMaria;
	var vendedorMenorComision;
	var banderaDelPrimerImporte=0;
	var contadorVentasLucrecia=0;
	var contadorVentasJuan=0;
	var contadorVentasMaria=0;
	var acumuloImporteLucrecia=0;
	var acumuloImporteJuan=0;
	var acumuloImporteMaria=0;
	var contadorPerfume=0;


	while(respuesta=="si")
	{

		//validaciones
        //(Juan - Maria - Lucrecia)
        vendedor=prompt("ingrese el vendedor(Juan - Maria - Lucrecia)");
        vendedor=vendedor.toLowerCase();
       
        while(vendedor!="juan" && vendedor!="maria" && vendedor != "lucrecia")
        {
        	vendedor=prompt("Error, ingrese el vendedor(Juan - Maria - Lucrecia)");
        	vendedor=vendedor.toLowerCase();
        }

        //(Perfume - Shampoo - Maquillaje)
        tipoProducto=prompt("ingrese el tipo de tipo producto(Perfume - Shampoo - Maquillaje)");
        tipoProducto=tipoProducto.toLowerCase();
       
        while(tipoProducto!="perfume" && tipoProducto!="shampoo" && tipoProducto!= "maquillaje")
        {
        	tipoProducto=prompt("Error, ingrese el tipo de tipo producto(Perfume - Shampoo - Maquillaje)");
        	tipoProducto=tipoProducto.toLowerCase();
    	}

       


        //Importe (mayor que 0)
        
        importe=parseInt(prompt("Ingrese el importe de la venta"));

        while(importe<1)
        {
        	importe=parseInt(prompt("Error, Ingrese el importe de la venta"));
        }

		switch(vendedor)
		{
			case "juan":
				contadorVentasJuan++;
				acumuloImporteJuan=acumuloImporteJuan+importe; 
			break;
			case "maria":
				contadorVentasMaria++;
				acumuloImporteMaria = acumuloImporteMaria + importe;
				if(tipoProducto =="perfume")
				{
					contadorPerfume++;
				}
			break;
			case "lucrecia":
				contadorVentasLucrecia++;
				acumuloImporteLucrecia=acumuloImporteLucrecia+importe;
			break;
		}



		if(importe < importeMasBarato || banderaDelPrimerImporte==0)
		{
			importeMasBarato = importe;
			vendedorMasBarato = vendedor;
			banderaDelPrimerImporte = 1;
		}


		respuesta=prompt("Desea seguir ingresando datos?si-no");

	}


	/*Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, 
	la comisión será del 15%. 
	Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión 
	será del 5%.*/

	/* if(acumuloImporteJuan>10000)
	{ 
		comisionJuan = acumuloImporteJuan*0.2;
	}
	else
	{
		if(acumuloImporteJuan>5000)
		{
			comisionJuan = acumuloImporteJuan * 0.15;
		}
		else
		{
			comisionJuan = acumuloImporteJuan * 0.05;
		}
	}
	if(acumuloImporteMaria>10000)
	{ 
		comisionMaria = acumuloImporteMaria*0.2;
	}
	else
	{
		if(acumuloImporteMaria>5000)
		{
			comisionMaria = acumuloImporteMaria * 0.15;
		}
		else
		{
			comisionMaria = acumuloImporteMaria * 0.05
		}
	}
	if(acumuloImporteLucrecia>10000)
	{ 
		comisionLucrecia = acumuloImporteLucrecia*0.2;
	}
	else
	{
		if(acumuloImporteLucrecia>5000)
		{
			comisionLucrecia = acumuloImporteLucrecia * 0.15;
		}
		else
		{
			comisionLucrecia = acumuloImporteLucrecia * 0.05;
		}
	}

	//a)Promedio de ventas por cada vendedor.
	document.write("El Promedio de ventas de Maria es: "+ (acumuloImporteMaria/contadorVentasMaria) + "<br>");
	document.write("El Promedio de ventas de Juan es: "+ (acumuloImporteJuan/contadorVentasJuan) + "<br>");
	document.write("El Promedio de ventas de Lucrecia es: "+ (acumuloImporteLucrecia/contadorVentasLucrecia) + "<br>");

	//b)Cantidad de perfumes que vendió María
	document.write("La cantidad de perfumes que vendio Maria es: "+ contadorPerfume + "<br>");

	//c)El importe mas barato junto con el vendedor que lo vendió.
	document.write("El importe mas barato es: $"+ importeMasBarato +" y el vendedor que lo vendió es "+vendedorMasBarato+ "<br>");

	//d)El nombre del vendedor con menor comisión.

	if(comisionJuan<comisionMaria && comisionJuan<comisionLucrecia)
	{
		vendedorMenorComision= "Juan";
	}
	else
	{
		if(comisionMaria<comisionLucrecia)
		{
			vendedorMenorComision="Maria";
		}
		else
		{
			vendedorMenorComision="Lucrecia";
		}
	}

	document.write("El vendedor con menor comision es: "+vendedorMenorComision);

}

/*


/*
Julian Trasar Div E

2. Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
Nombre 
Edad (mayor o igual a 12)
Vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
Dosis (“P” en caso de ser la primera dosis o “S” en caso de ser la segunda dosis)
Genero (Femenino, Masculino)

Informar:
a-	Promedio de edad de los que se vacunaron con la china.
b-	Nombre y vacuna del masculino más joven.
c-	De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d-	Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e-	Vacuna más inoculada
*/ 
/*function mostrar()
{
    //declaramos variables
    var nombreIngresado;
    var edadIngresada
    var tipoVacuna;
    var generoIngresado
    var vacunaDada;
    var promedioEdadIngresadaChina;
    var respuesta="si";

    do
    {
    	nombreIngresado=prompt("Ingrese su nombre");
    	nombreIngresado=nombreIngresado.toLowerCase();

    	tipoVacuna=prompt("Que vacuna se dio: rusa, china , americana");
    	tipoVacuna=tipoVacuna.toLowerCase();

    	edadIngresada=prompt("Si tiene entre 12 y 17 años solo se permite la vacuna Americana");
    	edadIngresada=parseInt(edadIngresada);
    	while(edadIngresada>11 && edadIngresada<18)
    	{
    		edadIngresada=prompt("Error,Si tiene entre 12 y 17 años solo se permite la vacuna Americana");
    		edadIngresada=parseInt(edadIngresada);

    	}

    	vacunaDada=prompt("Ingrese p si se dio la primera dosis , o ingrese s y el la segunda dosis");
    	vacunaDada=vacunaDada.toLowerCase();

    	generoIngresado=prompt("Ingrese f o m ");
    	generoIngresado=generoIngresado.toLowerCase();

    	respuesta=prompt("Desea seguir ingresando datos?? si/no")
    	while(!(respuesta=="si" || respuesta=="no"))
    	{
    		nombreIngresado=prompt("Error , desea seguir ingresando datos?? si/no");
    		nombreIngresado=nombreIngresado.toLowerCase();
    	}


    } while(respuesta=="si")

    //saco promedio
    if(edadIngresada<12 && edadIngresada>18)
    promedioEdadIngresadaChina=edadIngresada/vacunaDada;
    
    alert("El promedio de las personas vacunas con la vacuna china es " + promedioEdadIngresadaChina);
    


}
*/
/*
Julian Trasar Div E

3. Llegan vuelos con vacunas de distintos lugares del mundo
    Mientras el usuario quiera se debe registrar de cada vuelo:
    -Origen (“Asia”, “Europa”, “América”)
    -Cantidad de vacunas (entre 500000 y 2500000)
    -Costo del vuelo (entre 1 millón y 5 millones de pesos)
   Informar:
    a- El origen que envió menor cantidad de vacunas
    b- El total sin descuentos a pagar por los gastos de los viajes
    c- Si en total se recibieron mas de 10 millones de vacunas se hace
    un descuento de 25%, Si se recibieron entre 5 y 10 millones (inclusive) el
    descuento es del 15% con menor cantidad no hay descuento.
    Informar si hubo descuento de cuanto fue y el importe final con
    Descuento.



*/
 /*function mostrar()
 {
 	//declaramos variables
 	var registroVuelo;
 	var origen;
 	var cantidadVacunas;
 	var costoVuelo;
    
       

 }
*/
/*

Realizar el desarrollo de una plataforma web que permita organizar recorridos para 
recoletar aceites en restaurantes.El ingreso sera hasta que el usuario quiera. 

La solución será planteada sobre una arquitectura flexible que permita
a futuro realizar cambios, mejoras y sumar nuevas funcionalidades que 
potencien las plataformas.

se deben realizar  ingresos:
	Zonas(CABA-BuenosAires-GBA)
	Nombre de Choferes
	Edad del chofer(mayor a 18 años)
	Clientes(McDonals-Rodicio-SigaALaVaca)
	CantidadDeAceite(entre 800 y 1500 Litros)
debemos informar:
a)La zona mas visitada 
B)El nombre del chofer mas joven
C)La mayor cantidad de aceite recolectada en Rodicio

*/

 function mostrar()
 {
 	//declaro variables
 	var zonaIngresada;
 	var nombreChofer;
 	var edadChofer;
 	var clientes;
 	var cantidadAceite;
 	var respuesta="si";
 	var acumuladorCaba;
 	var acumuladorBuenosAires;
 	var acumuladorGba;
 	var edadChoferJoven;
 	var nombreChoferJoven;
 	var nombre;
 	var banderaUno=0;
 	var banderaDos=0;
 	var cantidadAceiteMayor;
 	var zonaMasVisitada;

 	 	while(respuesta="si")
 	 	{
 	 		zonaIngresada=prompt("Ingrese zona");
 	 			while(zonaIngresada != "Caba" && zonaIngresada!= "Buenos Aires" && zonaIngresada!= "GBA")
 	 			{
 	 				zonaIngresada=prompt("Error,vuelva a ingresar la zona")
 	 			}
 	 		nombreChofer=prompt("Ingrese nombre del chofer")
 	 			
 	 		edadChofer=prompt("Ingrese edad del chofer")
 	 		edadChofer=parseInt(edadChofer);
 	 	    	while(isNaN(edadChofer>17))
 	 	    	{
 	 	    		edadChofer=prompt("Error,mayor del 17 años")
 	 	    		edadChofer=parseInt(edadChofer);
 	 	    	}

 	 	     clientes=prompt("Ingrese un cliente")
 	 	    
 	 	     	while(clientes!= "McDonals" && clientes!= "Rodicio" && clientes!= "SigaALaVaca")
 	 	    	 {
 	 	     		clientes=prompt("Error,Ingrese clientes : McDonals-Rodicio-SigaALaVaca");
 	 	    	 }

 	 	    cantidadAceite=prompt("Ingrese cantidad de aceite")
 	 	    cantidadAceite=parseInt(cantidadAceite);
 	 	    	while(isNaN(cantidadAceite)|| cantidadAceite < 800 && cantidadAceite>1500)
 	 	    	{
 	 	    		cantidadAceite=prompt("Error , entre 800 y 1500");
 	 	    		cantidadAceite=parseInt(cantidadAceite);
 	 	    	}

 	 	    	respuesta=prompt("Desea seguir ingresando datos ? si/no")
 	 	    	while(!(respuesta=="si" || respuesta=="no"))
 	 	    	{
 	 	    		respuesta=prompt("Error , esea seguir ingresando datos ? si/no")
 	 	    	}

 	 	    switch(zonaIngresada)
 	 	{
 	 		case "Caba":
 	 		acumuladorCaba=acumuladorCaba ++;
 	 		break;
 	 		case "Buenos Aires":
 	 		acumuladorBuenosAires=acumuladorBuenosAires++;
 	 		break;
 	 		case "GBA":
 	 		acumuladorGba=acumuladorGba++;
 	 		break; 
 	 	}

 	 	}  


 	 	if(edadChoferJoven>edadChofer||banderaUno=0)
 	 	{
          edadChoferJoven=edadChofer;
          nombreChoferJoven=nombre;
          banderaUno=1;

 	 	} 
 	 	if(cantidadAceiteMayor<cantidadAceite && cliente == "Rodicio" ||banderaDos=0)
 	 	{
 	 		cantidadAceiteMayor=cantidadAceite
 	 		banderaDos=1;
 	 	}

 	 	if(acumuladorCaba>acumuladorBuenosAires && acumuladorCaba>acumuladorGba)
 	 	{
 	 		zonaMasVisitada="Caba";
 	 	}
 	 	else if(acumuladorBuenosAires>acumuladorCaba && acumuladorBuenosAires>acumuladorCaba)
 	 	{
 	 		zonaMasVisitada="Buenos Aires";
 	 	}
 	 	else if(acumuladorGba>acumuladorBuenosAires && acumuladorGba>acumuladorCaba)
 	 	{
 	 		zonaMasVisitada="GBA";
 	 	}

 	 	document.write("la zona mas visitada es " + mensaje + "<br>");
 	 	document.write("El nombre del chofer mas joven es " + nombreChoferJoven + "<br>");
 	 	document.write("La mayor aceite recolectada de Rodicio es " + cantidadAceiteMayor + "<br>");




 }
 