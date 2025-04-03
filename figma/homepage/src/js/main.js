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
const menuLinks = navBar.querySelectorAll("a");

function menuBurguer() {
  const isOpen = !navBar.classList.contains("hidden");

  if (isOpen) {
    fecharMenu();
  } else {
    abrirMenu();
  }
}

function abrirMenu() {
  overlay.classList.remove("invisible", "opacity-0"); // Garante que o overlay apareça
  overlay.classList.add("opacity-100"); // Se precisar de um efeito de escurecimento
  navBar.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");

  icon.classList.replace("bi-list", "bi-x");
}

function fecharMenu() {
  overlay.classList.add("invisible", "opacity-0");
  overlay.classList.remove("opacity-100");
  navBar.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");

  icon.classList.replace("bi-x", "bi-list");
}

btnBurguer.addEventListener("click", menuBurguer);
overlay.addEventListener("click", fecharMenu);
menuLinks.forEach((link) => link.addEventListener("click", fecharMenu));
