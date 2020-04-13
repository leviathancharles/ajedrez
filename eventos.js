
//Variable que identifica al boton que crea el tablero
const boton = document.getElementById("crear");
const botonReset = document.getElementById("reset");
const botonRelleno = document.getElementById("relleno");


//Agregar evento de click al boton con la funcion crearTablero
boton.addEventListener("click", crearTablero);
botonReset.addEventListener("click", eliminarTablero);
botonRelleno.addEventListener("click", agregarValores);



function crearTablero() {

    
    let cantidad = document.getElementById("cantidad");
       

    if (cantidad.value > 5 && cantidad.value < 30 ) {
        cantidad.readOnly = true; 
        botonReset.disabled = false; 
        botonRelleno.disabled = false;

        const tablero = cantidad.value * cantidad.value;
        var contador = 0;
        var parImpar = cantidad.value % 2;
        for (let i = 1; i <= tablero; i++) {

            let residuo = i % cantidad.value;
            let calculo = i%2;
            let calculoColor = contador%2;     
            var div = document.createElement("div");
            div.className = "caja";
            div.id = "caja"+i;
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
       
    }else{
        var p = document.createElement("p");
        p.textContent = "Valores no validos";
        document.getElementById("contenedor").appendChild(p);
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
    
    let cantidad = document.getElementById("cantidad").value;
    let divs = cantidad * cantidad;
    let color = "";

    for (let index = 1; index <= divs; index++) {
        const azulRojo = index % 2; 
        let div = document.getElementById("caja"+index);
        let elemento = document.querySelector('#caja'+index).childElementCount;
        
        if(elemento == 0){
            if(azulRojo == 0){
                color = "blue";
            }else{
                color = "red";
            }
            var p = document.createElement("div");
            div.style.cssText = 'background-color: '+ color +';'
            div.appendChild(p);
            break;
        }
       
    }

}

function eliminarTablero(){
    document.getElementById("contenedor").innerHTML = "";
    let numero = document.getElementById("cantidad");
    numero.readOnly = false;
    numero.value = "";
    botonReset.disabled = true; 
    botonRelleno.disabled = true;
}