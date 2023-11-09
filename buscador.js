import { buscarLivros } from "./utils/pesquisaLivros.js";
import { geraTemplate } from "./utils/template.js";

const caixaDePesquisa = document.querySelector("#caixaDePesquisa");
const caixaDeLivros = document.querySelector("#caixaDeLivros");

caixaDePesquisa.addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
        const listaLivros = await buscarLivros(caixaDePesquisa.value); // isso retorna uma lista de objetos, usem o console do navegador para ver como ela é. (pode demorar um pouquinho para aparecer, pois a API demora um pouco para responder)
        console.log(listaLivros);
        // terminem o código aqui.
        // OBS1: usem o arquivo "template.js", vai ser bem útil.
        // OBS2: Eu deixei algumas coisas para serem padronizadas, como a data e a foto da capa, pois a data pode vir em alguns formatos diferentes e a foto da capa pode não existir. Então tratem esse erro.
    }
});
