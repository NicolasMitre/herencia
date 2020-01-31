function Cursos(
  alumno,
  profesor,
  materia,
  horario,
  nombre,
  edadAlumno,
  edadProfesor
) {
  Alumnos.call(this, alumno, edadAlumno);
  Profesores.call(this, profesor, edadProfesor);
  Materias.call(this, materia, horario);
  this.nombre = nombre;
}

Cursos.prototype = Object.create(Alumnos.prototype);
Cursos.prototype = Object.create(Profesores.prototype);
Cursos.prototype = Object.create(Materias.prototype);
Cursos.prototype.constructor = Cursos;
