class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola, soy ${this.nombre}`);
    }
}

let persona2 = new Persona("Sofía",18);

class Estudiante extends Persona{
    constructor(nombre,edad,grado){
        super(nombre,edad);
        this.grado = grado;
    }
}

let estudiante1 = new Estudiante("Cataleya",15,4);

class CuentaBancaria{
    #saldo = 0;
    constructor(nombre){
        this.nombre = nombre;
    }
    depositar(cantidad){
        this.#saldo += cantidad;
        console.log(`Deposito exitoso. Nuevo saldo: ${this.#saldo}`);
    }
    retirar(cantidad){
        if(cantidad <= this.#saldo){
            this.#saldo -= cantidad;
            console.log(`Retiro exitoso. Nuevo saldo: ${this.#saldo}`);
        }else{
            console.log("Fondos insufisientes.");
        }
    }
}

let cuenta1 = new CuentaBancaria("Estrella");

/*
Crea una clase círculo
Crea una clase llamada círculo que tenga un radio
como atributo y dos métodos:

calcularArea(): que devuelva el área del círculo.
calcularPerimetro(): que devuelva el perímetro
del círculo.
NOTA:
Área círculo: Math.PI * this.radio * this.radio
Périmetro círculo: 2 * Math.PI * this.radio
*/

class Círculo{
    constructor(radio){
        this.nombre = nombre;
    }
    calcularArea(){
        return Math.PI *this.radio* this.radio;
    }
    calcularPerimetro(){
        return 2 * Math.PI *this.radio;

        }
    }

    let circulo1 = new Círculo(5);