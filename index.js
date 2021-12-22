const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const router = require("./routes/index")
const url = "mongodb+srv://usman:Usman1994@cluster0.rlomm.mongodb.net/todos?retryWrites=true&w=majority"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(router)

async function start() {
  try {
    await mongoose.connect(url);
    app.listen(3003, () => console.log("Server has been started..."))
  }catch (e) {
    console.log(e)
  }
}

start();