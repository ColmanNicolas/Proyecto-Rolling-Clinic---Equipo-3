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

const validarNumeros = (numero, cifraMinima, cifraMaxima) => {
    return numero.length >= cifraMinima && numero.length <= cifraMaxima;
}

const limpiarYenfocarPrimerImput = (idElemento, valorImput) => {
    //funcion para limpiar el formulario y seleccionar el primer imput
    document.getElementById(idElemento).reset();
    const primerCampo = document.querySelector('input[type="' + valorImput + '"]');
    primerCampo.focus();
}
const validarnombreEnVivo = (input) =>{
    console.log("estoy controlando");
    const expresionRegular = /^([a-zA-ZñÑáéíóúÁÉÍÓÚ '])+$/i;
    const esValido = expresionRegular.test(input.value);

    if (!esValido) {
 /*       const myPopover = bootstrap.Popover.getOrCreateInstance('#example');
        myPopover.setContent({
            '.popover-header': 'supertitulooo',
            '.popover-body': 'another content'
          });
*/
        alert("Erróneo. El nombre no cumple con el formato permitido.");
    }
}
const agregarUsuario = (usuario, lista) => {
    const listaDeElementos = obtenerContenidoArrayLS(lista);
    listaDeElementos.push(usuario);
    actualizarContenidoArrayLS(listaDeElementos, lista);
}
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
const compararFechas = () =>{ //EN DESARROLLO
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