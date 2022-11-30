//function expression - function anonymous

//parametros da função (dentro dos parênteses)
const sum = function(number1, number2){
    let total  = (number1 + number2) //usar sempre palavra chave (let)
    return total
}

let number1 = 34
let number2 = 25
console.log(`a soma dos números é ${sum(number1, number2)}`)
