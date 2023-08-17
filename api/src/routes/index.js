const { Router } = require('express');
const pokemonRoute = require("./pokemonRoute")
const typeRoute = require('./typeRoute')

const router = Router();

router
.use("/pokemon", pokemonRoute) 
.use("/type", typeRoute) 


module.exports = router;
