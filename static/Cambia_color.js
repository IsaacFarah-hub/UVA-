
const numberElement = document.getElementById("sensor");
const circleElement = document.querySelector(".circulo");
const uvBar = document.getElementById("rango");

function updateNumberAndUvBar(newNumber) {

    if (newNumber <= 2) {
        circleElement.style.backgroundColor = "#29e01f"; // Verde
        uvBar.innerText = "Bajo";
    } else if (newNumber <= 5) {
        circleElement.style.backgroundColor = "#d6e01f"; // Amarillo
        uvBar.innerText = "Moderado";
    }else if (newNumber <= 7) {
        circleElement.style.backgroundColor = "#e36f09"; // naranja
        uvBar.innerText = "Alto";
    } else if (newNumber <= 10) {
        circleElement.style.backgroundColor = "#d12424"; // Rojo
        uvBar.innerText = "Muy alto";
    }else if (newNumber > 10) {
        circleElement.style.backgroundColor = "#b62dfa"; // morado
        uvBar.innerText = "Extremo";
    }

}

// Función para actualizar el número y llamar a la función combinada
function update() {
    const currentNumber = parseInt(numberElement.textContent);
    updateNumberAndUvBar(currentNumber);
}
setInterval(update, 100);