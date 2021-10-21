//callback function
//função que está passando como parâmetro para outra função.

function sayMyName(name) {
    console.log('Antes de executar a callback')
    
    name() // função criada fora do escopo

    console.log('Depois de executar a callback')
    

}

sayMyName(
    () => {
        console.log('Estou em uma callback.')
    }
)