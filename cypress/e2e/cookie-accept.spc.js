describe('Zooroyal Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.zooroyal.de');
      cy.acceptCookieBanner();

    });
  
     it('Choose product to buy', () => {
        cy.get('input#ajaxSearchInput').should('be.visible').type('Hund{Enter}')
          });
     });

 