//let weight  declaração de variável

//console.log(typeof weight)

/*let name = 'Thamiris'
let age = 34
let stars = 24.6
let isSubscribed = true*/

//let student = {};
//console.log(typeof student) // objeto

let student = { // --->> isso é um objeto
    name : 'Thamiris',
    age : 34,
    stars = 24.6,
    weight: 64.5,
    isSubscribed: true,
};

console.log(`${student.name} de ${student.age}, pesa ${student.weight} Kilos!`)



console.log(students[0])



// crie um novo student e coloque na posição 1 do Array students


const john = {
    name: 'John', 
    age: 30,
    weight: 72
}

// maneira 1 
let students = [ // isso é um array
    student,
    john
]

// maneira 2
students[1] = john
console.log(students)

console.log(a)
    var a = 1

// será impresso no console log um "indefinido" pq o 1 ainda não foi declarado.
// hoisting . Var sofre elevação.

console.log(a)
let a = 1
// da erro de referência porque somente var recebe hoisting (não sofre elevação)