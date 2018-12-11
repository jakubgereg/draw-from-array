const d = require('.')

it('should draw one element from array', () => {
  let colors = ['red', 'blue', 'green']
  d(colors, 1)
  expect(colors).toHaveLength(2)
})

it('should not draw more elements than it is in array', () => {
  let colors = ['red', 'blue', 'green']
  expect(d(colors, 100)).toHaveLength(3)
})

it('should draw different element each time', () => {
  let colors = ['red', 'blue', 'green']
  expect(d(colors, 1)).not.toEqual(d(colors, 1))
})

it('should draw all element from array even if we want to draw more', () => {
  let colors = ['red', 'blue', 'green']
  d(colors, 10)
  expect(colors).toHaveLength(0)
})
