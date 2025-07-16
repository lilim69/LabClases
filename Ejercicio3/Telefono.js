import { Producto } from "./producto.js";

export class Telefono extends Producto {
    constructor(nombre, precio, marca, almacenamiento, ram) {
        super(nombre, precio, marca);
        this.almacenamiento = almacenamiento;
        this.ram = ram;
    }

    descripcion(){
        return super.descripcion() + `, ${this.almacenamiento}GB de almacenamiento y ${this.ram}GB RAM`;
    }
}