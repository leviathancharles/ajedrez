
//Variable que identifica al boton que crea el tablero
const boton = document.getElementById("crear");

//Agregar evento de click al boton con la funcion crearTablero
boton.addEventListener("click", crearTablero);


function crearTablero() {
    let cantidad = document.getElementById("cantidad").value;
    if (cantidad > 5 ) {
        const tablero = cantidad * cantidad;
        for (let i = 1; i <= tablero; i++) {

            let residuo = i % cantidad;
                
            var div = document.createElement("div");
            div.className = "caja";
           
            var newContent = document.createTextNode(i); 
            div.appendChild(newContent);

            document.getElementById("contenedor").appendChild(div);

            if(residuo == 0 )
            {
                var salto = document.createElement("br");
                document.getElementById("contenedor").appendChild(salto);

            }
               
        }
       
    }
}
