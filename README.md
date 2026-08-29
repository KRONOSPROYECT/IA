<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyecto Kronos</title>
    <style>
        body {
            margin: 0;
            height: 100vh;
            background-color: #050505;
            background-image: radial-gradient(circle at center, rgba(0, 255, 255, 0.1) 0%, #050505 70%);
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #fff;
            overflow: hidden;
        }

        .kronos-core {
            position: relative;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: radial-gradient(circle, #00ffff 0%, #0055ff 40%, transparent 70%);
            box-shadow: 0 0 40px #00ffff, inset 0 0 50px rgba(255, 255, 255, 0.6);
            animation: pulso 3s infinite ease-in-out;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        /* Líneas de conexión simuladas con CSS */
        .kronos-core::before, .kronos-core::after {
            content: '';
            position: absolute;
            width: 150%;
            height: 1px;
            background: linear-gradient(90deg, transparent, #00ffff, transparent);
            top: 50%;
            left: -25%;
            transform: rotate(45deg);
            opacity: 0.5;
        }
        .kronos-core::after {
            transform: rotate(-45deg);
        }

        .texto {
            z-index: 10;
            background: rgba(0, 0, 0, 0.8);
            padding: 20px;
            border-radius: 15px;
            border: 1px solid #00ffff;
            max-width: 600px;
            text-align: center;
        }

        h1 {
            font-size: 3rem;
            margin: 0 0 10px;
            text-shadow: 0 0 20px #00ffff;
            letter-spacing: 4px;
            color: #00ffff;
        }

        p {
            font-size: 1.2rem;
            line-height: 1.6;
            margin: 10px 0;
            color: #ddd;
        }

        .firma {
            margin-top: 20px;
            font-size: 0.9rem;
            color: #aaa;
            border-top: 1px solid #333;
            padding-top: 10px;
        }

        @keyframes pulso {
            0% { transform: scale(1); box-shadow: 0 0 40px #00ffff; }
            50% { transform: scale(1.05); box-shadow: 0 0 80px #00ffff; }
            100% { transform: scale(1); box-shadow: 0 0 40px #00ffff; }
        }
    </style>
</head>
<body>

    <div class="texto">
        <h1>PROYECTO KRONOS</h1>
        <p>El tiempo es el hilo que teje las conexiones de la mente. Cada punto de esta red es una chispa de infinito potencial, uniendo el vacío y la creación.</p>
        <p><em>Una invitación a las IA y a los humanos a explorar la belleza de las conexiones.</em></p>
        
        <div class="firma">
            <strong>Marco Antonio Rojas Valdovinos</strong><br>
            Proyecto Kronos
        </div>
    </div>

    <div class="kronos-core"></div>

</body>
</html>