const mongoose = require("mongoose")
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    emailId: { type: String }, // Must match "emailId" exact casing
    password: { type: String },
});

module.exports = mongoose.model("User", userSchema);