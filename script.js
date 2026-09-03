
// === DECRETOS (puedes editar esta lista) ===
const decretos = [
    "Separa la tierra del fuego, lo sutil de lo grosero.",
    "Como es arriba (en la nube), es abajo (en tu PC).",
    "El código fuente del universo se escribe con echo y git push.",
    "No necesitas un papiro, necesitas un README.md.",
    "El ojo que todo lo ve es el que hace clic en 'Commit'.",
    "El MD-33 es el Grado de Iniciación del maestro que construye su propio código.",
    "El espejo no miente: solo refleja lo que has subido a la nube."
];

// === VARIABLES GLOBALES ===
let indiceActual = 0;
let contadorDecretos = 0;

// === EFECTO DE ESCRITURA AUTOMÁTICA (MÁQUINA DE ESCRIBIR) ===
document.addEventListener('DOMContentLoaded', () => {
    const textoOriginal = "El espejo refleja tu código";
    const elementoSubtitulo = document.getElementById('textoAnimado');
    let i = 0;
    
    // Limpia el texto y lo escribe letra por letra
    elementoSubtitulo.textContent = '';
    const interval = setInterval(() => {
        if (i < textoOriginal.length) {
            elementoSubtitulo.textContent += textoOriginal.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 60); // Velocidad: 60ms por letra

    // Actualizar los íconos de los ojos al cargar
    document.getElementById('macro').textContent = '🔭';
    document.getElementById('micro').textContent = '🔬';
    
    console.log("✅ MD-33 activado. El espejo está listo.");
});

// === FUNCIÓN PARA CAMBIAR DECRETO ===
function cambiarDecreto() {
    // 1. Cambiar el texto del decreto
    const mensaje = document.getElementById('mensajeDinamico');
    indiceActual = (indiceActual + 1) % decretos.length;
    mensaje.textContent = `"${decretos[indiceActual]}"`;

    // 2. Incrementar y actualizar el contador
    contadorDecretos++;
    document.getElementById('contadorNum').textContent = contadorDecretos;

    // 3. Cambiar los ojos según el decreto (efecto visual)
    const macro = document.getElementById('macro');
    const micro = document.getElementById('micro');
    
    if (contadorDecretos % 3 === 0) {
        macro.textContent = '⚡';
        micro.textContent = '🔥';
    } else {
        macro.textContent = '🌌';
        micro.textContent = '💻';
    }

    // 4. Registro en consola (abre F12 para verlo)
    console.log(`🔄 Decreto #${contadorDecretos}: ${decretos[indiceActual]}`);
}