// is javascript synchronous or asynchronous

// console.log(1)
// console.log(2)
// console.log(3)

const stop = 10000;
console.log('i run first')

// this is blocking
// an expensive operation
for(let i = 0; i < stop; i++) {
  const date = new Date()
  console.log(date)
}

console.log('i run last')