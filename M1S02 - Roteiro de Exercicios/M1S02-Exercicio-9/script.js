let number = 0
const value = document.querySelector('.num')
const addButton = document.querySelector('.add')
const subButton = document.querySelector('.sub')

function decreaseNumber() {
  number--
  return number
}

function increaseNumber() {
  number++
  return number
}



addButton.addEventListener('click', function () {
  increaseNumber()
  value.textContent = number
})
subButton.addEventListener('click', function () {
  decreaseNumber()
  value.textContent = number
})
