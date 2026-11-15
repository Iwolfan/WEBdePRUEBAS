// Contadores: van fuera de la función para que no se reinicien
let partidas = 0;
let ganadas = 0;
let empatadas = 0;
let perdidas = 0;

// Icono de cada jugada
const iconos = {
    piedra: "✊",
    papel: "✋",
    tijera: "✌️"
};

function juego(jugador) {
    const opciones = ["piedra", "papel", "tijera"];
    const maquina = opciones[Math.floor(Math.random() * opciones.length)];
    let mensaje;
    let clase;
    partidas++;

    if (jugador === maquina) {
        mensaje = "¡Empate!";
        clase = "empate";
        empatadas++;
    }
    // Operador lógico AND (&&) y OR (||)
    else if (
        (jugador === "piedra" && maquina === "tijera") ||
        (jugador === "tijera" && maquina === "papel") ||
        (jugador === "papel" && maquina === "piedra")
    ) {
        mensaje = "¡Gana el jugador!";
        clase = "victoria";
        ganadas++;
    } else {
        mensaje = "¡Gana la máquina!";
        clase = "derrota";
        perdidas++;
    }

    // Porcentaje de victorias sobre el total de partidas
    const porcentaje = Math.round((ganadas / partidas) * 100);

    // Jugadas y resultado
    document.getElementById("jugada-jugador").textContent = "Tu jugada: " + iconos[jugador] + " " + jugador;
    document.getElementById("jugada-maquina").textContent = "Jugada de la máquina: " + iconos[maquina] + " " + maquina;

    // El mensaje cambia de texto y de color según el resultado
    const caja = document.getElementById("mensaje");
    caja.textContent = mensaje;
    caja.className = clase;

    // Marcador
    document.getElementById("marcador").textContent = "Partidas jugadas: " + partidas;
    document.getElementById("ganadas").textContent = "Partidas ganadas: " + ganadas;
    document.getElementById("empatadas").textContent = "Partidas empatadas: " + empatadas;
    document.getElementById("perdidas").textContent = "Partidas perdidas: " + perdidas;
    document.getElementById("porcentajeVictorias").textContent = "% de victorias: " + porcentaje + "%";
}