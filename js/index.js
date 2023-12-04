import { agregarProductoCarrito } from "./carrito";

let botonTodos = document.querySelector(".boton-todos");
botonTodos.addEventListener("click", TodosLosProductosPorDefecto);

let botonPlantas = document.querySelector(".boton-planta");
botonPlantas.addEventListener("click", cambiarContenidoPlantas);

let botonAccesorios = document.querySelector(".boton-accesorios");
botonAccesorios.addEventListener("click", cambiarContenidoAccesorios);

let botonHerramientas = document.querySelector(".boton-herramientas");
botonHerramientas.addEventListener("click", cambiarContenidoHerramientas);


 // Array con los datos de los productos
 let productos = [
  {
    nombre: "anthurium rosa",
    precio: 49,
    imagen: "../img/Plantas/anthurium roso/anthurium roso.png",
    tipo: "planta",
  },
  {
    nombre: "podadora",
    precio: 99,
    imagen: "../img/herramientas/podadora/cortacesped.png",
    tipo: "herramienta",
  },

  {
    nombre: "cesta plantas variadas",
    precio: 21,
    imagen: "../img/Plantas/cesta variada de plantas/cesta de plantas variadas.png",
    tipo: "planta",
  },
  {
    nombre: "samso sombrilla",
    precio: 109,
    imagen: "../img/accesorios/samso sombrilla/samso-sombrilla-inclinable-beige.png",
    tipo: "accesorio",
  },
  {
    nombre: "Orquídeas Phalaenopsis",
    precio: 99,
    imagen: "../img/Plantas/Orquídeas Phalaenopsis/Orquídeas Phalaenopsis.png",
    tipo: "planta",
  },
  {
    nombre: "kuddarna",
    precio: 8.99,
    imagen: "../img/accesorios/kuddarna/kuddarna-cojin-respaldo-ext-beig.png",
    tipo: "accesorio",
  },
  {
    nombre: "tarno",
    precio: 49,
    imagen: "../img/accesorios/tarno/tarno.png",
    tipo: "accesorio",
  },
  {
    nombre: "cortasetos",
    precio: 58,
    imagen: "../img/herramientas/cortasetos/cortasetos.png",
    tipo: "herramienta",
  },
  {
    nombre: "nammaro",
    precio: 59,
    imagen: "../img/accesorios/nammaro/nammaro.png",
    tipo: "accesorio",
  },
  
  {
    nombre: "Dipladenia Espaldera",
    precio: 59,
    imagen: "../img/Plantas/Dipladenia Espaldera/Dipladenia Espaldera.png",
    tipo: "planta",
  },

  {
    nombre: "juego de herramientas",
    precio: 29,
    imagen: "../img/herramientas/juego de herramientas/Juego de Herramientas.png",
    tipo: "herramienta",
  },
 
  {
    nombre: "tijeron ramas altas",
    precio: 37,
    imagen: "../img/herramientas/tijeron ramas altas/Tijeron para ramas altas.png",
    tipo: "herramienta",
  },

];
function TodosLosProductosPorDefecto() {
  let contenedor = document.querySelector(".contenido-productos");
  let titulo = document.querySelector(".titulo-principal-categorias");
// Limpiar el contenedor
contenedor.innerHTML = "";
titulo.textContent = "Todos los productos";

// Recorrer el array de objetos
for (let objeto of productos) {
    // Crear un elemento div para el objeto
    let div = document.createElement("div");
    div.className = "col-3 producto-detalles text-center";
    // Crear un elemento img para la imagen del objeto
    let img = document.createElement("img");
    img.className = "img-fluid";
    img.src = objeto.imagen;
    // Crear un elemento p para el nombre del objeto
    let p = document.createElement("p");
    p.textContent = objeto.nombre;
    // Crear un elemento p para el precio del objeto
    let p2 = document.createElement("p");
    p2.textContent = objeto.precio + "€" ;
    //Creamos el boton
    let b = document.createElement("button");
    b.className = "btn btn-outline-success producto-agregar mb-3";
    b.addEventListener("click",agregarProductoCarrito);
    b.textContent = "Agregar";
    // Añadir los elementos al div del objeto
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(b); 
    // Añadir el div del objeto al contenedor
    contenedor.appendChild(div);
    
  }
  };

