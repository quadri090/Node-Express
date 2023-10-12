const express = require('express')
const path = require('path')//node path module

const app = express()

// setup static and middleware
app.use(express.static('./public'))//.static means that the server doesnt need to change the files in the directory as theyre static files. so it gets the resources from the directory

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html')) //sendFille methods sends a file from the specified path using the node built-in path module
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})