import React from 'react'
import { Products } from './products'

describe('In memory tests for the <Products /> component', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Products />)
  })
  // test that the component shows a loading message
  it('shows loading message', () => {
    cy.mount(<Products />)
    cy.contains('Loading...').should('be.visible')
  })
    // test that the component shows an error message
    it('shows error message', () => {
      cy.stub(window, 'fetch').throws('Server error')
      cy.mount(<Products />)
      cy.contains('Something went wrong...').should('be.visible')
    })
  // test that the component renders the products
  it('renders at least one item', () => {
    cy.mount(<Products />)
    cy.get('li').should('have.length.gt', 0)
  })
  // test if no products are returned the component shows a message
  it('shows no products message', () => {
    cy.stub(window, 'fetch').resolves({ json: () => [] })
    cy.mount(<Products />)
    cy.contains('No products found').should('be.visible')
  })
  // test that the component renders the product title
  it('renders product title', () => {
    cy.mount(<Products />)
    cy.get('li').first().get('h2').should('exist').invoke('text').should('not.be.empty')
  })
  // test that the component renders the product details
  it('renders product details', () => {
    cy.mount(<Products />)
    cy.get('li')
    .first() 
    .find('p')
    .should('have.length', 3)         
    .each(($p) => {                   
      cy.wrap($p)                     
        .invoke('text')               
        .should('not.be.empty');      
    });
  })
})