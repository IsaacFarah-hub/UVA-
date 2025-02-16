document.addEventListener("DOMContentLoaded", function () {
const pregunta2 = document.getElementById("ante_propio");
const pregunta3 = document.getElementById("pregunta3");

// Escuchar cambios en la primera pregunta
pregunta2.addEventListener("change", function () {
    if (pregunta2.value === "0") {
        pregunta3.classList.remove("ocultar_P3");
    } else {
        pregunta3.classList.add("ocultar_P3");
    }
});
});