const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/', function(req, res) {
    res.send("Hi");
})

app.get('/create', async function(req, res) {
    let user = await userModel.create({
        username: "Pawan",
        email: "Pawan@gmail.com",
        age: 25
    });

    res.send(user);
})

app.get('/post/create', async function(req, res) {
    let post = await postModel.create({
        postData: "WhatsApp",
        user : "66a4895e1eb5ee19ad31fe06"
    })

    let user = await userModel.findOne({_id: "66a4895e1eb5ee19ad31fe06"});
    user.posts.push(post._id);
    await user.save();
    res.send({post, user});
})

app.listen(3000);