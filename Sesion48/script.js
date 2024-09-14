function Persona(nombre, apellido, edad, genero, hobbies){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.hobbies = hobbies;
}

const persona1 = new Persona("Estrella","Yarleque",15,"femenino",["musica","bailar","leer"]);

/*Crear la clase "Perro" con los siguientes atributos:
-nombre
-raza
-edad
-genero
Crear "perro1" con atributos perzonalizados
*/

function Perro(nombre, raza, edad, genero){
    this.perro = nombre;
    this.raza = raza;
    this.edad = edad;
    this.genero = genero;
}

const perro = new Perro("Lincol","Pastor aleman",3,"masculino");


/*
function Lobo(nombre, raza, edad, genero, caracteristicas){
    this.nombre = nombre;
    this.raza = raza;
    this.nombre = edad;
    this.genero = genero;
    this.caracteristicas = caracteristicas;
}

const lobo = new Lobo("Luna","Mujer lobo",18,"femenino",["inteligente","valiente","astuta","reservada","intuitiva"]);*/