import { Rectangulo } from "./Rectangulo.js";
import { Circulo } from "./Circulo.js";

const rect = new Rectangulo("azul", 5, 4);
const circ = new Circulo("rosa", 3);

console.log(`area del rectangulo: ${rect.area()}`);
console.log(`area del circulo: ${circ.area().toFixed(2)}`);


