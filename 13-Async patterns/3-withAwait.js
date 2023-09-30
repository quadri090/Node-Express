const { readFile, writeFile } = require('fs').promises

const start3 = async () => {
    try {
        const first = await readFile('../content/first.txt', 'utf8')
        const second = await readFile('../content/second.txt', 'utf8')
        await writeFile(
            '../content/result-NODE-PROMISES.txt', `THIS IS CREATED WITH NODE PROMISES : ${first} \n${second}`
        )
        console.log(`${first}\n${second}`)
    } catch (error) { 
        console.log(error)
    }
}
start3()

//this is cleaner and more concise than 1-withPromise & 2-withUtil-Promisify.
//it uses the built in node promises and javascript await
//the try and catch checks if theres an error in the try block. if there is none, it outputs the result and the catch does not run.
//however, if there is an error in the try block, the catch function catches it and executes the code in the block 