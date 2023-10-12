const http = require('http')
const fs = require('fs')

http
.createServer((req, res) => {
    const stringStorage = fs.readFileSync('./content/bigfile.txt', 'utf8')
    res.end(stringStorage)
})
.listen(5000)

http
.createServer((req, res) => {
    const fileStream = fs.createReadStream('./content/bigfile.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res)//filestream.pipe() method pushes from the read stream into write stream.Esssentially, if we can read data in chunks we can also write data in chunks. this means that the data sent to the server is sent in chunks to reduce load time.
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
})
.listen(3000)