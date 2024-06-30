const tarea = [
  { id: 21412, nombre_tarea: "Pasear el Perro", realizado: false },
  { id: 21314, nombre_tarea: "Lavar los Platos", realizado: false },
  { id: 42313, nombre_tarea: "Barrer la casa", realizado: false },
  { id: 4231, nombre_tarea: "Limpiar Ventanas", realizado: false },
];

const button = document.querySelector("#agregar");
const lista = document.querySelector("#lista");

const actualizar = (id) => {
  let tareaIndex = tarea.findIndex((tarea) => tarea.id === id);
  tarea[tareaIndex].realizado = !tarea[tareaIndex].realizado;
  let tarearealizados = tarea.filter((tarea) => tarea.realizado == true);
  document.querySelector(
    "#realizados"
  ).innerHTML = `Realizadas: ${tarearealizados.length}`;
};

const Borrar = (id) => {
  let tareaIndex = tarea.findIndex((tarea) => tarea.id === id);
  tarea.splice(tareaIndex, 1);
  actualizar_tarea();
};

const actualizar_tarea = () => {
  let html = ``;
  let tarearealizados = tarea.filter((tarea) => tarea.realizado == true)
  tarea.forEach((tarea) => {
    html += ` <li> <p class="ides">${tarea.id}</p> <p>${
      tarea.nombre_tarea
    }</p> <input type='checkbox' onclick='actualizar(${tarea.id})' ${
      tarea.realizado === true ? "checked" : null
    }> <button class="botonBorrar" onclick='Borrar(${
      tarea.id
    })'><i class="fa-solid fa-x"></i></button> </li>`;
  });
  document.querySelector("#cantidad").innerHTML = `Total: ${tarea.length}`
  document.querySelector("#realizados").innerHTML = `Realizadas: ${tarearealizados.length}`;
  lista.innerHTML = html;
  console.log(tarea)
};


button.addEventListener("click", () => {
  let value = document.querySelector("input").value;
  let nuevo_usuario = {
    id: Date.now(),
    nombre_tarea: value,
    realizado: false,
  };
  tarea.push(nuevo_usuario);
  actualizar_tarea();
});

actualizar_tarea();
