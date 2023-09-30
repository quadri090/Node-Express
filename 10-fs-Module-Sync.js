const { readFileSync, writeFileSync } = require('fs') //built in node file system in synchronous mode

console.log('start')


const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second);

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
)

console.log('This Line logs before first and second variables');

//readFileSync reads an existing file from a specified directory
//writeFilesync creates a new file if node does not find the specified file name in the specified directory. But if the file exists, node ovverides all the values in the file with the values passed into the writeFileSync as arguments
//the {flag: 'a'} argument prevents node writefileSync from overriding the existing values in a file if the file already exists with a value, so it simply allows wrieFileSync to add the newly specified value to the existing value in the target file