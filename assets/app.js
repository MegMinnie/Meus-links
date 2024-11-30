const botoesOpen = document.querySelectorAll(".bi-moon");
const corpo = document.querySelector("body");
const texto = document.querySelector("#container");
const a = document.querySelectorAll(".a");
const rodape = document.querySelector("footer");

botoesOpen.forEach((botao) => {
  botao.addEventListener("click", () => {
    if (botao.classList.contains("bi-moon")) {
      botao.classList.replace("bi-moon", "bi-sun");
      corpo.style.backgroundColor = "black";
      texto.style.color = "white";
      rodape.style.color = "white";
      a.forEach((elemento) => {
        elemento.style.color = "white";
      });
    } else {
      botao.classList.replace("bi-sun", "bi-moon");
      corpo.style.backgroundColor = "white";
      texto.style.color = "blueviolet";
      rodape.style.color = "blueviolet";
      a.forEach((elemento) => {
        elemento.style.color = "blueviolet";
      });
    }
  });
});
