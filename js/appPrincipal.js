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
  const nombrePaciente = document.getElementById("nombrePaciente").value;
  const apellidoPaciente = document.getElementById("apellidoPaciente").value;
  const dniPaciente = document.getElementById("dniPaciente").value;
  const edadPaciente = document.getElementById("edadPaciente").value;
  const emailPaciente = document.getElementById("emailPaciente").value;
  const contrasenaPaciente = document.getElementById("contrasenaPaciente").value;
  const repetirContrasenaPaciente = document.getElementById("repetirContrasenaPaciente").value;

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
  event.preventDefault();
  const nombreMedico = document.getElementById("nombreMedico").value;
  const apellidoMedico = document.getElementById("apellidoMedico").value;
  const dniMedico = document.getElementById("dniMedico").value;
  const matricula = document.getElementById("matricula").value;
  const especialidad = document.getElementById("especialidad").value;
  const centroMedico = document.getElementById("centroMedico").value;
  const emailMedico = document.getElementById("emailMedico").value;
  const contrasenaMedico = document.getElementById("contrasenaMedico").value;
  const repetirContrasenaMedico = document.getElementById("repetirContrasenaMedico").value;

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

function loguear()
{

  let user=document.getElementById("Usuario").value;
  let pass=document.getElementById("Contraseña").value;


  if(user=="Leo" && pass=="1234")
  {


    window.location="logedIn.html";

     
  }   

  else
  
{

  alert("Datos Incorrectos");


}





}

