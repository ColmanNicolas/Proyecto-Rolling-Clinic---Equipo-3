//------------  FUNCIONES UTILITARIAS ---------------
const obtenerContenidoArrayLS = (listaLS) => {
    //funcion para arreglos
    let devuelvoArray = [];
    const arrayLocalStorage = localStorage.getItem(listaLS);
    if (arrayLocalStorage) {
        devuelvoArray = JSON.parse(arrayLocalStorage);
    }
    return devuelvoArray;
}

const obtenerUnElementoLS = (listaLS) => {
    //funcion para unico elemento
    let elemento = null;
    const elementoLocalStorage = localStorage.getItem(listaLS);
    if (elementoLocalStorage) {
        elemento = JSON.parse(elementoLocalStorage);
    }
    return elemento;
}

const obtenerUnaCadenaLS = (listaLS) => {
    //funcion para una cadena
    let elemento = undefined;
    const elementoLocalStorage = localStorage.getItem(listaLS);
    if (elementoLocalStorage) {
        return elementoLocalStorage;
    } else {
        return elemento;
    }
}

const actualizarContenidoArrayLS = (arreglo, listaLS) => {
    localStorage.setItem(listaLS, JSON.stringify(arreglo));
}

function codificarCadena(cadena) {
    return btoa(cadena);
}

function decodificarCadena(cadena) {
    return atob(cadena);
}

function mostrarOffcanvas() {
    var offcanvasElement = document.getElementById("offcanvasScrolling");
    offcanvasElement.classList.toggle("show");
}

const validarNombres = (nombre) => {
    if (nombre.length < 3 || !/^([a-zA-ZñÑáéíóúÁÉÍÓÚ '])+$/i.test(nombre)) {
        alert("El nombre o apellido ingresado no es válido");
        return false;
    } else {
        return true;
    }
}
function mostrarPopover(input) {
    const popover = new bootstrap.Popover(input);
    popover.show();
    setTimeout(() => {
        popover.hide();
    }, 1200);
}
const validarNumeros = (numero, min, max) => {
    return numero >= min && numero <= max;
}
const cerrarModalResetearFormulario = (modal, formulario) => {
    document.getElementById(formulario).reset();
    const cierreModalPaciente = document.getElementById(modal);
    bootstrap.Modal.getInstance(cierreModalPaciente).hide();
}
const limpiarYenfocarPrimerImput = (idElemento, valorImput) => {
    //funcion para limpiar el formulario y seleccionar el primer imput
    document.getElementById(idElemento).reset();
    const primerCampo = document.querySelector('input[type="' + valorImput + '"]');
    primerCampo.focus();
}
const modificarToastRegistro = (situacion) => {
    const toastTitulo = document.getElementById("toastTitulo");
    const contenedorToastRegistro = document.getElementById("contenedorToastRegistro");
    switch (situacion) {
        case 'error':
            toastTitulo.innerText = "Error";
            contenedorToastRegistro.classList = [];
            contenedorToastRegistro.classList.add("toast-header", "bg-danger");
            break;
        case 'exito':
            toastTitulo.innerText = "Felicidades";
            contenedorToastRegistro.classList = [];
            contenedorToastRegistro.classList.add("toast-header", "bg-success");
    }
}

const validarInputEnVivo = (input, condicion) => {

    const popover = new bootstrap.Popover(input);

    switch (condicion) {
        case 0:         //para nombres
            if (!/^([a-zA-ZñÑáéíóúÁÉÍÓÚ '])+$/i.test(input.value.trim())) {
                popover.show();
            }
            break;
        case 1:         //restriccion para numeros grandes
            if (input.value < 0 || input.value > 99999999) {
                popover.show();
            }
            break;
        case 2:        //restriccion para edad
            if (input.value < 0 || input.value > 120) {
                popover.show();
            }
            break;
    }
}

const agregarUsuario = (usuario, lista) => {
    const listaDeElementos = obtenerContenidoArrayLS(lista);
    listaDeElementos.push(usuario);
    actualizarContenidoArrayLS(listaDeElementos, lista);
}
const borrarUsuario = (index, lista) => {
    const listaDeElementos = obtenerContenidoArrayLS(lista);
    listaDeElementos.splice(index, 1);
    actualizarContenidoArrayLS(listaDeElementos, lista);
    mostrarUsuariosAdministrador(lista);
};
function limitarFecha(input) {
    // Establecer fecha mínima basada en la fecha actual
    const fechaActual = new Date();
    const diaActual = fechaActual.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    input.min = diaActual;

    // Verificar si la fecha seleccionada es un día hábil
    const fechaSeleccionada = new Date(input.value);
    const diaSeleccionado = fechaSeleccionada.getDay();

    // 6 es domingo, 5 es sábado
    if (diaSeleccionado === 5 || diaSeleccionado === 6) {
        alert("Seleccione un día hábil");
        input.value = '';
    }
}
const compararFechas = () => { //EN DESARROLLO
    const fechaActual = new Date();
    const diaActual = fechaActual.getDate();
    const horaActual = fechaActual.getHours();
    //  console.log(diaActual);
    //  console.log(horaActual);
    /*
    if(fechaRecibida>diaActual){
        if(horaRecibida>horaActual){
            return true;
        }else{
            return false
        }
    }else{
        return false;
    }
    */
}
function obtenerFechaFormateada() {
    const fechaActual = new Date();
    let año = formatearNumeroHora(fechaActual.getFullYear());
    let mes = formatearNumeroHora(fechaActual.getMonth() + 1); // Los meses comienzan desde 0, por lo que se suma 1
    let dia = formatearNumeroHora(fechaActual.getDate());
    return `${dia}/${mes}/${año}`;
}
function obtenerHoraFormateada() {
    const fechaHora = new Date();
    let horas = formatearNumeroHora(fechaHora.getHours());
    let minutos = formatearNumeroHora(fechaHora.getMinutes());
    let segundos = formatearNumeroHora(fechaHora.getSeconds());
    return `${horas}:${minutos}:${segundos}`;
}
function formatearNumeroHora(numero) {
    return numero < 10 ? '0' + numero : numero;
}
setInterval(() => {
    const popovers = document.querySelectorAll('.popover');

    popovers.forEach(function (popover) {
        popover.parentNode.removeChild(popover);
    });
}, 2000);
