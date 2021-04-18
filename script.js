const tagP = document.querySelector('#carta-gerada');
const botao = document.querySelector('#criar-carta');
botao.addEventListener('click', () => {
  const frase = document.querySelector('#carta-texto').value;
  const palavras = frase.split(' ');
  tagP.innerHTML = '';
  for (let index = 0; index < palavras.length; index += 1) {
    if (palavras[0] === '') {
      tagP.innerHTML = 'Por favor, digite o conteúdo da carta.';
    } else {
      const makeSpan = document.createElement('span');
      tagP.appendChild(makeSpan);
      makeSpan.innerHTML = palavras[index];
    }
  }
  // console.log(frase);
  // console.log(palavras);
});
