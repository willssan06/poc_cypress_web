/// <reference types="cypress"/>

describe('Login', () => {
    
    it('Login com sucesso', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('edu@qazando.com')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('#swal2-title').should('have.text', "Login realizado")
        cy.url().should('contain', '/my-account')
    })
    it('Login com email vazio', () => {

        cy.visit('https://automationpratice.com.br/login')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', "E-mail inválido.")
    })
    it('Login com senha vazia', () => {

        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('edu@qazando.com')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', "Senha inválida.")

    })
    it('Login com email invalido', () => {

        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('akljljljljlkjk')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', "E-mail inválido.")

    })
    it('Login com senha invalida', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('edu@qazando.com')
        cy.get('#password').type('123')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', "Senha inválida.")
    })
})
// automação web cypress