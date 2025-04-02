const txtEfeito = document.querySelector(".txtEfeito");
const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Corrigi a string do alfabeto

let intervalo = null;

txtEfeito.onmouseover = () => {
  let contador = 0;
  clearInterval(intervalo);

  // Definindo o texto que será mostrado ao final (texto original)
  const textoOriginal = txtEfeito.dataset.texto;

  intervalo = setInterval(() => {
    txtEfeito.innerHTML = txtEfeito.innerHTML
      .split("")
      .map((letra, i) => {
        if (i < contador) {
          // Mostra a letra correta do texto original
          return textoOriginal[i];
        } else {
          // Substitui com uma letra aleatória do alfabeto
          return alfabeto[Math.floor(Math.random() * 26)];
        }
      })
      .join("");

    // Quando o contador atingir o comprimento do texto original, para o intervalo
    if (contador >= textoOriginal.length) {
      clearInterval(intervalo);
    }

    contador++;
  }, 30);
};
