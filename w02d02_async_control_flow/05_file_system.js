const fs = require('fs');

// sync example
// const data = fs.readFileSync('./index.html', {encoding: 'utf8'});
// console.log(data)

// async example

fs.readFile('./index.html', {encoding: 'utf8'}, (err, data) => {
  if(err) {
    return console.log(`and error occurred: ${err}`)
  }
  console.log(data)
})

console.log('this should run first')