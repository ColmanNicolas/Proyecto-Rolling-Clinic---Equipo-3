//------------  FUNCIONES UTILITARIAS ---------------
const obtenerContenidoArrayLS = (listaLS) => { //funcion para arreglos
  let devuelvoArray = [];
  const arrayLocalStorage = localStorage.getItem(listaLS);
  if (arrayLocalStorage) {
    devuelvoArray = JSON.parse(arrayLocalStorage);
  }
  return devuelvoArray;
}
const obtenerUnElementoLS = (listaLS) => {    //funcion para unico elemento
  let elemento = null;
  const elementoLocalStorage = localStorage.getItem(listaLS);
  if (elementoLocalStorage) {
    elemento = JSON.parse(elementoLocalStorage);
  }
  return elemento;
}
const actualizarContenidoArrayLS = (arreglo, listaLS) => {
  localStorage.setItem(listaLS, JSON.stringify(arreglo));
}
function encodeString(text) {
  return btoa(text);
}
function decodeString(encodedText) {
  return atob(encodedText);
}
function toggleOffcanvas() {
  var offcanvasElement = document.getElementById("offcanvasScrolling");
  offcanvasElement.classList.toggle("show");
}

const limpiarYenfocarPrimerImput = (idElemento, valorImput) => {
  //funcion para limpiar el formulario y seleccionar el primer imput
  document.getElementById(idElemento).reset();
  const primerCampo = document.querySelector('input[type="' + valorImput + '"]');
  primerCampo.focus();
}
//---------------------------------------
let pacientes = [];
const manejarFormPaciente = (event) => {
  event.preventDefault();
  const nombrePaciente = document.getElementById("nombrePaciente").value;
  if (nombrePaciente.length < 3) {
    alert("El nombre debe contener al menos tres caracteres");
    return false;
  }
  if (!/^([a-zA-ZñÑáéíóúÁÉÍÓÚ])+$/i.test(nombrePaciente)) {
    alert("El nombre solo puede contener letras");
    return false;
  }

  const apellidoPaciente = document.getElementById("apellidoPaciente").value;
  if (apellidoPaciente.length < 3) {
    alert("El apellido debe contener al menos tres caracteres");
    return false;
  }
  if (!/^([a-zA-ZñÑáéíóúÁÉÍÓÚ '])+$/i.test(apellidoPaciente)) {
    alert("El apellido solo puede contener letras");
    return false;
  }
  const dniPaciente = document.getElementById("dniPaciente").value;
  if (dniPaciente.length < 7) {
    alert("El DNI debe contener al menos siete digitos");
    return false;
  }
  const edadPaciente = document.getElementById("edadPaciente").value;
  if (edadPaciente.length > 3) {
    alert("La edad no puede contener más de tres digitos");
    return false;
  }
  const emailPaciente = document.getElementById("emailPaciente").value;
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(emailPaciente)) {
    alert("El email no es valido");
    return false;
  }

  const contrasenaPaciente = document.getElementById("contrasenaPaciente").value;
  if (contrasenaPaciente.length < 6) {
    alert("La contraseña debe contener al menos seis digitos");
    return false;
  }

  const paciente = {
    nombrePaciente,
    apellidoPaciente,
    dniPaciente,
    edadPaciente,
    emailPaciente,
    contrasenaPaciente,
  };

  pacientes.push(paciente);

  localStorage.setItem(listaDeEsperaPacientes0, JSON.stringify(pacientes));

  var cierreModalPaciente = document.getElementById("modalPaciente");
  setTimeout(() => bootstrap.Modal.getInstance(cierreModalPaciente).hide(), 0);

  var reseteoModalPaciente = document.getElementById("modalPaciente");
  reseteoModalPaciente.addEventListener("hidden.bs.modal", function (event) {
    formPaciente.reset();
  });
};

let medicos = [];
const manejarFormMedico = (event) => {
  event.preventDefault();
  const nombreMedico = document.getElementById("nombreMedico").value;
  if (nombreMedico.length < 3) {
    alert("El nombre debe contener al menos tres caracteres");
    return false;
  }
  if (!/^([a-zA-ZñÑáéíóúÁÉÍÓÚ '])+$/i.test(nombreMedico)) {
    alert("El nombre solo puede contener letras");
    return false;
  }
  const apellidoMedico = document.getElementById("apellidoMedico").value;
  if (apellidoMedico.length < 3) {
    alert("El apellido debe contener al menos tres caracteres");
    return false;
  }
  if (!/^([a-zA-ZñÑáéíóúÁÉÍÓÚ])+$/i.test(apellidoMedico)) {
    alert("El apellido solo puede contener letras");
    return false;
  }
  const dniMedico = document.getElementById("dniMedico").value;
  if (dniMedico.length < 7) {
    alert("El DNI debe contener al menos siete digitos");
    return false;
  }
  const matricula = document.getElementById("matricula").value;
  const especialidad = document.getElementById("especialidad").value;
  const centroMedico = document.getElementById("centroMedico").value;
  const emailMedico = document.getElementById("emailMedico").value;
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(emailMedico)) {
    alert("El email no es valido");
    return false;
  }
  const contrasenaMedico = document.getElementById("contrasenaMedico").value;
  if (contrasenaMedico.length < 6) {
    alert("La contraseña debe contener al menos seis digitos");
    return false;
  }

  const medico = {
    nombreMedico,
    apellidoMedico,
    dniMedico,
    matricula,
    especialidad,
    centroMedico,
    emailMedico,
    contrasenaMedico,
  };

  medicos.push(medico);

  localStorage.setItem(listaDeEsperaMedicos0, JSON.stringify(medicos));

  var cierreModalMedico = document.getElementById("modalMedico");
  setTimeout(() => bootstrap.Modal.getInstance(cierreModalMedico).hide(), 0);

  var reseteoModalMedico = document.getElementById("modalMedico");
  reseteoModalMedico.addEventListener("hidden.bs.modal", function (event) {
    formMedico.reset();
  });
};

function loguear() {
  let user = document.getElementById("Usuario").value;
  let pass = document.getElementById("Contraseña").value;

  if (user == "Leo" && pass == "1234") {
    localStorage.setItem( "codigoInicioSesion",0);
    window.location = "logeado.html";
  } else if (user == "Medico" && pass == "123456") {
    localStorage.setItem("codigoInicioSesion",1);
    window.location = "logeado.html";
  } else if (user == "admin" && pass == "admin") {
    localStorage.setItem("codigoInicioSesion",2);
    window.location = "logeado.html";
  } else {
    alert("Datos Incorrectos");
  }
}
const listaDeEsperaMedicos0= "listaDeEsperaMedicos";

const listaDeEsperaPacientes0 ="listaDeEsperaPacientes";