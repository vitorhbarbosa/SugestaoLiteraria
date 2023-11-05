const hamburguerIcon = document.querySelector(".hamburguer-icon");
const navegadorLista = document.querySelector(".navegador-lista");

hamburguerIcon.addEventListener("click", () => {
  if (navegadorLista.style.display === "none" || navegadorLista.style.display === "") {
    navegadorLista.style.display = "block";
  } else {
    navegadorLista.style.display = "none";
  }
});