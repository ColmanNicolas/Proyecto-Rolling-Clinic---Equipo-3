function validarFormulario() {

  //trata de copiar la estructura de los formularios de registro asi no escribis todo de cero
  //te serviran las validaciones que estan en el js de utilidades que ya esta vinculado
}

function esNumeroEntero(valor) {
  return /^\d+$/.test(valor);
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
  const campoNombre =document.getElementById("miCuentaNombre");
  const campoApellido =document.getElementById("miCuentaApellido");
  const campoDni =document.getElementById("miCuentaDni");
  const campoCorreo =document.getElementById("miCuentaCorreo");
  const campoEdad =document.getElementById("miCuentaEdad");
  const campoContrasena =document.getElementById("miCuentaContrasena");

 
}
const rellenarFormulario = () =>{
  const recuperoDNILogeado = localStorage.getItem("UsuarioLogeado");
  //por el momento solo sirve para PACIENTES
  const recuperoUsuarioLocalStorage = buscarUsuarioPorDocumento(recuperoDNILogeado,"listaPacientes");
 
  const campoNombre =document.getElementById("miCuentaNombre");
  const campoApellido =document.getElementById("miCuentaApellido");
  const campoDni =document.getElementById("miCuentaDni");
  const campoCorreo =document.getElementById("miCuentaCorreo");
  const campoEdad =document.getElementById("miCuentaEdad");
  const campoContrasena =document.getElementById("miCuentaContrasena");

  campoNombre.value=recuperoUsuarioLocalStorage.nombrePaciente;
  campoApellido.value=recuperoUsuarioLocalStorage.apellidoPaciente;
  //igual para los demas...

  //esta fucnion solo rellena, no debe hacer nada mas
}

//ESTA LLAMADA A LA FUNCION SE EJECUTA AL CARGAR LA PAGINA
rellenarFormulario();