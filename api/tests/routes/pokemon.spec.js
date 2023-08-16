const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

const agent = session(app);

//pokemon model get pokemons
const pokemon = {
  name: 'Pikachu',
  health_points: 100, 
  image: 'https://example.com/pikachu.png',
  attack: 50,
  defense: 30,
};

//valid id
const validId = 1; 
const invalidId = 9999;

//correct name
const correctName = 'DiTto';

//pokemon model required to post
const requiredPokemon = {
  name: 'pokemonCreated',
  health_points: 100,
  image: 'https://example.com/test.png',
  attack: 50,
  defense: 30,
  height: 4,
  weight: 30,
  speed: 70,
  types: ['fire', 'flying'], 
}

//pokemon model required to post without speed, height, weight
const requiredPokemonWithout = {
  name: 'pokemonCreated',
  health_points: 100,
  image: 'https://example.com/test.png',
  attack: 50,
  defense: 30,
  types: ['fire', 'flying'], 
}

//incorrect pokemon model 
const badPokemonRequired = {
  health_points: 100,
  image: 'https://example.com/test.png',
  attack: -5,
  defense: 30,
  height: 4,
  weight: 30,
  speed: -3, 
}


describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  //restart pokemons  
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));

  //testing get all pokemons bad request url  
  describe('GET /pokemon', function(){
    this.timeout(5000)
    it('Should be /pokemon status 200', () =>
      agent.get('/pokemons').expect(404)
    );
  });

  //testing get all pokemons  
  describe('GET /pokemon', function(){
    this.timeout(5000)
    it('Pokemons loaded', () =>
      agent.get('/pokemon').expect(200)
    );
  });


  //testing get pokemons by id 
  describe('GET /pokemon/id', function(){
    this.timeout(5000)
    it('Should get 200 for a valid Pokemon ID', () =>
      agent.get(`/pokemon/${validId}`).expect(200)
    );
    it('Should get 500 for a invalid Pokemon ID', () => 
    agent.get(`/pokemon/${invalidId}`).expect(500)
    )
  });

  //testing pokemon by name that do not exist
  describe(`GET /pokemon?name=${Math.random() * 5000}`, function(){
    this.timeout(5000)
    it('That pokemon does not exist', () =>
      agent.get(`/pokemon?name=${Math.random() * 5000}`).expect(404)
    );
  });

  //testing pokemon by correct name
  describe(`GET /pokemon?name=${correctName.toLowerCase()}`, function(){
    this.timeout(5000)
    it('That pokemon does not exist', () =>
      agent.get(`/pokemon?name=${correctName.toLowerCase()}`).expect(200)
    );
  });

  //testing get all types
  describe('GET /type', function(){
    this.timeout(5000)
    it('Types loaded', () =>
      agent.get('/type').expect(200)
    );
  });

   //testing get type by name
   describe('GET /type', function(){
    this.timeout(5000)
    it('Types cannot be filtered by name', () =>
      agent.get('/type=name?normal').expect(404)
    );
  });


  //correct post testing
  describe('POST /pokemon', function(){ 
    this.timeout(5000); 
    it('Pokemon successfully created', () => 
      agent.post('/pokemon').send(requiredPokemon).expect(201)
    )
  })

  //correct post testing without speed, height, weight
  describe('POST /pokemon', function(){ 
    this.timeout(5000); 
    it('Pokemon successfully created', () => 
      agent.post('/pokemon').send(requiredPokemonWithout).expect(201)
    )
  })

  //incorrect post testing 
  describe('POST /pokemon', function(){ 
    this.timeout(5000); 
    it('Missing data to create a pokemon', () => 
      agent.post('/pokemon').send(badPokemonRequired).expect(400)
    )
  })
});



