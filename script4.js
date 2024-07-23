// Express.js Framework:
// Introduction to Express.js

// Express.js is framework, a framework provides flow, while a library provides set of tools.
// It manages everything from receiving the request and giving the response.


// Setting up a basic Express application.

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello Baby')
// })

// app.listen(3000)

// whenever you make changes in the code, the server doesn't automatically respond to it. You need to stop your server and then restart it. To avoid it you can install the nodemon using the below command in terminal:
// npm i nodemon -g 
// To run the nodemon type
// npx nodemon script4.js


// Routing.

// localhost:3000/ The slash after the 3000 is routing. The slash represent the same state as 3000. It means that if you write it or not, it will land you on the same page. For ex: youtube.com or youtube.com/ will give you the same result. The / represent default routing. 

// Middleware.

// If you want something to perform before the request from the user gets to the routes, at that time you can place the middleware between the user request and routes.

const express = require('express')
const app = express();

app.use(function(req, res, next) {
  console.log("Middleware got run");
  next();
});

app.use(function(req, res, next) {
  console.log("Middleware got run again");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello Baby')
});

app.get('/about', function (req, res) {
  res.send('Hello Baby again')
});

app.get('/profile', function(req, res, next) {
  return next(new Error("Something went wrong and we absolutely don't have any idea about how to fix it")) // goes on console
})

app.listen(3000)


// Request and response handling.

// frontend-backend-frontend. In browser you type the route in the search bar, it is considered as frontend. After that the request goes to backend, where we have written the routes information, and this part is called backend. After that the backend sends the response back to the browser and display whatever was written inside that route on browser screen, and we refer it as frontend. 

// Error handling.

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!') // goes on frontend, that is browser screen
})

// get the above code snippet from: https://expressjs.com/en/guide/error-handling.html


