const axios = require("axios");
require('dotenv').config();
const { URL_API_NAME, URL_API_LIMIT, URL_API_OFFSET } = process.env;
const { Pokemon, Type } = require("../db");
const { Sequelize } = require("sequelize");

//get all pokemons from pokeAPI
const getAllPokeApi = async () => {
  try {
    //get access to API
    const pokemon = await axios(
      `${URL_API_NAME}/?offset=${URL_API_OFFSET}&limit=${URL_API_LIMIT}`
    );
    //search for each pokemon object
    //get url (pokemon) and push
    const pokemonArray = [];
    pokemon.data.results.forEach((poke) => {
      pokemonArray.push(axios(poke.url).then((res) => res.data));
    });

    //resolve all promises pending from API
    const resolve = Promise.all(pokemonArray)
    .then((res) => res.map((poke) => { 
      return {
        id: poke.id,
        name: poke.name,
        health_points: poke.stats[0].base_stat,
        image: poke.sprites.other["official-artwork"].front_default,
        attack: poke.stats[1].base_stat,
        defense: poke.stats[2].base_stat,
        height: poke.height,
        weight: poke.weight,
        speed: poke.stats[5].base_stat,
        types: poke.types.map((t) => {
          return {name: t.type.name}
        })
      }
    }))

    //return map
    return await resolve;

  } catch (error) {
    return { error: error.message };
  }
};

//get pokemon by db

const getPokeDb = async () => {
  try {
    const find = await Pokemon.findAll({
      include: {
        model: Type,
        through: {attributes: []}
      },
    });
    return find;
  } catch (error) {
    return { error: error.message };
  }
};


//get pokemon by id in API
const getPokeById = async (id) => {
 
    const get = await axios(`${URL_API_NAME}/${id}`);

    const pokemon = {
      name: get.data.name,
      health_points: get.data.stats[0].base_stat,
      image: get.data.sprites.other["official-artwork"].front_shiny,
      attack: get.data.stats[1].base_stat,
      defense: get.data.stats[2].base_stat,
      height: get.data.height,
      weight: get.data.weight,
      speed: get.data.stats[5].base_stat,
      types: get.data.types.map((t) => {
        return {name: t.type.name}
      })
    } 

    return pokemon;


};

//get database id

const getPokeByDbId = async (id) => {
   try {
    const idDb = await Pokemon.findByPk(id, {
      include: {
        attributes: ["name"],
        model: Type,
      },
    });

    return idDb;
  } catch (error) {
    return {error: error.message};
  }
}

//get pokemon by name

const getPokeByName = async (name) => {
  try {
    const getName = await axios(`${URL_API_NAME}/${name.toLowerCase()}`);
    if (getName) {
      let get = getName;
      return {
        id: get.data.id,
        name: get.data.name,
        health_points: get.data.stats[0].base_stat,
        image: get.data.sprites.other["official-artwork"].front_default,
        attack: get.data.stats[1].base_stat,
        defense: get.data.stats[2].base_stat,
        height: get.data.height,
        weight: get.data.weight,
        speed: get.data.stats[5].base_stat,
        types: get.data.types.map((t) => {
          return {name: t.type.name}
        })
      }
      //returned
    } else {
      return null;
    }
  } catch (error) {
    return { error: `Name ${name} not found`};
  }
};

//get pokemon by db name

const getPokeByDbName = async (name) => {
  try {
    const getName = await Pokemon.findOne({
      //implement method Sequelize.fn
      //compare with the method Sequelize.col
      //convert name to lower case as second parameter
      where: Sequelize.where(
        Sequelize.fn("lower", Sequelize.col("pokemon.name")),
        Sequelize.fn("lower", name)
      )
    });
    return getName;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllPokeApi,
  getPokeDb,
  getPokeById,
  getPokeByDbId,
  getPokeByName,
  getPokeByDbName,
};
