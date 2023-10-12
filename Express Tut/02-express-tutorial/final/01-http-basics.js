const http = require('http')

const server = http.createServer((req, res) => { //req parameter is to find info about the coming client request,
  //the method the client is using and what resource theyre trying to get, or wether the user is trying to add data onto the server. 
  //response is in order to be specific about the data the server is sending
  console.log(req.method, req.url) //gets the user request method and the requested url
  const url = req.url
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' }) //meta data for request status, content type which is a key value pair
    res.write('<h1>home page</h1>')//html content
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(3000)
