
// looping over objects
const duckObj = {
  color: 'purple',
  size: 'medium',
  wingLength: 30, 
  canSwim: true,
}

const newObj = {
  key1: 1,
  key2: 2,
  key: 'some values'
}

for(const key in newObj) { // key here can be called anything
  // console.log(key)
  console.log('the current key is:', key)
  // console.log(newObj.key) // wont work
  console.log(newObj[key])
}

// for(let i = 0; i < 10; i++){
//   console.log(i)
// }

// const anArray = ['james', 'jennifer', 'pippa', 'prairie']

// for(const value of anArray){
//   console.log(value)
// }