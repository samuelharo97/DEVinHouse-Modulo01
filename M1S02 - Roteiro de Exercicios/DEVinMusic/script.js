sendButton = document.getElementById('send')

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
Descrição: ${description}`
  )
})
