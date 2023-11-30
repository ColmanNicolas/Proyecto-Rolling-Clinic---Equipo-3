//------------  FUNCIONES UTILITARIAS ---------------

const obtenerContenidoArrayLS = (listaLS) => {
  //funcion para arreglos
  let devuelvoArray = [];
  const arrayLocalStorage = localStorage.getItem(listaLS);
  if (arrayLocalStorage) {
    devuelvoArray = JSON.parse(arrayLocalStorage);
  }
  return devuelvoArray;
};

const obtenerUnElementoLS = (listaLS) => {
  //funcion para unico elemento
  let elemento = null;
  const elementoLocalStorage = localStorage.getItem(listaLS);
  if (elementoLocalStorage) {
    elemento = JSON.parse(elementoLocalStorage);
  }
  return elemento;
};

const actualizarContenidoArrayLS = (arreglo, listaLS) => {
  localStorage.setItem(listaLS, JSON.stringify(arreglo));
};

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

const validarNombres = (nombre) => {
  if (nombre.length < 3 || !/^([a-zA-ZñÑáéíóúÁÉÍÓÚ '])+$/i.test(nombre)) {
    alert("El nombre o apellido ingresado no es válido");
    return false;
  } else {
    return true;
  }
};

const validarNumeros = (numero, cifraMinima, cifraMaxima) => {
  return numero.length >= cifraMinima && numero.length <= cifraMaxima;
};

const limpiarYenfocarPrimerImput = (idElemento, valorImput) => {
  //funcion para limpiar el formulario y seleccionar el primer imput
  document.getElementById(idElemento).reset();
  const primerCampo = document.querySelector(
    'input[type="' + valorImput + '"]'
  );
  primerCampo.focus();
};
//---------------------------------------

const manejarFormPaciente = (event) => {
  event.preventDefault();

  const pacientes = obtenerContenidoArrayLS(listaDeEsperaPacientes0);
  const nombrePaciente = document.getElementById("nombrePaciente").value.trim();
  const apellidoPaciente = document.getElementById("apellidoPaciente").value.trim();
  const dniPaciente = document.getElementById("dniPaciente").value.trim();
  const edadPaciente = document.getElementById("edadPaciente").value.trim();
  const emailPaciente = document.getElementById("emailPaciente").value.trim();
  const contrasenaPaciente = document.getElementById("contrasenaPaciente").value;

  const paciente = {
    nombrePaciente,
    apellidoPaciente,
    dniPaciente,
    edadPaciente,
    emailPaciente,
    contrasenaPaciente,
  };
  
  if (validarPaciente(paciente)) {
    pacientes.push(paciente);
    actualizarContenidoArrayLS(pacientes, listaDeEsperaPacientes0);

    const cierreModalPaciente = document.getElementById("modalPaciente");
    bootstrap.Modal.getInstance(cierreModalPaciente).hide();

    document.getElementById("formPaciente").reset();
  }
};

const validarPaciente = (paciente) => {
  if (!validarNombres(paciente.nombrePaciente) || !validarNombres(paciente.apellidoPaciente)) {
    return false;
  }

  if (!validarNumeros(paciente.dniPaciente, 6, 8)) {
    alert("El DNI ingresado no es válido");
    return false;
  }

  if (!validarNumeros(paciente.edadPaciente, 1, 3)) {
    alert("La edad ingresada no es válida");
    return false;
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(paciente.emailPaciente)) {
    alert("El email no es válido");
    return false;
  }

  if (paciente.contrasenaPaciente.length < 6) {
    alert("La contraseña debe contener al menos seis dígitos");
    return false;
  }

  return true;
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
  if (!/^([a-zA-ZñÑáéíóúÁÉÍÓÚ '])+$/i.test(apellidoMedico)) {
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
    localStorage.setItem("codigoInicioSesion", 0);
    window.location = "logeado.html";
  } else if (user == "Medico" && pass == "123456") {
    localStorage.setItem("codigoInicioSesion", 1);
    window.location = "logeado.html";
  } else if (user == "admin" && pass == "admin") {
    localStorage.setItem("codigoInicioSesion", 2);
    window.location = "logeado.html";
  } else {
    alert("Datos Incorrectos");
  }
}
const listaDeEsperaMedicos0 = "listaDeEsperaMedicos";

const listaDeEsperaPacientes0 = "listaDeEsperaPacientes";
