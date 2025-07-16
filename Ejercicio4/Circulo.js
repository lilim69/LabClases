import { Figura } from "./Figura.js";

export class Circulo extends Figura {
    constructor(color, radio){
        super(color);
        this.radio = radio;
    }

    area(){
        return Math.PI * this.radio *this.radio;
    }
}