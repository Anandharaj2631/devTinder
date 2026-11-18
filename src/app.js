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
   
});

app.get("/user", async (req ,res) =>{
    const userEmail = req.body.emailId;

    try{
        const user = await User.findOne({emailId : userEmail});
        if(!user){
            res.status(404).send("Users is not found")
        }else{
            res.send(user);
        }
        // const users = await User.find({emailId : userEmail});

        // if(users.length === 0){
        //     res.status(404).send("Users is not found")
        // }else{
        //     res.send(users);
        // }
    }catch (err){
        res.status(400).send("Something went wrong");
    }
});

app.get("/feed", async (req, res) =>{
    try{
        const users = await User.find({});
        res.send(users)
    }catch{
        res.status(400).send("something went wrong");
    }
});

connectDB()
.then(() =>{
    console.log("Database connection is established");
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}).catch(err =>{
    console.error("Database cannot be connected!!!");
});



