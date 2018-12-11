module.exports = (array, amount) => {
  let result = []
  amount > array.length && (amount = array.length)
  for (let i = 0; i < amount; i++) {
    let drawOne = (array) => {
      if (array.length > 0) {
        let rand = Math.floor(Math.random() * array.length - 1)
        return array.splice(rand, 1).join('')
      }
    }
    result.push(drawOne(array))
  }
  return result
}
