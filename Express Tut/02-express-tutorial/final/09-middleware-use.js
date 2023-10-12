const express = require('express')
const app = express()
const logger = require('./loggerMiddleware')//middleware imported from a js module
const authorize = require('./authorize')//middleware imported from a js module


//  req => middleware => res
app.use([logger, authorize])//two midllewares passed into app.use which then invokes the midleware for any route.
//order matters in express. app.use must be invoked above all app.get else, any app.get that comes before app.use will not have access to the middleware

// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)//console logs the user object created in the authorize middleware. this can be accesed inany of the routes
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

//as it is all routes have acces to the middleware.
//but sometimes we can specify the paths that we want to be able to access the logger like ----- app.use('/api', logger) ----- as is, only routes that start with the ./api path will be able to access the middleware