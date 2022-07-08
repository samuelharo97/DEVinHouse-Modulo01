sendButton = document.getElementById('send')
firstName = String(document.getElementById('inputName').value)

lastName = String(document.getElementById('inputSurname').value)

emailAdress = String(document.getElementById('inputEmail').value)

description = String(document.getElementById('inputTextarea').value)

function getInfo() {
  firstName = String(document.getElementById('inputName').value)

  lastName = String(document.getElementById('inputSurname').value)

  emailAdress = String(document.getElementById('inputEmail').value)

  description = String(document.getElementById('inputTextarea').value)

  alert('Sent!')
  return { firstName, lastName, emailAdress, description }
}

sendButton.addEventListener('click', function () {
  getInfo()
  console.log(
    `Formulário de contato => Nome: ${firstName} ${lastName}
E-mail: ${emailAdress}
Descriçao: ${description}`
  )
})
