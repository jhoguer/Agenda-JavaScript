const guardarContacto = (storage, contacto) => {
  storage.setItem(contacto.id, JSON.stringify(contacto))
  window.location.href = '/';
}

const cargarContactos = (storage, listadoTareas) => {
  let claves = Object.keys(storage);
  console.log(claves);
  for (clave of claves) {
    let contacto = JSON.parse(storage.getItem(clave))
    crearContacto(listadoTareas, contacto, storage)
  }
}

const crearContacto = (parentNode, contacto, storage) => {
  let divContacto = document.createElement('div');
  let nombreContacto = document.createElement('h3');
  let numeroContacto = document.createElement('p');
  let direccionContacto = document.createElement('p');
  let iconoBorrar = document.createElement('span');

  nombreContacto.innerHTML = contacto.nombre;
  numeroContacto.innerHTML = contacto.numero;
  direccionContacto.innerHTML = contacto.direccion;
  iconoBorrar.innerHTML = 'remove_circle_outline';

  divContacto.classList.add('tarea');
  iconoBorrar.classList.add('material-icons', 'icono');

  iconoBorrar.onclick = () => {
    storage.removeItem(contacto.id)
    window.location.href = '/';
  }

  divContacto.appendChild(nombreContacto);
  divContacto.appendChild(numeroContacto);
  divContacto.appendChild(direccionContacto);
  divContacto.appendChild(iconoBorrar);

  parentNode.appendChild(divContacto)

}