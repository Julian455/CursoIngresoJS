/*
Julian Trasar Div E
EJ while 1

al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	//declaramos variables
  var i;//variables de control

  i=0;//inicializamos la variable de control

  while(i<10)
  { 
  	 

  	//lo que voy a mostrar
    document.write("El numero a mostrar es: " + (i+1) + "<br>"); 

    //cada vez que intere , el = remeplaza a la otra i
    i = i+1;

   
  }

}//FIN DE LA FUNCIÓN