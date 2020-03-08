const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/pokemonTwo", { useNewUrlParser: true });

//connection to db
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("DB CONNECTED");
});

module.exports = db;
