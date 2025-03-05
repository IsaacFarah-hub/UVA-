const numberElement = document.getElementById("sensor"); // Toma el ID "sensor" del html para trabajar con el
const circleElement = document.querySelector(".circulo"); // Toma la clase "circulo" del html para trabajar con el
const uvBar = document.getElementById("rango"); // Toma el ID "rango" del html para trabajar con el

function updateNumberAndUvBar(newNumber) {
    // Actualiza el color del círculo y el texto del rango de riesgo
    if (newNumber <= 2) {
        circleElement.style.backgroundColor = "#29e01f"; // Verde
        uvBar.innerText = "Bajo";
    } else if (newNumber <= 5) {
        circleElement.style.backgroundColor = "#d6e01f"; // Amarillo
        uvBar.innerText = "Moderado";
    } else if (newNumber <= 7) {
        circleElement.style.backgroundColor = "#e36f09"; // Naranja
        uvBar.innerText = "Alto";
    } else if (newNumber <= 10) {
        circleElement.style.backgroundColor = "#d12424"; // Rojo
        uvBar.innerText = "Muy alto";
    } else if (newNumber > 10) {
        circleElement.style.backgroundColor = "#b62dfa"; // Morado
        uvBar.innerText = "Extremo";
    }
}

function update() {
    // Obtiene el valor del índice UV desde Flask
    fetch("/obtener_uv")
        .then(response => response.json())
        .then(data => {
            const currentNumber = parseFloat(data.indice_uv); // Convierte el valor a número
            numberElement.textContent = currentNumber.toFixed(1); // Actualiza el valor en la página
            updateNumberAndUvBar(currentNumber); // Actualiza el color y el texto
        })
        .catch(error => {
            console.error("Error al obtener el índice UV:", error);
        });
}

// Actualiza el valor cada 5 segundos
setInterval(update, 5000);

// Actualiza el valor inmediatamente al cargar la página
update();
