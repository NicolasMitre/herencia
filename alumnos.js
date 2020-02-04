class Alumnos extends Personas {
  constructor(nombre, edad) {
    super(nombre, edad);
  }
  toString() {
    return `Nombre: ${this.nombre}. Edad: ${this.edad} \n`;
  }
}
