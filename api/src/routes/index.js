const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {pokemonRoute, typeRouter }= require("./pokemonRoute")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router
.use("/pokemon", pokemonRoute)
.use("/type", typeRouter)


module.exports = router;
