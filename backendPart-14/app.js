const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', function(req, res) {
   let token = jwt.sign({email: "pawan@gmail.com"}, "secret");
   // Based on the string "secret", it will hash the email. The hashing keys are stored very securely, because with them the decryption of data is also possible. 
   res.cookie("token", token);
   res.send("done");
   // The hashed value of email now will be the session token used in cookies to identify the user. 
   // for ex: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhd2FuQGdtYWlsLmNvbSIsImlhdCI6MTcyMjAwNDg1NH0.wMhWzbZIV258_q3Tb_ougLvW1twiJDYIEJG0bqSO94o
   // The above string will be used as session id to identify the user   
   console.log(token);
})

app.get('/read', function(req, res) {
    // console.log(req.cookies.token);
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
})

app.listen(3000);