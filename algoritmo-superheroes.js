process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!
const infoSuperheroes = {
    'Iron Man': {
        nombreReal: 'Tony Stark',
        poderes: ['Tecnologia avanzada', 'Movilidad aérea'],
        equipo: 'Los vengadores'
    },
    'Capitán América': {
        nombreReal: 'Steve Rogers',
        poderes: ['Fuerza sobrehumana', 'Agilidad y reflejos sobresalientes'],
        equipo: 'Los vengadores'
    },
    'Thor': {
        nombreReal: 'Thor Odinson',
        poderes: ['Mjolnir', 'Viento y trueno'],
        equipo: 'Los vengadores'
    },
    'Spider-Man': {
        nombreReal: 'Peter Parker',
        poderes: ['Balanceo', 'Telarañas pegajosas', 'Sentido aracnido'],
        equipo: 'Los vengadores'
    },
    'Hulk': {
        nombreReal: 'Bruce Banner',
        poderes: ['Fuerza sobrehumana', 'Invulnerabilidad'],
        equipo: 'Los vengadores'
    }
};

function mostrarInformacionSuperheroe(nombre){
  
    console.log(infoSuperheroes[nombre])
    
}

function mostrarInformacionSuperheroes(nombres){
    
        
        
        if(nombres.length === 0){
            console.log(infoSuperheroes)
        }else{
            for (i=0;i<nombres.length;i++) {
                 console.log(nombres[i])
                 console.log(infoSuperheroes[nombres[i]])
        }
        }      
    
            
}
mostrarInformacionSuperheroes(['Iron Man' , 'Thor'])

mostrarInformacionSuperheroes([]);

mostrarInformacionSuperheroe('Iron Man');