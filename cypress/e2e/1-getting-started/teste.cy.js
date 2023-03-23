/// <reference types="cypress"/>
const API_URL = Cypress.env('API_BASE_URL')

it('teste', () =>{
  cy.request({
      method: 'GET',
      url: 'https://www.assineglobo.com.br/services/rest/products',
  }).then(res => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body[0]).to.have.property('id','AT')
      expect(res.body[1]).to.have.property('titulo','Casa e Jardim')
      expect(res.body[2]).to.have.property('tituloLongo', 'Autoridade em decoração e design.')
      expect(res.body[3]).to.have.property('url', 'https://www.assineglobo.com.br/vitrine-paywall?cod_oferta=53873')

  })
})
