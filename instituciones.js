function Instituciones(nombre, direccion) {
  this.nombre = nombre;
  this.direccion = direccion;
  this.profesores = [];
  this.estudiantes = [];
}

Instituciones.prototype.msgEstudiantes = function() {
  console.log(
    `Bienvenido al Instituto ${
      this.nombre
    }.\n\nLos estudiantes son:\n\n${this.listarEstudiantes()}`
  );
};

Instituciones.prototype.msgProfesores = function() {
  console.log(
    `Bienvenido al Instituto ${
      this.nombre
    }.\n\nLos Profesores son:\n\n${this.listarProfesores()}`
  );
};

Instituciones.prototype.listarEstudiantes = function() {
  var listado = "";
  this.estudiantes.forEach(element => {
    listado += element.toString();
  });
  return listado;
};

Instituciones.prototype.listarProfesores = function() {
  var listado = "";
  this.profesores.forEach(element => {
    listado += element.toString();
  });
  return listado;
};

Instituciones.prototype.agregarEstudiante = function(estudiante) {
  this.estudiantes.push(estudiante);
  console.log("Estudiante agregado con exito!");
};

Instituciones.prototype.agregarProfesores = function(profesor) {
  this.profesores.push(profesor);
  console.log("Profesor agregado con exito!");
};
