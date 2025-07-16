class Animal {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    emitirSonido(){
        console.log("sonido generico");
        
    }
}

class Perro extends Animal {
    emitirSonido(){
        console.log(`${this.nombre} dice: Guau Guau`);
        
    }
}

class Gato extends Animal {
    emitirSonido(){
        console.log(`${this.nombre} dice: Miau Miau`);
        
    }
}

const perro = new Perro("Thriller", 7);
const gato = new Gato("Rolly", 5);

perro.emitirSonido();
gato.emitirSonido();