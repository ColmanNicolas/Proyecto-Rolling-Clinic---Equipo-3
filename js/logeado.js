// ------------------------------------------------Funciones para mostrar Interfaz grafica--------------------------------------------

const desplegarBotonesSideBar = (codigo) => {
  let anchoVentana = window.innerWidth;

  if (anchoVentana >= 660) {
    const SideBarBotones = document.getElementById("contenedorBotonesSideBar");
    const contenedorBotonMenu = document.getElementById("contenedorBotonMenu");

    SideBarBotones.innerHTML = "";
    contenedorBotonMenu.innerHTML = `
    <button class="btn btn-dark ms-4 fw-semibold" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
    MENU
  </button>
    `;

    switch (codigo) {
      case 0:
        SideBarBotones.innerHTML += `
        <li class="nav-item text-start botonesSideBar text-white fw-semibold py-2 w-100" id="botonCartillaProfesionales">CARTILLA DE PROFESIONALES</li>
        <li class="nav-item text-start botonesSideBar text-white fw-semibold py-2 w-100" id="botonDocumentacion">DOCUMENTACION</a></li>
        <li class="nav-item text-start botonesSideBar text-white fw-semibold py-2 w-100" id="botonTurnosPaciente" >HISTORIAL DE TURNOS</li>
        <li class="nav-item text-start botonesSideBar text-white fw-semibold py-2 w-100" id="botonNuestrosCentros">NUESTROS CENTROS</li>    
        `;
        mostrarCartillaProfesionales();
        break;
      case 1:
        SideBarBotones.innerHTML += `
            <li class="nav-item text-start botonesSideBar text-white fw-semibold py-2 w-100" id="botonHistorialPacientes" >REGISTRO DE PACIENTES</li>
            <li class="nav-item text-start botonesSideBar text-white fw-semibold py-2 w-100" id="botonTurnosMedico">TURNOS ASIGNADOS</li>
          `;
        break;
      case 2: 
       const contenedorMiCuenta = document.getElementById("contenedorMiCuenta");
       while (contenedorMiCuenta.firstChild) {
        contenedorMiCuenta.removeChild(contenedorMiCuenta.firstChild);
      }
        SideBarBotones.innerHTML += `
            <li class="nav-item text-start botonesSideBar text-white fw-semibold py-2 w-100" id="botonProfesionalesRegistrados">REGISTRO DE PROFESIONALES</li>
            <li class="nav-item  text-start botonesSideBar text-white fw-semibold py-2 w-100" id="botonProfesionalesEnEspera">PROFESIONALES EN ESPERA</li>
            <li class="nav-item text-start botonesSideBar text-white fw-semibold py-2 w-100" id="botonPacientesRegistrados">REGISTRO DE PACIENTES</li>
            <li class="nav-item text-start botonesSideBar text-white fw-semibold py-2 w-100" id="botonPacientesEnEspera">PACIENTES EN ESPERA</li>
            <li class="nav-item text-start botonesSideBar text-white fw-semibold py-2 w-100" id="botonMedicosEnBaja">MEDICOS DADOS DE BAJA</li>
            <li class="nav-item text-start botonesSideBar text-white fw-semibold py-2 w-100" id="botonPacientesEnBaja">PACIENTES DADOS DE BAJA</li>
            `;
        mostrarUsuariosAdministrador(listaMedicos);
        break;
      default:
        console.log("codigo de boton sidebar erroneo");
        break;
    }
  } else {
    const offCanvasInferior = new bootstrap.Offcanvas(document.getElementById("offcanvasBottom"));
    const NavBarInferiorBotones = document.getElementById("contenedorInferiorBotonesSideBar");

    offCanvasInferior.show();
    NavBarInferiorBotones.innerHTML = "";

    switch (codigo) {
      case 0:
        NavBarInferiorBotones.innerHTML += `
          <li class="my-1 text-center text-white fw-semibold " id="botonCartillaProfesionales"><b><i class="bi bi-people"></i></b></li>
          <li class=" my-1 text-center text-white fw-semibold " id="botonDocumentacion"><b><i class="bi bi-file-earmark-arrow-down"></i></b></li>
          <li class=" my-1 text-center text-white fw-semibold " id="botonTurnosPaciente"><b><i class="bi bi-card-checklist"></i></b></li>
          <li class=" my-1 text-center text-white fw-semibold " id="botonNuestrosCentros"><b><i class="bi bi-building-check"></i></b></li>
          <li class=" my-1 text-center text-white fw-semibold " id="miCuenta"><b><i class="bi bi-person-fill-gear"></i></b></li>
        `;
        mostrarCartillaProfesionales();
        break;
      case 1:
        NavBarInferiorBotones.innerHTML += `
          <li class="nav-item my-1 text-center text-white fw-semibold " id="botonHistorialPacientes"></b><i class="bi bi-people"></i></b></li>
          <li class="nav-item my-1 text-center text-white fw-semibold " id="botonTurnosMedico"><b><i class="bi bi-card-checklist"></i></b></li>
          <li class="nav-item my-1 text-center text-white fw-semibold " id="miCuenta"><b><i class="bi bi-person-fill-gear"></i></b></li>
        `;
        break;
      case 2:
        NavBarInferiorBotones.innerHTML += `
          <li class="nav-item my-1 text-center text-white fw-semibold " id="botonProfesionalesRegistrados"><i class="bi bi-person-check"></i></b></li>
          <li class="nav-item my-1 text-center text-white fw-semibold " id="botonProfesionalesEnEspera"><i class="bi bi-person-add"></i></b></li>
          <li class="nav-item my-1 text-center text-white fw-semibold " id="botonPacientesRegistrados"><b><i class="bi bi-person-fill-check"></i></b></li>
          <li class="nav-item my-1 text-center text-white fw-semibold " id="botonPacientesEnEspera"><i class="bi bi-person-fill-add"></i></b></li>
          <li class="nav-item my-1 text-center text-white fw-semibold " id="botonMedicosEnBaja"><b><i class="bi bi-person-x"></i></b></li>
          <li class="nav-item my-1 text-center text-white fw-semibold " id="botonPacientesEnBaja"><b><i class="bi bi-person-fill-x"></i></b></li>
        `;
        mostrarUsuariosAdministrador(listaMedicos);
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
      const botonPacientesEnBaja = document.getElementById("botonPacientesEnBaja");
      const botonMedicosEnBaja = document.getElementById("botonMedicosEnBaja");

      botonProfesionalesRegistrados.addEventListener("click", () => mostrarUsuariosAdministrador(listaMedicos));
      botonProfesionalesEnEspera.addEventListener("click", () => mostrarUsuariosAdministrador(listaDeEsperaMedicos));
      botonPacientesEnEspera.addEventListener("click", () => mostrarUsuariosAdministrador(listaDeEsperaPacientes));
      botonPacientesRegistrados.addEventListener("click", () => mostrarUsuariosAdministrador(listaPacientes));
      botonPacientesEnBaja.addEventListener("click", () => mostrarUsuariosAdministrador(listaPacientesBaja));
      botonMedicosEnBaja.addEventListener("click", () => mostrarUsuariosAdministrador(listaMedicosBaja));
      break;

    default:
      alert("Inicio de sesión inválido");
      break;
  }
};
const actualizarTabla = (lista, usuario) => {
  const contenedorTablasBody = document.getElementById("contendorTablasBody");
  let listaDeUsuarios = null;
  contenedorTablasBody.innerHTML = "";
 
  if (usuario === "medico") {
    actualizarContenidoArrayLS(ordenarPorApellidoYNombre(obtenerContenidoArrayLS(lista),usuario),lista);
    listaDeUsuarios = obtenerContenidoArrayLS(lista);
    titulosTablas.innerText = lista === listaDeEsperaMedicos ? "Profesionales en Espera de Aprobación" : "Profesionales en Sistema";

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
    actualizarContenidoArrayLS(ordenarPorApellidoYNombre(obtenerContenidoArrayLS(lista),usuario),lista);
    listaDeUsuarios = obtenerContenidoArrayLS(lista);
    titulosTablas.innerText = lista === listaDeEsperaPacientes ? "Pacientes en Espera de Aprobacion" : "Pacientes en Sistema";

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
  } else if (usuario === "usuarioBaja") {
    if (lista === listaPacientesBaja) {
      actualizarContenidoArrayLS(ordenarPorApellidoYNombre(obtenerContenidoArrayLS(lista),"paciente"),lista);
      listaDeUsuarios = obtenerContenidoArrayLS(lista);
      titulosTablas.innerText = "Pacientes dados de Baja";
      console.log("llego aqui a ");
      listaDeUsuarios.forEach((element, index) => {
        contenedorTablasBody.innerHTML += `
          <tr>
            <th scope="row">${index + 1}</th>
            <td>${element.apellidoPaciente + ", " + element.nombrePaciente}</td>
            <td>${element.dniPaciente}</td>
            <td>${element.emailPaciente}</td>
            <td >${element.motivoBaja}</td>
          </tr>
          `;
      });
    } else if (lista === listaMedicosBaja) {
      actualizarContenidoArrayLS(ordenarPorApellidoYNombre(obtenerContenidoArrayLS(lista),"medico"),lista);
      listaDeUsuarios = obtenerContenidoArrayLS(lista);
      titulosTablas.innerText = "Medicos dados de Baja";

      listaDeUsuarios.forEach((element, index) => {
        contenedorTablasBody.innerHTML += `
          <tr>
            <th scope="row">${index + 1}</th>
            <td>${element.apellidoMedico + ", " + element.nombreMedico}</td>
            <td>${element.dniMedico}</td>
            <td>${element.emailMedico}</td>
            <td >${element.motivoBaja}</td>
          </tr>
          `;
      });
    }
  } else {
    alert("No se pudo realizar la operacion ");
  }
};
const definirAcciones = (lista, index) => {
  if (lista === listaDeEsperaMedicos || lista === listaDeEsperaPacientes) {
    botonHTML = `
    <button class="btn btn-sm fw-bold btn-success" onclick="aprobarUsuario('${index}','${lista}')" type="button">aprobar</button>
    <button class="btn btn-sm fw-bold btn-danger" onclick="borrarUsuario('${index}','${lista}')" type="button">Borrar</button>
    `;
  } else if (lista === listaMedicos || lista === listaPacientes) {
    botonHTML = `
    <button class="btn btn-sm fw-bold btn-danger" onclick="mostrarModalBaja('${index}','${lista}')" type="button">Baja</button>
    `;
  }
  return botonHTML;
};

const mostrarModalBaja = (index, lista) => {
  console.log("muestro modaaaal");
  modalBaja.show();
  pintarFormularioBaja(index, lista);
};
const pintarFormularioBaja = (index, lista) => {
  const listaUsuarios = obtenerContenidoArrayLS(lista);
  const formularioBaja = document.getElementById("formularioBajaUsuario");

  formularioBaja.innerHTML = "";
  if (lista === listaPacientes) {
    formularioBaja.innerHTML += `
    <div class="modal-body">
  <h5>Informacion del usuario</h3>
  <p id="datoTipoDeUsuario">Paciente :${listaUsuarios[index].apellidoPaciente} ${listaUsuarios[index].nombrePaciente} </p>
  <p id="datoDeUsuarioDoc" >Documento: ${listaUsuarios[index].dniPaciente}</p>
  <div>
  <label for="inputMotivoBaja" class="form-label fw-bold">Motivo de Baja</label>
  <input type="text" id="inputMotivoBaja" class="form-control" required />
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
    Close
  </button>
  <button type="submit" id="botonSubmitBaja" data-index="${index}" class="btn btn-primary" >
    Guardar
  </button>
  </div>
  </div>
  `;
  } else if (lista === listaMedicos) {
    formularioBaja.innerHTML += `
    <div class="modal-body">
  <h6>Informacion del usuario</h6>
  <p id="datoTipoDeUsuario" >Doctor: ${listaUsuarios[index].apellidoMedico} ${listaUsuarios[index].nombreMedico} </p>
  <p id="datoDeUsuarioDoc">Documento: ${listaUsuarios[index].dniMedico}</p>
  <div>
  <label for="inputMotivoBaja" class="form-label fw-bold">Motivo de Baja</label>
  <input type="text" id="inputMotivoBaja" class="form-control" required />
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
    Close
  </button>
  <button type="submit" id="botonSubmitBaja" data-index="${index}" class="btn btn-primary" >
    Guardar
  </button>
  </div>
  </div>
  `;
  }
};
const botonCerrarSesion = () => {
  localStorage.setItem("codigoInicioSesion", 999);
  localStorage.setItem("UsuarioLogeado", "no logeado");
  window.location = "index.html";
}
const informacionCompletaMedico = (index) => {
  const recuperoListaMedicos = obtenerContenidoArrayLS(listaMedicos);
  const campoApellidoNombre = document.getElementById("infoApellidoNombreMedico");
  const campoCorreo = document.getElementById("infoCorreoMedico");
  const campoEspecialidad = document.getElementById("infoEspecialidadMedico");
  const campoCentro = document.getElementById("infoCentroMedico");
  const campoMatricula = document.getElementById("infoMatriculaMedico");
  const fotoDePerfil = document.getElementById("fotoDePerfil");



  const medicoSeleccionado = recuperoListaMedicos[index];

  campoApellidoNombre.innerText = medicoSeleccionado.apellidoMedico + ", " + medicoSeleccionado.nombreMedico;
  campoCorreo.innerText = medicoSeleccionado.emailMedico;
  campoEspecialidad.innerText = medicoSeleccionado.especialidad;
  campoCentro.innerText = medicoSeleccionado.centroMedico;
  campoMatricula.innerText = medicoSeleccionado.matricula;
  fotoDePerfil.src = medicoSeleccionado.fotoDePerfilURL;
  modalInfoMedico.show();
}
const quitarModalInfo = () => {
  modalInfoMedico.hide();
}
const definirImagenNavar = (dniUsuario, codigo) => {
 
  
  let usuario = undefined;
  const fotoPerfilNav = document.getElementById("fotoPerfilNavbar");

  // Asegúrate de que dniUsuario sea una cadena antes de llamar a trim()
  dniUsuario = (dniUsuario && typeof dniUsuario === 'string') ? dniUsuario.trim() : dniUsuario;

  // Convierte dniUsuario a un número
  const dniNumero = parseInt(dniUsuario, 10);

console.log(codigo);
  if (codigo === 0) {
    
    usuario = buscarUsuarioPorDocumento(dniNumero, listaPacientes);
    fotoPerfilNav.src = usuario.fotoDePerfilURL;
  } else if (codigo === 1) {
    

    usuario = buscarUsuarioPorDocumento(dniNumero, listaMedicos);
    fotoPerfilNav.src = usuario.fotoDePerfilURL;
  }



}

// ------------------------------------------------Funciones para Paciente--------------------------------------------

const mostrarCartillaProfesionales = () => {
  const contenedorTablasHead = document.getElementById("contendorTablasHead");
  const contenedorTablasBody = document.getElementById("contendorTablasBody");
  let listaProfesionalesRegistrados = obtenerContenidoArrayLS("listaMedicos");

  contenedorTablasHead.innerHTML = "";
  contenedorTablasBody.innerHTML = "";
  titulosTablas.innerText = "Listado de Profesionales";

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
      <button class="btn btn-sm btn-warning fw-bold" onclick="informacionCompletaMedico('${index}')" type="button">Informacion Completa</button>
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

const mostrarDocumentacion = () => { };


const mostrarHistorialTurnos = () => { };

const mostrarNuestrosCentros = () => { };

// ------------------------------------------------Funciones para Medico--------------------------------------------

const mostrarHistorialPacientes = () => { };

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

  const dniActual = parseInt(localStorage.getItem("UsuarioLogeado"));

  listaTurnosSolicitados.forEach((element, index) => {
    if (element.dniAsignado == dniActual) {
      contenedorTablasBody.innerHTML += `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${element.nombreSolicitante}</td>
        <td>${element.fechaConsulta}</td>
        <td>${element.horaConsulta}</td>
        <td class="text-center ">${element.detalleConsulta}</td>
      </tr>
    `;
    }
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
  } else if (lista === "listaPacientesBaja" || lista === "listaMedicosBaja") {
    contenedorTablasHead.innerHTML += `
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre Completo</th>
      <th scope="col">DNI</th>
      <th scope="col">correo Electronico</th>
      <th scope="col">Motivo de Baja</th>
    </tr>
    `;
    actualizarTabla(lista, "usuarioBaja");
  } else {
    alert("La lista en sistema no existe");
  }
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
const bajaUsuario = (event) => {
  event.preventDefault();

  const formulario = document.getElementById("formularioBajaUsuario");
  const inputMotivoBaja = document.getElementById("inputMotivoBaja");
  const recuperoDocumento = document.getElementById("datoDeUsuarioDoc");
  const recuperoTipoDeUsuario = document.getElementById("datoTipoDeUsuario");
  const posicionDosPuntos = recuperoTipoDeUsuario.innerText.indexOf(":");
  const tipoDeUsuario = recuperoTipoDeUsuario.innerText.slice(0, posicionDosPuntos);
  let lista = "";

  if (tipoDeUsuario.includes("Doctor")) {
    lista = listaMedicos;
    console.log("lo hago medico");
  } else if (tipoDeUsuario.includes("Paciente")) {
    lista = listaPacientes;
    console.log("lo hago ");
  }

  const documento = recuperoDocumento.innerText.substring(11);
  // console.log("documento: '", documento, "'  TipoDeUsuario: '", tipoDeUsuario, "' listaa: '", lista);
  const usuario = buscarUsuarioPorDocumento(documento, lista);
  const botonSubmit = document.getElementById("botonSubmitBaja");
  const index = botonSubmit.getAttribute("data-index");

  if (usuario !== null && usuario !== undefined) {
    usuario["motivoBaja"] = inputMotivoBaja.value.trim(); //añado nuevos atributos al usuario
    usuario["fechaDeBaja"] = obtenerFechaFormateada();
    usuario["horaDeBaja"] = obtenerHoraFormateada();

    borrarUsuario(index, lista);
    if (lista === listaPacientes) {
      agregarUsuario(usuario, listaPacientesBaja);
      actualizarTabla(lista, "paciente");
    } else if (lista === listaMedicos) {
      agregarUsuario(usuario, listaMedicosBaja);
      actualizarTabla(lista, "medico");
    }

    cerrarModalResetearFormulario("modalBaja", "formularioBajaUsuario");
  }
};
const definirBotonesFiltros = (lista) =>{
  const contenedorBotonesFiltros = document.getElementById("botonesFiltros");
  contenedorBotonesFiltros.innerHTML="";
  contenedorBotonesFiltros=`  
  <div class="d-flex  mb-3">
  <button class="btn btn-secondary mx-1"  type="button" onclick="ordenarPorNombre(${lista})">ordenar por nombre</button>
  <div class="dropdown ">
    <button class="btn btn-secondary dropdown-toggle mx-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Filtrar por
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#" onclick="filtrarListaPor(${lista}, tucuman)">Centro Tucuman</a></li>
      <li><a class="dropdown-item" href="#" onclick="filtrarListaPor(${lista}, salta)">Centro Jujuy</a></li>
      <li><a class="dropdown-item" href="#" onclick="filtrarListaPor(${lista}, jujuy)">Centro Salta</a></li>
      <li><a class="dropdown-item" href="#" onclick="ModalEspecialidades(${lista})">Especialidades</a></li>
      
    </ul>
  </div>
</div>
<div class="ms-auto d-flex align-items-center  mb-3">
  <input type="text">
  <button class=" btn ms-1 btn-secondary " type="button">buscador</button>
</div>
`;
}
/*
const ordenarPorNombre =(listaDeUsuarios) =>{
if (listaDeUsuarios.contains("Paciente")) {
    recuperoListadoCompleto=obtenerContenidoArrayLS(listaDeUsuarios);
    const listaAuxiliar = recuperoListadoCompleto.filter(objeto => objeto. === 'A');
}
}
const filtrarListaPor =(listaDeUsuarios , centro) =>{}
const ModalEspecialidades =(listaDeUsuarios) =>{}

}*/
//-------------------------------------------- esto se ejecuta al cargar la pagina-------------------
const listaMedicos = "listaMedicos";
const listaDeEsperaMedicos = "listaDeEsperaMedicos";
const listaPacientes = "listaPacientes";
const listaDeEsperaPacientes = "listaDeEsperaPacientes";
const listaPacientesBaja = "listaPacientesBaja";
const listaMedicosBaja = "listaMedicosBaja";

const modalBaja = new bootstrap.Modal("#modalBaja", {
  keyboard: false,
});
const modalInfoMedico = new bootstrap.Modal("#modalInfoMedico", {
  keyboard: false,
});

const titulosTablas = document.getElementById("titulosTablas");
const codigoInicioSesion = obtenerUnElementoLS("codigoInicioSesion");
desplegarBotonesSideBar(codigoInicioSesion);
capturarBotonesSideBar(codigoInicioSesion);
if(codigoInicioSesion !== 2){
  
  definirImagenNavar(obtenerUnElementoLS("UsuarioLogeado"),codigoInicioSesion);
}
//---------------------------------- NO BORRAR PUEDE SERVIR LUEGO
/*
const agregarImagenesPred = obtenerContenidoArrayLS(listaPacientes);
agregarImagenesPred.forEach(element => {
element.fotoDePerfilURL = "./img/fotoPacientePredeterminada.png";
});
actualizarContenidoArrayLS(agregarImagenesPred,listaPacientes);
const agregarImagenesPredMedico = obtenerContenidoArrayLS(listaMedicos);
agregarImagenesPredMedico.forEach(element => {
  element.fotoDePerfilURL = "./img/fotoPredeterminada.png";
});
actualizarContenidoArrayLS(agregarImagenesPredMedico,listaMedicos);
*/

// ------------------------------------------- funciones modal pedir turno

const modalTurno = new bootstrap.Modal("#modalSolTurno", {
  keyboard: false,
});
let turnos = [];
let dniAsignado;
let nombreSolicitante;
let dniSolicitante = parseInt(localStorage.getItem("UsuarioLogeado"));
let obtenerDatosPaciente = obtenerContenidoArrayLS("listaPacientes");

obtenerDatosPaciente.forEach((element, index) => {
  if (dniSolicitante == element.dniPaciente) {
    nombreSolicitante = element.nombrePaciente + " " + element.apellidoPaciente;
  }
  return nombreSolicitante;
});

const showModalSolTurno = (boton) => {
  modalTurno.show();
  const idDelBoton = boton.id;
  dniAsignado = idDelBoton;
};

const agregarSolTurno = (event) => {
  event.preventDefault();
  const detalleConsulta = document.getElementById("detalleConsulta").value;
  const fechaConsulta = document.getElementById("fechaConsulta").value;

  var fechaSeleccionada = new Date(fechaConsulta);
  var diaSemana = fechaSeleccionada.getDay();

  if (diaSemana === 5 || diaSemana === 6) {
    alert("Selecciona un día laborable (lunes a viernes).");
    fechaConsulta.value = "";
  }

  const horaConsulta = document.getElementById("horaConsulta").value;

  const turno = {
    detalleConsulta,
    fechaConsulta,
    horaConsulta,
    dniAsignado,
    nombreSolicitante,
  };

  turnos.push(turno);
  localStorage.setItem("listaTurnos", JSON.stringify(turnos));

  const reseteoModalTurno = document.getElementById("modalSolTurno");
  reseteoModalTurno.addEventListener("hidden.bs.modal", function (event) {
    formSolturno.reset();
  });
  modalTurno.hide();
};


