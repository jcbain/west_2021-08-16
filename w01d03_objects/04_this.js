// this 

const describe = function() {
  console.log(this)
  return `I am ${this.color} duck with a wing length of ${this.wingLength}cm`
}

const duckObj = {
  color: 'purple',
  size: 'medium',
  wingLength: 30, 
  canSwim: true,
  describe: describe
}

const newDuckObj = {
  color: 'yellow',
  size: 'huge',
  wingLength: 50, 
  canSwim: true,
  describe: describe
}

const anotherDuckObj = {
  color: 'yellow',
  size: 'huge',
  wingLength: 50, 
  canSwim: true,
  describe: describe
}

console.log(duckObj.describe())
console.log(newDuckObj.describe())

// console.log(describe(anotherDuckObj))