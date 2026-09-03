// El decreto está escrito en la nube
console.log("🚀 MD-33 Activado. El espejo refleja el commit.");

// Lista de decretos (puedes agregar los que quieras)
const decretos = [
    "Separa la tierra del fuego, lo sutil de lo grosero.",
    "Como es arriba (en la nube), es abajo (en tu PC).",
    "El código fuente del universo se escribe con echo y git push.",
    "No necesitas un papiro, necesitas un README.md.",
    "El ojo que todo lo ve es el que hace clic en 'Commit'.",
    "El MD-33 es el Grado de Iniciación del maestro que construye su propio código.",
    "El espejo no miente: solo refleja lo que has subido a la nube."
];

let indiceActual = 0;

// Función que cambia el decreto al hacer clic
function cambiarDecreto() {
    const mensaje = document.getElementById('mensajeDinamico');
    indiceActual = (indiceActual + 1) % decretos.length;
    mensaje.textContent = `"${decretos[indiceActual]}"`;

    // Efecto chido en la consola
    console.log(`🔄 Decreto ejecutado: ${decretos[indiceActual]}`);
}

// Pequeña animación al cargar
document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ Espejo listo. Todo en orden.");
    // Cambiar los iconos de los ojos (por si quieres personalizar)
    document.getElementById('macro').textContent = '🔭';
    document.getElementById('micro').textContent = '🔬';
});