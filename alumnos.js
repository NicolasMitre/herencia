function Alumnos(nombre, edad) {
  Personas.call(this, nombre, edad);
}

Alumnos.prototype = Object.create(Personas.prototype);
Alumnos.prototype.constructor = Alumnos;
