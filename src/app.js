const express = require("express");
const connectDB = require("./config/database");
const app = express();
const port = 8888;

connectDB().then(() =>{
    console.log("Database connection is established");
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}).catch(err =>{
    console.error("Database cannot be connected!!!");
});



