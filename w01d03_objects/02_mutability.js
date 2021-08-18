const duck = 'mallard';

const printDifferentDuck = function(someDuck) {
  someDuck = 'green duck'
  console.log(`duck during function call: ${someDuck}`)
}


console.log('duck before function call: ', duck)
printDifferentDuck(duck)
console.log('duck after function call: ', duck) //mallard? green duck?

// objects

const duckObj = {
  color: 'purple',
  size: 'medium',
  wingLength: 30, 
  canSwim: true,
}



const printDifferentDuckColor = function(someObj) {
  someObj.color = 'yellow';
  console.log(`Duck color during function call: ${someObj.color}`)
}

console.log('duck before function call', duckObj)
printDifferentDuckColor(duckObj)
console.log('duck after function call', duckObj) // { color: 'yello' ...}
