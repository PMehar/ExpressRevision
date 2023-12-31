const express =  require("express");
const bodyParser =  require("body-parser");

const loginRoute = require("./routes/login");
const messageRoute = require("./routes/message");

const app = express ();

app.use(bodyParser.urlencoded({extended:true}));

app.use(loginRoute);
app.use(messageRoute);

app.listen(8000);