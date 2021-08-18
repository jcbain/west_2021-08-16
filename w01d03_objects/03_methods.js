// methods (functions that belong to objects)
const quack = function() {
  // console.log('quaaaaaack')
  return 'quaaaaack'
}

// demonstrate a function with parameter
const talkFunction = function(word) {
  if (!word) {
    return "quackkkk"
  }
  return `the duck says ${word}`
}

const duckObj = {
  color: 'purple',
  size: 'medium',
  wingLength: 30, 
  canSwim: true,
  honk: function() {
    console.log('hooooonk')
  },
  quack: quack,
  talk: talkFunction
}

duckObj.honk()
console.log(duckObj.quack())
console.log(duckObj.talk())
