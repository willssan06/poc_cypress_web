/// <reference types="cypress"/>
import LoginPage from '../support/pages/LoginPage'

const loginPage = new LoginPage()

describe('Login', () => {
  it('Login com sucesso', () => {
    loginPage.acessarLogin()
    loginPage.preencherEmail('edu@qazando.com')
    loginPage.preencherSenha('123456')
    loginPage.clicarLogin()
    loginPage.validarLoginComSucesso()
  })

  it('Login com email vazio', () => {
    loginPage.acessarLogin()
    loginPage.preencherSenha('123456')
    loginPage.clicarLogin()
    loginPage.validarMensagemErro('E-mail inválido.')
  })

  it('Login com senha vazia', () => {
    loginPage.acessarLogin()
    loginPage.preencherEmail('edu@qazando.com')
    loginPage.clicarLogin()
    loginPage.validarMensagemErro('Senha inválida.')
  })

  it('Login com email inválido', () => {
    loginPage.acessarLogin()
    loginPage.preencherEmail('akljljljljlkjk')
    loginPage.preencherSenha('123456')
    loginPage.clicarLogin()
    loginPage.validarMensagemErro('E-mail inválido.')
  })

  it('Login com senha inválida', () => {
    loginPage.acessarLogin()
    loginPage.preencherEmail('edu@qazando.com')
    loginPage.preencherSenha('123')
    loginPage.clicarLogin()
    loginPage.validarMensagemErro('Senha inválida.')
  })
})
