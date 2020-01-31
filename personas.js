function Personas(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Personas.prototype.constructor = Personas;
Personas.prototype.saludar = function() {
  console.log(`Soy ${this.nombre} tengo ${this.edad}`);
};
