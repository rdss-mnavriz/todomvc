describe('Zooroyal Test', () => {
    beforeEach(() => {
      cy.visit('https://www.zooroyal.de');
    });
  
     it('should accept the cookie banner and perform additional tests', () => {
        cy.log(cy.getAllCookies())
        cy.on('window:before:load', (win) => {
            // Überprüfen, ob der Cookie-Banner angezeigt wird
            if (win.document.cookie.indexOf('ch-https://www.zooroyal.de-16' === -1)) {
              // Cookie akzeptieren
              cy.setCookie('ch-https://www.zooroyal.de-16', 'true', { domain: 'www.zooroyal.de' });
            }
            cy.get('input#ajaxSearchInput').should('be.visible').type('Hund{Enter}')
          });
          
          
        
          

    //   // API-Anfrage zum Akzeptieren des Cookie-Banners
    //   cy.request('POST', 'https://www.zooroyal.de', {
    //     cookieAccepted: true
    //   }).then((response) => {
    //     // Ausgabe der erhaltenen Cookies in der Konsole
    //     const cookies = response.headers['set-cookie'];
    //     cy.log('Received Cookies:', cookies);
  
    //     // Akzeptieren der erhaltenen Cookies
    //     cookies.forEach((cookie) => {
    //       cy.setCookie(cookie);
    //     });
  
    //     // Weitere Tests ausführen
    //     // Beispiel: Überprüfen der Startseite
    //     cy.contains('Willkommen bei Zooroyal');
    //     // Weitere Assertions und Interaktionen...
    //   });
     });
  
    // Weitere Testfälle...
  });
  