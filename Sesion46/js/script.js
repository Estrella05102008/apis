/*
let numeros = [1,2,3,4,5,6,7,8,9,10];
let cuadros = numeros.map(x => x*x);
console.log(cuadros);
*/

/*Crear una lista de números de del 30 al 40 
utiliza el método map para crear*/

/*
let numeros = [30,31,32,33,34,35,36,37,38,39,40];
let cuadros = numeros.map(x => x*3);
console.log(cuadros);
*/

/*
let numeros = [1,2,3,4,5];
let reducido = numeros.reduce(function(a,b){return a+b});
console.log(reducido);
*/
/*Otra forma de hacerlo*/

/*
let numeros = [1,2,3,4,5];
//let reducido = numeros.reduce(function(a,b){return a+b});
let reducido = numeros.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
},0);
console.log(reducido);
*/

/*
let numeros = [4,2,10,1,3,5,400];
numeros.sort();
console.log(numeros);
*/

/*
Como ordenar para que salga la lista (let numeros) 
correctamente ordenada agregando en numeros.sort()
*/

/*
let numeros = [4,2,10,1,3,5,400];
numeros.sort(function(a,b){return a-b;});
console.log(numeros);
*/

/*Ejemplo de metodo reverse */

/*
let numeros = [1,2,3];
numeros.reverse();
console.log(numeros);
*/

/*
Crear una lista de numeros de 5 y 15 en cualquier orden, 
invertirlo usando el metodo reverse
*/

/*
let numeros = [5,6,7,8,9,10,11,12,13,14,15];
numeros.reverse();
console.log(numeros);
*/

/*
let cadena = "Hola a todas, cómo están?"
let divisiones = cadena.split(" ")
console.log(divisiones);
*/

/*
Crear una cadena con un separador con un "*" y mostrar 
las palabras en una lista usando el metodo split
*/

/*
let cadena = "hello girls, cómo se encuentran?"
let divisiones = cadena.split("*")
console.log(divisiones);
*/

/*
let estaciones = ["verano","primavera","otoño","invierno"];
let frase1 = estaciones.join();
console.log(frase1);
let frase2 = estaciones.join(" ");
console.log(frase2);
*/

/*
Usar como seprarador en el metodo join el sinbolo "+"
*/

/*
let estaciones = ["verano","primavera","otoño","invierno"];
let frase1 = estaciones.join();
console.log(frase1);
let frase2 = estaciones.join("+");
console.log(frase2);
*/

/*
Revertir una frase o oración
Sea la oroción: "Hoy es un buen día"
Invertir la frase
*/

/*
let frases = "La energía no se crea, ni se destruye, solo se transforma";
console.log(frases);
let divisiones = frases.(" ")
console.log(divisiones);
frases.reverse();
console.log(reverse);
let frase = frases.join( );
*/

/*
Dada la oración: "contando palabras con métodos 
de javascript"
Utiliza el método split para poder contar 
cuántas palabras hay
*/

/*
Canbiar el formato de una fecha 
Fecha original: "2024-09-24"
Fecha con nuevo formato: "10/09/2024"
*/
const fecha = "2024-09-10";
let lista = fecha.split("-");
lista.reverse();
let nuevaFecha = lista.join("/");
console.log(nuevaFecha);