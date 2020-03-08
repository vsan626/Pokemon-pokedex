const data = require('../pokemon.json')
const pokemonModel = require('../database/schema')


pokemonModel.insertMany(data,  (err) => {
  if (err){
    console.log(err)
  } else {
    console.log("seeded")
  }
});

