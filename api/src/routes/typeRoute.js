const { Router } = require('express');
const router = Router();
const {getPokeType }= require('../controllers/getPokeType');

router.get("/", getPokeType); 


module.exports = router;