function obtenerContenidoArrayLS(listaLS) {
  //funcion para obtener un arreglo del Local Storage
  let devuelvoArray = [];
  const arrayLocalStorage = localStorage.getItem(listaLS);
  if (arrayLocalStorage) {
    devuelvoArray = JSON.parse(arrayLocalStorage);
  }
  return devuelvoArray;
}
function actualizarContenidoArrayLS(arreglo, listaLS) {
  //funcion para cargar un arreglo en LocalStorage
  localStorage.setItem(listaLS, JSON.stringify(arreglo));
}

function limpiarYenfocarPrimerImput(idElemento, valorImput) {
  //funcion para limpiar el formulario y seleccionar el primer imput
  document.getElementById(idElemento).reset();
  const primerCampo = document.querySelector(
    'input[type="' + valorImput + '"]'
  );
  primerCampo.focus();
}

obtenerContenidoArrayLS("")