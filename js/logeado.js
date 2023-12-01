// ------------------------------------------------Funciones para mostrar Interfaz grafica--------------------------------------------

const desplegarBotonesSideBar = (codigo) => {
  const SideBarBotones = document.getElementById("contenedorBotonesSideBar");
  let anchoVentana = window.innerWidth;
  SideBarBotones.innerHTML = "";
  if (anchoVentana >= 900) {
    switch (codigo) {
      case 0:
        SideBarBotones.innerHTML += `
        <li class="nav-item text-start py-2"><a class=" text-start botonesSideBar text-white fw-semibold " href="#" id="botonCartillaProfesionales">CARTILLA DE PROFESIONALES</a></li>
        <li class="nav-item text-start py-2"><a class=" text-start botonesSideBar text-white fw-semibold " href="#" id="botonDocumentacion">DOCUMENTACION</a></li>
        <li class="nav-item text-start py-2"><a class=" text-start botonesSideBar text-white fw-semibold " href="#" id="botonTurnosPaciente" >HISTORIAL DE TURNOS</a></li>
        <li class="nav-item text-start py-2"><a class=" text-start botonesSideBar text-white fw-semibold " href="#" id="botonNuestrosCentros">NUESTROS CENTROS</a></li>    
        `;
        break;
      case 1:
        SideBarBotones.innerHTML += `
            <li class="nav-item text-start py-2"><a class="text-start text-white botonesSideBar fw-semibold" href="#" id="botonHistorialPacientes" >REGISTRO DE PACIENTES</a></li>
            <li class="nav-item text-start py-2"><a class="text-start text-white botonesSideBar fw-semibold" href="#" id="botonTurnosMedico">TURNOS ASIGNADOS</a></li>
          `;
        break;
      case 2:
        SideBarBotones.innerHTML += `
            <li class="nav-item text-start py-2"><a class="text-start text-white  botonesSideBar fw-semibold" href="#" id="botonProfesionalesRegistrados">REGISTRO DE PROFESIONALES</a></li>
            <li class="nav-item  text-start py-2"><a class="text-start text-white  botonesSideBar fw-semibold" href="#" id="botonProfesionalesEnEspera">PROFESIONALES EN ESPERA</a></li>
            <li class="nav-item text-start py-2"><a class="text-start text-white botonesSideBar fw-semibold" href="#" id="botonPacientesRegistrados">REGISTRO DE PACIENTES</a></li>
            <li class="nav-item text-start py-2"><a class="text-start text-white  botonesSideBar fw-semibold" href="#" id="botonPacientesEnEspera">PACIENTES EN ESPERA</a></li>
          `;
        break;
      default:
        console.log("codigo de boton sidebar erroneo");
        break;
    }
  } else {
    switch (codigo) {
      case 0:
        SideBarBotones.innerHTML += `
          <li class="nav-item my-1"><a class="text-start text-white fw-semibold" href="#" id="botonCartillaProfesionales"><b><i class="bi bi-caret-right-square"></i></b></a></li>
          <li class="nav-item my-1"><a class="text-start text-white fw-semibold" href="#" id="botonDocumentacion"><b><i class="bi bi-caret-right-square"></i></b></a></li>
          <li class="nav-item my-1"><a class="text-start text-white fw-semibold" href="# id="botonTurnosPaciente"><b><i class="bi bi-caret-right-square"></i></b></a></li>
          <li class="nav-item my-1"><a class="text-start text-white fw-semibold" href="#" id="botonNuestrosCentros"><b><i class="bi bi-caret-right-square"></i></b></a></li>
        `;
        break;
      case 1:
        SideBarBotones.innerHTML += `
        <li class="nav-item my-1"><a class="text-start text-white fw-semibold" href="#" id="botonHistorialPacientes"><b><i class="bi bi-caret-right-square"></i></b></a></li>
        <li class="nav-item my-1"><a class="text-start text-white fw-semibold" href="#"  id="botonTurnosMedico"><b><i class="bi bi-caret-right-square"></i></b></a></li>
        `;
        break;
      case 2:
        SideBarBotones.innerHTML += `
          <li class="nav-item my-1"><a class="text-start  text-white fw-semibold" href="#" id="botonProfesionalesRegistrados"><b><i class="bi bi-caret-right-square"></i></b></a></li>
          <li class="nav-item  my-1"><a class="text-start  text-white fw-semibold" href="#"  id="botonProfesionalesEnEspera"><b><i class="bi bi-caret-right-square"></i></b></a></li>
          <li class="nav-item  my-1"><a class="text-start  text-white fw-semibold" href="#" id="botonPacientesRegistrados" ><b><i class="bi bi-caret-right-square"></i></b></a></li>
          <li class="nav-item  my-1"><a class="text-start text-white fw-semibold" href="#" id="botonPacientesEnEspera"><b><i class="bi bi-caret-right-square"></i></b></a></li>
        `;
        break;
      default:
        console.log("codigo de boton sidebar erroneo");
        break;
    }
  }
};
const capturarBotonesSideBar = (codigo) => {
  switch (codigo) {
    case 0: // Botones paciente
      const botonCartillaProfesionales = document.getElementById("botonCartillaProfesionales");
      const botonDocumentacion = document.getElementById("botonDocumentacion");
      const botonTurnosPaciente = document.getElementById("botonTurnosPaciente");
      const botonNuestrosCentros = document.getElementById("botonNuestrosCentros");
      botonCartillaProfesionales.addEventListener("click", mostrarCartillaProfesionales);
      botonDocumentacion.addEventListener("click", mostrarDocumentacion);
      botonTurnosPaciente.addEventListener("click", mostrarHistorialTurnos);
      botonNuestrosCentros.addEventListener("click", mostrarNuestrosCentros);
      break;

    case 1: // Botones medico
      const botonHistorialPacientes = document.getElementById("botonHistorialPacientes");
      const botonTurnosMedico = document.getElementById("botonTurnosMedico");

      botonHistorialPacientes.addEventListener("click", mostrarHistorialPacientes);
      botonTurnosMedico.addEventListener("click", mostrarTurnosAsignados);
      break;

    case 2: // Botones admin
      const botonProfesionalesRegistrados = document.getElementById("botonProfesionalesRegistrados");
      const botonProfesionalesEnEspera = document.getElementById("botonProfesionalesEnEspera");
      const botonPacientesEnEspera = document.getElementById("botonPacientesEnEspera");
      const botonPacientesRegistrados = document.getElementById("botonPacientesRegistrados");

      botonProfesionalesRegistrados.addEventListener("click", () => mostrarUsuariosAdministrador(listaMedicos));
      botonProfesionalesEnEspera.addEventListener("click", () => mostrarUsuariosAdministrador(listaDeEsperaMedicos));
      botonPacientesEnEspera.addEventListener("click", () => mostrarUsuariosAdministrador(listaDeEsperaPacientes));
      botonPacientesRegistrados.addEventListener("click", () => mostrarUsuariosAdministrador(listaPacientes));
      break;

    default:
      alert("Inicio de sesión inválido");
      break;
  }
};
const actualizarTabla = (lista, usuario) => {
  const contenedorTablasBody = document.getElementById("contendorTablasBody");
  const listaDeUsuarios = obtenerContenidoArrayLS(lista);
  contenedorTablasBody.innerHTML = "";
  if (usuario === "medico") {
    listaDeUsuarios.forEach((element, index) => {
      const botonHTML = definirAcciones(lista, index);
      contenedorTablasBody.innerHTML += `
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${element.apellidoMedico + ", " + element.nombreMedico}</td>
          <td>${element.especialidad}</td>
          <td>${element.centroMedico}</td>
          <td class="text-center">${botonHTML}</td>   
        </tr>
        `;
    });
  } else if (usuario === "paciente") {
    listaDeUsuarios.forEach((element, index) => {
      const botonHTML = definirAcciones(lista, index);
      contenedorTablasBody.innerHTML += `
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${element.apellidoPaciente + ", " + element.nombrePaciente}</td>
          <td>${element.dniPaciente}</td>
          <td>${element.emailPaciente}</td>
          <td class="text-center">${botonHTML}</td>
        </tr>
        `;
    });
  } else {
    alert("No se pudo realizar la operacion ");
  }
};
const definirAcciones = (lista, index) => {
  if (lista === listaDeEsperaMedicos || lista === listaDeEsperaPacientes) {
    botonHTML = `
    <button class="btn btn-sm btn-success" onclick="aprobarUsuario('${index}','${lista}')" type="button">aprobar</button>
    <button class="btn btn-sm btn-danger" onclick="borrarUsuario('${index}','${lista}')" type="button">Borrar</button>
    `;
  } else if (lista === listaMedicos || lista === listaPacientes) {
    botonHTML = `
    <button class="btn btn-sm btn-danger" onclick="borrarUsuario('${index}','${lista}')" type="button">Borrar</button>
    `;
  }
  return botonHTML;
};

