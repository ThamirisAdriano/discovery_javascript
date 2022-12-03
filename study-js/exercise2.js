const incomes = document.querySelector(parseInt("entrada"));
const expenses = document.querySelector(parseInt("saida"));

// function sum(array) {
//   let total = 0;

//   for (let value of array) {
//     total += value;
//   }

//   return total;
// }

function calculateBalance() {
  //   const calculateIncomes = incomes;
  //   const calculateExpenses = expenses;

  const total = incomes - expenses;

  const itsOk = total >= 0;

  let balanceText = "negativo";

  if (itsOk) {
    balanceText = "positivo";
  }

  console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}`);
}
