function diferenciaDeDias(fecha1 , fecha2){
   const fechaF = new Date(fecha1)
   const fechaS = new Date(fecha2)
   console.log(fechaF)
   var difference =   Math.abs(fechaS.getTime() - fechaF.getTime())
   
   return Math.floor(difference/(1000 * 3600 * 24))
}
console.log(diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023'))
