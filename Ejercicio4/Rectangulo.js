import { Figura } from "./Figura.js";

export class Rectangulo extends Figura {
    constructor(color, base, altura) {
        super(color);
        this.base = base;
        this.altura = altura;
    }

    area() {
        return this.base * this.altura;
    }
}