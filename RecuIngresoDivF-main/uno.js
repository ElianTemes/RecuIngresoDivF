/* Una software factory registra la siguiente informacion de sus 
empleados:Nombre edad (validar)sexo (masculino - femenino - no binario)puesto (programador - analista - Qa) 
sueldo (entre 15000 y 70000) 
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto 
b) el sexo del que percibe el mayor sueldo 
c) el nombre del empleado femenino con mas sueldo 
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 */
function mostrar(){

	let nombre, sexo, puesto;
	let seguir = 's';
	let nombreFem;
	let sexoMax;
	let edad = 0;
	let sueldo = 0;
	let sueldoMax = 0;
	let sueldoMaxFem = 0;
	let flagSueldo = 1;
	let flagSueldoM = 1;
	let promProg = 0;
	let acumProg = 0;
	let contProg = 0;
	let promAn = 0;
	let acumAn = 0;
	let contAn = 0;
	let promQa = 0;
	let acumQa = 0;
	let contQa = 0;
	let contNoBinario = 0;
	do{
		
		nombre = prompt('Ingrese el nombre del empleado: ').toLowerCase();
		while (!isNaN(nombre)){
			nombre = prompt('Ingreso incorrecto. Ingrese un nombre valido:').toLowerCase();
		}

		edad = parseInt(prompt('Ingrese la edad: '));
		while ( edad < 1 || isNaN(edad)) {
			edad = parseInt(prompt('Ingreso incorrecto. edad invalida:  '));
		} 

		sexo = prompt('Ingrese el sexo del empleado masculino/femenino/no binario: ').toLowerCase();
		while (sexo != 'masculino' && sexo != 'femenino' && sexo != 'no binario') {
			sexo = prompt('Ingreso incorrecto. Ingrese un sexo valido: ').toLowerCase();
		}

		puesto = prompt('Ingrese el puesto del empleado programador/analista/qa: ').toLowerCase();
		while (puesto != 'programador' && puesto != 'analista' && puesto != 'qa') {
			puesto = prompt('Ingreso incorrecto. Ingrese un puesto valido: ').toLowerCase();
		}

		sueldo = parseInt(prompt('Ingrese el sueldo del empleado (entre 15000 y 70000): '));
		while (sueldo < 15000 || sueldo > 70000 || isNaN(sueldo)) {
			sueldo = parseInt(prompt('Ingreso incorrecto. el sueldo entre 15000 y 70000:  '));
		} 
		
		//A
		if(puesto == 'programador'){
			acumProg += sueldo;
			contProg++;
		}
		else if(puesto == 'analista'){
			acumAn += sueldo;
			contAn++;
		}
		else{
			acumQa += sueldo;
			contQa++;
		}
		//B
		if(sueldo > sueldoMax || flagSueldo == 1){
			sueldoMax = sueldo;
			sexoMax = sexo;
			flagSueldo = 0;
		}
		//C
		if(sexo == 'femenino' && (sueldo > sueldoMaxFem || flagSueldoM == 1)){
			sueldoMaxFem = sueldo;
			nombreFem = nombre;
			flagSueldoM = 0;
		}
		//D
		if(sexo == 'no binario' && puesto == 'programador' && (sueldo <= 55000 && sueldo >= 20000)){
			contNoBinario ++;
		}

		seguir = prompt('Desea continuar?').toLowerCase();
	}while(seguir == 's');

	// A
	if(contProg > 0){
		promProg = acumProg / contProg;
		alert('El sueldo promedio de los programadores es : ' +promProg);
	}
	else{
		alert('No se ingresaron programadores')
	}
	if(contAn > 0){
		promAn = acumAn / contAn;
		alert('El sueldo promedio de los analistas es: ' +promAn);
	}
	else{
		alert('No se ingresaron analistas')
	}
	if(contQa > 0){
		promQa = acumQa / contQa
		alert('El sueldo promedio de los qa es: ' +promQa);
	}
	else{
		alert('No se ingresaron qa')
	}
	//B
	if(flagSueldo == 0){
		alert('El sexo de la persona que percibe el mayor sueldo es: '+sexoMax);
	}
	else{
		alert('No se ingresaron datos');
	}
	//C
	if(flagSueldoM == 0){
		alert('El nombre de la empleada con mayor sueldo es: '+nombreFem);
	}
	else{
		alert('No se ingresaron mujeres');
	}
	if(contNoBinario > 0){
		alert('El numero de programadores no binarios que cobran un sueldo entre 20000 y 55000 es: '+contNoBinario);
	}
	else{
		alert('No hay programadores no binarios que ganen entre 20000 y 55000');
	}
}//FIN DE LA FUNCIÓN

