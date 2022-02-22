/*
Julian Trasar Div E
TP 12
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
    var edad;
    var estadoCivil;
    var sueldoBruto;
    var numeroDeLegajo;
    var nacionalidadesIngresada;

        //edad
        edadIngresada=prompt("ingrese su edad , entre 18 y 90 años inclusive");
        edadIngresada=parseInt(edadIngresada);

    while(isNaN(edadIngresada >=18 && edadIngresada >=90))//pongo un while porque necesito que el usuario lo escriba bien
    {
         edadIngresada=prompt("Error , reigrese su edad entre 18 y 90 años inclusive");
         edadIngresada=parseInt(edadIngresada);

    }

    //Sexo M o F
    sexoIngresado= prompt("Ingrese F o M");
    sexoIngresado=sexoIngresado.toUpperCase();

    //Estado civil
    estadoCivilIngresado=prompt("Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
    estadoCivilIngresado=parseInt(estadoCivilIngresado);

    while(isNaN(estadoCivilIngresado) || estadoCivilIngresado!=1 && estadoCivilIngresado!=2 && estadoCivilIngresado!=3 && estadoCivilIngresado!=4)
    {
        estadoCivilIngresado=prompt("Error,Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos ");
        estadoCivilIngresado=parseInt(estadoCivilIngresado);

    }

  
  switch(estadoCivilIngresado)
  {
   case 1:
     estadoCivil = "soltero";
     break;
   case 2:
    estadoCivil = "casado";
    break;
    case 3:
     estadoCivil = "divorciados"
     break;
    case 4:
     estadoCivil = "para viudos"
     break;
  }
   
   //sueldo
   sueldoBruto=prompt("Ingrese el sueldo Bruto no menos a 8000");
   sueldoBruto=parseInt(sueldoBruto);

   while(isNaN(sueldoBruto)|| sueldoBruto<8000)
   {
    sueldoBruto=prompt("error . Ingrese un sueldo bruto no menor a 8000");
    sueldoBruto=parseInt(sueldoBruto);
   }

   //legajo
   numeroDeLegajo=prompt("Ingrese numero de legajo, numérico de 4 cifras, sin ceros a la izquierda.");
   numeroDeLegajo=parseInt(numeroDeLegajo);

   while(isNaN(numeroDeLegajo)|| numeroDeLegajo<999 || numeroDeLegajo>9999)
   {
    numeroDeLegajo=prompt("Error,ingrese numero de legajo, numérico de 4 cifras, sin ceros a la izquierda. ")
    numeroDeLegajo=parseInt(numeroDeLegajo);
   }

   //nacionalidad
   nacionalidadesIngresada=prompt("Ingrese Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.")
   nacionalidadesIngresada=nacionalidadesIngresada.toUpperCase();

   while(isNaN(nacionalidadesIngresada)) (nacionalidadesIngresada!="A" && nacionalidadesIngresada!= "E" && nacionalidadesIngresada!="N")
   {
    nacionalidadesIngresada=prompt("Error , ingrese Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.")
    nacionalidadesIngresada=nacionalidadesIngresada.toUpperCase();

   }

   switch(nacionalidadesIngresada)
   {
    case "A":
     nacionalidadesIngresada="Argentino";
     break;
    case "E":
     nacionalidadesIngresada="Extranjero";
     break;
    case "N":
     nacionalidadesIngresada="Nacionalizados";
     break;
   }

   //salida de datos
   document.getElementById("txtIdEdad").value=edadIngresada;
   document.getElementById("txtIdSexo").value=sexoIngresado;
   document.getElementById("txtIdEstadoCivil").value=estadoCivilIngresado;
   document.getElementById("txtIdSueldo").value=sueldoBruto;
   document.getElementById("txtIdLegajo").value=numeroDeLegajo;
   document.getElementById("txtIdNacionalidad").value=nacionalidadesIngresada;

   


   

   




}
