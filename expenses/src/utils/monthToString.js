/* Este código en React define una función llamada "monthToString" que toma un parámetro "string" que es una fecha en formato de cadena.

La función convierte el mes numérico en el formato de fecha (ejemplo: 05/01/2023) en su equivalente en palabras (enero, febrero, marzo, etc.). Esto se logra dividiendo la cadena de fecha en "/" y seleccionando el segundo elemento, que es el mes en formato numérico.

Luego, se utiliza una estructura "switch" para convertir el mes numérico en su equivalente en palabras utilizando "case" para cada mes, y luego devolver la cadena correspondiente.

En resumen, la función "monthToString" tiene como objetivo convertir un mes numérico en una fecha en formato de cadena en su equivalente en palabras para una mejor visualización de la información de fecha en una interfaz de usuario. */


export const monthToString = (string) => {
    let month = Number(string.split("/")[1])
    switch (month) {
        case 1:
            return "January"
        case 2:
            return "February"   
        case 3:
            return "March" 
        case 4:
            return "April"
        case 5:
            return "May"
        case 6:
            return "June"
        case 7:
            return "July"
        case 8:
            return "August"
        case 9:
            return "September"
        case 10:
            return "October"
        case 11:
            return "November"
        case 12:
            return "December"
    }
}