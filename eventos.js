
//Variable que identifica al boton que crea el tablero
const boton = document.getElementById("crear");
const botonRelleno = document.getElementById("relleno");

//Agregar evento de click al boton con la funcion crearTablero
boton.addEventListener("click", crearTablero);

boton.addEventListener("click", agregarValores);



function crearTablero() {
    let cantidad = document.getElementById("cantidad").value;
    if (cantidad > 5 ) {
        
        const tablero = cantidad * cantidad;
        var contador = 0;
        var parImpar = cantidad%2;
        for (let i = 1; i <= tablero; i++) {

            let residuo = i % cantidad;
            let calculo = i%2;
            let calculoColor = contador%2;     
            var div = document.createElement("div");
            div.className = "caja";
            color = intervaloColores(parImpar, calculo, calculoColor);
            div.style.cssText = 'background-color: '+ color +';'
            document.getElementById("contenedor").appendChild(div);

            if(residuo == 0 )
            {
                var salto = document.createElement("br");
                document.getElementById("contenedor").appendChild(salto);
                contador++;

            } 
               
        }
       
    }
}

function intervaloColores(parImpar, calculo, calculoColor){
     
    let color = "";

    if(parImpar == 0){
        if(calculo ==  0 ){
            if(calculoColor == 0){
               color = "black";
            }else{
               color = "white";        
            }    
        }else{
            if(calculoColor == 0){
                color = "white";
            }else{ 
                color = "black";
            }
        }
    }else{
        if (calculo == 0 ){
            color = "black";
        }else{

            color = "white";
        }

    }
    return color;

}

function agregarValores(){

}
