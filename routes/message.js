const express =  require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res, next)=>{
    fs.readFile("chatMsg.txt", (error, data)=>{
        if(error){
            data = "No chats exists";
        }
        res.send(`
            ${data}<form onsubmit="document.getElementById('username').value = localStorage.getItem('username')" action="/" method="POST">
                <input type="text" name="message" id="message" placeholder="Enter Message" required>
                <input type ="hidden" name= "username" id= "username">
                <button type="submit">Send</button>
            </form>
        `);
    });
    
});

router.post("/",(req, res,next)=>{
    fs.writeFile("chatMsg.txt", `${req.body.username +" "}:${" "+req.body.message+" "}`,{flag:'a'},(error)=>{
        if(error){
            console.log(error);
        }
        else{
            res.redirect("/");
        }
    });
    console.log(`${req.body.username}:${req.body.message}`);
});
module.exports = router;