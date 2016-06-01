/*Variables*/

function suma(){
	var a=parseInt(prompt("Ingresa un número"))
	var b=parseInt(prompt("Ingresa un segundo número"))
	var suma=a+b;
	console.log(suma)
}

function suma(a,b){
	console.log(a+b);
}

function division(){
	var D=parseInt(prompt("Ingresa el dividendo: ")),
		d=parseInt(prompt("Ingresa el divisor: "));
		resultado=D/d;
		alert("El resultado de la división es: " + resultado)
}

function convertirEdad(){
	var nombre=prompt("Cuál es tu nombre?"),
		edad=parseInt(prompt("Mucho gusto, "+nombre+ ", ¿cuántos años tienes?")), dias;
		dias=edad*365
		alert("Wow, has vivido algo o más de "+dias+" días. Qué se siente ser tan viejo(a)?")
}

function areaCirculo(){
	/*inserta tu código aquí*/
}

function llamada(){
	/*inserta tu código aquí*/
}

function determinante(){
	/*inserta tu código aquí*/
}

/*Condicionales*/

function mayor(){
	var a=parseFloat(prompt("Ingresa el primer número: ")),
	b=parseFloat(prompt("Ingresa el segundo número: ")),
	mayor=a;
		if(mayor<=b)
			mayor=b;
		alert("El mayor es: "+mayor);
}

function positivo(){
	/*inserta tu código aquí*/
}

function almacenesHarapiento(){
	/*inserta tu código aquí*/
}

function banquete(){
	/*inserta tu código aquí*/
}


/*Estructuras Repetitivas*/
function whileDiez(){
	var i=1;
	while(i<=4){
		console.log(i)
		i=i+1
	}
}


function sumaWhile(){
	var i=1,
	suma=0;
	while(i<=4){
		suma=suma+i;
		i++
	}
	alert("La suma es "+suma)
}

function sumaDoWhile(){
	var i=1;
	suma=0;
	do{
		suma=suma+i;
		i=i+1;
	}while(i<=4)
	console.log(suma);
}

function sumaFor(){
	
	for(i=1;i<=4;i++){
		suma=suma+i;
	}
	alert(suma);
}

function paresCien(){
	/*inserta tu código aquí*/
}

function tabla(){
	/*inserta tu código aquí*/
}

function multiplos11(){
	/*inserta tu código aquí*/
}


/*Arreglos*/
function añadirArray(){
	/*inserta tu código aquí*/
}

function creandoArray(){
	/*inserta tu código aquí*/
}

function sumaArray(){
	/*inserta tu código aquí*/
}

/*Miscelánea*/
function paroimpar(){
	/*inserta tu código aquí*/
}

function mayomin(){
	/*inserta tu código aquí*/
}

function primo(){
	/*inserta tu código aquí*/
}

function cantidadDigitos(){
	/*inserta tu código aquí*/
}

