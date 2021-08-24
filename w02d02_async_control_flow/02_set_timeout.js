// setTimeout

console.log('(1) before setTimeouts')

const returnValue = setTimeout(() => {
  console.log('(2) hello there')
}, 1000)

setTimeout(() => {
  console.log('(3) am i second?')
}, 0)

console.log('(4) after setTimeouts')

// expensive operation that
// all of our async code 
// will run after
const stop = 20000;
for(let i = 0; i < stop; i++){
  const date = new Date();
  console.log(date)
}