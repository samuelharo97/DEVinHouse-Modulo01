/* Adicione um input do tipo data
No evento de onchange do input chamar a função para verificar a estação
Criar função para verificar qual a estação atual do ano no hemisfério sul, ela deve adicionar o texto e a imagem que representa a estação da data.
Considere:

A página deve conter um texto e uma imagem, ambos representando a estação. */
let date = document.querySelector('#date')
let main = document.querySelector('#main')
let text = document.querySelector('#text')
let day
let month
let season
let lastSeason

/* yyyy-mm-dd */

function getDay(date) {
  let day = date.value.slice(8)
  return day
}

function getMonth(date) {
  let month = date.value.slice(5, 7)
  return month
}

/* 22/12 a 21/03  Verão; */
/* 22/03 a 21/06  Outono; */
/* 22/06 a 21/09  Inverno; */
/* 22/09 a 21/12  Primavera. */

function getSeason(day, month) {
  if (month >= 1 && month <= 3) {
    if (day >= 1 && day <= 21) {
      season = 'summer'
    } else if (month == 3 && day > 21) {
      season = 'autumn'
    }
  } else if (month >= 4 && month <= 6) {
    if (day >= 1 && day <= 21) {
      season = 'autumn'
    } else if (month == 6 && day > 21) {
      season = 'winter'
    }
  } else if (month >= 7 && month <= 9) {
    if (day >= 1 && day <= 21) {
      season = 'winter'
    } else if (month == 9 && day > 21) {
      season = 'spring'
    }
  } else if (month >= 10 && month <= 12) {
    if (day >= 1 && day <= 21) {
      season = 'spring'
    } else if (month == 12 && day > 21) {
      season = 'summer'
    }
  }
  return season
}

function changeBackground(season) {
  main.classList.remove(lastSeason)
  main.classList.add(season)
  text.textContent = season
  lastSeason = season
}

date.addEventListener('change', function () {
  day = Number(getDay(date))
  month = Number(getMonth(date))
  season = getSeason(day, month)
  changeBackground(season)
})
