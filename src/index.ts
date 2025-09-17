import {Client} from "pg";
import express from "express";

const app = express();
app.use(express.json());

 const pgClient = new Client("postgresql:key");


await pgClient.connect();
  



app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    try {

        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`

        const response = await pgClient.query(insertQuery, [username, email, password]);

        res.json({
            message: "You have signed up"
        })
    } catch(e) {
        console.log(e);
        res.json({
            message: "Error while signing up"
        })
    }

})

app.listen(3000)
