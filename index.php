<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilo.css">
    <title>Ajedrez</title>
</head>
<body>
    <input type="number" name="cantidad" id="cantidad" />

    <button id="crear">Crear Tablero</button>
    
    <button id="reset" disabled>Borrar Tablero</button>

    <button id="relleno" disabled>Rellenar Valores</button>
    
    <div class="contenedor" id="contenedor">

    </div>
    <div id="valores"></div>
    
    <script type="text/javascript" src="eventos.js"></script>
</body>
</html>