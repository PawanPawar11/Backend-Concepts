// NPM understanding.

// npm stands for Node Package Manager. It was originally developed to manage packages for Node.js. Over time, its usage has broadened to support packages for other JavaScript frameworks like React, Angular, and more.
// When Node.js is installed, it comes with a set of core modules (e.g., fs, http). These modules are part of the Node.js runtime and do not need to be installed separately using npm. When you use npm in a development environment like VS Code, you can install additional packages. These packages are libraries or tools not included in the Node.js core and need to be installed via npm to be used in your project.

// installing and uninstalling anything basics & advanced.

// For installing node packages:
// npm install packageName
// npm i packageName

// For uninstalling node packages:
// npm uninstall packageName

// For installing a particular version of node packages:
// npm install packageName@8.9.0 
// The 8.9.0 is the random version number of node package

// understanding node_modules.

// When you download an npm package named "accessibility", it gets added to the package.json file under the "dependencies" section. The installed package, "accessibility", may have its own dependencies. These dependencies of the "accessibility" package (and any other installed packages) are stored inside the node_modules directory.

// dependencies.

// packages and the package's dependencies.

// devdependencies.

// dependencies which will be used while in development of app, but while uploading/deploying the app, we will not use them. 

// scripts - understanding default scripts PATH and custom scripts.

// When Node.js and npm are installed, there are default scripts like start and test that can be defined in the package.json file. By default, if you run npm start, it will look for a start script defined in the package.json file and execute it. If not defined, it defaults to running node server.js.Similarly, npm test will look for a test script in the package.json.
// You can define custom scripts in the scripts section of your package.json file. To run a custom script, you use npm run <script-name>. For example, npm run dev.
// {
//   "scripts": {
//     "start": "node app.js",
//     "test": "mocha",
//     "customScript": "echo \"Hello World\"",
//     "dev": "nodemon app.js"
//   }
// }
// Default Scripts:
// start: Runs node app.js when you execute npm start.
// test: Runs mocha when you execute npm test.
// Custom Scripts:
// customScript: Runs echo "Hello World" when you execute npm run customScript.
// dev: Runs nodemon app.js when you execute npm run dev.
