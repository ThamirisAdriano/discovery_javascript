
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ") // recebe como argumento o que eu quero separar
console.log(myArray)

let word = "manipulação"
console.log(Array.from(word))

console.log("<<<<!!!!!>>>>")

let techs = ["flutter", "python", "DAX"]

//adicionando um item no fim
techs.push("Dart")

//adicionando um item no começo
techs.unshift("SQL")

//removendo o item do fim
//techs.pop()

//removendo do começo
//techs.shift()

//pegando somente alguns elementos do array
//console.log(techs.slice(1,3))// recebe dois argumentos, início e final.

//remover 1 ou mais itens de um elemento do array
techs.splice(1,1) //tb recebe dois argumentos, o que quero tirar (índice) e quantos elementos quero tirar

//quando não sei a posição do array, eu faço uma busca
let index = techs.indexOf('python')



console.log(techs)
console.log(index)