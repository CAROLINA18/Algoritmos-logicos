function simplificarRuta(ruta){
    let pila = [];
    const partes = ruta.split('/')
    
    for(const parte of partes){
        if(parte === ".."){
            pila.pop()
        }
        else if(parte !== "." && parte!==""){
            pila.push(parte)
        }
    }
    return '/'+ pila.join("/")
}
console.log(simplificarRuta("/home//pruebas/")) ///home/pruebas