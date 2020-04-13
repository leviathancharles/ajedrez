
//Variable que identifica al boton que crea el tablero
const boton = document.getElementById("crear");

//Agregar evento de click al boton con la funcion crearTablero
boton.addEventListener("click", crearTablero);


function crearTablero() {
    let cantidad = document.getElementById("cantidad").value;
    if (cantidad > 5 ) {
        
        const tablero = cantidad * cantidad;
        const parImpar = cantidad % 2;
        var color = "white";
        var contador = 0;

        for (let i = 1; i <= tablero; i++) {

            let residuo = i % cantidad;
            let calculo = i%2;
            let calculoColor = contador%2;
            console.log("color: " +i+ " modulo color "+calculoColor);
            console.log("calculo: " +i+ " calculo " +calculo);

            if (parImpar == 0){
                console.log("numero par");    
            }else{
                console.log("numero impar");
            }
            
            
            var div = document.createElement("div");
            div.className = "caja";
            
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

            div.style.cssText = 'background-color: '+ color +';'
            
           
            
            //var v = document.createElement("p");
            //v.textContent = calculo;
            //document.getElementById("valores").appendChild(v);
            
           
            //var newContent = document.createTextNode(i); 
            //div.appendChild(newContent);

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
