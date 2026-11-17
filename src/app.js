const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();
const port = 8888;


app.post("/signup", async (req, res) =>{
    //Creating a new instance of the model
    const user = new User({
        firstName: "Sachin1",
        lastName: "Tendulkar1",
        emailId:"sachin1@gamil.com",
        password:"sachin1@1234"
    });
    try{
        await user.save();
        res.send("User Added Successfully");
    }catch (err){
        res.status(400).send("Error saving the user", + err.message);
    }
   
})
connectDB()
.then(() =>{
    console.log("Database connection is established");
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}).catch(err =>{
    console.error("Database cannot be connected!!!");
});



