const txtEfeitos = document.querySelectorAll(".txtEfeito");
const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

txtEfeitos.forEach((txtEfeito) => {
  let intervalo = null;

  txtEfeito.addEventListener("mouseover", () => {
    let contador = 0;
    clearInterval(intervalo);

    const textoOriginal = txtEfeito.dataset.texto; // Apenas o texto, sem o ícone
    const iconeHTML = txtEfeito.querySelector("i")?.outerHTML || ""; // Captura o ícone

    intervalo = setInterval(() => {
      txtEfeito.innerHTML =
        iconeHTML +
        textoOriginal
          .split("")
          .map((letra, i) => {
            if (i < contador) {
              return textoOriginal[i]; // Mostra a letra correta
            } else {
              return alfabeto[Math.floor(Math.random() * alfabeto.length)]; // Letra aleatória
            }
          })
          .join("");

      if (contador >= textoOriginal.length) {
        clearInterval(intervalo);
      }

      contador++;
    }, 40);
  });
});

const btnBurguer = document.getElementById("btnBurguer");
const icon = btnBurguer.querySelector("i");
const overlay = document.getElementById("overlay");
const navBar = document.getElementById("nav");

function menuBurguer() {
  overlay.classList.toggle("invisible");
  overlay.classList.toggle("opacity-0");
  navBar.classList.toggle("hidden");

  if (icon.classList.contains("bi-list")) {
    icon.classList.remove("bi-list");
    icon.classList.add("bi-x");
  } else {
    icon.classList.remove("bi-x");
    icon.classList.add("bi-list");
  }
}

btnBurguer.addEventListener("click", menuBurguer);

overlay.addEventListener("click", () => {
  overlay.classList.add("invisible");
  overlay.classList.remove("opacity-50");
  navBar.classList.add("hidden");

  icon.classList.remove("bi-x");
  icon.classList.add("bi-list");
});
