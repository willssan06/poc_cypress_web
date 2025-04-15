describe('Adicionar primeiro item ao carrinho', () => {
    it('Deve adicionar o primeiro produto ao carrinho', () => {
      // Visita o site
      cy.visit('https://automationpratice.com.br/shop');
      cy.xpath('(//a[@class="image"])[1]').click()
      cy.xpath('//a[text()="Add To Cart"]').click()
      cy.xpath('(//a[@class="offcanvas-toggle"])[2]').click({force: true})
      cy.visit('https://automationpratice.com.br/product-details-one/1#!')
      cy.xpath('//a[text()="View Cart"]').click()
      cy.xpath('(//a[text()="Green Dress For Woman"])[2]').should('have.text', "Green Dress For Woman")
    });
  });
  