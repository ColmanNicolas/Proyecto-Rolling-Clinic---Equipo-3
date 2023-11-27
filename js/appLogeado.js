
function desplegarBotonesSideBar(codigo) {
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
          <li class="nav-item my-1"><a class="text-start bg-secondary text-white fw-semibold" href="#"><b><i class="bi bi-caret-right-square"></i></b></a></li>
          <li class="nav-item my-1"><a class="text-start text-white fw-semibold" href="#"><b><i class="bi bi-caret-right-square"></i></b></a></li>
          <li class="nav-item my-1"><a class="text-start text-white fw-semibold" href="#"><b><i class="bi bi-caret-right-square"></i></b></a></li>
          <li class="nav-item my-1"><a class="text-start  text-white fw-semibold" href="#"><b><i class="bi bi-caret-right-square"></i></b></a></li>
          <li class="nav-item my-1"><a class="text-start  text-white fw-semibold" href="#"><b><i class="bi bi-caret-right-square"></i></b></a></li>
        `;
        break;
      case 1:
        SideBarBotones.innerHTML += `
          <li class="nav-item my-1"><a class="text-start  text-white fw-semibold" href="#"><b><i class="bi bi-caret-right-square"></i></b></a></li>
          <li class="nav-item my-1"><a class="text-start text-white fw-semibold" href="#"><b><i class="bi bi-caret-right-square"></i></b></a></li>
        `;
        break;
      case 2:
        SideBarBotones.innerHTML += `
          <li class="nav-item my-1"><a class="text-start  text-white fw-semibold" href="#"><b><i class="bi bi-caret-right-square"></i></b></a></li>
          <li class="nav-item  my-1"><a class="text-start  text-white fw-semibold" href="#"><b><i class="bi bi-caret-right-square"></i></b></a></li>
          <li class="nav-item  my-1"><a class="text-start  text-white fw-semibold" href="#"><b><i class="bi bi-caret-right-square"></i></b></a></li>
          <li class="nav-item  my-1"><a class="text-start text-white fw-semibold" href="#"><b><i class="bi bi-caret-right-square"></i></b></a></li>
        `;
        break;
      default:
        console.log("codigo de boton sidebar erroneo");
        break;
    }
  }
}
//capturo todos los botones del sideBar
const botonCartillaProfesionales = document.getElementById("botonCartillaProfesionales");
const botonDocumentacion = document.getElementById("botonDocumentacion");
const botonTurnosPaciente = document.getElementById("botonTurnosPaciente");
const botonNuestrosCentros = document.getElementById("botonNuestrosCentros");
const botonHistorialPacientes = document.getElementById("botonHistorialPacientes");
const botonTurnosMedico = document.getElementById("botonTurnosMedico");
const botonProfesionalesRegistrados = document.getElementById("botonProfesionalesRegistrados");
const botonProfesionalesEnEspera = document.getElementById("botonProfesionalesEnEspera");
const botonPacientesEnEspera = document.getElementById("botonPacientesEnEspera");
const botonPacientesRegistrados = document.getElementById("botonPacientesRegistrados");

// Event listener para todos los botones del sidebar
botonCartillaProfesionales.addEventListener('click', mostrarCartillaProfesionales);
botonDocumentacion.addEventListener('click', mostrarDocumentacion);
botonTurnosPaciente.addEventListener('click', mostrarHistorialTurnos);
botonNuestrosCentros.addEventListener('click', mostrarNuestrosCentros);
botonHistorialPacientes.addEventListener('click', mostrarHistorialPacientes);
botonTurnosMedico.addEventListener('click', mostrarTurnosAsignados);
botonProfesionalesRegistrados.addEventListener('click', mostrarCartillaProfesionales);
botonProfesionalesEnEspera.addEventListener('click', mostrarProfesionalesEspera);
botonPacientesEnEspera.addEventListener('click', mostrarPacientesEspera);
botonPacientesRegistrados.addEventListener('click', mostrarRegistroPacientesAdmin);


//Funciones para botones del sidebar
function mostrarCartillaProfesionales() {
  console.log("para paciente");
}
function mostrarDocumentacion() {

}
function mostrarSolicitarTurno() {

}
function mostrarHistorialTurnos() {

}
function mostrarNuestrosCentros(){

}
//Funciones para medicos
function mostrarHistorialPacientes() {
  console.log("para medico");

}
function mostrarTurnosAsignados() {

}
//Funciones para Administrador
function mostrarRegistroProfesionalesAdmin() {
  const contenedorTablasHead = document.getElementById("contendorTablasHead");
  const contenedorTablasBody = document.getElementById("contendorTablasBody");
  let listaProfesionalesRegistrados = obtenerContenidoArrayLS("profesionalesRegistrados");
  contenedorTablasHead.innerHTML = '';
  contenedorTablasHead.innerHTML += `
  <tr>
    <th scope="col">#</th>
    <th scope="col">Nombre Completo</th>
    <th scope="col">Área Médica</th>
    <th scope="col">Matricula</th>
    <th scope="col">Acciones</th>
  </tr>
  `;
  listaProfesionalesRegistrados.forEach((element, index) => {
    contenedorTablasBody.innerHTML += `
  <tr>
  <th scope="row">${index + 1}</th>
  <td>${element[index].apellido + ", " + element[index].nombres}</td>
  <td>${element[index].areaMedica}</td>
  <td>${element[index].matricula}</td>
  <td>  
    <button class="btn btn-sm btn-danger" onclick="borrarProfesional('${index}')" type="button">Borrar</button></td>
  </tr>
  `;

  });
}

function mostrarProfesionalesEspera() {
  const contenedorTablasHead = document.getElementById("contendorTablasHead");
  const contenedorTablasBody = document.getElementById("contendorTablasBody");
  let listaProfesionalesNoAutorizados = obtenerContenidoArrayLS("profesionalesNoAutorizados");
  contenedorTablasHead.innerHTML = '';
  contenedorTablasHead.innerHTML += `
  <tr>
    <th scope="col">#</th>
    <th scope="col">Nombre Completo</th>
    <th scope="col">Área Médica</th>
    <th scope="col">Matricula</th>
    <th scope="col">Acciones</th>
  </tr>
  `;
  listaProfesionalesNoAutorizados.forEach((element, index) => {
    contenedorTablasBody.innerHTML += `
  <tr>
  <th scope="row">${index + 1}</th>
  <td>${element[index].apellido + ", " + element[index].nombres}</td>
  <td>${element[index].areaMedica}</td>
  <td>${element[index].matricula}</td>
  <td>  
    <button class="btn btn-sm btn-success" onclick="aprobarProfesional('${index}')" type="button">aprobar</button
    ><button class="btn btn-sm btn-danger" onclick="borrarProfesional('${index}')" type="button">Borrar</button></td>
  </tr>
  `;

  });
}
function mostrarRegistroPacientesAdmin() {

}
function mostrarPacientesEspera() {

}
