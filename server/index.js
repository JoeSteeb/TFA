const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", async(req, res) => {
    try{
        console.log(req.body);
    }catch(err){
        console.error(err.message);
    }
})

app.listen(5000, ()=> {
    console.log("server up on port 5k");
});