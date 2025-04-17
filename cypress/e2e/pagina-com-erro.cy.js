/// <reference types="cypress"/>
import PaginaErroPage from '../support/pages/PaginaErroPage'

const paginaErroPage = new PaginaErroPage()

describe('Teste de Exemplo com Falha', () => {
  it('Página incorreta', () => {
    paginaErroPage.acessarLogin()
    paginaErroPage.validarTituloEsperado('QAZANDO simulação erro') // Vai falhar
  })
})

