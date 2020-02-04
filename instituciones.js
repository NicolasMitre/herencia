class Instituciones {
  constructor(nombre, direccion) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.profesores = [];
    this.estudiantes = [];
  }
  msgEstudiantes() {
    console.log(
      `Bienvenido al Instituto ${
        this.nombre
      }.\n\nLos estudiantes son:\n\n${this.listarEstudiantes()}`
    );
  }
  msgProfesores() {
    console.log(
      `Bienvenido al Instituto ${
        this.nombre
      }.\n\nLos Profesores son:\n\n${this.listarProfesores()}`
    );
  }
  listarEstudiantes() {
    var listado = "";
    this.estudiantes.forEach(element => {
      listado += element.toString();
    });
    return listado;
  }
  listarProfesores() {
    var listado = "";
    this.profesores.forEach(element => {
      listado += element.toString();
    });
    return listado;
  }
  agregarEstudiante(estudiante) {
    this.estudiantes.push(estudiante);
    console.log("Estudiante agregado con exito!");
  }
  agregarProfesores(profesor) {
    this.profesores.push(profesor);
    console.log("Profesor agregado con exito!");
  }
}
