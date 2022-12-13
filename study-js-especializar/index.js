let aceitar = false;

console.log("teste promise");
const promessa = new Promise((itsok, itsnotok) => {
  if (aceitar) {
    return itsok("Ok");
  }
  return itsnotok("Not ok");
});

promessa
  .then((result) => console.log(result))
  .catch((erro) => console.log(erro))
  .finally(() => console.log("Finalizado!"));

console.log("Aguardando...");

fetch("https://api.github.com/users/thamirisadriano")
  .then((response) => response.json())
  .then((data) => fetch(data.repos_url))
  .then((res) => res.json())
  .then((d) => console.log(d))
  .catch((erro) => console.log(erro));
