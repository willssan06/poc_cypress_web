// cypress/support/pages/LoginPage.js

class LoginPage {
    acessarLogin() {
      cy.visit('https://automationpratice.com.br/login')
    }
  
    preencherEmail(email) {
      cy.get('#user').type(email)
    }
  
    preencherSenha(senha) {
      cy.get('#password').type(senha)
    }
  
    clicarLogin() {
      cy.get('#btnLogin').click()
    }
  
    validarLoginComSucesso() {
      cy.get('#swal2-title').should('have.text', 'Login realizado')
      cy.url().should('contain', '/my-account')
    }
  
    validarMensagemErro(mensagem) {
      cy.get('.invalid_input').should('have.text', mensagem)
    }
  }
  
  export default LoginPage
  