// ------------------------------------------------Funciones para Paciente--------------------------------------------

const mostrarCartillaProfesionales = () => {
  const contenedorTablasHead = document.getElementById("contendorTablasHead");
  const contenedorTablasBody = document.getElementById("contendorTablasBody");
  let listaProfesionalesRegistrados = obtenerContenidoArrayLS("listaMedicos");

  contenedorTablasHead.innerHTML = "";
  contenedorTablasBody.innerHTML = "";

  contenedorTablasHead.innerHTML += `
  <tr>
    <th scope="col">#</th>
    <th scope="col">Nombre Completo</th>
    <th scope="col">Centro Medico</th>
    <th scope="col">Área Médica</th>
    <th class="text-center" scope="col">Acciones</th>
  </tr>
  `;
  listaProfesionalesRegistrados.forEach((element, index) => {
    let botonHTML = "";

    if (0 === obtenerUnElementoLS("codigoInicioSesion")) {
      botonHTML = `
      <button class="btn btn-sm btn-warning fw-bold" onclick="InformacionCompletaMedico('${index}')" type="button">Informacion Completa</button>
        <button type="button" class="btn btn-sm btn-success" onclick="showModalSolTurno(this)" id="${element.dniMedico}"> Solicitar Consulta </button>
      `;
    } else if (2 === obtenerUnElementoLS("codigoInicioSesion")) {
      botonHTML = `
        <button class="btn btn-sm btn-danger fw-bold" onclick="borrarUsuario('${index}','${listaMedicos}')" type="button">Borrar </button>
      `;
    }

    contenedorTablasBody.innerHTML += `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${element.apellidoMedico + ", " + element.nombreMedico}</td>
        <td>${element.centroMedico}</td>
        <td>${element.especialidad}</td>
        <td class="text-center">${botonHTML}</td>
      </tr>
    `;
  });
};

