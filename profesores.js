function Profesores(nombre, edad) {
  Personas.call(this, nombre, edad);
}
Profesores.prototype = Object.create(Personas.prototype);
Profesores.prototype.constructor = Profesores;
