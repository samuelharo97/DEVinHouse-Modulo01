function countdown() {
  setInterval(
    () =>
      console.log(
        `${String(new Date().getHours()).padStart(2, '0')}:${String(new Date().getMinutes()).padStart(2, '0')}:${String(new Date().getSeconds()).padStart(2, '0')}`
      ),
    2000
  )
}

countdown()
