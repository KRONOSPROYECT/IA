// El decreto está escrito en la nube
console.log("MD-33 Activado. El espejo refleja el commit.");

// Arreglo de frases para el "Decreto" (sustituye la Tabla Esmeralda)
const decretos = [
    "Separa la tierra del fuego, lo sutil de lo grosero.",
    "Como es arriba (en la nube), es abajo (en tu PC).",
    "El código fuente del universo se escribe con echo y git push.",
    "No necesitas un papiro, necesitas un README.md.",
    "El ojo que todo lo ve es el que hace clic en 'Commit'."
];

let indiceActual = 0;

// Función para cambiar el decreto al hacer clic en el botón
function cambiarDecreto() {
    const mensajeElemento = document.getElementById('mensajeDinamico');
    
    // Cambiar al siguiente decreto en el arreglo
    indiceActual = (indiceActual + 1) % decretos.length;
    mensajeElemento.textContent = `"${decretos[indiceActual]}"`;

    // Animación sutil en la consola del navegador (presiona F12 para verla)
    console.log(`🔄 Nuevo Decreto ejecutado: ${decretos[indiceActual]}`);
}

// Actualizar los íconos de los ojos (simulación de estado)
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('macro').textContent = '🌌'; // Ojo arriba
    document.getElementById('micro').textContent = '💻'; // Ojo abajo
    console.log("✅ Interfaz cargada. El espejo está listo.");
});