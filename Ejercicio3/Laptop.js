import { Producto } from "./producto.js";

export class Laptop extends Producto{
    constructor(nombre, precio, marca, procesador, pulgadas) {
        super(nombre, precio, marca);
        this.procesador = procesador;
        this.pulgadas = pulgadas;
    }

    descripcion(){
        return super.descripcion() + `, procesador: ${this.procesador}, pantalla: ${this.pulgadas} pulgadas`;
    }
}