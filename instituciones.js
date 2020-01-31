function Instituciones(
  nombre,
  ubicacion,
  alumno,
  profesor,
  materia,
  horario,
  curso,
  edadAlum,
  edadProf
) {
  Cursos.call(
    this,
    alumno,
    profesor,
    materia,
    horario,
    curso,
    edadAlum,
    edadProf
  );
  this.nombre = nombre;
  this.ubicacion = ubicacion;
}
Instituciones.prototype = Object.create(Cursos.prototype);
Instituciones.prototype.constructor = Instituciones;
Instituciones.prototype.direccion = function() {
  console.log(`${this.nombre}, ${this.ubicacion}`);
};
Instituciones.prototype.mostrar = function() {
  console.log(
    `En este instituto ${this.nombre} de la calle ${this.ubicacion} el alumno ${this.alumno} asiste a su clase de ${this.materia} que dura ${this.horario} en el curso ${this.curso} dirigida por el profesor ${this.profesor}`
  );
};
