const { Pokemon, Type, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validate Models', () => {
    beforeEach(() => Pokemon.sync({ force: true }));

    //must contain all mandatories filds
    it('Should throw an error if a mandatory field is null', async () => {
      try {
        await Pokemon.create({});
      } catch (error) {
        expect(error.name).to.equal('SequelizeValidationError');
      }
    });

    //if exist all mandatories filds should work
    it('Should work when all fields are valid', async () => {
      const pokemon = {
        name: 'pokemonCreated',
        health_points: 100,
        image: 'https://example.com/test.png',
        attack: 50,
        defense: 30,
      };
      //create a pokemon 
      await Pokemon.create(pokemon);
      //looking for a pokemon in Pokemon model 
      const createdPokemon = await Pokemon.findOne({ where: { name: 'pokemonCreated' } });

      //verify if exist 
      expect(createdPokemon).to.not.be.null;
      expect(createdPokemon).to.not.be.undefined;
      expect(createdPokemon).to.exist;
      //if exist verify his fields
      expect(createdPokemon.health_points).to.equal(100);
    });
  });

  describe("A correct association", () => {
    beforeEach(() => conn.sync({ force: true }));
    it('Should create a Pokemon with associated Types', async () => {
      const fireType = await Type.create({name: 'fire'}); 
      const flyingType = await Type.create({name: 'flying'}); 

      const pokemon = {
        name: 'pokemonCreated',
        health_points: 100,
        image: 'https://example.com/test.png',
        attack: 50,
        defense: 30,
      };  

      //create a pokemon 
      const createdPokemon = await Pokemon.create(pokemon);
      //set pokemon with types created by Type.create()
      await createdPokemon.setTypes([fireType, flyingType]);
      //initializing association 
      const associatedTypes = await createdPokemon.getTypes();

      //expected to have 2 types 
      expect(associatedTypes).to.have.lengthOf(2);
      //looking for a types names
      expect(associatedTypes[0].name).to.equal('fire');
      expect(associatedTypes[1].name).to.equal('flying');
    })
  })
});
