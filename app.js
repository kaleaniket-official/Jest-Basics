
const express = require("express");

const database = (database) => {
    const app = express();
    app.use(express.json())
    app.post("/users", (req,res) => {
    
        const {pass,user} = req.body;
        if(!pass || !user){
            res.sendStatus(400);
            return;
        }

        const userId = database.creatUser(user,pass);

        res.send({userId});
    });
    return app;
}

module.exports  = database;