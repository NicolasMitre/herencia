function Alumnos(nombre, edad) {
  Personas.call(this, nombre, edad);
}

Alumnos.prototype = Object.create(Personas.prototype);
Alumnos.prototype.constructor = Alumnos;
Alumnos.prototype.toString = function() {
  return `Nombre: ${this.nombre}. Edad: ${this.edad} \n`;
};
