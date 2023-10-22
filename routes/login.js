const express =  require("express");
const router = express.Router();

router.get("/login",(req, res, next)=>{
   res.send(`
   <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/send" method="POST">
        <input type ="text" name= "username" id= "username" placeholder="Enter your username" required>
        <button type= "submit">Submit</button>
   </form>
`);
});

router.post("/send",(req, res,next)=>{
    // console.log(req.body.username);
    res.redirect("/");
});
module.exports = router;