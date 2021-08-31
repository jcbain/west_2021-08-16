const express = require('express');
const morgan = require('morgan');

const port = 8080;

// in-memory database
const skateboards = {
  abcd: {
    color: 'violet',
    len: 50,
    broken: false,
  },
  efgh : {
    color: 'black',
    len: 100, 
    broken: true
  }
}

const generateId = () => {
  return Math.floor(Math.random() * 2000) +1
}

const app = express();

app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

// Browse GET /skateboards
app.get('/skateboards', (req, res) => {
  const templateVars = {skateboards: skateboards}
  // const templateVars = { skateboards }
  res.render('skateboards', templateVars)
})

// Read GET /skateboards/:id
app.get('/skateboards/:id', (req, res) => {
  const id = req.params.id
  const skateboard = skateboards[id]
  
  console.log('skateboard', skateboard)
  if(!skateboard) {
    res.redirect('/skateboards')
    return
  }

  const templateVars = { skateboard, skateboardId: id };
  // const templateVars = { skateboard: skateboard }
  res.render('skateboard', templateVars)
})

// Edit POST /skateboards/:id
app.post('/skateboards/:id', (req, res) => {
  const id = req.params.id
  // console.log('req.body', req.body)
  const color = req.body.color;
  skateboards[id].color = color
  res.redirect('/skateboards')
})

// Add POST /skateboards
app.post('/skateboards', (req, res) => {
  const newSkateboard = req.body
  const id = generateId();
  
  console.log('id', id)

  skateboards[id] = newSkateboard;
  res.redirect('/skateboards')
})

// Delete POST /skateboards/:id/delete
app.post('/skateboards/:id/delete', (req, res) => {
  const id = req.params.id;

  delete skateboards[id]

  res.redirect('/skateboards')

})


app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
});