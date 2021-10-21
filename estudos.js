
// Aqui eu tenho um comentário em linha

// o código abaixo escreve msg no dectools (console)
//console.log('Bem vindos ao Starter')

/* Aqui eu tenho um comentário multi linha
ou comentário de bloco

*/

console.log('Bem vindos ao Starter') // possível colocar comentários ao lado do código.

// variáveis e tipos de dados
//declaration

//var name 

//assignment or atribuição de valores

var nome = 'Mike'

// que tipo de dado podemos colocar na variável

console.log(typeof nome)

let age = 20
let isHuman = true

// posso agrupar - agrupamento de declarações

let age, isHuman

age = 18
isHuman = true
//multiplos argumentos na função
// escrita de texto + variáveis - concatenar variáveis
console.log(nome, age, isHuman)
console.log('O' + nome + 'tem' + age + 'anos')

// interpolando valores com template literals or template strings

console.log(`O ${nome} tem ${age} anos.`)

// object

const person = {
    name = 'Thamiris',
    age: 34,
    weight: 64.5,
}

console.log(person.name)
console.log(`${person.name} tem ${age} anos.`)

// Arrays

const animals = [
    'Lion', 
    'Monkey',
   {
       name = 'Cat',
       age = 3
   }
]

// acessar valores dentro do Array

console.log(animals[0])
console.log(animals.length) // mostra o total de elementos.
console.log(animals[2].name) // acessar o objeto dentro de um array
