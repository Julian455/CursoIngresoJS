/*
 Julian Trasar Div E
 Ej 5 switch
Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
*/
function mostrar()
{
   var planetaIngresado;
   var mensaje;
  

   planetaIngresado=prompt("Ingrese un planeta");

   switch(planetaIngresado)
   {
   	 
   	 case "Mercurio":
   	 mensaje = "Aca hace mas calor"
   	 break;

   	 case "Venus":
   	 mensaje = "Aca hace mas frio";
   	 break;

   	 case "tierra":
   	 mensaje = "Vivimos aca";
   	 break;
   }
   alert(mensaje);
}
