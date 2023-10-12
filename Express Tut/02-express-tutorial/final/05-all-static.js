const express = require('express')
// const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))//all files have been moved to the public directory, therefore we dont need the sendfile method to render the index.html file on our server as it is now included in the static folder.
//.static means that the server doesnt need to change the files in the directory as theyre static files. so it simply gets the resources from the directory and makes them available on request from our server

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   adding to static assets
//   SSR
// })

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
