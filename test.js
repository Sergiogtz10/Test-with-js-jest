
// Test que comprueba la función sum

test('adds 14 + 9 to equal 23', function(){
   // importar la función sum del archivo app.js 
    const { sum } = require('./app.js');
    // esperamos que la suma de esos 2 números sea 23
    expect(sum(14, 9)).toBe(23);
});

// Test que comprueba si el conversor esta devolviendo el resultado esperado de euros en dolares

test("One euro should be 1,14 dollars", function(){

    const { fromEuroToDollar } = require('./app.js')
    
    expect(fromEuroToDollar(1)).toBe(1.14);
});

//Test que comprueba si el conversor esta devolviendo el resultado esperado de dolares en yenes

test("One dollar should be 115.38 yenes", function(){

    const {fromDollarToYen} = require('./app.js')
    
    expect(fromDollarToYen(1)).toBe(115.38);
});

// Test que comprueba si el conversor esta devolviendo el resultado esperado de yenes en libras esterlinas

test("One yen should be 0.0064 pounds", function(){

    const {fromYenToPound} = require('./app.js')
    
    expect(fromYenToPound(1)).toBe(0.0064);
});