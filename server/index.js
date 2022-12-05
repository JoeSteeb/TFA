const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();

app.use(cors());
app.use(express.json());

const Hash = (text)=>{
    const myBitArray = sjcl.hash.sha256.hash(text)
    return sjcl.codec.hex.fromBits(myBitArray)
}


app.post("/register", async(req, res) => {
    try{
        const userInput = req.body
        console.log("username: ", userInput.username);
        console.log("password: ", userInput.password);
        console.log("email: ", userInput.email);
        const newUser = await pool.query("INSERT INTO USERS VALUES ("
        +"\'"+userInput.username+"\',"
        +"\'"+userInput.email+"\',"
        +"\'"+userInput.password+"\');");
    }catch(err){
        console.error(err.message);
    }
})

app.get("/getuser/:username", async(req,res) => {
    try{
        const {username} = req.params
        console.log("SELECT * FROM USERS WHERE (user_name =\'" + username + "\');");
        const user = await pool.query("SELECT * FROM USERS WHERE (user_name =\'" + username + "\');");
        console.log(user.rows[0]);
        res.json(JSON.stringify(user.rows[0]));
    }catch(err){

    }
})

app.listen(5000, ()=> {
    console.log("server up on port 5k");
});