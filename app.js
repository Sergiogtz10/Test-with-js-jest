// Función de suma
const sum = (a,b) => {
    return a + b
}



// conversor euros en dolares
const fromEuroToDollar = (value) =>{ return value * 1.14 }
// Conversor dolares en yenes
const fromDollarToYen = (value) => {return value  * 115.38}
// Conversor yenes en libras esterlinas
const fromYenToPound = (value) => {return value *0.0064}

module.exports = {sum,fromEuroToDollar,fromDollarToYen,fromYenToPound}