let listaUsuarios = [];

//sacamos los.value del form de registro
document.querySelector('.formRegistro').addEventListener('submit', e => {
    e.preventDefault(); //prevenimos que se recarge la pagina
    const data = Object.fromEntries(new FormData(e.target))
    let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];
    listaUsuarios.push(data)
    localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
    window.location.href = "inicio-sesion.html";
    });

//sacamos los .value del form de inicio de sesion
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target))
    let credenciales = localStorage.getItem('listaUsuarios');
    credenciales = JSON.parse(credenciales);
    if(!credenciales){
        let contenedor = document.querySelector(".tab-content");
        let p = document.createElement("p");
        p.textContent = "No tenemos usuarios registrados";
        p.className = "text-end color-info-inicio-sesion quitarInfo";
        contenedor.appendChild(p);
    }
    for (let i = 0; i < credenciales.length; i++) {
        if (credenciales[i].correo === data.correo && credenciales[i].contraseña === data.contraseña) {
            window.location.href = "index.html";
            return true;
        }
    }
    if(parrafo = document.querySelector(".quitarInfo")){
        parrafo.remove();
    }
    
    let contenedor = document.querySelector(".tab-content");
    let p = document.createElement("p");
    p.textContent = "Usuario o contraseña incorrectos";
   p.className = "text-end color-info-inicio-sesion quitarInfo";
    contenedor.appendChild(p);
    
    });



