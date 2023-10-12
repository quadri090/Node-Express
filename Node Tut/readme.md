globals are accessible from any part of our code base
    examples include __dirname, __filename, process, require, module 

"node + file name" executes the file content and ouputs in the in the terminal
"clear" clears the terminal
"arrow key up" button goes back to precious executed code in terminal
"ctrl + c" cancels current execution in terminal
Every file in node is a module 
node files can be exported with module.export keyword
the modules can then be called in other parts of the codebase with the global keyword "require" followed by the file path in braces and colons
"module.exports.variableName" is an altenative or fast way to export modules in nodejs, it works just like export default in javaScript
a function can directly be invoked with the without assigning it to a variable or console logging it