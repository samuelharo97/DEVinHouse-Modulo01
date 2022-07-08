let button = document.querySelector('.alt')
let content = String(document.querySelector('.content').value)
let title = document.querySelector('.title')

function getInput() {
  content = String(document.querySelector('.content').value)
  return content
}

button.addEventListener('click', function () {
  content
  getInput()
  title.textContent = content
})
