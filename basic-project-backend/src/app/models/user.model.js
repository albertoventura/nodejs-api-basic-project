const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    img: { type: String },
});

module.exports = mongoose.model("User", userSchema);