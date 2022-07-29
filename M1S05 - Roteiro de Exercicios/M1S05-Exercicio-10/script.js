function countdown() {
  setInterval(
    () =>
      console.log(
        `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
      ),
    2000
  )
}

countdown()
