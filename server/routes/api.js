require("dotenv").config();

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");

mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to the database successfully"));

router.get("/", (req, res) => {
  res.send("From API route");
});

/*router.post("/register", (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registeredUser)=>{
    if(error){
      console.log(error)
    }else{
      res.status(200).send(registeredUser)
    }
  });
});*/

router.post("/register", async (req, res) => {
  try {
    let userData = req.body;
    let user = new User(userData);
    let registeredUser = await user.save();
    res.status(200).send(registeredUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Une erreur est survenue lors de l'enregistrement de l'utilisateur.");
  }
});
module.exports = router;
