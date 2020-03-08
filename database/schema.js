const mongoose = require("mongoose");
const db = require("./db")


var pokemonSchema = new mongoose.Schema({
  id: Number,
  name: String,
  type: String,
  img: String
});

let PokemonModel = mongoose.model("pokemonModel", pokemonSchema);



module.exports = PokemonModel