const mostrarDocumentacion = () => {};

const mostrarSolicitarTurno = () => {};

const mostrarHistorialTurnos = () => {};

const mostrarNuestrosCentros = () => {};

// ------------------------------------------------Funciones para Medico--------------------------------------------

const mostrarHistorialPacientes = () => {};

const mostrarTurnosAsignados = () => {
  const contenedorTablasHead = document.getElementById("contendorTablasHead");
  const contenedorTablasBody = document.getElementById("contendorTablasBody");
  let listaTurnosSolicitados = obtenerContenidoArrayLS("listaTurnos");

  contenedorTablasHead.innerHTML = "";
  contenedorTablasBody.innerHTML = "";

  contenedorTablasHead.innerHTML += `
  <tr>
    <th scope="col">#</th>
    <th scope="col">Nombre Completo</th>
    <th scope="col">Fecha</th>
    <th scope="col">Hora</th>
    <th class="text-center" scope="col">Consulta</th>
  </tr>
  `;
  listaTurnosSolicitados.forEach((element, index) => {
    let botonHTML = "";

    /*   if (1 === obtenerUnElementoLS("codigoInicioSesion")) {
      botonHTML = `
      <button class="btn btn-sm btn-warning fw-bold" onclick="InformacionCompletaMedico('${index}')" type="button">Informacion Completa</button>
        <button type="button" class="btn btn-sm btn-success" onclick="showModalSolTurno(this)" id="${element.matricula}"> Solicitar Consulta </button>
      `;
    } else if (2 === obtenerUnElementoLS("codigoInicioSesion")) {
      botonHTML = `
        <button class="btn btn-sm btn-danger fw-bold" onclick="borrarUsuario('${index}','${listaMedicos}')" type="button">Borrar </button>
      `;
    } */

    contenedorTablasBody.innerHTML += `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>"Juan Perez"</td>
        <td>${element.fechaConsulta}</td>
        <td>${element.horaConsulta}</td>
        <td>${element.detalleConsulta}</td>
      </tr>
    `;
  });
};
// ------------------------------------------------Funciones para Administrador--------------------------------------------

