/*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, 
los datos solicitados son: nombre 
carrera("Quimica";"Fisica";"Sistemas")
sexo (masculino - femenino - no binario)
cantidad de materias(entre 1 y 5)
Nota promedio (entre 0 y 10)
edad (validar) 
se debe informar de existir, o informar que no existe, en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/
function mostrar(){

	let nombre, sexo, carrera;
	let nombreFisica;
	let nombreMenorFem;
	let nombreMasMaterias;
	let materias = 0;
	let maxMaterias = 0;
	let mejorFisica = 0;
	let notas = 0;
	let edad = 0;
	let edadMenorFem = 0;
	let edadMasMaterias = 0;
	let flagFisica = 1;
	let flagEdadFem = 1;
	let flagMaterias = 1;
	let contTotal = 0;
	let contQuimica = 0;
	let contFisica = 0;
	let contSistemas = 0;
	let promFisica = 0;
	let promQuimica = 0;
	let promSistemas = 0;

	for(i = 0; i < 3; i++){

		nombre = prompt('Ingrese el nombre del estudiante: ').toLowerCase();
		while (!isNaN(nombre)){
			nombre = prompt('Ingreso incorrecto. Ingrese un nombre valido:').toLowerCase();
		}

		sexo = prompt('Ingrese el sexo del estudiante masculino/femenino/no binario: ').toLowerCase();
		while (sexo != 'masculino' && sexo != 'femenino' && sexo != 'no binario') {
			sexo = prompt('Ingreso incorrecto. Ingrese un sexo valido: ').toLowerCase();
		}

		carrera = prompt('Ingrese la carrera quimica/fisica/sistemas: ').toLowerCase();
		while (carrera != 'quimica' && carrera != 'fisica' && carrera != 'sistemas') {
			carrera = prompt('Ingreso incorrecto. Ingrese una carrera valida: ').toLowerCase();
		}

		materias = parseInt(prompt('Ingrese las materias (entre 1 y 5): '));
		while (materias < 1 || materias > 5 || isNaN(materias)) {
			materias = parseInt(prompt('Ingreso incorrecto. materias entre 1 y 5:  '));
		}
		
		notas = parseInt(prompt('Ingrese las notas (entre 0 y 10): '));
		while (notas < 0 || notas > 10 || isNaN(notas)) {
			notas = parseInt(prompt('Ingreso incorrecto. notas entre 0 y 10:  '));
		}
		
		edad = parseInt(prompt('Ingrese la edad: '));
		while (edad < 1 || isNaN(edad)) {
			edad = parseInt(prompt('Ingreso incorrecto. edad invalida:  '));
		} 

		contTotal++;

		//A
		if(carrera == 'fisica' && (materias > mejorFisica || flagFisica == 1)){
			mejorFisica = materias;
			nombreFisica = nombre;
			flagFisica = 0;
		}
		//B
		if(sexo == 'femenino' && (edad < edadMenorFem || flagEdadFem == 1)){
			edadMenorFem = edad;
			nombreMenorFem = nombre;
			flagEdadFem = 0;
		}
		//C
		switch(carrera){

			case 'quimica':
			contQuimica++;
			break;

			case 'fisica':
			contFisica++;
			break;
			
			case 'sistemas':
			contSistemas++;
			break;
		}
		//D
		if(carrera != 'quimica' && (materias > maxMaterias || flagMaterias == 1)){
			edadMasMaterias = edad;
			nombreMasMaterias = nombre;
			flagMaterias = 0;
		}

	}
	//A
	if(flagFisica == 0){
		alert('El nombre del mejor promedio de fisica es: '+nombreFisica);
	}
	else{
		alert('No se ingresaron estudiantes de fisica');
	}
	//B
	if(flagEdadFem == 0){
		alert('El nombre de la alumna con menor edad es: '+nombreMenorFem);
	}
	else{
		alert('No se ingresaron estudiantes mujeres');
	}
	//C
	if(contQuimica > 0){
		promQuimica = (contQuimica*100)/contTotal;
		alert('El porcentaje de alumnos que estudia quimica es : ' +promQuimica+'%');
	}
	else{
		alert('No se ingresaron estudiantes de quimica')
	}
	if(contFisica > 0){
		promFisica = (contFisica*100)/contTotal;
		alert('El porcentaje de alumnos que estudia fisica es : ' +promFisica+'%');
	}
	else{
		alert('No se ingresaron estudiantes de fisica')
	}
	if(contSistemas > 0){
		promSistemas = (contSistemas*100)/contTotal;
		alert('El porcentaje de alumnos que estudia sistemas es : ' +promSistemas+'%');
	}
	else{
		alert('No se ingresaron estudiantes de sistemas')
	}
	//D
	if(flagMaterias == 0){
		alert('El nombre y edad del estudiante que cursa la mayor cantidad de materias exceptuando la carrera quimica es: '+nombreMasMaterias+ ' ' +edadMasMaterias);
	}
	else{
		alert('No se ingresaron estudiantes de las carreras de fisica o sistemas');
	}

}//FIN DE LA FUNCIÓN

