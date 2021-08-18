// looping over objects
const duckObj = {
  color: 'purple',
  size: 'medium',
  wingLength: 30, 
  canSwim: true,
  anotherObj: {
    hasFeet: false,
    anotherAnotherObj: {}
  }
}

const duckArray = ['purple', 'mallard']
const newDuckArray = [...duckArray]
newDuckArray[0] = 'green'
console.log(newDuckArray)
console.log(duckArray)

const newDuckObj = {...duckObj}
const anotherNewDuck = {...newDuckObj}
newDuckObj.someObjKey = {
  hair: 'brown'
}

// anotherNewDuck.someObjKey.hair = 'torquoise'
console.log(newDuckObj)
console.log(anotherNewDuck)


// newDuckObj.anotherObj.hasFeet = true
// newDuckObj.color = 'green';
// console.log('newDuckObj: ', newDuckObj)
// console.log('duckObj: ', duckObj)

// const color = 'purple'
// let newColor = color;
// newColor = 'green'
// console.log('newColor', newColor)
// console.log('color', color)