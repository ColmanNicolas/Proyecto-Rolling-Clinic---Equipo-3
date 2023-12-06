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
  const nombreArchivoImagen = "./img/fotoPredeterminada.png";
  const fotoDePerfilURL = window.location.href + nombreArchivoImagen;

// Crea la URL de la imagen concatenando el nombre del archivo con la ubicación actual
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
    fotoDePerfilURL
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
    toastMensaje.innerText = "La contraseña ingresada debe tener minimo 6 caracteres";
    return false;
  }
  if (!/^(?=.*[A-Z])(?=.*\d)/.test(paciente.contrasenaPaciente)) {
    toastMensaje.innerText = "La contraseña debe contener mínimo 1 numero y un caracter en mayuscula";
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
    toastMensaje.innerText = "La contraseña ingresada debe tener minimo 6 caracteres";
    return false;
  }
  if (!/^(?=.*[A-Z])(?=.*\d)/.test(medico.contrasenaMedico)) {
    toastMensaje.innerText = "La contraseña debe contener mínimo 1 numero y un caracter en mayuscula";
    return false;
  }

  return true;
};

function loguear() {
  const toastLiveExample = document.getElementById("liveToast");
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  modificarToastLogearse()
  const user = document.getElementById("documentoUsuario").value.trim();
  const pass = document.getElementById("contraseñaUsuario").value;
  let obtenerDatos = [];
  if (user !== "admin") {
    obtenerDatos = controlLogeoUsuario(user);
    if (obtenerDatos !== undefined && obtenerDatos !== null) {
      if (obtenerDatos[0] === "paciente") {
        if (user === obtenerDatos[1].dniPaciente && pass === obtenerDatos[1].contrasenaPaciente) {
          localStorage.setItem("codigoInicioSesion", 0);
          // cambiar por correo del paciente
          localStorage.setItem("UsuarioLogeado", user);
          window.location = "logeado.html";
        } else {
          toastMensaje.innerText = "La contraseña es incorrecta";
          toastBootstrap.show();
        }
      } else if (obtenerDatos[0] === "medico") {
        if (user === obtenerDatos[1].dniMedico && pass === obtenerDatos[1].contrasenaMedico) {
          localStorage.setItem("codigoInicioSesion", 1);
          // cambiar por correo del medico
          localStorage.setItem("UsuarioLogeado", user);
          window.location = "logeado.html";
        } else {
          toastBootstrap.show();
          toastMensaje.innerText = "La contraseña es incorrecta";
        }
      }
    }else{
        toastBootstrap.show();
    toastMensaje.innerText = "Datos ingresados incorrectos";
    }
  } else if (user === "admin" && pass === "admin") {
    localStorage.setItem("codigoInicioSesion", 2);
    window.location = "logeado.html";
  }else{
    toastBootstrap.show();
    toastMensaje.innerText = "Datos ingresados incorrectos";
    }
}

const controlLogeoUsuario = (user) => {
  let obtenerUsuario = buscarUsuarioPorDocumento(user, listaPacientes);
  let devuelvoDatos = [];
  if (obtenerUsuario !== null && obtenerUsuario !== undefined) {
    devuelvoDatos.push("paciente");
    devuelvoDatos.push(obtenerUsuario);
    return devuelvoDatos;
  }
  // Debes usar buscarUsuarioPorDocumento con el parámetro correcto para médicos aquí
  obtenerUsuario = buscarUsuarioPorDocumento(user, listaMedicos);
  if (obtenerUsuario !== null && obtenerUsuario !== undefined) {
    devuelvoDatos.push("medico");
    devuelvoDatos.push(obtenerUsuario);
    return devuelvoDatos;
  }
  return null;
};
const listaPacientes = "listaPacientes";
const listaMedicos = "listaMedicos";
const listaDeEsperaMedicos0 = "listaDeEsperaMedicos";
const listaDeEsperaPacientes0 = "listaDeEsperaPacientes";