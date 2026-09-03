// ==========================================
//  MD-33 · MANIFESTACIÓN DIGITAL (VERSIÓN PRO)
// ==========================================

// ----- LISTA DE DECRETOS (Edítalos si quieres) -----
const decretos = [
    "Separa la tierra del fuego, lo sutil de lo grosero.",
    "Como es arriba (en la nube), es abajo (en tu PC).",
    "El código fuente del universo se escribe con echo y git push.",
    "No necesitas un papiro, necesitas un README.md.",
    "El ojo que todo lo ve es el que hace clic en 'Commit'.",
    "El MD-33 es el Grado de Iniciación del maestro que construye su propio código.",
    "El espejo no miente: solo refleja lo que has subido a la nube."
];

// ----- VARIABLES GLOBALES -----
let indiceActual = 0;
let contadorDecretos = 0;

// ----- 1. CARGAR DATOS GUARDADOS (LOCALSTORAGE) -----
function cargarMemoria() {
    const guardado = localStorage.getItem('md33_data');
    if (guardado) {
        try {
            const data = JSON.parse(guardado);
            indiceActual = data.indice || 0;
            contadorDecretos = data.contador || 0;
            return true;
        } catch (e) {
            return false;
        }
    }
    return false;
}

// ----- 2. GUARDAR DATOS (LOCALSTORAGE) -----
function guardarMemoria() {
    const data = {
        indice: indiceActual,
        contador: contadorDecretos
    };
    localStorage.setItem('md33_data', JSON.stringify(data));
}

// ----- 3. EFECTO GLITCH EN EL TÍTULO -----
function activarGlitch() {
    const titulo = document.getElementById('tituloGlitch');
    const textoOriginal = '⚡ MD-33 ⚡';
    const caracteresRaros = ['₿', '⌘', '⍟', '◈', '⏣', '⎔', '⟡', '⧩', '◉', '✧'];
    
    // Revolver el título por 300ms
    let contador = 0;
    const intervalo = setInterval(() => {
        let textoGlitch = '';
        for (let i = 0; i < textoOriginal.length; i++) {
            if (textoOriginal[i] === ' ') {
                textoGlitch += ' ';
            } else if (Math.random() > 0.6) {
                const charRandom = caracteresRaros[Math.floor(Math.random() * caracteresRaros.length)];
                textoGlitch += charRandom;
            } else {
                textoGlitch += textoOriginal[i];
            }
        }
        titulo.textContent = textoGlitch;
        contador++;
        if (contador > 8) { // Después de ~300ms (8 * 40ms)
            clearInterval(intervalo);
            titulo.textContent = textoOriginal;
        }
    }, 40);
}

// ----- 4. FUNCIÓN PARA CAMBIAR DECRETO (con todo integrado) -----
function cambiarDecreto() {
    // A) Glitch en el título
    activarGlitch();

    // B) Cambiar el decreto
    const mensaje = document.getElementById('mensajeDinamico');
    indiceActual = (indiceActual + 1) % decretos.length;
    mensaje.textContent = `"${decretos[indiceActual]}"`;

    // C) Incrementar contador y actualizar pantalla
    contadorDecretos++;
    document.getElementById('contadorNum').textContent = contadorDecretos;

    // D) Cambiar ojos según la cantidad (efecto visual)
    const macro = document.getElementById('macro');
    const micro = document.getElementById('micro');
    if (contadorDecretos % 3 === 0) {
        macro.textContent = '⚡';
        micro.textContent = '🔥';
    } else if (contadorDecretos % 5 === 0) {
        macro.textContent = '👁️';
        micro.textContent = '🌀';
    } else {
        macro.textContent = '🌌';
        micro.textContent = '💻';
    }

    // E) GUARDAR EN LOCALSTORAGE
    guardarMemoria();

    // F) Consola mística
    console.log(`🔄 Decreto #${contadorDecretos}: ${decretos[indiceActual]}`);
}

// ----- 5. EFECTO DE ESCRITURA AUTOMÁTICA (MÁQUINA DE ESCRIBIR) -----
function iniciarEscritura() {
    const textoOriginal = "El espejo refleja tu código";
    const elemento = document.getElementById('textoAnimado');
    elemento.textContent = '';
    let i = 0;
    const interval = setInterval(() => {
        if (i < textoOriginal.length) {
            elemento.textContent += textoOriginal.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 60);
}

// ----- 6. ANIMACIÓN DE ESTRELLAS FUGACES (Canvas) -----
function iniciarEstrellasFugaces() {
    const canvas = document.getElementById('estrellasCanvas');
    const ctx = canvas.getContext('2d');
    
    // Ajustar tamaño al de la ventana
    function redimensionar() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', redimensionar);
    redimensionar();

    // Lista de meteoros
    const meteoros = [];
    for (let i = 0; i < 12; i++) {
        meteoros.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1),
            vy: (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1),
            tamaño: Math.random() * 2 + 1,
            brillo: Math.random() * 0.8 + 0.2
        });
    }

    function dibujar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Dibujar cada meteoro
        meteoros.forEach(m => {
            // Movimiento
            m.x += m.vx * 0.8;
            m.y += m.vy * 0.8;
            
            // Rebote en los bordes
            if (m.x < 0 || m.x > canvas.width) m.vx *= -1;
            if (m.y < 0 || m.y > canvas.height) m.vy *= -1;
            
            // Dibujar la estela (línea)
            ctx.beginPath();
            ctx.moveTo(m.x, m.y);
            ctx.lineTo(m.x - m.vx * 15, m.y - m.vy * 15);
            ctx.strokeStyle = `rgba(255, 215, 0, ${m.brillo * 0.3})`;
            ctx.lineWidth = m.tamaño * 0.8;
            ctx.stroke();
            
            // Dibujar el punto brillante (cabeza del meteoro)
            ctx.beginPath();
            ctx.arc(m.x, m.y, m.tamaño * 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${m.brillo})`;
            ctx.shadowColor = '#ffd700';
            ctx.shadowBlur = 20;
            ctx.fill();
            ctx.shadowBlur = 0; // reset
        });
        
        requestAnimationFrame(dibujar);
    }
    dibujar();
}

// ----- 7. INICIALIZAR CUANDO CARGUE LA PÁGINA -----
document.addEventListener('DOMContentLoaded', () => {
    // Cargar memoria guardada
    const hayMemoria = cargarMemoria();
    
    // Mostrar el decreto guardado o el primero
    const mensaje = document.getElementById('mensajeDinamico');
    mensaje.textContent = `"${decretos[indiceActual]}"`;
    document.getElementById('contadorNum').textContent = contadorDecretos;
    
    // Iniciar efectos visuales
    iniciarEscritura();
    iniciarEstrellasFugaces();
    
    // Configurar íconos iniciales de ojos
    document.getElementById('macro').textContent = '🌌';
    document.getElementById('micro').textContent = '💻';
    
    // Log de inicio
    if (hayMemoria) {
        console.log(`🧠 Memoria recuperada: ${contadorDecretos} decretos ejecutados.`);
    } else {
        console.log("🚀 MD-33 activado por primera vez. El espejo se enciende.");
    }
    console.log("✅ Sistema listo. Las estrellas fugaces están activas.");
});