/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota*/

function mostrar()
{
	var nombre;
	var cursada;
	var cantMaterias;
	var sexo;
	var notaPromedio;
	var edad;
	var promedioMaximo;
	var nombrePromedioMaximo;
	var contador = 1;
	var contador2 = 1;
	var contador3 = 1;
	var masJoven;
	var nombreMasJoven;
	var sumaNotaMasculino = 0;
	var sumaNotaFemenino = 0;
	var cantMasculino = 0;
	var cantFemenino = 0;
	var promedioMasculino;
	var promedioFemenino;
	var masMaterias;
	var edadMasMaterias;
	var nombreMasMaterias;
	var continuar;

	do
	{
		do
		{
			nombre = prompt("Ingrese su nombre: ");
		}while(!isNaN(nombre));
		do
		{
			cursada = prompt("Ingrese el tipo de cursada (libre/presencial/remota): ");
		}while(cursada != "libre" && cursada != "presencial" && cursada != "remota");
		do
		{
			cantMaterias = parseInt(prompt("Ingrese la cantidad de materias: "));
		}while(isNaN(cantMaterias) || cantMaterias < 1 || cantMaterias >= 8);
		do
		{
			sexo = prompt("Ingrese su sexo (m/f): ");
		}while(sexo != "m" && sexo != "f");
		do
		{
			notaPromedio = parseInt(prompt("Ingrese la nota promedio (entre 0 y 10): "));
		}while(isNaN(notaPromedio) || notaPromedio < 0 || notaPromedio > 10);
		do
		{
			edad = parseInt(prompt("Ingrese la edad: "));
		}while(isNaN(edad));

		if(cursada != "remota")
		{
			if(contador3 == 1)
			{
				masMaterias = cantMaterias;
				edadMasMaterias = edad;
				nombreMasMaterias = nombre;

				contador3--;
			}

			if(cantMaterias > masMaterias)
			{
				masMaterias = cantMaterias;
				edadMasMaterias = edad;
			}
		}
		else if(cursada == "remota")
		{
			if(cantMaterias > masMaterias)
			{
				masMaterias = cantMaterias;
				nombreMasMaterias = nombre;
			}
		}

		if(cursada == "libre")
		{
			if(contador == 1)
			{
				masJoven = edad;
				nombreMasJoven = nombre;

				contador2--;
			}

			if(edad < masJoven)
			{
				masJoven = edad;
				nombreMasJoven = nombre;
			}
		}

		if(sexo == "f")
		{
			if(contador == 1)
			{
				promedioMaximo = notaPromedio;
				nombrePromedioMaximo = nombre;

				contador--;
			}

			if(notaPromedio > promedioMaximo)
			{
				promedioMaximo = notaPromedio;
				nombrePromedioMaximo = nombre;
			}

			sumaNotaFemenino += notaPromedio;
			cantFemenino++;
		}
		else if(sexo == "m")
		{
			sumaNotaMasculino += notaPromedio;
			cantMasculino++;
		}



		continuar = confirm("¿Desea continuar? ");
	}while(continuar == true);

	promedioFemenino = sumaNotaFemenino / cantFemenino;
	promedioMasculino = sumaNotaMasculino / cantMasculino;

	if(nombrePromedioMaximo != undefined)
	{
		document.write("Nombre de mejor promedio femenino: " + nombrePromedioMaximo + "<br>");
	}
	else
	{
		document.write("No hay alumnas<br>");
	}

	if(nombreMasJoven != undefined)
	{
		document.write("Nombre del mas joven de los alumnos entre los que la dan libre: " + nombreMasJoven + "<br>");
	}
	else
	{
		document.write("No hay alumnos o no hay almunos que den libre<br>");
	}

	if(promedioMasculino != NaN)
	{
		document.write("Promedio de notas de masculinos: " + promedioMasculino + "<br>");
	}
	else
	{
		document.write("No hay alumnos masculinos<br>");
	}

	if(promedioFemenino != NaN)
	{
		document.write("Promedio de notas de femeninos: " + promedioFemenino + "<br>");
	}
	else
	{
		document.write("No hay alumnas<br>");
	}

	if(nombreMasMaterias != undefined)
	{
		document.write("Nombre del que cursa mas materias de forma no remota: " + nombreMasMaterias + "<br>");
	}
	else
	{
		document.write("Todos los alumnos cursan de forma remota<br>");
	}

	if(edadMasMaterias != NaN)
	{
		document.write("Edad del que cursa mas materias de forma no remota: " + edadMasMaterias + "<br>");
	}
	else
	{
		document.write("Todos los alumnos cursan de forma remota<br>");
	}
}