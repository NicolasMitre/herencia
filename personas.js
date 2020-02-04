class Personas {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(`Soy ${this.nombre} tengo ${this.edad}`);
  }
}
