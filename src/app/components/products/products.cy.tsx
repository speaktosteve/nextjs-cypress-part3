import React from 'react'
import { Products } from './products'

const apiURL = 'https://fakestoreapi.com/products'

describe('Tests for the <Products /> component', () => {
    beforeEach(() => {
        cy.log('Adding interceptor to return stubbed data')
        cy.intercept('GET', apiURL, { fixture: 'fakeProducts.json' })
    })
    it('renders component', () => {
        cy.mount(<Products />)
    })
    // test that the component shows the correct header
    it('renders header', () => {
        cy.mount(<Products />)
        cy.get('h2').should('have.text', 'Products')
    })
    // test that the component shows a loading message
    it('shows loading message', () => {
        cy.mount(<Products />)
        cy.contains('Loading...').should('be.visible')
    })
    // test that the component renders the products
    it('renders at least one item', () => {
        cy.mount(<Products />)
        cy.get('li').should('have.length.gt', 0)
    })
    // test that the component renders the product title
    it('renders product title', () => {
        cy.mount(<Products />)
        cy.get('li')
            .first()
            .get('h2')
            .should('exist')
            .invoke('text')
            .should('not.be.empty')
    })
    // test that the component renders the product details
    it('renders product details', () => {
        cy.mount(<Products />)
        cy.get('li')
            .first()
            .find('p')
            .should('have.length', 3)
            .each(($p) => {
                cy.wrap($p).invoke('text').should('not.be.empty')
            })
    })
    // test that the component shows an error message if the API call fails
    it('shows error message if the API returns a 500 status code', () => {
        // set up the API call to return a 500 status code
        cy.intercept('GET', apiURL, {
            statusCode: 500,
        })

        cy.mount(<Products />)

        cy.contains('Something went wrong...').should('be.visible')
    })
    // test that the component shows an error message if there is a network error
    it('shows error message if there is a network error', () => {
        cy.intercept('GET', apiURL, { forceNetworkError: true }).as('err')
        // assert that this request happened
        cy.mount(<Products />)
        cy.contains('Something went wrong...').should('be.visible')
        // and that it ended in a network error
        cy.wait('@err').should('have.property', 'error')
    })
    // test that the component shows a message if the API call takes too long
    it(
        'shows slow loading message',
        {
            // set the default timeout to 10 seconds, so this test doesn't time out
            defaultCommandTimeout: 20000,
        },
        () => {
            // set up the API call to delay for 6 seconds
            cy.intercept('GET', apiURL, {
                delay: 10000,
            })

            cy.mount(<Products />)

            cy.contains('This is taking longer than expected...').should(
                'be.visible'
            )
        }
    )
})
