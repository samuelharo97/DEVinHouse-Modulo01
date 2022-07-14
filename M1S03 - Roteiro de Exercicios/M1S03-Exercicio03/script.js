const display = document.querySelector('.display')
const num1 = Number(prompt('Digite o primeiro número:'))
display.innerHTML += String(num1)
const operation = prompt('Digite a operação desejada (+, -, * ou / ) :')
display.innerHTML += String(operation)
const num2 = Number(prompt('Digite o segundo número:'))
display.innerHTML += String(`${num2} = `)
let result

switch (operation) {
  case '+':
    result = num1 + num2
    break
  case '-':
    result = num1 - num2
    break

  case '*':
    result = num1 * num2
    break

  case '/':
    result = num1 / num2
    break

  default:
    console.log('Você não digitou uma operação válida!')
}

display.innerHTML += String(result)

console.log(result)
