// form handling and working with the forms
// handle backend process of forms and making sure the data coming from any frontend lib, fw, template engines, we still handle it at the backend. 
// The cookie act as an token which lets the website helps to identify from whom the request is coming from. For example give me a photo + abcd. Here assume abcd is cookie, and the cookie helps the website identify from whom the request is coming from. Ones the websites backend identify the from which user the request is coming from then it gives response back to that user. Hence whenever you clear you cookies from browser, you'll notice that you get logged out. It happened because you deleted cookie and along with it there was token which helped to identify from whom the request is coming from. Now you need to log in again and a new token will be formed as cookie to identify whom you're.
// session - It is an rope which forms a connection between the user and backend.
// blob - unreadable stream. It is not the exact correct definition, but it gives you an idea of what blob is.

const express = require ('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.send("Hi")
})