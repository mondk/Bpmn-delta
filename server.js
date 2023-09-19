const dotenv = require('dotenv')
const express = require('express');
const mysql = require("mysql2");
const cors = require('cors')
// const bodyParser = require('body-parser');
dotenv.config()
const app = express();


const corsOptions = {
    origin: 'http://localhost:8080', // Replace with your frontend's domain and port
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  };
  
  app.use(cors(corsOptions));
app.use(express.json());


// MySQL database configuration
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "BBJ23xp",
    database: "test"
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Connected to MySQL database");
});

const names = [];

app.post('/api/save', (req, res) => {
    const {name} = req.body;
    if (!name) {
        console.log("Error")
        return res.status(400).send("Name cannot be empty");
    }
    const sql = "INSERT INTO names (full_name) VALUES (?)";
    db.query(sql, [name], (err, result) => {
        if (err) {
            console.error("Error saving name:", err);
            return res.status(400).send("Error saving name");
        }
        console.log("Name saved");
        res.sendStatus(200);
    });

});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
