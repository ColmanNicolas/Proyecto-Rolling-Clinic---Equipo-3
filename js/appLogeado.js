
function desplegarBotonesSideBar(codigo) {
    const SideBarBotones = document.getElementById("contenedorBotonesSideBar");
    let anchoVentana = window.innerWidth;
    SideBarBotones.innerHTML = "";
    if(anchoVentana>=900){
      console.log("pantallagrande");
    switch (codigo) {
      case 0:
        SideBarBotones.innerHTML += `
        <button class="bg-secondary text-start my-1 bg-secondary btn botonesSideBar text-white fw-semibold " onclick="mostrarCartillaProfesionales()" type="button">CARTILLA DE PROFESIONALES</button>
        <button class="bg-secondary text-start my-1 btn botonesSideBar text-white fw-semibold " onclick="mostrarDocumentacion()" type="button">DOCUMENTACION</button>
        <button class="bg-secondary text-start my-1 btn botonesSideBar text-white fw-semibold " onclick="mostrarSolicitarTurno()" type="button">SOLICITAR TURNO</button>
        <button class="bg-secondary text-start my-1 btn botonesSideBar text-white fw-semibold " onclick="mostrarHistorialTurnos()" type="button">HISTORIAL DE TURNOS</button>
        <button class="bg-secondary text-start my-1 btn botonesSideBar text-white fw-semibold "  type="button">NUESTROS CENTROS</button>
       `;
        break;
      case 1:
        SideBarBotones.innerHTML += `
        <button class="bg-secondary text-start my-1 btn botonesSideBar text-white fw-semibold " onclick="mostrarRegistroPacientes()" type="button">REGISTRO DE PACIENTES</button>
        <button class="bg-secondary text-start my-1 btn botonesSideBar text-white fw-semibold " onclick="mostrarTurnosAsignados()" type="button">TURNOS ASIGNADOS</button>
       `;
        break;
      case 2:
        SideBarBotones.innerHTML += `
        <button class="bg-secondary text-start my-1 btn botonesSideBar text-white fw-semibold " onclick="mostrarRegistroProfesionales()" type="button">REGISTRO DE PROFESIONALES</button>
        <button class="bg-secondary text-start my-1 btn botonesSideBar text-white fw-semibold " onclick="mostrarProfesionalesEspera()" type="button">PROFESIONALES EN ESPERA</button>
        <button class="bg-secondary text-start my-1 btn botonesSideBar text-white fw-semibold " onclick="mostrarRegistroPacientesAdmin()" type="button">REGISTRO DE PACIENTES</button>
        <button class="bg-secondary text-start my-1 btn botonesSideBar text-white fw-semibold " onclick="mostrarPacientesEspera()" type="button">PACIENTES EN ESPERA</button>
       `;
        break;
      default:
        console.log("codigo de boton sidebar erroneo");
        break;
    }
  }else{
    switch (codigo) {
      case 0:
        SideBarBotones.innerHTML += `
        <button class="bg-secondary text-start my-1 bg-secondary btn  text-white fw-semibold " onclick="mostrarCartillaProfesionales()" type="button"><b><i class="bi bi-caret-right-square"></i></b></button>
        <button class="bg-secondary text-start my-1 btn  text-white fw-semibold " onclick="mostrarDocumentacion()" type="button"><b><i class="bi bi-caret-right-square"></i></b></button>
        <button class="bg-secondary text-start my-1 btn  text-white fw-semibold " onclick="mostrarSolicitarTurno()" type="button"><b><i class="bi bi-caret-right-square"></i></b> </button>
        <button class="bg-secondary text-start my-1 btn  text-white fw-semibold " onclick="mostrarHistorialTurnos()" type="button"><b><i class="bi bi-caret-right-square"></i></b></button>
        <button class="bg-secondary text-start my-1 btn  text-white fw-semibold "  type="button"><b><i class="bi bi-caret-right-square"></i></b></button>
       `;
        break;
      case 1:
        SideBarBotones.innerHTML += `
        <button class="bg-secondary text-start my-1 btn  text-white fw-semibold " onclick="mostrarRegistroPacientes()" type="button"><b><i class="bi bi-caret-right-square"></i></b></button>
        <button class="bg-secondary text-start my-1 btn  text-white fw-semibold " onclick="mostrarTurnosAsignados()" type="button"><b><i class="bi bi-caret-right-square"></i></b></button>
       `;
        break;
      case 2:
        SideBarBotones.innerHTML += `
        <button class="bg-secondary text-start my-1 btn  text-white fw-semibold " onclick="mostrarRegistroProfesionales()" type="button"><b><i class="bi bi-caret-right-square"></i></b></button>
        <button class="bg-secondary text-start my-1 btn  text-white fw-semibold " onclick="mostrarProfesionalesEspera()" type="button"><b><i class="bi bi-caret-right-square"></i></b></button>
        <button class="bg-secondary text-start my-1 btn  text-white fw-semibold " onclick="mostrarRegistroPacientesAdmin()" type="button"><b><i class="bi bi-caret-right-square"></i></b></button>
        <button class="bg-secondary text-start my-1 btn  text-white fw-semibold " onclick="mostrarPacientesEspera()" type="button"><b><i class="bi bi-caret-right-square"></i></b></button>
       `;
        break;
      default:
        console.log("codigo de boton sidebar erroneo");
        break;
    }
  }
}

//Funciones para paciente
function mostrarCartillaProfesionales(){
console.log("para paciente");
}
function mostrarDocumentacion(){

}
function mostrarSolicitarTurno(){

}
function mostrarHistorialTurnos(){ 

}
//Funciones para medicos
function mostrarRegistroPacientes(){
    console.log("para medico");

}
function mostrarTurnosAsignados(){

}
//Funciones para Administrador
function mostrarRegistroProfesionales(){
    console.log("para admin");
}
function mostrarProfesionalesEspera(){
    
}
function mostrarRegistroPacientesAdmin(){

}
function mostrarPacientesEspera(){

}
