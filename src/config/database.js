const mongoose = require("mongoose");

const connectDB = async () =>{
    await mongoose.connect(
        "mongodb+srv://anandharaj2690_db_user:SlhOmUZBbM9Ajsv0@devnodejs.w0jyky9.mongodb.net/devTinder"
    );
};

module.exports = connectDB;