function cambiarContenidoPlantas() {
  let contenedor = document.querySelector(".contenido-productos");
  let titulo = document.querySelector(".titulo-principal-categorias");
// Limpiar el contenedor
contenedor.innerHTML = "";
titulo.textContent = "Plantas";

// Recorrer el array de objetos
for (let objeto of productos) {
  // Si el objeto es una planta
  if (objeto.tipo === "planta") {
    // Crear un elemento div para el objeto
    let div = document.createElement("div");
    div.className = "col-3 producto-detalles text-center";
    // Crear un elemento img para la imagen del objeto
    let img = document.createElement("img");
    img.className = "img-fluid";
    img.src = objeto.imagen;
    // Crear un elemento p para el nombre del objeto
    let p = document.createElement("p");
    p.textContent = objeto.nombre;
    // Crear un elemento p para el precio del objeto
    let p2 = document.createElement("p");
    p2.textContent = objeto.precio + "€" ;
    //Creamos el boton
    let b = document.createElement("button");
    b.className = "btn btn-outline-success producto-agregar mb-3";
    b.textContent = "Agregar";
    // Añadir los elementos al div del objeto
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(b);
    // Añadir el div del objeto al contenedor
    contenedor.appendChild(div);
  }
}};

function cambiarContenidoAccesorios() {
  let contenedor = document.querySelector(".contenido-productos");
  let titulo = document.querySelector(".titulo-principal-categorias");
// Limpiar el contenedor
contenedor.innerHTML = "";
titulo.textContent = "Accesorios";

// Recorrer el array de objetos
for (let objeto of productos) {
  // Si el objeto es una planta
  if (objeto.tipo === "accesorio") {
    // Crear un elemento div para el objeto
    let div = document.createElement("div");
    div.className = "col-3 producto-detalles text-center";
    // Crear un elemento img para la imagen del objeto
    let img = document.createElement("img");
    img.className = "img-fluid";
    img.src = objeto.imagen;
    // Crear un elemento p para el nombre del objeto
    let p = document.createElement("p");
    p.textContent = objeto.nombre;
    // Crear un elemento p para el precio del objeto
    let p2 = document.createElement("p");
    p2.textContent = objeto.precio + "€" ;
    //Creamos el boton
    let b = document.createElement("button");
    b.className = "btn btn-outline-success producto-agregar mb-3";
    b.textContent = "Agregar";
    // Añadir los elementos al div del objeto
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(b);
    // Añadir el div del objeto al contenedor
    contenedor.appendChild(div);
  }
}};


function cambiarContenidoHerramientas() {
  let contenedor = document.querySelector(".contenido-productos");
  let titulo = document.querySelector(".titulo-principal-categorias");
// Limpiar el contenedor
contenedor.innerHTML = "";
titulo.textContent = "Herramientas";

// Recorrer el array de objetos
for (let objeto of productos) {
  // Si el objeto es una planta
  if (objeto.tipo === "herramienta") {
    // Crear un elemento div para el objeto
    let div = document.createElement("div");
    div.className = "col-3 producto-detalles text-center";
    // Crear un elemento img para la imagen del objeto
    let img = document.createElement("img");
    img.className = "img-fluid";
    img.src = objeto.imagen;
    // Crear un elemento p para el nombre del objeto
    let p = document.createElement("p");
    p.textContent = objeto.nombre;
    // Crear un elemento p para el precio del objeto
    let p2 = document.createElement("p");
    p2.textContent = objeto.precio + "€" ;
    //Creamos el boton
    let b = document.createElement("button");
    b.className = "btn btn-outline-success producto-agregar mb-3";
    b.textContent = "Agregar";
    // Añadir los elementos al div del objeto
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(b);
    // Añadir el div del objeto al contenedor
    contenedor.appendChild(div);
  }
}};

