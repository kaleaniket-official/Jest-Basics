
const express = require("express");
const app = express();

app.use(express.json())
app.post("/users", (req,res) => {

    const {pass,user} = req.body;
    if(!pass || !user){
        res.sendStatus(400);
        return;
    }
    res.send({userId: 0});
});

module.exports  = app;