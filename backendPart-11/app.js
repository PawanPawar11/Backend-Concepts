const express = require('express');
const app = express();
const userModel = require('./usermodel.js')

app.get('/', function(req, res) {
    res.send("Hi");
})

app.get('/create', async function(req, res) {
    // by default all mongoose code is asynchronous, so to make it synchronous we need to put await & async. We put await on asynchronous code and async on the nearest parent function of it.
    let createdUser = await userModel.create({
        name: "Pawan",
        username: "Pawan123",
        email: "Pawan@gmail.com"
    })

    res.send(createdUser);
})

app.get('/update', async function(req, res) {
    let updatedUser = await userModel.findOneAndUpdate({username:"Pawan123"}, {name: "Paul"}, {new: true});
    res.send(updatedUser);
})

app.get('/read', async function(req, res) {
    let users = await userModel.find();
    res.send(users);
})

// app.get('/read', async function(req, res) {
//     let users = await userModel.findOne({name: "Paul"}); // If you use findOne you'll get the values in array [], but if you use find you'll get the values in object {}
//     res.send(users);
// })

// app.get('/read', async function(req, res) {
//     let users = await userModel.find({name: "Jhon"}); // Even if the user is not present it will still give you an square bracket array. []. 
//     res.send(users);
// })

// app.get('/read', async function(req, res) {
//     let users = await userModel.findOne({name: "Jhon"}); // If used findOne and if the user is not present then it will give you blank white/black screen and not any array. []. findOne gives you the first object if there are multiple entires of the same name.
//     res.send(users);
// })

app.get('/delete', async function(req, res) {
    let deletedUser = await userModel.findOneAndDelete({name: "Paul"});
    res.send(deletedUser);
})

app.listen(3000);