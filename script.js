const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const inclinationGroup = ['skewleft', 'skewright'];
const button = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const result = document.getElementById('carta-gerada');
const span = document.getElementsByTagName('span');

function random(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
}

function checkRepeat() {
  for (let i = 0; i < span.length; i += 1) {
    for (let j = 1; j < span.length; j += 1) {
      if (span[i].classList === span[j].classList) {
        randomClass();
      }
    }
  }
}

function randomClass() {
  for (let i = 0; i < span.length; i += 1) {
    span[i].className = '';
    span[i].classList.add(styleGroup[random(styleGroup)]);
    span[i].classList.add(sizeGroup[random(sizeGroup)]);
    span[i].classList.add(rotationGroup[random(rotationGroup)]);
    span[i].classList.add(inclinationGroup[random(inclinationGroup)]);
  }
}

function clickRandom() {
  for (let i = 0; i < span.length; i += 1) {
    span[i].addEventListener('click', () => {
      randomClass();
      checkRepeat();
    });
  }
}

function createLetter() {
  button.addEventListener('click', () => {
    result.innerText = '';

    if (!input.value || !input.value.trim()) {
      result.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
      const breakInput = input.value.match(/\b(\w+)\b/g);
      for (let i = 0; i < breakInput.length; i += 1) {
        const span = document.createElement('span');
        span.innerText = breakInput[i];
        result.appendChild(span);
        randomClass();
        checkRepeat();
        clickRandom();
      }
    }
  });
}

createLetter();
