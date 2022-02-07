/*
Julian Trasar Div E
E/S ej5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//declaro variables
	var nombre;
	var edad;


//guardo los datos en las variables
nombre = document.getElementById("txtIdNombre").value;
edad= document.getElementById("txtIdEdad").value;

 //muestro por alert

 alert("usted se llama " + nombre + " y tiene " + edad + " años ");
}

//txtIdNombre
//txtIdEdad


