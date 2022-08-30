const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getFortune, getMisfortune, createMake, deleteMake} = require("./controllerCorrected");

//app.get("/api/main", mainjs)

app.get("/api/fortune", getFortune);
app.get("/api/misfortune", getMisfortune);
app.post("/api/make", createMake);
app.delete("/api/make/:index", deleteMake);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/indexCorrected.html")
})

app.listen(4000, () => console.log("Server running on 4000"));