let num = document.querySelector('#numberInput')
let button = document.querySelector('.send')
let result = document.querySelector('.result')

function age(num) {
  num = num.value
  if (num <= 15) {
    resultado = 'Jovem!!'
  } else if (num >= 16 && num <= 64) {
    resultado = 'Adulto!!'
  } else {
    resultado = 'IDOSO!!'
  }
  return resultado
}

button.addEventListener('click', function () {
  result.textContent = age(num)
})
