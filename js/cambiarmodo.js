// Activa o desactiva la hoja de estilo del modo claro
function cambiarModo() {
    const enlace = document.getElementById("tema-claro");
    enlace.disabled = !enlace.disabled;

    // Guardamos la elección para que se mantenga en las demás páginas
    localStorage.setItem("modoClaro", !enlace.disabled);
}

// Al cargar la página, recuperamos el modo guardado
// (por defecto se queda el modo oscuro)
const enlaceInicial = document.getElementById("tema-claro");
enlaceInicial.disabled = localStorage.getItem("modoClaro") !== "true";