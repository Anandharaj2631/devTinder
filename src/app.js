const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();
const port = 8888;

app.use(express.json());

app.post("/signup", async (req, res) =>{
    const user = new User(req.body);
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



