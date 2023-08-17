/*global cy*/ 

describe('Pokemons App', () => {
  it('renders without crashing', () => {
    cy.visit("http://localhost:3000")
    cy.contains("LET'S GO").click()
    }
  )
  
});
