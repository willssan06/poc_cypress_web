/// <reference types="cypress"/>
import CarrinhoPage from '../support/pages/CarrinhoPage'

const carrinhoPage = new CarrinhoPage()

describe('Adicionar item ao carrinho', () => {
  it('Deve adicionar o produto ao carrinho', () => {
    carrinhoPage.acessarLoja()
    carrinhoPage.clicarPrimeiroProduto()
    carrinhoPage.adicionarAoCarrinho()
    carrinhoPage.abrirMiniCarrinho()
    carrinhoPage.irParaDetalhesProduto()
    carrinhoPage.verCarrinho()
    carrinhoPage.validarProdutoAdicionado('Green Dress For Woman')
  })
})
