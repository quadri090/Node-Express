const express = require('express') 
const app = express()
const peopleRouter = require('./routes/people')
const loginRouter = require('./routes/auth')


//getting static assets
app.use(express.static('./methods-public')) //static is a built in express middleware for getting static files

//parse form data
app.use(express.urlencoded({ extended: false }))//built in express middleware. "extended: false" flag gives us access to the user form value. so whatever is set in the html input name attribute is our key

//parse json
app.use(express.json())//express middleware for parsing json data.

app.use('/api/people', peopleRouter)
app.use('/login', loginRouter)



app.listen(5000, () => {
    console.log('server is litening on port 5000')
})