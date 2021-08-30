const http = require('http');

const server = http.createServer((request, response) => {

  // console.log(request)

  // distill request info
  const url = request.url;
  const method = request.method;

  const requestInfo = `${method} ${url}`

  console.log(requestInfo)

  // handling of different types of request
  if(requestInfo === 'GET /home') {
    response.write("You've made it to the home page")
  } else if(requestInfo === 'GET /about') {
    response.write("You are on the about page")
  } else {
    response.write("This isn't the page you are looking for")
  }

  // end the response
  response.end()
})

server.listen(3456)