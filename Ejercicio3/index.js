import { Telefono } from "./Telefono.js";
import { Laptop } from "./Laptop.js";

const telefono = new Telefono("Iphone 13", 2900000, "Apple", 256, 4)
const laptop = new Laptop("MacBook Pro", 5000000, "Apple", "M1", 13);

console.log(telefono.descripcion());
console.log(laptop.descripcion());

