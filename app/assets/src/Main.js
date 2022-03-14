import Core from "./Core.js";

const client = ZAFClient.init();
let settings;

client.metadata().then((metadata) => {
  settings = metadata.settings;
});

console.log("Man.js !")
const pesquisarCep = async () => {
  const url = `viacep.com.br/ws/69038561/json/`;
  const dados = await fetch(url);
  const endereco = await dados.json();
  console.log(endereco);
}

const Main = async () => {
  const App = document.getElementById("app");
  let appBody = `<button onclick="pesquisarCep()">Atualizar</button>`;
  console.log("Funciona !")
  // Write App
  App.innerHTML = appBody;
};

export default Main;
