//Busca los datos del objeto que tengan el apellido igual o cercano a "Corvalan"

let DatosPersonas = [
    {nombre: "Franco", apellido: "Corvalan", edad: 24, peso: 80},
    {nombre: "Julieta", apellido: "Sandoval", edad: 21, peso: 50},
    {nombre: "Jose", apellido: "Corvalan", edad: 50, peso: 90},
    {nombre: "Lara", apellido: "Martinez", edad: 25, peso: 55},
    {nombre: "Santiago", apellido: "Roda", edad: 36, peso: 70},
]

let BuscarApellido = (String) => {
    return DatosPersonas.filter((persona) => {
        if(persona.apellido.indexOf(String) != -1 ) return true
        return false
    })
    
}
console.log(BuscarApellido("Corvalan"))