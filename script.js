const respuestasCorrectas = {
    1: "23302571y", // Cambia esto por la respuesta correcta
    2: "648947202", // Cambia esto por la respuesta correcta
    3: "12 de marzo" // Cambia esto por la respuesta correcta
};

function verificarRespuesta(numeroPrueba) {
    const respuestaUsuario = document.getElementById(`respuesta${numeroPrueba}`).value.toLowerCase();
    const resultado = document.getElementById(`resultado${numeroPrueba}`);

    if (respuestaUsuario === respuestasCorrectas[numeroPrueba]) {
        resultado.textContent = "¡Correcto!";
        resultado.style.color = "green";
        verificarTodasLasPruebas();
    } else {
        resultado.textContent = "Incorrecto, intenta de nuevo.";
        resultado.style.color = "red";
    }
}

function verificarTodasLasPruebas() {
    const todasCorrectas = Object.keys(respuestasCorrectas).every(key => {
        return document.getElementById(`respuesta${key}`).value.toLowerCase() === respuestasCorrectas[key];
    });

    if (todasCorrectas) {
        window.location.href = "premio.html"; // Redirige a la página del premio
    }
}