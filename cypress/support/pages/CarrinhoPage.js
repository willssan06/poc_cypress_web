// cypress/support/pages/CarrinhoPage.js

class CarrinhoPage {
    acessarLoja() {
      cy.visit('https://automationpratice.com.br/shop')
    }
  
    clicarPrimeiroProduto() {
      cy.xpath('(//a[@class="image"])[1]').click()
    }
  
    adicionarAoCarrinho() {
      cy.xpath('//a[text()="Add To Cart"]').click()
    }
  
    abrirMiniCarrinho() {
      cy.xpath('(//a[@class="offcanvas-toggle"])[2]').click({ force: true })
    }
  
    irParaDetalhesProduto() {
      cy.visit('https://automationpratice.com.br/product-details-one/1#!')
    }
  
    verCarrinho() {
      cy.xpath('//a[text()="View Cart"]').click()
    }
  
    validarProdutoAdicionado(nomeProduto) {
      cy.xpath(`(//a[text()="${nomeProduto}"])[2]`).should('have.text', nomeProduto)
    }
  }
  
  export default CarrinhoPage
  