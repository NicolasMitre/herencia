function Profesores(nombre, edad, materia) {
  Personas.call(this, nombre, edad);
  this.materia = materia;
}
Profesores.prototype = Object.create(Personas.prototype);
Profesores.prototype.constructor = Profesores;
Profesores.prototype.toString = function() {
  return `Nombre: ${this.nombre}. Edad: ${this.edad}. Materia: ${this.materia}. \n\n`;
};

// Override
Profesores.prototype.saludar = function() {
  console.log("Soy un profesor que saluda distinto");
};
