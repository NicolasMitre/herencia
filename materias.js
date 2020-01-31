function Materias(nombre, horario) {
  this.nombre = nombre;
  this.horario = horario;
}

Materias.prototype.constructor = Materias;
Materias.prototype.nuevaMateria = function() {
  console.log(`${this.nombre} dura ${this.horario} hs`);
};