const mostrarUsuariosAdministrador = (lista) => {
  const contenedorTablasHead = document.getElementById("contendorTablasHead");
  contenedorTablasHead.innerHTML = "";
  console.log(lista);
  if (lista === "listaDeEsperaMedicos" || lista === "listaMedicos") {
    contenedorTablasHead.innerHTML += `
  <tr>
    <th scope="col">#</th>
    <th scope="col">Nombre Completo</th>
    <th scope="col">Centro Medico</th>
    <th scope="col">Área Médica</th>
    <th class="text-center" scope="col">Acciones</th>
  </tr>
  `;
    actualizarTabla(lista, "medico");
  } else if (lista === "listaDeEsperaPacientes" || lista === "listaPacientes") {
    contenedorTablasHead.innerHTML += `
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre Completo</th>
      <th scope="col">DNI</th>
      <th scope="col">Correo Electronico</th>
      <th class="text-center" scope="col">Acciones</th>
    </tr>
    `;
    actualizarTabla(lista, "paciente");
  } else {
    alert("La lista en sistema no existe");
  }
};
const borrarUsuario = (index, lista) => {
  const listaDeElementos = obtenerContenidoArrayLS(lista);
  listaDeElementos.splice(index, 1);
  actualizarContenidoArrayLS(listaDeElementos, lista);
  mostrarUsuariosAdministrador(lista);
};
const aprobarUsuario = (index, lista) => {
  const listaUsuarios = obtenerContenidoArrayLS(lista);
  const usuario = listaUsuarios[index];
  borrarUsuario(index, lista);
  switch (lista) {
    case "listaDeEsperaMedicos":
      agregarUsuario(usuario, listaMedicos);

      break;
    case "listaDeEsperaPacientes":
      agregarUsuario(usuario, listaPacientes);

      break;
    default:
      alert("No se realizo la accion correctamente");
      break;
  }
};

