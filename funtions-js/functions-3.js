 // function scope

let subject = 'create video'

function createThink(subject){ // se eu não passar o argumento isso vai ser sobrescrito pelo subject study.
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))
console.log(subject) // após passar a função foi atualizado para study. Se eu tiro o return não haverá retorno e dará indefinido.
