let botonTodos = document.querySelector(".boton-todos");
botonTodos.addEventListener("click", TodosLosProductosPorDefecto);

let botonPlantas = document.querySelector(".boton-planta");
botonPlantas.addEventListener("click", cambiarContenidoPlantas);

let botonAccesorios = document.querySelector(".boton-accesorios");
botonAccesorios.addEventListener("click", cambiarContenidoAccesorios);

let botonHerramientas = document.querySelector(".boton-herramientas");
botonHerramientas.addEventListener("click", cambiarContenidoHerramientas);

let botonCarrito = document.querySelector(".boton-carrito");
botonCarrito.addEventListener("click", mostrarCarrito);

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
  console.log (contenedor);
  console.log (titulo);
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
    b.addEventListener("click", agregarProducto);
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

let productosAgregados = [];

function agregarProducto(event) {
	const b = event.srcElement;
  console.log(b.parentNode);
  if(b && b.parentNode) {
  	productosAgregados.push(b.parentNode);
    numeroEnCesta = productosAgregados.length
}
if (numeroEnCesta >1) {
  let p2 = document.querySelector(".numero-en-cesta");
  p2.remove();
  let p = document.createElement("p");
  p.textContent = numeroEnCesta;
  p.className = "numero-en-cesta";
  let botonCarrito = document.querySelector(".boton-carrito");
  botonCarrito.appendChild(p);
  
} else{  let p = document.createElement("p");
p.textContent = numeroEnCesta;
p.className = "numero-en-cesta";
let botonCarrito = document.querySelector(".boton-carrito");
botonCarrito.appendChild(p);
}}


function mostrarCarrito(){
  if (productosAgregados.length > 0) {
    let contenedor = document.querySelector(".contenido-productos");
    contenedor.innerHTML = "";

  productosAgregados.map((producto) => 
  contenedor.appendChild(producto)
  );
}else{
let contenedor = document.querySelector(".contenido-productos");
  let titulo = document.querySelector(".titulo-principal-categorias");
// Limpiar el contenedor
contenedor.innerHTML = "";
titulo.textContent = "Su carrito";
let div = document.createElement("div");
div.className = "col-3 producto-detalles text-center";
let p = document.createElement("p");
p.textContent = "Carrito vacio!";
let svg= document.createElement("svg");
svg.innerHTML = `<svg style= "width:1em; height:3em; margin-left:5px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18c-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"></path><path fill="#664500" d="M17.312 17.612a.501.501 0 0 0-.61-.014c-.012.009-1.26.902-3.702.902c-2.441 0-3.69-.893-3.7-.9a.5.5 0 0 0-.757.603c.06.135 1.5 3.297 4.457 3.297c2.958 0 4.397-3.162 4.457-3.297a.498.498 0 0 0-.145-.591zm10 0a.5.5 0 0 0-.61-.014c-.012.009-1.261.902-3.702.902c-2.44 0-3.69-.893-3.7-.9a.5.5 0 0 0-.757.603c.06.135 1.5 3.297 4.457 3.297c2.958 0 4.397-3.162 4.457-3.297a.498.498 0 0 0-.145-.591zM22 28h-8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2zM6 14a1 1 0 0 1-.004-2c.156-.002 3.569-.086 6.205-3.6a1 1 0 0 1 1.6 1.2C10.538 13.95 6.184 14 6 14zm24 0c-.184 0-4.537-.05-7.8-4.4a1 1 0 1 1 1.599-1.2c2.641 3.521 6.061 3.599 6.206 3.6c.55.006.994.456.991 1.005A.996.996 0 0 1 30 14z"></path></g></svg>`;
div.appendChild(p);
p.appendChild(svg);
contenedor.appendChild(div);
}};

