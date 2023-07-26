function ordenarPorApellidos(personas){
    
    const apellidos = personas.map(persona => persona.split(" ")[1])
    apellidos.sort()
    
    const personasOrdenadas =  apellidos.map(apellido => {
        const nombreOriginal = personas.find(nombreCompleto => {
            return nombreCompleto.split(" ")[1] === apellido
        })
         return nombreOriginal
    })
    
   return personasOrdenadas
}

console.log(ordenarPorApellidos([
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
]));  
