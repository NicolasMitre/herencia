let gonzalo = new Profesores("Gonzalo", 35, "Base de datos");
let leonardo = new Profesores("Leo", 22, "Programacion");
let felipe = new Profesores("Felipe", 44, "SIC");

let martin = new Alumnos("Martin", 26);
let nicolas = new Alumnos("Nicolas", 18);
let luciano = new Alumnos("Luciano", 19);

let instituto = new Instituciones("avalith", "rwsn 1428");

instituto.agregarProfesores(gonzalo);
instituto.agregarProfesores(leonardo);
instituto.agregarProfesores(felipe);

instituto.agregarEstudiante(martin);
instituto.agregarEstudiante(nicolas);
instituto.agregarEstudiante(luciano);
