

let iteration = 0;

const interval = setInterval(function(){
  iteration++
  console.log(iteration)
  
  if(iteration === 10) {
    clearInterval(interval) // takes a handle (or the return of our setInterval)
  }
}, 250)

console.log(interval)
clearInterval()