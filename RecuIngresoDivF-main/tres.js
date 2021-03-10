/*Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, 
teniendo en cuenta que tenemos varias ventas:nombre del cliente, cantidad de lamparas, 
marca (FelipeLamparas - ArgentinaLuz - Illuminatis), precio por unidad total de la 
compra: 
dato que se calcula.Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, 
se aplica un descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades, 
el descuento es del 5%. Ningun otro caso aplica descuento. 
al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)*/

function mostrar(){
	let nombre, marca;
	let cantidad = 0;
	let seguir = 's';
	let precio = 0;
	let acumTotal = 0;
	let acumPerdidaFel = 0;
	let acumPerdidaArg = 0;
	let acumArg = 0;
	let contArg = 0;
	let acumIllum = 0;
	let contIllum = 0;
	let acumFelipe = 0;
	let contFelipe = 0;
	let promArg = 0;
    let promIllum = 0;
	let promFelipe = 0;
	let marcaMasVendida;
	let perdidaTotal = 0;	

	do{
		nombre = prompt('ingrese nombre:').toLowerCase();
		while (!isNaN(nombre)){
			nombre = prompt('ingrese nombre valido:').toLowerCase();
		}

		cantidad = parseInt(prompt('ingrese cantidad:'));
		while (isNaN(cantidad) || cantidad <= 0) {
			cantidad = parseInt(prompt('error, ingrese cantidad valida'));
		}
	
		marca = prompt('ingrese la marca felipelamparas/argentinaluz/illuminatis:').toLowerCase();
		while (marca != 'felipelamparas' && marca != 'argentinaluz' && marca != 'illuminatis'){
			marca = prompt('error, ingrese marca felipelamparas/argentinaluz/illuminatis:').toLowerCase();
		}

		precio = parseInt(prompt('ingrese precio:'));
		while (isNaN(precio) || precio <= 0) {
			precio = parseInt(prompt('error, ingrese precio valido'));
		}
	
		//A

		acumTotal += precio * cantidad;
	
		//B

		if (marca == 'felipelamparas' && cantidad > 5){
			acumPerdidaFel += (precio * cantidad)/10
		} 

		if (marca == 'argentinaluz' && cantidad >= 3){
			acumPerdidaArg += (precio * cantidad)/10
		} 
	
		//C
		if (marca == 'felipelamparas'){
			acumFelipe += cantidad;
			contFelipe++;
		} 
		else if (marca == 'argentinaluz'){
			acumArg += cantidad;
			contArg++;
		}
		else {
			acumIllum += cantidad;
			contIllum++;
		}
	
		seguir = prompt('quiere ingresar otro cliente? s/n ');
	}while (seguir == 's');

	perdidaTotal = acumPerdidaFel + acumPerdidaArg;
	acumTotal -= perdidaTotal;

	//A
	if(acumTotal > 0){ 
		alert('La empresa recaudó $' +acumTotal);
	}
	else{
		alert('No se vendio nada')
	}

	//B
	if (perdidaTotal > 0){
		alert('En concepto de descuentos, la empresa perdio $' +perdidaTotal);
	} 
	else{
		alert('La empresa no tuvo perdidas en concepto de descuento');
	}

	//C
	if (contArg > 0) {
		promArg = acumArg / contArg;
		alert('el promedio de lamparas vendidas de argentinaluz es ' + promArg);
	}

	if(contIllum > 0){
		promIllum = acumIllum / contIllum;
		alert('el promedio de lamparas vendidas de illuminatis  es ' + promIllum);
	}

	if(contFelipe > 0) {
		promFelipe = acumFelipe / contFelipe;
		alert('el promedio de lamparas vendidas de felipelamparas es ' +promFelipe);
	}
	
	//D
	if (contArg > contFelipe && contArg > contIllum){
		marcaMasVendida = 'argentinaluz';
	} 
	else if (contFelipe >= contArg && contFelipe > contIllum) {
		marcaMasVendida = 'felipelamparas';
	} 
	else {
		marcaMasVendida = 'illuminatis';
	}
	alert('La marca que mas ventas realizó fue ' +marcaMasVendida);
}
