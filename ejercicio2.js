class Empleado {
  constructor(nombre, edad, salarioBase) {
    this.nombre = nombre;
    this.edad = edad;
    this.salarioBase = salarioBase;
  }

  calcularSalario() {
    return this.salarioBase;
  }
}

class Gerente extends Empleado {
  constructor(nombre, edad, salarioBase, bonificacion) {
    super(nombre, edad, salarioBase);
    this.bonificacion = bonificacion;
  }

  calcularSalario() {
    return this.salarioBase + this.bonificacion;
  }
}

class Desarrollador extends Empleado {
  constructor(nombre, edad, salarioBase, lenguaje) {
    super(nombre, edad, salarioBase);
    this.lenguaje = lenguaje;
  }
}

const empleado = new Empleado("Leidy", 25, 3000000);
const gerente = new Gerente("Camila", 22, 5000000, 1000000);
const desarrollador = new Desarrollador("Santiago", 23, 3500000, "JavaScript");

console.log(`${empleado.nombre} gana: $${empleado.calcularSalario()}`);
console.log(`${gerente.nombre} gana: $${gerente.calcularSalario()}`);
console.log(`${desarrollador.nombre} gana: $${desarrollador.calcularSalario()}`);
