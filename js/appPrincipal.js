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
    agregarUsuario(paciente,listaDeEsperaPacientes0);

    const cierreModalPaciente = document.getElementById("modalPaciente");
    bootstrap.Modal.getInstance(cierreModalPaciente).hide();

    document.getElementById("formPaciente").reset();
  }
};
const manejarFormMedico = (event) => {
  event.preventDefault();

  const medicos =obtenerContenidoArrayLS(listaDeEsperaMedicos0);
  const nombreMedico = document.getElementById("nombreMedico").value.trim();
  const apellidoMedico = document.getElementById("apellidoMedico").value.trim();
  const dniMedico = document.getElementById("dniMedico").value.trim();
  const matricula = document.getElementById("matricula").value.trim();
  const especialidad = document.getElementById("especialidad").value;
  const centroMedico = document.getElementById("centroMedico").value;
  const emailMedico = document.getElementById("emailMedico").value.trim();
  const contrasenaMedico = document.getElementById("contrasenaMedico").value;
  
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
  
  if(validarMedico(medico)){
    agregarUsuario(medico,listaDeEsperaMedicos0);
  
    const cierreModalMedico = document.getElementById("modalMedico");
    bootstrap.Modal.getInstance(cierreModalMedico).hide();
  
    const reseteoModalMedico = document.getElementById("modalMedico");
    reseteoModalMedico.addEventListener("hidden.bs.modal", function (event) {
      formMedico.reset();
    });
  }
};
const validarPaciente = (paciente) => {
  if (!validarNombres(paciente.nombrePaciente) || !validarNombres(paciente.apellidoPaciente)) {
    alert("El nombre o apellido ingresado no es valido");
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
const validarMedico = (medico) =>{
  if (!validarNombres(medico.nombreMedico) || !validarNombres(medico.apellidoMedico)) {
    alert("El nombre o apellido ingresado no es valido");
    
    return false;
  }

  if (!validarNumeros(medico.dniMedico, 6, 8)) {
    alert("El DNI ingresado no es válido");
    return false;
  }

  if (!validarNumeros(medico.matricula, 1, 7)) {
    alert("La matricula ingresada no es válida");
    return false;
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(medico.emailMedico)) {
    alert("El email no es válido");
    return false;
  }

  if (medico.contrasenaMedico.length < 6) {
    alert("La contraseña debe contener al menos seis dígitos");
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
    localStorage.setItem("UsuarioLogeado","correoPaciente");
    window.location = "logeado.html";
  } else if (user == "Medico" && pass == "123456") {
    localStorage.setItem("codigoInicioSesion", 1);
    //cambiar por correo del medico
    localStorage.setItem("UsuarioLogeado","correoMedico");
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
