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
