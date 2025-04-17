// cypress/support/pages/PaginaErroPage.js

class PaginaErroPage {
    acessarLogin() {
      cy.visit('https://automationpratice.com.br/login')
      cy.wait(1000)
    }
  
    validarTituloEsperado(titulo) {
      cy.title().should('include', titulo)
    }
  }
  
  export default PaginaErroPage
  