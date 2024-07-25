const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
})

module.exports = mongoose.model("user", userSchema) // The model name will be pluralized, it means that the "user" will become "users". We need mongoose.model, because without it we can't perform CRUD operations. 