/*
const mostrarProfesionalesEspera = () => {
  const contenedorTablasHead = document.getElementById("contendorTablasHead");
  const contenedorTablasBody = document.getElementById("contendorTablasBody");
  let listaProfesionalesNoAutorizados = obtenerContenidoArrayLS(listaDeEsperaMedicos);
  contenedorTablasBody.innerHTML = '';
  contenedorTablasHead.innerHTML = '';
  contenedorTablasHead.innerHTML += `
  <tr>
    <th scope="col">#</th>
    <th scope="col">Nombre Completo</th>
    <th scope="col">Centro Medico</th>
    <th scope="col">Área Médica</th>
    <th scope="col">Acciones</th>
  </tr>
  `;
  listaProfesionalesNoAutorizados.forEach((element, index) => {

    contenedorTablasBody.innerHTML += `
  <tr>
  <th scope="row">${index + 1}</th>
  <td>${element.apellidoMedico + ", " + element.nombreMedico}</td>
  <td>${element.especialidad}</td>
  <td>${element.centroMedico}</td>
  <td>  
    <button class="btn btn-sm btn-success" onclick="aprobarUsuario('${index}','${"listaDeEsperaMedicos"}')" type="button">aprobar</button
    ><button class="btn btn-sm btn-danger" onclick="borrarUsuario('${index}','${"listaDeEsperaMedicos"}')" type="button">Borrar</button></td>
  </tr>
  `;
  });
};
const mostrarRegistroPacientesAdmin = () => {
  const contenedorTablasHead = document.getElementById("contendorTablasHead");
  const contenedorTablasBody = document.getElementById("contendorTablasBody");
  let listaPacientes = obtenerContenidoArrayLS("listaPacientes");
  contenedorTablasBody.innerHTML = '';
  contenedorTablasHead.innerHTML = '';

  contenedorTablasHead.innerHTML += `
  <tr>
    <th scope="col">#</th>
    <th scope="col">Nombre Completo</th>
    <th scope="col">DNI</th>
    <th scope="col">Correo Electronico</th>
    <th scope="col">Acciones</th>
  </tr>
  `;
  listaPacientes.forEach((element, index) => {
    contenedorTablasBody.innerHTML += `
  <tr>
  <th scope="row">${index + 1}</th>
  <td>${element.apellidoPaciente + ", " + element.nombrePaciente}</td>
  <td>${element.dniPaciente}</td>
  <td>${element.emailPaciente}</td>
  <td>  
  <button class="btn btn-sm btn-danger" onclick="borrarUsuario('${index}','${"listaDeEsperaPacientes"}')" type="button">Borrar</button></td>
  </tr>
  `;

  });

}
const mostrarPacientesEspera = () => {
  const contenedorTablasHead = document.getElementById("contendorTablasHead");
  const contenedorTablasBody = document.getElementById("contendorTablasBody");
  let listaDeEsperaPacientes = obtenerContenidoArrayLS("listaDeEsperaPacientes");
  contenedorTablasBody.innerHTML = '';
  contenedorTablasHead.innerHTML = '';

  contenedorTablasHead.innerHTML += `
  <tr>
  <th scope="col">#</th>
  <th scope="col">Nombre Completo</th>
  <th scope="col">DNI</th>
  <th scope="col">Correo Electronico</th>
  <th scope="col">Acciones</th>
</tr>
`;
listaDeEsperaPacientes.forEach((element, index) => {

    contenedorTablasBody.innerHTML += `
<tr>
<th scope="row">${index + 1}</th>
<td>${element.apellidoPaciente + ", " + element.nombrePaciente}</td>
<td>${element.dniPaciente}</td>
<td>${element.emailPaciente}</td>
<td>
<button class="btn btn-sm btn-success" onclick="aprobarUsuario('${index}','${"listaDeEsperaPacientes"}')" type="button">aprobar</button>  
<button class="btn btn-sm btn-danger" onclick="borrarUsuario('${index}','${"listaDeEsperaPacientes"}')" type="button">Borrar</button></td>
</tr>
`;

  });

}
*/

//-------------------------------------------- esto se ejecuta al cargar la pagina-------------------
const listaMedicos = "listaMedicos";
const listaDeEsperaMedicos = "listaDeEsperaMedicos";
const listaPacientes = "listaPacientes";
const listaDeEsperaPacientes = "listaDeEsperaPacientes";

const codigoInicioSesion = obtenerUnElementoLS("codigoInicioSesion");
desplegarBotonesSideBar(codigoInicioSesion);
capturarBotonesSideBar(codigoInicioSesion);

// ------------------------------------------- funciones modal pedir turno
const modalTurno = new bootstrap.Modal("#modalSolTurno", {
  keyboard: false,
});
let turnos = [];
let dniAsignado;

const showModalSolTurno = (boton) => {
  modalTurno.show();
  const idDelBoton = boton.id;
  dniAsignado = idDelBoton;
};

const agregarSolTurno = (event) => {
  event.preventDefault();
  const detalleConsulta = document.getElementById("detalleConsulta").value;
  const fechaConsulta = document.getElementById("fechaConsulta").value;
  const horaConsulta = document.getElementById("horaConsulta").value;

  const turno = {
    detalleConsulta,
    fechaConsulta,
    horaConsulta,
    dniAsignado,
  };

  turnos.push(turno);
  localStorage.setItem("listaTurnos", JSON.stringify(turnos));

  const reseteoModalTurno = document.getElementById("modalSolTurno");
  reseteoModalTurno.addEventListener("hidden.bs.modal", function (event) {
    formSolturno.reset();
  });
  modalTurno.hide();
};

//
