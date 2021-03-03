/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos*/

function mostrar()
{
	var nombre;
	var marca;
	var producto;
	var precio;
	var cantUnidades;
	var inflamables;
	var unidadesAlcohol = 0;
	var unidadesIac = 0;
	var unidadesQuat = 0;
	var cantAlcohol = 0;
	var cantIac = 0;
	var cantQuat = 0;
	var promedioAlcohol;
	var promedioIac;
	var promedioQuat;
	var unidadesIgnifugos = 0;
	var unidadesCombustibles = 0;
	var unidadesExplosivos = 0;
	var cantUnidadesIacPreciosBajos = 0;
	var productoMasCaro;
	var marcaMasCaro;
	var tipoMasCaro;
	var contador = 1;
	
	for(var i = 0; i < 5; i++)
	{
		do
		{
			nombre = prompt("Ingrese el nombre: ");
		}while(!isNaN(nombre));
		do
		{
			marca = prompt("Ingrese la marca: ");
		}while(!isNaN(marca));
		do
		{
			producto = prompt("Ingrese el producto (alcohol/iac/quat): ");
		}while(producto != "alcohol" && producto != "iac" && producto != "quat");
		do
		{
			precio = parseInt(prompt("Ingrese el precio (entre 100 y 300): "));
		}while(isNaN(precio) || precio < 100 || precio > 300);
		do
		{
			cantUnidades = parseInt(prompt("Ingrese la cantidad de unidades (máximo 1000): "));
		}while(isNaN(cantUnidades) || cantUnidades <= 0 || cantUnidades > 1000);
		do
		{
			inflamables = prompt("Ingrese el tipo de inflamable (ignifugo/combustible/explosivo): ");
		}while(inflamables != "ignifugo" && inflamables != "combustible" && inflamables != "explosivo");

		if(contador == 1)
		{
			productoMasCaro = precio;
			marcaMasCaro = marca;
			tipoMasCaro = inflamables;

			contador--;
		}

		if(producto == "alcohol")
		{
			unidadesAlcohol += cantUnidades;
			cantAlcohol++;
		}
		else if(producto == "iac")
		{
			unidadesIac += cantUnidades;
			cantIac++;

			if(precio <= 200)
			{
				cantUnidadesIacPreciosBajos++;
			}
		}
		else if(producto == "quat")
		{
			unidadesQuat += cantUnidades;
			cantQuat++;
		}

		if(inflamables == "ignifugo")
		{
			unidadesIgnifugos += cantUnidades;
		}
		else if(inflamables == "combustible")
		{
			unidadesCombustibles += cantUnidades;
		}
		else if(inflamables == "explosivo")
		{
			unidadesExplosivos += cantUnidades;
		}

		if(precio > productoMasCaro)
		{
			productoMasCaro = precio;
			marcaMasCaro = marca;
			tipoMasCaro = inflamables;
		}
	}

	promedioAlcohol = unidadesAlcohol / cantAlcohol;
	promedioIac = unidadesIac / cantIac;
	promedioQuat = unidadesQuat / cantQuat;

	document.write("Promedio de unidades de alcohol: " + promedioAlcohol + "<br>");
	document.write("Promedio de unidades de iac: " + promedioIac + "<br>");
	document.write("Promedio de unidades de quat: " + promedioQuat + "<br>");

	if(unidadesIgnifugos > unidadesCombustibles)
	{
		if(unidadesIgnifugos > unidadesExplosivos)
		{
			document.write("El tipo de inflamable con más cantidad de unidades en total de la compra es ignífugo con " + unidadesIgnifugos + " unidades" + "<br>");
		}
		else
		{
			document.write("El tipo de inflamable con más cantidad de unidades en total de la compra es explosivo con " + unidadesExplosivos + " unidades" + "<br>");
		}
	}
	else if(unidadesCombustibles > unidadesIgnifugos)
	{
		if(unidadesCombustibles > unidadesExplosivos)
		{
			document.write("El tipo de inflamable con más cantidad de unidades en total de la compra es combustible con " + unidadesCombustibles + " unidades" + "<br>");
		}
		else
		{
			document.write("El tipo de inflamable con más cantidad de unidades en total de la compra es explosivo con " + unidadesExplosivos + " unidades" + "<br>");
		}
	}
	else
	{
		document.write("El tipo de inflamable con más cantidad de unidades en total de la compra es explosivo con " + unidadesExplosivos + " unidades" + "<br>");
	}

	document.write("Unidades de IAC con precios menores a 200: " + cantUnidadesIacPreciosBajos + "<br>");
	document.write("Marca del más caro: " + marcaMasCaro + "<br>");
	document.write("Tipo del más caro: " + tipoMasCaro + "<br>");
}