function validarFormulario() {

  //trata de copiar la estructura de los formularios de registro asi no escribis todo de cero
  //te serviran las validaciones que estan en el js de utilidades que ya esta vinculado
}

function cambiarFoto(event, lista) {
  const fileInput = event.target;
  const profileImage = document.getElementById('profile-img');
  const recuperoDNILogeado = localStorage.getItem("UsuarioLogeado");
  let recuperoListaTotal = obtenerContenidoArrayLS(lista);
  let recuperoUsuarioLocalStorage = buscarUsuarioPorDocumento(recuperoDNILogeado, lista);

  // Filtrar la lista para excluir al usuario actual
  recuperoListaTotal = recuperoListaTotal.filter(element => {
    if ('dniPaciente' in element && element.dniPaciente === recuperoDNILogeado) {
      return false; // Excluir paciente actual
    }
    if ('dniMedico' in element && element.dniMedico === recuperoDNILogeado) {
      return false; // Excluir médico actual
    }
    return true; // Mantener otros elementos en la lista
  });

  console.log("Recupero lista sin el usuario actual:", recuperoListaTotal);

  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      profileImage.src = e.target.result;
      recuperoUsuarioLocalStorage.fotoDePerfilURL = e.target.result;

      // Agregar el usuario actualizado a la lista
      recuperoListaTotal.push(recuperoUsuarioLocalStorage);

      // Actualizar la lista en localStorage
      actualizarContenidoArrayLS(recuperoListaTotal, lista);
    };

    reader.readAsDataURL(file);
  }
}


function esNumeroEntero(valor) {
  return /^\d+$/.test(valor);
}
const botonCerrarSesion = () => {
  localStorage.setItem("codigoInicioSesion", 999);
  localStorage.setItem("UsuarioLogeado", "no logeado");
  window.location = "index.html";
}
function mostrarContrasena() {
  var contrasenaInput = document.getElementById('miCuentaContrasena');
  var botonMostrar = document.querySelector('.show-password');

  if (contrasenaInput.type === 'password') {
    contrasenaInput.type = 'text';
    botonMostrar.textContent = 'Ocultar';
  } else {
    contrasenaInput.type = 'password';
    botonMostrar.textContent = 'Mostrar';
  }
}

