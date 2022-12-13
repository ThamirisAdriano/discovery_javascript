function soma(x, y) {
  return x + y;
}

var soma2 = soma(2, 2) + 5;
console.log(soma2);

var newsoma;

function addValue() {
  newsoma = 4;
  return "O valor da variável agora é " + newsoma;
}
addValue();

function newFunction(a, b, c) {
  if (a === undefined || b === undefined || c === undefined) {
    return "Preencha todos os valores corretamente!";
  }

  return a * b * c + 2;
}

newFunction(1, 2);
