# Web Servers 101

## Objectives
- [ ] TinyApp Demo
- [ ] Web Servers
- [ ] Express
- [ ] Middleware

## Web Server
- just another computer
- servers up information/data/resources

(has data) web server <---> client (wants data) 

## TCP
- persistent connect between client and server
- either party can communicate with one another at any time

## HTTP
- built on top of TCP
- request - response protocol
- client (requests) a resource
- web server (responds) to the request

## Address
- IP address - the home address of the web server
- Port number (65,535 tcp ports)

## Request
- every request needs a **verb** and a **path**
- verbs - what we want to do
  1. GET => retrieve information
  2. POST => send some information to the web server
- path - what do we want to do it to
  - string
  - `/users`, `/maps`

  - http://localhost:8000/users

- GET /users
- POST /maps