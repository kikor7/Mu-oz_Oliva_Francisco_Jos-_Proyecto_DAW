let campo = document.querySelector(".buscador");

// Añadir un evento keydown al campo
campo.addEventListener("keydown", function(event) {
  // Comprobar si la tecla pulsada es enter
  if (event.keyCode == 13) {
    // Cancelar el comportamiento por defecto del navegador al hacer enter
    event.preventDefault();
  }
});

document.addEventListener('keyup', (e) => {
    if (e.target.matches('.buscador')) {
        e.preventDefault();
        let contador = 0;
        const productos = document.querySelectorAll('.producto-detalles');

        productos.forEach((producto) => {
            const textoProducto = producto.textContent.toLowerCase();
            const textoBusqueda = e.target.value.toLowerCase();

            if (textoProducto.includes(textoBusqueda)) {
                producto.classList.remove('filtro');
                
            } else {
                producto.classList.add('filtro');
                contador++;
            }
           }
        );

        if (div = document.querySelector('.quitar')){
            div.remove();
          }

        if (contador === productos.length) {
            const nuevoContenedor = document.querySelector(".contenido-productos");
            const div = document.createElement("div");
            div.className = " container col-12 producto-detalles text-center quitar";

            const img = document.createElement("img");
            img.className = "img-fluid ";
            img.src = "img/producto-no-encontrado.png";

            div.appendChild(img);
            nuevoContenedor.appendChild(div);
        }
        }
        
});

