# discovery_javascript
# *Introdução*

## Tipos de dados

Gramática - aprender mais "palavras" para ter mais fluência no "vocabulário"

Focar no conceito e escrita. 

## String - cadeia de caracteres. Usar:

"" aspas duplas '' aspas simples ``template strings (permite multi-linhas, expressões de linguagem, interpolação. Ex:

```jsx
console.log(`Thamiris ${30 + 4}`)
```

## Number

Inteiros / Reais (float) / Nan (not a number) / Infinity

```jsx
console.log(33)
console.log(12.5)
console.log(12.5/ abcd)
console.log(Infinity) // quase não é utilizado, informa apenas se o valor é infinito.
// I maiúsculo sempre, i minúsculo não funciona.
```

## Boolean - True or False

Toda lógica que se encontra em linguagem de programação usa boolean.

Algorítimo: If false: um caminho // if true: outro caminho

## Undefined vs null

Palavra reservada - Nulo

Diferença: null objeto que não tem nada dentro dele.

Algo que não existe (indefinido).

## Object

Dado estrutural - Cria uma estrutura pra gente.

Todo objeto possui propriedades. Ex: Celular: peso, altura, peso...

Todo objeto possui funcionalidade (métodos)

Propriedades - Atributos. (valor)

```jsx
console.log({
	name: 'Thamiris",
	idade: 34
	andar: function () {
	console.log('andar')
}
})
```

Atributo - método se é uma funcionalidade (está dentro de um objeto).

Dados estruturados por conta do objeto.

## Array ou vetores

Também é um jeito de estruturar dados (agrupamento de dados).

```jsx
console.log([
'leite',
'ovos'])
```

Dados são seguidos um do outro (lista/ fila).

# Ler sobre ECMAscript

Tipos primitivos Symbol e BigInt

# Variáveis

JS linguagem fracamente tipada.

AS variáveis podem ter seu conteúdo alterado.

Linguagem dinâmica.

## Prototype = mode

Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros.

 Prototype - protótipo : aquilo que foi criado antes

 {} - objeto - podemos usar propriedades já criadas

chain - cadeia de protótipos

## Type conversion coersion

Alteração de um tipo de dado para outro tipo.

Diferença ⇒ conversion : eu altero a coersion: JS que altera.

```jsx
console.log('9' + 5) //JS transformou o tipo number para string.
```

## Strings em números

```jsx
let string = "123"
console.log(Number(string)) //crio uma função para transformar a string em number

let number = 321
console.log(String(number)) // vice versa
```

## Contando caracteres e dígitos

```jsx
let word = "Paralelepipedo"
console.log(word.length)
let number = 123
console.log(String(number.length))
```

## Casas decimais

Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula.

```jsx
let number = 432234534.55757545
console.log(number.toFixed(2).replace(".", ",") //função atrelada ao objeto number - método
//console.log(number.toFixed(aqui dentro estará o número de casas decimais desejado))
//console.log(number.replace(".", ",") - troca uma "informação" por "outra".
```

## Maiúsculas e minúsculas

```jsx
let word = "Programar é muito bacana!"
console.log(word.toUopperCase()) // método atrelado a String
console.log(word.toLowerCase())
```

## Separando strings

Separando um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Transformando um array em um texto e onde eram espaços substituir por _;

```jsx
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ") // recebe como argumento o que eu quero separarconsole.log(myArray)
let phraseWithUnderscore = myArray.join("")
console.log(phraseWithUnderscore)
```

## Encontrando palavras em frases

```jsx
let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor")).
```

## Criando array com construtor

```jsx
let myArray = new Array['a', 'b', 'c']
console.log(myArray)
```

## Elementos do array

```jsx
console.log(['a', 'b', 'c'])
```
