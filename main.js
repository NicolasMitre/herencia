let prueba1 = new Instituciones("Avalith", "Rawson 1428");
let prueba2 = new Alumnos("Nicolas", 21);
let prueba3 = new Profesores("Leonardo", 25);
let prueba4 = new Materias("POO", 5);
let pruebaFinal = new Cursos(
  prueba2.nombre,
  prueba3.nombre,
  prueba4.nombre,
  prueba4.horario,
  "Skill Factory"
);

prueba1.direccion();
prueba2.saludar();
prueba3.saludar();
prueba4.nuevaMateria();
prueba1.mostrar();
