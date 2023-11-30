//------------  FUNCIONES UTILITARIAS ---------------
const obtenerContenidoArrayLS = (listaLS) => {
    //funcion para arreglos
    let devuelvoArray = [];
    const arrayLocalStorage = localStorage.getItem(listaLS);
    if (arrayLocalStorage) {
        devuelvoArray = JSON.parse(arrayLocalStorage);
    }
    return devuelvoArray;
};

const obtenerUnElementoLS = (listaLS) => {
    //funcion para unico elemento
    let elemento = null;
    const elementoLocalStorage = localStorage.getItem(listaLS);
    if (elementoLocalStorage) {
        elemento = JSON.parse(elementoLocalStorage);
    }
    return elemento;
};

const obtenerUnaCadenaLS = (listaLS) => {
    //funcion para una cadena
    let elemento = undefined;
    const elementoLocalStorage = localStorage.getItem(listaLS);
    if (elementoLocalStorage) {
        return elementoLocalStorage;
    } else {
        return elemento;
    }
};

const actualizarContenidoArrayLS = (arreglo, listaLS) => {
    localStorage.setItem(listaLS, JSON.stringify(arreglo));
};

function codificarCadena(cadena) {
    return btoa(cadena);
}

function decodificarCadena(cadena) {
    return atob(cadena);
}

function toggleOffcanvas() {
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
};

const validarNumeros = (numero, cifraMinima, cifraMaxima) => {
    return numero.length >= cifraMinima && numero.length <= cifraMaxima;
};

const limpiarYenfocarPrimerImput = (idElemento, valorImput) => {
    //funcion para limpiar el formulario y seleccionar el primer imput
    document.getElementById(idElemento).reset();
    const primerCampo = document.querySelector('input[type="' + valorImput + '"]');
    primerCampo.focus();
};

const agregarUsuario = (usuario, lista) => {
    const listaDeElementos = obtenerContenidoArrayLS(lista);
    listaDeElementos.push(usuario);
    actualizarContenidoArrayLS(listaDeElementos, lista);
};