var formulario = document.getElementById('formulario');
window.onload = iniciar;
function iniciar(){
  document.getElementById('ENVIAR').addEventListener('click', validar, false)
}

function validarNombre(){
  var elemento = document.getElementById('Nombre');
  limpiarError(elemento);
  if (elemento.value == ""){
    alert('El campo Nombre no puede estar vacio');
    error(elemento);
    return false;
  }
  return true;
}

function validarEmail(){
  var elemento = document.getElementById('Email');
  if (elemento.value == ''){
    alert('El campo email no puede estar vacio');
    return false;
  }
  return true;
}

function validarTelefono(){
  var elemento = document.getElementById('Telefono');
  if (isNaN(elemento.value)){
    alert('El campo Telefono tiene que ser numerico');
    return false;
  }
  return true;
}

function validar(e){
  if(validarNombre() && validarTelefono() && validarEmail() && confirm('Pulsa Aceptar si deseas enviar el formulario')){
    return true;
  }else{
    e.preventDefault();
    return false;
  }
}

function error(elemento){
  elemento.className = "error";
  elemento.focus();
}

function limpiarError(elemento){
  elemento.className = "";
}
