require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 4000;

function database() {
  //Database connection
  mongoose.connect(
    process.env.DB_URI /*, {useNewUrlParser: true, useUnifiedTopology: true}*/
  );
  const db = mongoose.connection;
  db.on("error", (error) => console.log(error));
  db.once("open", () => console.log(`Connected to the database successfully`));
}
function server() {
  //routes prefix
  app.get("/", (req, res) => res.send("Hello World!"));

  app.listen(port, () =>
    console.log(`Server started at http://localhost:${port}`)
  );
}

exports.database = database;
exports.server = server;
