function escribir(valor) {
    let pantalla = document.getElementById("pantalla");

    // Si se pulsa "=", calculamos el resultado
    if (valor == "=") {
        calcular();
        return;
    }

    // Si había un error, empezamos de cero
    if (pantalla.value == "Error") {
        pantalla.value = "0";
    }

    // Si hay un 0 y se pulsa un número, lo sustituimos
    if (pantalla.value == "0" && valor != "." && valor != "+" && valor != "-" && valor != "*" && valor != "/") {
        pantalla.value = valor;
    } else {
        pantalla.value += valor;
    }
}

function calcular() {
    let pantalla = document.getElementById("pantalla");

    try {
        let resultado = eval(pantalla.value);

        // Si divides entre 0 el resultado no es válido
        if (isFinite(resultado)) {
            pantalla.value = resultado;
        } else {
            pantalla.value = "Error";
        }
    } catch (error) {
        // Si la operación está mal escrita (por ejemplo "5+")
        pantalla.value = "Error";
    }
}

function borrar() {
    let pantalla = document.getElementById("pantalla");

    // Quita el último carácter
    pantalla.value = pantalla.value.slice(0, -1);

    // Si no queda nada, volvemos a poner 0
    if (pantalla.value == "") {
        pantalla.value = "0";
    }
}