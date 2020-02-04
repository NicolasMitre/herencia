class Profesores extends Personas {
  constructor(nombre, edad, materia) {
    super(nombre, edad);
    this.materia = materia;
  }
  toString() {
    return `Nombre: ${this.nombre}. Edad: ${this.edad}. Materia: ${this.materia}. \n\n`;
  }
}
