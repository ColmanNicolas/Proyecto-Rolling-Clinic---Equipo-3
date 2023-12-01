const manejarFormPaciente = (event) => {
  event.preventDefault();

  const nombrePaciente = document.getElementById("nombrePaciente").value.trim();
  const apellidoPaciente = document.getElementById("apellidoPaciente").value.trim();
  const dniPaciente = document.getElementById("dniPaciente").value.trim();
  const edadPaciente = document.getElementById("edadPaciente").value.trim();
  const emailPaciente = document.getElementById("emailPaciente").value.trim();
  const contrasenaPaciente = document.getElementById("contrasenaPaciente").value;

  const toastLiveExample = document.getElementById("liveToast");
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

  const toastMensaje = document.getElementById("toastMensaje");

  const paciente = {
    nombrePaciente,
    apellidoPaciente,
    dniPaciente,
    edadPaciente,
    emailPaciente,
    contrasenaPaciente,
  };

  if (validarPaciente(paciente)) {
    agregarUsuario(paciente, listaDeEsperaPacientes0);

    modificarToastRegistro("exito");
    toastMensaje.innerText = "El registro se realizó con exito!";

    cerrarModalResetearFormulario("modalPaciente", "formPaciente");
  }
  toastBootstrap.show();
};
const manejarFormMedico = (event) => {
  event.preventDefault();

  const nombreMedico = document.getElementById("nombreMedico").value.trim();
  const apellidoMedico = document.getElementById("apellidoMedico").value.trim();
  const dniMedico = document.getElementById("dniMedico").value.trim();
  const matricula = document.getElementById("matricula").value.trim();
  const especialidad = document.getElementById("especialidad").value;
  const centroMedico = document.getElementById("centroMedico").value;
  const emailMedico = document.getElementById("emailMedico").value.trim();
  const contrasenaMedico = document.getElementById("contrasenaMedico").value;

  const toastLiveExample = document.getElementById("liveToast");
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

  const toastMensaje = document.getElementById("toastMensaje");

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

  if (validarMedico(medico)) {
    agregarUsuario(medico, listaDeEsperaMedicos0);
    modificarToastRegistro("exito");
    toastMensaje.innerText = "El registro se realizó con exito!";

    cerrarModalResetearFormulario("modalMedico", "formMedico");
  }
  toastBootstrap.show();
};
const validarPaciente = (paciente) => {
  const toastMensaje = document.getElementById("toastMensaje");

  modificarToastRegistro("error");

  if (!validarNombres(paciente.nombrePaciente) || !validarNombres(paciente.apellidoPaciente)) {
    toastMensaje.innerText = "El nombre ingresado no es valido";
    return false;
  }

  if (!validarNumeros(paciente.dniPaciente, 1 * Math.pow(10, 6), 1 * Math.pow(10, 8))) {
    toastMensaje.innerText = "El dni ingresado no es valido";
    return false;
  }

  if (!validarNumeros(paciente.edadPaciente, 0, 120)) {
    toastMensaje.innerText = "La edad ingresada no es valida";
    return false;
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(paciente.emailPaciente)) {
    toastMensaje.innerText = "El correo ingresado no es valido";
    return false;
  }

  if (paciente.contrasenaPaciente.length < 6) {
    toastMensaje.innerText = "La contraseña ingresada no es valida";
    return false;
  }

  return true;
};

const validarMedico = (medico) => {
  const toastMensaje = document.getElementById("toastMensaje");

  modificarToastRegistro("error");

  if (!validarNombres(medico.nombreMedico) || !validarNombres(medico.apellidoMedico)) {
    toastMensaje.innerText = "El nombre ingresado no es valido";
    return false;
  }

  if (!validarNumeros(medico.dniMedico, 1 * Math.pow(10, 6), 1 * Math.pow(10, 8))) {
    toastMensaje.innerText = "El dni ingresado no es valido";
    return false;
  }

  if (!validarNumeros(medico.matricula, 0, 1 * Math.pow(10, 6))) {
    toastMensaje.innerText = "La matricula ingresada no es valida";
    return false;
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(medico.emailMedico)) {
    toastMensaje.innerText = "El correo ingresado no es valido";
    return false;
  }

  if (medico.contrasenaMedico.length < 6) {
    toastMensaje.innerText = "La contraseña ingresada no es valida";
    return false;
  }

  return true;
};

function loguear() {
  let user = document.getElementById("Usuario").value;
  let pass = document.getElementById("Contraseña").value;

  if (user == "Leo" && pass == "1234") {
    localStorage.setItem("codigoInicioSesion", 0);
    //cambiar por correo del paciente
    localStorage.setItem("UsuarioLogeado", "correoPaciente");
    window.location = "logeado.html";
  } else if (user == "Medico" && pass == "123456") {
    localStorage.setItem("codigoInicioSesion", 1);
    //cambiar por correo del medico
    localStorage.setItem("UsuarioLogeado", "correoMedico");
    window.location = "logeado.html";
  } else if (user == "admin" && pass == "admin") {
    localStorage.setItem("codigoInicioSesion", 2);
    window.location = "logeado.html";
  } else {
    alert("Datos Incorrectos");
  }
}
compararFechas();

const listaDeEsperaMedicos0 = "listaDeEsperaMedicos";

const listaDeEsperaPacientes0 = "listaDeEsperaPacientes";
