describe('Apollo.ee functionality', () => {

  const searches = [
    'Harry Potter',
    'LEGO',
    'Minecraft'
  ];

  beforeEach(() => {
    cy.visit('https://www.apollo.ee/et');
  });

  it('loads the homepage', () => {
    cy.title().should('not.be.empty');
    cy.get('body').should('be.visible');
  });

  it('contains Apollo logo', () => {
    cy.get('body').should('contain.text', 'Apollo');
  });

  it('search input is available', () => {
    cy.get('#header-search-input', { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled');
  });

  it('searches for a book', () => {
    cy.get('#header-search-input', { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .clear({ force: true })
      .type('Harry Potter{enter}');
    cy.url().should('not.eq', 'https://www.apollo.ee/et');
  });

  it('has navigation menu', () => {
    cy.get('nav').should('exist');
  });

  it('footer is visible', () => {
    cy.get('footer').should('exist');
  });

  // Andmepõhine testimine (data-driven testing)
  searches.forEach(searchTerm => {
    it(`Search works for: ${searchTerm}`, () => {
      cy.get('#header-search-input', { timeout: 10000 })
        .should('be.visible')
        .and('not.be.disabled')
        .clear({ force: true })
        .type(`${searchTerm}{enter}`);
      cy.url().should('not.eq', 'https://www.apollo.ee/et');
    });
  });

});