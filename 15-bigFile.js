
const {writeFileSync} = require('fs')

for (let i = 0; i < 100000; i++) {
    writeFileSync('./content/bigfile.txt', `We are creating a big file ${i}\n`, {flag: 'a'})
}