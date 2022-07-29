function sleep(random) {
  return new Promise((resolve, reject) => {
    setTimeout(() => console.log(random), 3000)
  })
}

sleep('Async')
