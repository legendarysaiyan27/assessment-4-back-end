const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const getFortune  = require('./controller')
//const { mainjs } = require('/client')

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
    var root = path.resolve(__dirname + "/../")
    console.log(root)
    res.sendFile("./client/index.html", { root: root });
})

//app.get("/api/main", mainjs)

app.get("/api/fortune", getFortune.good)

app.get("/api/misfortune", getFortune.bad)

app.listen(4000, () => console.log("Server running on 4000"));