// streams are used to read or write data sequentially
//writeable stream is used to write data sequentially 
//readable stream is used to read data sequentially
//duplex is used to bot read and write data sequentially
//transform is used to modify data when writing or reading it
//readStream option is used when the file size gets too big to be accomodated in a variable(see 10-fs-Module.js)


const { createReadStream } = require('fs')

const stream = createReadStream('./content/bigfile.txt', {highWaterMark: 90000, encoding: 'utf8'})

//files are separated into chunks of 64kb by default in readstream
//the last part of the file is the remainder value
//highWaterMark propert is used to control file size
// encoding property is sets the text encoding

stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (err) => {
    console.log(err)
})