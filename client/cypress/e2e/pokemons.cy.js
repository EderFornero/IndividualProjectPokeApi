/*global cy*/ 

describe('Pokemons App', () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it('renders without crashing', () => {
  
    cy.intercept('GET', 'http://localhost:3001/type').as('getTypeData');

    cy.contains("LET'S GO").click();

    cy.url('http://localhost:3000/home')
    cy.get('[data-testid="loading-spinner"]').should('not.exist'); 

    cy.get('[data-testid="div-container-nav"]').should('exist'); 
    cy.get('[data-testid="summary-tag-test"]').contains('Menu').click(); 
    cy.get('[data-testid="div-contain-home-create"]').should('exist')
    cy.get('[data-testid="div-contain-home-create"]').contains('Create').click(); 

    cy.url('http://localhost:3000/create')
    cy.get('[data-testid="div-contain-home-create"]').should('exist')
    cy.get('[data-testid="div-contain-home-create"]').contains('Home').click();

    cy.url('http://localhost:3000/home')
    cy.intercept('GET', 'http://localhost:3001/pokemon').as('getPokemons')
    cy.get('[data-testid="summary-tag-test"]').contains('Menu').click();

   
    }
  )

});
