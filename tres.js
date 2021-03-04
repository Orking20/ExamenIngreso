/*Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/

function mostrar()
{
	var nombre;
	var estadoCivil;
	var edad;
	var temperatura;
	var sexo;
	var precioPorPasajero;
	var cantViudoMayores = 0;
	var nombreMujerSolteraMasJoven;
	var edadMujerSolteraMasJoven;
	var masJoven;
	var contador = 1;
	var continuar;
	var sumaPrecio = 0;
	var descuento;
	var precioMayores;

	precioPorPasajero = 600;
	descuento = 25;

	do
	{
		do
		{
			nombre = prompt("Ingrese el nombre: ");
		}while(!isNaN(nombre));
		do
		{
			estadoCivil = prompt("Ingrese el estadoCivil (soltero/casado/viudo): ");
		}while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");
		do
		{
			edad = parseInt(prompt("Ingrese una edad: "));
		}while(isNaN(edad) || edad < 17);
		do
		{
			temperatura = parseInt(prompt("ingrese la temperatura corporal: "));
		}while(isNaN(temperatura));
		do
		{
			sexo = prompt("Ingrese el sexo (f/m): ");
		}while(sexo != "f" && sexo != "m");

		if(contador == 1)
		{
			masJoven = edad;

			contador--;
		}

		if(edad < masJoven)
		{
			masJoven = edad;
			if(estadoCivil == "soltero")
			{
				if(sexo == "f")
				{
					nombreMujerSolteraMasJoven = nombre;
					edadMujerSolteraMasJoven = edad;
				}
			}
		}

		if(estadoCivil == "viudo")
		{
			if(edad > 60)
			{
				cantViudoMayores++;
			}
		}

		if(edad > 60)
		{
			precioMayores = precioPorPasajero * descuento / 100;
		}

		sumaPrecio += precioPorPasajero;

		continuar = confirm("¿Desea continuar? ");
	}while(continuar == true);

	if(cantViudoMayores != NaN && cantViudoMayores != undefined)
	{
		document.write("Cantidad de personas viudas mayores a 60 años: " + cantViudoMayores + "<br>");
	}
	else
	{
		document.write("No hay personas viudas mayores a 60 años<br>");
	}

	if(nombreMujerSolteraMasJoven != undefined)
	{
		document.write("La mujer soltera más joven es : " + nombreMujerSolteraMasJoven + "<br>");
	}
	else
	{
		document.write("No hay mujeres solteras<br>");
	}

	if(edadMujerSolteraMasJoven != NaN && edadMujerSolteraMasJoven != undefined)
	{
		document.write("La edad de la mujer soltera más joven es : " + edadMujerSolteraMasJoven + "<br>");
	}
	else
	{
		document.write("No hay mujeres solteras<br>");
	}

	if(sumaPrecio != NaN && sumaPrecio != undefined)
	{
		document.write("El viaje total sin descuento sale: " + sumaPrecio + "<br>");
	}
	else
	{
		document.write("No hay pasajeros<br>");
	}
}