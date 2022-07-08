year = prompt('Digite um ano: ')

thisYear = new Date().getFullYear()

difference = Number(thisYear) - Number(year)


if (difference < 0) {
  difference = difference * -1
}


alert(`A diferença entre o ano atual e o ano digitado é de ${difference}`)
