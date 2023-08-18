const { Router } = require('express');
const router = Router();
const {getAllPokeApi, getPokeDb, getPokeById, getPokeByDbId, getPokeByName, getPokeByDbName} = require('../controllers/getPokeApi')
const {Pokemon, Type} = require('../db'); 
router
.get("/", async(req, res) => { 
    //do search twice (getAll & byName)
    try {
        const {name} = req.query;
        if(name){
            //searching in API
            let pokemon = await getPokeByName(name); 

            //searching in DB
            if(pokemon.error){
                pokemon = await getPokeByDbName(name);
                if(!pokemon){
                    return res.status(404).json({"message": `Pokemon ${name} does not exist`});
                };
            };
            return res.status(200).json(pokemon); 
        }

        //if search by name does not exist
        //return all pokemons
        const allPokemons = await getAllPokeApi(); 
        const allPokemosDb = await getPokeDb(); 
        return res.status(200).json([...allPokemosDb, ...allPokemons]); 

    } catch (error) {
        return res.status(500).send({error: error.message}); 
    }
})



// get by id
router
.get("/:id", async (req, res) => {
    try {
        //get id by params
        const {id} = req.params; 

        if(id){
            //initialize variable to null
            let pokemon = null; 

            if(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/.test(id)){
                pokemon = await getPokeByDbId(id); 
            }else{
                pokemon = await getPokeById(id); 
            }

            if(pokemon){
                return res.status(200).json(pokemon); 
            }
        }
        
    } catch (error) {
        return res.status(500).send({error: error.message}); 
    }
})

router.post("/", async (req, res) => {
    try {

        const { name, health_points, image, attack, defense, height, weight, speed, types } = req.body;
        
        //return missing data if 
        const missingData = 'Missing data'; 

        if(!name) return res.status(400).send({field: "Name", error: missingData}); 
        if(!health_points) return res.status(400).send({field: "Health Points", error: missingData}); 
        if(!image) return res.status(400).send({field: "Image", error: missingData}); 
        if(!attack) return res.status(400).send({field: "Attack", error: missingData}); 
        if(!defense) return res.status(400).send({field: "Defense", error: missingData}); 
        if(!types) return res.status(400).send({field: "Types", error: missingData}); 
      
        //return missing data if types is an empty array
        if(!types.length) return res.status(400).send({ field: "Types", error: missingData }); 

        const newPokemon = await Pokemon.create({
          name,
          health_points,
          speed,
          defense,
          attack,
          height,
          weight,
          image, 
        });
        
        const pokeValidate = await Type.findAll({
          where: {
            name: types
          }
        })
        await newPokemon.setTypes(pokeValidate);
    
        res.status(201).json({
          message: "Pokemon successfuly created",
          new_pokemon: newPokemon
        });
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
})


module.exports = router;