// Función para guardar cambios en el localStorage
function guardarCambios() {
  //A ESTA FUNCION DEBERIA LLEGAR SOLAMENTE SI PASO LAS VALIDACIONES, SOLO TE QUEDARIA CREAR EL OBJETO Y PASARLO AL LOCAL STORAGE
  const campoNombre = document.getElementById("miCuentaNombre");
  const campoApellido = document.getElementById("miCuentaApellido");
  const campoDni = document.getElementById("miCuentaDni");
  const campoCorreo = document.getElementById("miCuentaCorreo");
  const campoEdad = document.getElementById("miCuentaEdad");
  const campoContrasena = document.getElementById("miCuentaContrasena");


}
const rellenarFormularioMedico = () => {
  const recuperoDNILogeado = localStorage.getItem("UsuarioLogeado");
  //por el momento solo sirve para PACIENTES
  const recuperoUsuarioLocalStorage = buscarUsuarioPorDocumento(recuperoDNILogeado, "listaMedicos");
  const cambiarFotoPerfil = document.getElementById("profile-img");
  const miCuentaNombreMedico = document.getElementById("miCuentaNombreMedico");
  const miCuentaApellidoMedico = document.getElementById("miCuentaApellidoMedico");
  const miCuentaDniMedico = document.getElementById("miCuentaDniMedico");
  const miCuentaCorreoMedico = document.getElementById("miCuentaCorreoMedico");
  const miCuentaCentroMedico = document.getElementById("miCuentaCentroMedico");
  const miCuentaMatriculaMedico = document.getElementById("miCuentaMatriculaMedico");
  const miCuentaEspecialidadMedico = document.getElementById("miCuentaEspecialidadMedico");

  cambiarFotoPerfil.src = recuperoUsuarioLocalStorage.fotoDePerfilURL;
  miCuentaNombreMedico.value = recuperoUsuarioLocalStorage.nombreMedico;
  miCuentaApellidoMedico.value = recuperoUsuarioLocalStorage.apellidoMedico;
  miCuentaDniMedico.value = recuperoUsuarioLocalStorage.dniMedico;
  miCuentaMatriculaMedico.value = recuperoUsuarioLocalStorage.matricula;
  miCuentaEspecialidadMedico.value = recuperoUsuarioLocalStorage.especialidad;
  miCuentaCentroMedico.value = recuperoUsuarioLocalStorage.centroMedico;
  miCuentaCorreoMedico.value = recuperoUsuarioLocalStorage.emailMedico;

  //igual para los demas...

  //esta fucnion solo rellena, no debe hacer nada mas
}
const rellenarFormularioPaciente = () => {
  const recuperoDNILogeado = localStorage.getItem("UsuarioLogeado");
  // por el momento solo sirve para PACIENTES
  const recuperoUsuarioLocalStorage = buscarUsuarioPorDocumento(recuperoDNILogeado, "listaPacientes");

  console.log(recuperoUsuarioLocalStorage); // Agrega un log para ver qué se recupera de localStorage

  const cambiarFotoPerfil = document.getElementById("profile-img");
  const miCuentaNombrePaciente = document.getElementById("miCuentaNombrePaciente");
  const miCuentaApellidoPaciente = document.getElementById("miCuentaApellidoPaciente");
  const miCuentaDniPaciente = document.getElementById("miCuentaDniPaciente");
  const miCuentaCorreoPaciente = document.getElementById("miCuentaCorreoPaciente");
  const miCuentaEdadPaciente = document.getElementById("miCuentaEdadPaciente");

  // Comprueba si las propiedades existen en el objeto recuperado
  if (recuperoUsuarioLocalStorage) {
    cambiarFotoPerfil.src = recuperoUsuarioLocalStorage.fotoDePerfilURL;
    miCuentaNombrePaciente.value = recuperoUsuarioLocalStorage.nombrePaciente;
    miCuentaApellidoPaciente.value = recuperoUsuarioLocalStorage.apellidoPaciente;
    miCuentaDniPaciente.value = recuperoUsuarioLocalStorage.dniPaciente;
    miCuentaEdadPaciente.value = recuperoUsuarioLocalStorage.edadPaciente;
    miCuentaCorreoPaciente.value = recuperoUsuarioLocalStorage.emailPaciente;
    // Igual para los demás campos...
  } else {
    console.error("No se pudo recuperar el usuario del localStorage o no existe en la lista de pacientes.");
  }

  // Esta función solo rellena, no debe hacer nada más
};

