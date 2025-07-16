export class Producto {
    constructor(nombre, precio, marca){
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
    }

    descripcion(){
        return`${this.nombre} de marca ${this.marca} cuesta $${this.precio}`;
    }
}
