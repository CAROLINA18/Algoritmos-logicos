
function juegoAhorcado(palabraSecreta){
    let palabraOculta="_".repeat(palabraSecreta.length);
    let intentos=5;
    palabraOculta = palabraOculta.toLowerCase();
    palabraSecreta = palabraSecreta.toLowerCase();

    while(intentos>0 && palabraOculta !== palabraSecreta){
         let letra = prompt("adivina la letra")

         if(palabraSecreta.includes(letra)){
            for(let contador = 0; contador < palabraSecreta.length ; contador++){
                if(letra === palabraSecreta[contador]){
                    let palabraOcultaArray = Array.from(palabraOculta);
                    palabraOcultaArray[contador]= letra
                    palabraOculta = palabraOcultaArray.join("")
                }
            }
         }
         else{
            intentos--
         }
         console.log("la palabra es: "+palabraOculta);
         console.log("te quedan "+intentos);
    }

    if(palabraOculta === palabraSecreta){
        console.log("felicitaciones has ganado la palabra es: " +palabraSecreta)
    }else{
        console.log("lo siento agotasta los intentos la palabra era: "+palabraSecreta)
    }
}

const lanzarJuego = document.querySelector("#lanzarJuego")
if (lanzarJuego) {
    lanzarJuego.addEventListener("click",() => juegoAhorcado("AnaCarolina"))
}
