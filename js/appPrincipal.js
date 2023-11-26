function obtenerContenidoArrayLS(listaLS) {
  //funcion para obtener un arreglo del Local Storage
  let devuelvoArray = [];
  const arrayLocalStorage = localStorage.getItem(listaLS);
  if (arrayLocalStorage) {
    devuelvoArray = JSON.parse(arrayLocalStorage);
  }
  return devuelvoArray;
}
function actualizarContenidoArrayLS(arreglo, listaLS) {
  //funcion para cargar un arreglo en LocalStorage
  localStorage.setItem(listaLS, JSON.stringify(arreglo));
}
function limpiarYenfocarPrimerImput(idElemento, valorImput) {
  //funcion para limpiar el formulario y seleccionar el primer imput
  document.getElementById(idElemento).reset();
  const primerCampo = document.querySelector('input[type="' + valorImput + '"]');
  primerCampo.focus();
}

let pacientes = [];
function manejarFormPaciente(event) {
  event.preventDefault();
  let nombrePaciente = document.getElementById("nombrePaciente").value;
  let apellidoPaciente = document.getElementById("apellidoPaciente").value;
  let dniPaciente = document.getElementById("dniPaciente").value;
  let edadPaciente = document.getElementById("edadPaciente").value;
  let emailPaciente = document.getElementById("emailPaciente").value;
  let contrasenaPaciente = document.getElementById("contrasenaPaciente").value;
  let repetirContrasenaPaciente = document.getElementById("repetirContrasenaPaciente").value;

  const paciente = {
    nombrePaciente,
    apellidoPaciente,
    dniPaciente,
    edadPaciente,
    emailPaciente,
    contrasenaPaciente,
    repetirContrasenaPaciente,
  };

  pacientes.push(paciente);

  localStorage.setItem("listaPacientes", JSON.stringify(pacientes));
}

let medicos = [];
function manejarFormMedico(event) {
  console.log(event);

  event.preventDefault();

  let nombreMedico = document.getElementById("nombreMedico").value;
  let apellidoMedico = document.getElementById("apellidoMedico").value;
  let dniMedico = document.getElementById("dniMedico").value;
  let matricula = document.getElementById("matricula").value;
  let especialidad = document.getElementById("especialidad").value;
  let centroMedico = document.getElementById("centroMedico").value;
  let emailMedico = document.getElementById("emailMedico").value;
  let contrasenaMedico = document.getElementById("contrasenaMedico").value;
  let repetirContrasenaMedico = document.getElementById("repetirContrasenaMedico").value;

  const medico = {
    nombreMedico,
    apellidoMedico,
    dniMedico,
    matricula,
    matricula,
    especialidad,
    centroMedico,
    emailMedico,
    contrasenaMedico,
    repetirContrasenaMedico,
  };

  medicos.push(medico);

  localStorage.setItem("listaMedicos", JSON.stringify(medicos));
}
