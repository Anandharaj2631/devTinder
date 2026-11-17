const mongoose = require("mongoose");

const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://murugesananandh26_db_user:sD16k25lfbkBdn4U@nodejssample.6oiknp9.mongodb.net/");
};

module.exports = connectDB;

