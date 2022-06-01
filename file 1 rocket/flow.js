
//control flow
//console.log('a');
//console.log('b');

// if e else
/*let temperature = 37
if (temperature >= 37.5) {
    console.log('Febre alta');
}
else if (temperature < 37.5 && temperature >= 37) {
    console.log('Febre baixa')
} else {
    console.log('Saúdavel');
}*/

//Switch
function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }
}

console.log(calculate(5, '+', 8))



//throw
function sayMyName(name = ''){
    if(name === ""){
        throw "Nome é obrigatório"
    }
    console.log(name)
}

// try...catch
try{
    sayMyName('Vitor')

} catch(e){
    console.log(e)
}
console.log('após ao try/catch')