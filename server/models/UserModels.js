const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    email: {type: String, required: true},
    //age: {type: String, required: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model("user", UserSchema);