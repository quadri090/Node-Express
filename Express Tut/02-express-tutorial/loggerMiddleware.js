const logger = (req, res, next) => { //middleware accessing the three objects
    const method = req.method
    const url = req.url
    const time = new Date().toUTCString()
    console.log(method, url, time)
    next()//this passes the middleware on to the next middleware else the response will not be sent
  }

  module.exports = logger