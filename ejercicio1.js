class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerDetalles() {
        // Usa backticks `
        return `El vehiculo es marca: ${this.marca}, modelo: ${this.modelo}, año: ${this.año}`;
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo, año, numeroPuertas) {
        super(marca, modelo, año);
        this.numeroPuertas = numeroPuertas;
    }

    obtenerDetalles() {
        return `${super.obtenerDetalles()}, puertas: ${this.numeroPuertas}`;
    }
}

class Moto extends Vehiculo {
    constructor(marca, modelo, año, cilindrada) {
        super(marca, modelo, año);
        this.cilindrada = cilindrada;
    }

    obtenerDetalles() {
        return `${super.obtenerDetalles()}, cilindrada: ${this.cilindrada}cc`;
    }
}

const miCarro = new Coche("Land Rover", "Range Rover", 2025, 4);
const miMoto = new Moto("BMW", "S1000R", 2017, 999);

console.log(miCarro.obtenerDetalles());
console.log(miMoto.obtenerDetalles());

