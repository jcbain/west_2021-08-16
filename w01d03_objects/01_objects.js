// objects
// duckObj
// color
// size
// wingLength
// canSwim
// honk => action
const duckObj = {
  color: 'purple',
  size: 'medium',
  wingLength: 30, 
  canSwim: true,
  // sizeKey: 'some strange value'
}

// square bracket notation
const colorKey = 'color'
// console.log('square bracket notation =>', duckObj['color'])
// console.log('square bracket notation colorKey =>', duckObj[colorKey])

// dot notation
const sizeKey = 'size'
console.log('dot notation => ',duckObj.size)
console.log('dot notation => ', duckObj.sizeKey)
console.log('square bracket again =>', duckObj[sizeKey])

console.log(`${duckObj.size}`)
