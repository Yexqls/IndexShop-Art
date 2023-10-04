<<<<<<< HEAD
const inicioSesion = document.querySelector('.iniciasesion');

let usuarioFormulario;
let contrasenaFormulario;
let usuarioContrasenaFormulario;
let arrayDatos;
let respuesta = false;



document.addEventListener('DOMContentLoaded', () => {
    fetchData(); 
})


const fetchData = async () => {
    try {
        const res = await fetch('api.json'); 
        const data = await res.json(); 
        arrayDatos = data; 
    } catch (error) {
        console.log(error);
    }
}

inicioSesion.addEventListener('click', e => {
    addBotonInicio(e); 
})


function addBotonInicio(e) {
    
    if (e.target.classList.contains('botonInicio')) {
        validacionUsuarioContrasena(e.target.parentElement)
        validacionDatosFormulario();
    }
}


const validacionUsuarioContrasena = objeto => {
    const elementosLogin = {
        usuario: objeto.getElementsByTagName('input')[0].value,
        contrasena: objeto.getElementsByTagName('input')[1].value
    }
    usuarioFormulario = elementosLogin.usuario;
    contrasenaFormulario = elementosLogin.contrasena;
    usuarioContrasenaFormulario = usuarioFormulario + contrasenaFormulario;
    arrayDatos.forEach(dato => {
        let usuarioContrasena = dato.usuario + dato.contrasena;
        if (usuarioContrasena == usuarioContrasenaFormulario) { 
            respuesta = true;
        }
    })

}

function validacionDatosFormulario() {
    if (usuarioFormulario == "" || contrasenaFormulario == "") {  
        alert("🚫 No se pueden dejar campos sin rellenar 🚫");
    } else if (respuesta == true) { 
        abrirPestanaUsers('index.html'); 
    } else {
        alert("⚠ Usuario y/o contraseña incorrectos ⚠");
    }
}

function abrirPestanaUsers(url) { 
    // Abrir nueva pestaña
    var win = window.open(url);
    window.close(); 
    win.focus();
=======
const inicioSesion = document.querySelector('.iniciasesion');

let usuarioFormulario;
let contrasenaFormulario;
let usuarioContrasenaFormulario;
let arrayDatos;
let respuesta = false;



document.addEventListener('DOMContentLoaded', () => {
    fetchData(); 
})


const fetchData = async () => {
    try {
        const res = await fetch('api.json'); 
        const data = await res.json(); 
        arrayDatos = data; 
    } catch (error) {
        console.log(error);
    }
}

inicioSesion.addEventListener('click', e => {
    addBotonInicio(e); 
})


function addBotonInicio(e) {
    
    if (e.target.classList.contains('botonInicio')) {
        validacionUsuarioContrasena(e.target.parentElement)
        validacionDatosFormulario();
    }
}


const validacionUsuarioContrasena = objeto => {
    const elementosLogin = {
        usuario: objeto.getElementsByTagName('input')[0].value,
        contrasena: objeto.getElementsByTagName('input')[1].value
    }
    usuarioFormulario = elementosLogin.usuario;
    contrasenaFormulario = elementosLogin.contrasena;
    usuarioContrasenaFormulario = usuarioFormulario + contrasenaFormulario;
    arrayDatos.forEach(dato => {
        let usuarioContrasena = dato.usuario + dato.contrasena;
        if (usuarioContrasena == usuarioContrasenaFormulario) { 
            respuesta = true;
        }
    })

}

function validacionDatosFormulario() {
    if (usuarioFormulario == "" || contrasenaFormulario == "") {  
        alert("🚫 No se pueden dejar campos sin rellenar 🚫");
    } else if (respuesta == true) { 
        abrirPestanaUsers('index.html'); 
    } else {
        alert("⚠ Usuario y/o contraseña incorrectos ⚠");
    }
}

function abrirPestanaUsers(url) { 
    // Abrir nueva pestaña
    var win = window.open(url);
    window.close(); 
    win.focus();
>>>>>>> 217a66f433ac1861e7d17a714b2271747ffaa674
}