const pintarFormulario = (codigo) => {
  const contenedorFormulariosMiCuenta = document.getElementById("contenedorFormulariosMiCuenta");
  contenedorFormulariosMiCuenta.innerHTML = "";

  if (codigo === 0) {
    
    contenedorFormulariosMiCuenta.innerHTML += `
    <h2 class="pt-5">Editar Perfil Paciente</h2>

    <!-- Sección de Foto de Perfil -->
    <div class="profile-picture">
    <img id="profile-img" src="/img/DdW_dUFUQAAPLNV.jpeg" alt="Foto de Perfil">
    <input type="file" id="profile-picture-input" accept="image/*" style="display: none;" onchange="cambiarFoto(event,'listaPacientes')">
    <label for="profile-picture-input">Cambiar Foto</label>
</div>

<form id="formulario-edicion-paciente" onsubmit="validarFormularioPaciente()">
    <div class="form-group">
        <label for="miCuentaNombrePaciente">Nombre:</label>
        <input type="text" id="miCuentaNombrePaciente" name="nombre" required>
    </div>

    <div class="form-group">
        <label for="miCuentaApellidoPaciente">Apellido:</label>
        <input type="text" id="miCuentaApellidoPaciente" name="apellido" required>
    </div>

    <div class="form-group">
        <label for="miCuentaDniPaciente">DNI:</label>
        <input type="text" id="miCuentaDniPaciente" name="dni" disabled>
    </div>

    <div class="form-group">
        <label for="miCuentaCorreoPaciente">Correo:</label>
        <input type="email" id="miCuentaCorreoPaciente" name="correo" required>
    </div>

    <div class="form-group">
        <label for="miCuentaEdadPaciente">Edad:</label>
        <input type="text" id="miCuentaEdadPaciente" name="edad" pattern="\d+" title="La edad debe ser un número entero." required>
    </div>

    <div class="form-group">
        <label for="miCuentaContrasenaPaciente"></label>Cambiar Contraseña:</label>
        <input type="password" id="miCuentaContrasenaPaciente" name="contrasena" class="password-input" required>
        <button type="button" class="show-password" onclick="mostrarContrasena()">Mostrar</button>
    </div>

    <button type="submit">Guardar Cambios</button>
</form>
`;
rellenarFormularioPaciente();
  } else if (codigo === 1) {

    contenedorFormulariosMiCuenta.innerHTML += `      
     <h2>Editar Perfil Medico</h2>

    <!-- Sección de Foto de Perfil -->
    <div class="profile-picture">
    <img id="profile-img" src="/img/DdW_dUFUQAAPLNV.jpeg" alt="Foto de Perfil">
    <input type="file" id="profile-picture-input" accept="image/*" style="display: none;" onchange="cambiarFoto(event,'listaMedicos')">
    <label for="profile-picture-input">Cambiar Foto</label>
</div>
<form id="formulario-edicion-medico" onsubmit="validarFormularioMedico()">
    <div class="form-group">
        <label for="miCuentaNombreMedico">Nombre:</label>
        <input type="text" id="miCuentaNombreMedico" name="nombre" required>
    </div>
    <div class="form-group">
        <label for="miCuentaApellidoMedico">Apellido:</label>
        <input type="text" id="miCuentaApellidoMedico" name="apellido" required>
    </div>
    
    <div class="form-group">
        <label for="miCuentaDniMedico">Dni:</label>
        <input type="text" id="miCuentaDniMedico" name="dni" disabled>
    </div>

    <div class="form-group">
        <label for="miCuentaMatriculaMedico">Matricula:</label>
        <input type="text" id="miCuentaMatriculaMedico" name="matricula" disabled>
    </div>

    <div class="form-group">
        <label for="miCuentaCentroMedico">Centro Medico:</label>
        <input type="text" id="miCuentaCentroMedico" name="centro"  title="La edad debe ser un número entero." required>
    </div>

    <div class="form-group">
        <label for="miCuentaEspecialidadMedico">Especialidad:</label>
        <input type="text" id="miCuentaEspecialidadMedico" name="especialidad"   disabled>
    </div>


    <div class="form-group">
        <label for="miCuentaCorreoMedico">Correo:</label>
        <input type="email" id="miCuentaCorreoMedico" name="correo" required>
    </div>

    <div class="form-group">
        <label for="miCuentaContrasena"></label>Cambiar Constraseña:</label>
        <input type="password" id="miCuentaContrasena" name="contrasena" class="password-input" required>
        <button type="button" class="show-password" onclick="mostrarContrasena()">Mostrar</button>
    </div>

    <button type="submit">Guardar Cambios</button>
</form>
`;
    rellenarFormularioMedico();
  }

}
const codigoInicioSesion = obtenerUnElementoLS("codigoInicioSesion");

//ESTA LLAMADA A LA FUNCION SE EJECUTA AL CARGAR LA PAGINA
pintarFormulario(codigoInicioSesion);

