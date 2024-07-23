// Node.js Basics: 
// Introduction to Node.js.
// Installing Node.js and npm.
// Working with modules.
// File system operations.
// Understanding HTTP module.

// Node js is not a programming language, technology, software, framework or library. 
// Instead It is a JS runtime environment

// You can't create a server with only JS, you need Node.js for that.
// What Node.js does is it uses the V8 JavaScript engine (the same engine that powers Google Chrome) to execute JavaScript code.
// V8 is written in C++ and compiles JavaScript into machine code.
// With JS servers cannot be created, but Node.js allows you to use JavaScript to write server-side code.
// So, what Node.js does is take the JavaScript code and run it in the V8 engine.
// Node.js provides you the functionality of creating servers with JavaScript.
// Without Node.js, you can't create servers in JavaScript.
// Because to create servers you need a runtime environment like Node.js, which uses C++ for low-level operations and networking but executes JavaScript for the application logic.
// Node.js uses an event-driven, non-blocking I/O model, making it efficient for I/O-bound tasks.

// To check whether the node & npm is installed or not use the following command:
// node -v 
    // OR
// node --version
// --------------
// npm -v 
    // OR
// npm --version

// Think of Node js as android and npm as play store
// npm init -> package.json -> info about the project

const { error } = require('console');
const fs = require('fs');

fs.writeFile("hey.txt", "This is sample text written in vs code through using node js", function(err){
    if(err) console.log(err);
    else console.log("done");
});

fs.appendFile("hey.txt", " This is another sample text just beside the previous one", function(err) {
    if(err) console.log(err);
    else console.log("done");
})

fs.rename("hey.txt", "hello.txt", (err) => {
    if (err) console.log(err);
    console.log("done");
})

fs.copyFile("hello.txt", "./copy/copyHey.txt", function(err) {
    if (err) throw err;
    console.log("done");
})

fs.unlink("hello.txt", function(err) {
    if (err) throw err;
    console.log("removed")
})

fs.rm("./copy", {recursive: true}, function(err) {
    if (err) throw err;
    console.log("folder removed");
}) 

fs.mkdir("./newFolder", (err) => {
    if (err) throw err;
    console.log("new folder created");
})

fs.readdir('./newFolder', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
    } else {
        console.log('Directory contents:', files);
    }
});

fs.readFile('./hello.txt', "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
})