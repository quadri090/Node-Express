const express = require('express')
const app = express()

//  req => middleware => res
//middleware are functions that execute during the request to the server. Middleware functions have access to the req and res object, and also next object

const logger = (req, res, next) => { //middleware accessing the three objects
  const method = req.method
  const url = req.url
  const time = new Date().toUTCString()
  console.log(method, url, time)
  next()//this passes the middleware on to the next middleware else the response will not be sent
}

app.get('/', logger, (req, res) => {//the middleware sitting in between the request and response 
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

//the issue with this basic approach to middleware is that we have to reference the middleware(logger) in every route in our app which can be exhausting if we have a dozen routes... the solution to this is app.use which will be explained in the next lesson