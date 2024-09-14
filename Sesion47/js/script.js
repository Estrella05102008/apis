class Stack{//class personaje.
    constructor(){
        this.items = [];//caracteristicas.
    }
    //agregar habilidades de un personaje u objeto etc.
    push(element){//Agrega elementos.
        this.items.push(element);
    }
    pop(){
        if(this.isEmpty){
            return "La pila está vacía";
        }
        return this.items.pop();
    }
    peek(){//Mostrar el último elemento.
        if(this.isEmpty){
            return "La pila está vacía";
        }
        return this.items[this.items.length - 1];
    }
    isEmpty(){//Verificamos si la pila está vacía.
        return this.items.length === 0;
    }
    size(){//Número de elementos en la pila.
        return this.items.length;
    }
    print(){//Mostrar elementos en la pila.
        console.log(this.items);
    }
}

const animales = new Stack();

//Creando clase colas.
class Queue{
    constructor(){
        this.items = [];
    }
    //Añadir un elemento
    agregar(elemento){
        this.items.push(elemento);
    }
    //Eliminar el primer el elemento.
    eliminar(){
        if(this.isEmpty()){
            return "La cola está vacía"
        }
        return this.items.shift();
    }
    //Mostrar el primer elemento.
    front(){
        if(this.isEmpty()){
            return "La cola está vacía"
        }
        return this.items[0];
    }
    //Verificar si la cola está vacía
    isEmpty(){
        return this.items.length;
    }
    print(){
        console.log(this.items);
    }
}

const paises = new Queue();

//Creando árbol
class TreeNode{
    constructor(nodo){
        this.nodo = nodo;
        this.decendientes = [];
    }
}

const a = new TreeNode(1456900);
const b = new TreeNode(956);
const c = new TreeNode(8400);
const d = new TreeNode(724);
const e = new TreeNode(24);

const matriz = [
    [1,2,3] ,
    [4,5,6] ,
    [7,8,9]
];

/*
EJEMPLO: Pablo jugó ayer en el patio, él tiene 9 años.
*/
