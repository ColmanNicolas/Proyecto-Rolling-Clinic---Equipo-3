
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
}
const capturarBotonesSideBar = (codigo) => {
  switch (codigo) {
    case 0:
      const botonCartillaProfesionales = document.getElementById("botonCartillaProfesionales");
      const botonDocumentacion = document.getElementById("botonDocumentacion");
      const botonTurnosPaciente = document.getElementById("botonTurnosPaciente");
      const botonNuestrosCentros = document.getElementById("botonNuestrosCentros");
      botonCartillaProfesionales.addEventListener('click', mostrarCartillaProfesionales);
      botonDocumentacion.addEventListener('click', mostrarDocumentacion);
      botonTurnosPaciente.addEventListener('click', mostrarHistorialTurnos);
      botonNuestrosCentros.addEventListener('click', mostrarNuestrosCentros);
      break;
    case 1:
      const botonHistorialPacientes = document.getElementById("botonHistorialPacientes");
      const botonTurnosMedico = document.getElementById("botonTurnosMedico");
      botonHistorialPacientes.addEventListener('click', mostrarHistorialPacientes);
      botonTurnosMedico.addEventListener('click', mostrarTurnosAsignados);
      break;
    case 2:
      const botonProfesionalesRegistrados = document.getElementById("botonProfesionalesRegistrados");
      const botonProfesionalesEnEspera = document.getElementById("botonProfesionalesEnEspera");
      const botonPacientesEnEspera = document.getElementById("botonPacientesEnEspera");
      const botonPacientesRegistrados = document.getElementById("botonPacientesRegistrados");
      botonProfesionalesRegistrados.addEventListener('click', mostrarCartillaProfesionales);
      botonProfesionalesEnEspera.addEventListener('click', mostrarProfesionalesEspera);
      botonPacientesEnEspera.addEventListener('click', mostrarPacientesEspera);
      botonPacientesRegistrados.addEventListener('click', mostrarRegistroPacientesAdmin);
      break;
    default:
      alert("inicio de sesion invalido");
      break;
  }
}

//Funciones para botones del sidebar
const mostrarCartillaProfesionales = () => {
  const contenedorTablasHead = document.getElementById("contendorTablasHead");
  const contenedorTablasBody = document.getElementById("contendorTablasBody");
  let listaProfesionalesRegistrados = obtenerContenidoArrayLS("listaMedicos");

  contenedorTablasHead.innerHTML = '';
  contenedorTablasBody.innerHTML = '';

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
    let botonHTML = '';

    if (0 === obtenerUnElementoLS("codigoInicioSesion")) {
      botonHTML = `
      <button class="btn btn-sm btn-warning fw-bold" onclick="InformacionCompletaMedico('${index}')" type="button">Informacion Completa</button>
        <button class="btn btn-sm btn-success fw-bold" onclick="pedirConsulta('${index}')" type="button">Pedir Consulta</button>
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

const mostrarDocumentacion = () => {

};

const mostrarSolicitarTurno = () => {

};

const mostrarHistorialTurnos = () => {

};

const mostrarNuestrosCentros = () => {

};

//Funciones para medicos
const mostrarHistorialPacientes = () => {
};

const mostrarTurnosAsignados = () => {

};
// ------------------------------------------------Funciones para Administrador--------------------------------------------

const mostrarUsuario = () =>{

};
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
}
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

const borrarUsuario = (index, lista) => {
  const listaDeElementos = obtenerContenidoArrayLS(lista);
  listaDeElementos.splice(index, 1);
  actualizarContenidoArrayLS(listaDeElementos, lista);
  
}

const agregarUsuario = (usuario, lista) => {
  const listaDeElementos = obtenerContenidoArrayLS(lista);
  listaDeElementos.push(usuario);
  actualizarContenidoArrayLS(listaDeElementos, lista);
}

const aprobarUsuario = (index, lista) => {
  const listaUsuarios = obtenerContenidoArrayLS(lista);
  const usuario= listaUsuarios[index];
  borrarUsuario(index, lista);
  switch (lista) {
    case "listaDeEsperaMedicos":
      agregarUsuario(usuario, listaMedicos);
      mostrarProfesionalesEspera();
      break;
    case "listaDeEsperaPacientes":
      agregarUsuario(usuario, listaPacientes);
      mostrarPacientesEspera();
      break;
    default:
      alert("No se realizo la accion correctamente");
      break;
  }
}
//-------------------------------------------- esto se ejecuta al cargar la pagina
const listaMedicos = "listaMedicos";
const listaDeEsperaMedicos = "listaDeEsperaMedicos";
const listaPacientes = "listaPacientes"
const listaDeEsperaPacientes = "listaDeEsperaPacientes";

const codigoInicioSesion = obtenerUnElementoLS("codigoInicioSesion");
desplegarBotonesSideBar(codigoInicioSesion);
capturarBotonesSideBar(codigoInicioSesion);


