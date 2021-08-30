const express = require('express');
const morgan = require('morgan')

const app = express()

const dogs = {
  abcd: {
    name: 'Pippa',
    age: 9
  },
  efgh: {
    name: 'Prairie',
    age: 8
  }
}

app.use(morgan('dev'))
// app.use((req, res, next) => {
//   const method = req.method
//   const url = req.url
//   const requestInfo = `${method} ${url}`

//   console.log(requestInfo)
//   next()
// })

app.get('/home', (req, res) => {
  res.write('welcome to the home page');
  res.send();
})

app.get('/about', (req, res) => {
  res.write('welcome to the about page');
  res.send();
})

app.get('/dogs', (req, res) => {
  // res.send() // sends a string
  // res.sendFile() // sends a file
  // res.render() // render some html and sends that to the client
  res.json(dogs);
})

// GET /dogs/abcd
// GET /dogs/efgh
// app.get('/dogs/abcd', (req, res) => {
//   const dog = dogs.abcd;
//   res.json(dog)
// })

// app.get('/dogs/efgh', (req, res) => {
//   const dog = dogs.efgh;
//   res.json(dog)
// })

app.get('/dogs/:dog_id', (req, res) => {

  // res.send('almost there')
  const dogId = req.params.dog_id;
  const dog = dogs[dogId]
  // if(!dog) // send an error code or render error page
  res.json(dog)
})

app.listen(6789)