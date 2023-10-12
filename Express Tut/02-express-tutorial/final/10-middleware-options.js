const express = require('express')
const app = express()
const morgan = require('morgan')//morgan is a third party middleware, we can install it with npm as adependeb=ncy, the require it in our server
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res

// app.use([logger, authorize])
// app.use(express.static('./public'))
app.use(morgan('tiny'))//our app using a third party middleware

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
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})


/*our middleware options include:
1- our own built middleware like the logger and authorize in lessons 08-midddleware-basics and 09-middleware-use
2- express middlewar like the express.satic in lesson 04-express app......(see express docs)
3- third party middleware which can be installed with npm and then required in our app
*/