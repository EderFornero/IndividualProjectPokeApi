require("dotenv").config();
const { URL_API_TYPE } = process.env;
const { Type } = require("../db");
const axios = require("axios");

const getPokeType = async (req, res) => {
  try {
    const findType = await Type.findAll();

    if (findType.length === 0) {
      //make first charge in db
      const response = await axios(`${URL_API_TYPE}`);
      await Promise.all(
        response.data.results.map(async (type) => {
          await Type.create(type);
        })
      );

      //-------------------------------bulk instances search ()
      //-------------------------------await Type.bulkCreate(findType);
      const findType = await Type.findAll();
      return res.status(200).json(findType);
    } else {
      return res.status(200).json(findType);
    }

    //in case of instances exist return all types
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getPokeType,
};
