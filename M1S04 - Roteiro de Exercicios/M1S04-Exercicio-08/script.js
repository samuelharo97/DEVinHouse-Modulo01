let num = document.querySelector('#numberInput')
let button = document.querySelector('.send')
let result = document.querySelector('.result')

function parImpar(num) {
  let resultado = num.value % 2 == 0 ? 'Par' : 'Impar'
  return resultado
}

button.addEventListener('click', function () {
  result.textContent = parImpar(num)
})
